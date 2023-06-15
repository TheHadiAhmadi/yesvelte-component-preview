import { Button } from "yesvelte";
import { Colors, List } from "./types.js";

export default {
  name: "Button",
  component: Button,
  default: {
    slot: "Button",
    color: "success",
  },
  props: {
    active: "boolean",
    color: Colors(),
    disabled: "boolean",
    ghost: "boolean",
    href: "string",
    link: "boolean",
    loading: "boolean",
    outline: "boolean",
    shape: List(["pill", "round", "tile"]),
    size: List(["sm", "md", "lg"]),
    target: List(["_blank", "_self", "_parent", "_top"]),
    type: List(["button", "reset", "submit"]),
  },
};
