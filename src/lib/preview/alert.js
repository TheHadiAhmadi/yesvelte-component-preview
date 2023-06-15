import { Alert } from "yesvelte";
import el from "./el.js";
import { Colors } from "./types.js";
import { render } from "./helpers.js";

export default {
  name: "Alert",
  component: Alert,
  default: {
    title: "Wow Everything worked!",
    slot: [
      render(el, {
        textMuted: true,
        slot: "Your account has been saved!",
      }),
    ],
    color: "success",
  },
  props: {
    color: Colors(),
    dismissible: "boolean",
    icon: "string",
    important: "boolean",
    open: "boolean",
    title: "string",
  },
};
