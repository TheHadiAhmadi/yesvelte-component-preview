<script>
  export let component;
  export let props;

  function renderCode(componentName, props) {
    function renderAttributes() {
      let result = ''
      for(let prop in props) {
        if(prop === 'slot') continue;
        if(props[prop] === false) continue;
        if(props[prop] === true) {
          result += ' ' + prop
          continue;
        }

        if(typeof prop === 'string') {

          result += ' ' + prop + '="' + props[prop] + '"'
        } else {
          result += ' ' + prop + '={' + props[prop] + '}'

        }
      }
      return result;
    }
    function renderSlotItem(item) {
      return renderCode(item.component.name, item.props);
    }

    function renderSlot(slot) {
      if (typeof slot === "string") {
        return slot;
      } else {
        return slot.map((sl) => renderSlotItem(sl));
      }
    }

    return `<${componentName}${renderAttributes()}>
    ${renderSlot(
      props.slot
    )}
    </${componentName}>`;
  }

  $: code = renderCode(component, props);
</script>

<pre>
    {code}
</pre>
