<script>
  import { FormInput } from "yesvelte";

    export let value;
</script>

{#if typeof value === 'string'}
    <FormInput {...$$restProps} bind:value/>
{:else}
    NOT SUPPORTED
{/if}