<script>
  import Preview from "../lib/preview/Preview.svelte";
  import { El, FormSelect } from "yesvelte";

  import { components } from "$lib/preview";

  let componentName = "button";
</script>

<El pt="5" container="xl">
  <h1>Component Preview:</h1>
  <FormSelect
    label="Component: "
    items={["button", "el", "alert"]}
    bind:value={componentName}
  />
  <Preview component={components[componentName]} />
</El>
