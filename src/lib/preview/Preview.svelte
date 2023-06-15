<script>
  import {
    Accordion,
    AccordionBody,
    Accordions,
    Card,
    CardActions,
    CardBody,
    CardHeader,
    CardTitle,
    Checkbox,
    Divider,
    El,
    FormInput,
    FormSelect,
    Select,
    Switch,
  } from "yesvelte";
  import FormSlot from "./FormSlot.svelte";
  import Dynamic from "./Dynamic.svelte";
  export let component = {};
  import tabler from "yesvelte/css/tabler.min.css?url";
  import daisyui from "yesvelte/css/daisyui.min.css?url";

  let theme = "tabler";

  let props = component.default ?? {};
</script>

<svelte:head>
  {#if theme === "tabler"}
    <link rel="stylesheet" href={tabler} />
  {:else}
    <link rel="stylesheet" href={daisyui} />
  {/if}
</svelte:head>

<Card>
  <CardHeader>
    <CardTitle>{component.name}</CardTitle>
    <CardActions>
      <Select bind:value={theme} items={["tabler", "daisyui"]} />
    </CardActions>
  </CardHeader>
  <El class="preview" row>
    <CardBody
      d="flex"
      alignItems="center"
      justifyContent="center"
      p="4"
      col="12"
      colSm="6"
      colMd="8"
      colLg="9"
    >
      <Dynamic component={component.component} {props} />
    </CardBody>
    <CardBody
      class="preview-form"
      borderTop
      borderStart
      col="12"
      colSm="6"
      colMd="4"
      colLg="3"
    >
      {#key props}
        <Accordions>
          <Accordion title="Applied Props:">
            <AccordionBody>
              {#each Object.keys(props) as prop}
                {#if props[prop]}
                  <Checkbox
                    checked
                    on:click={() => {
                      delete props[prop];
                      props = props;
                    }}
                  >
                    {prop}: {props[prop]}
                  </Checkbox>
                {/if}
              {/each}
            </AccordionBody>
          </Accordion>
        </Accordions>

        <Divider>Slot (content)</Divider>
        <El>
          <FormSlot bind:value={props.slot} />
        </El>

        <Divider>Properties</Divider>
        {#each Object.keys(component.props) as key}
          {@const prop = component.props[key]}
          <El>
            {#if prop === "boolean"}
              <Switch bind:value={props[key]}>{key}</Switch>
            {:else if prop === "string"}
              <FormInput label={key} bind:value={props[key]} />
            {:else if prop.type === "array"}
              <FormSelect
                label={key}
                items={prop.items}
                bind:value={props[key]}
              />
            {/if}
          </El>
        {/each}
      {/key}
    </CardBody>
  </El>
</Card>

<style>
  :global(.preview) {
    max-height: 600px;
  }

  :global(.preview-form) {
    height: 600px;
    overflow: auto;
  }
</style>
