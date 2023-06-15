<script>
  import { FormInput } from "yesvelte";

    export let value;
</script>

{#if typeof value === 'object'}
    NOT SUPPORTED
{:else}
    <FormInput {...$$restProps} bind:value/>
{/if}