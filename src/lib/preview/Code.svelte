<script>
  export let component;
  export let props;

  function renderCode(componentName, props) {
    function renderSlotItem(item) {
      return renderCode(item.name, item.props);
    }

    function renderSlot(slot) {
      if (typeof slot === "string") {
        return slot;
      } else {
        return slot.map((sl) => renderSlotItem(sl));
      }
    }

    return `<${componentName}${renderAttributes}>${renderSlot(
      props.slot
    )}</${componentName}>`;
  }

  $: code = renderCode(component, props);
</script>

<pre>
    {code}
</pre>
