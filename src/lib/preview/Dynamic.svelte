<script>
  export let props = {};
  export let component;
</script>

{#if component}
  {#if props.slot}
    <svelte:component
      this={component}
      {...props}
      bind:open={props.open}
      bind:value={props.value}
      bind:show={props.show}
    >
      {#if typeof props.slot === "string"}
        {props.slot}
      {:else}
        {#each props.slot as slot}
          <svelte:self component={slot.component} props={slot.props} />
        {/each}
      {/if}
    </svelte:component>
  {:else}
    <svelte:component
      this={component.component}
      {...props}
      bind:open={props.open}
      bind:value={props.value}
      bind:show={props.show}
    />
  {/if}
{/if}
