const colors = [
  "primary",
  "secondary",
  "success",
  "danger",
  "warning",
  "info",
  "light",
  "dark",
];

const namedColors = [
  "blue",
  "azure",
  "indigo",
  "purple",
  "pink",
  "red",
  "orange",
  "yellow",
  "lime",
  "green",
  "teal",
  "cyan",
];

const socialColors = [
  "facebook",
  "twitter",
  "google",
  "youtube",
  "vimeo",
  "dribbble",
  "github",
  "instagram",
  "pinterest",
  "vk",
  "rss",
  "flickr",
  "bitbucket",
  "linkedin",
  "tabler",
];
export function Colors() {
  return {
    type: "array",
    items: [
      ...colors,
      //   named
      ...namedColors,
      //   social
      ...socialColors,
    ],
  };
}

export function Sizes() {
  return {
    type: "array",
    items: ["25", "50", "75", "100", "auto"],
  };
}
export function MaxSizes() {
  return {
    type: "array",
    items: ["100"],
  };
}

// position
export function PositionsTypes() {
  return {
    type: "array",
    items: ["static", "relative", "absolute", "fixed", "sticky"],
  };
}
export function PositionValues() {
  return {
    type: "array",
    items: ["0", "50", "100"],
  };
}

// border
export function BorderSizes() {
  return {
    type: "array",
    items: ["0", "1", "2", "3", "4", "5", true],
  };
}
export function BorderRoundSizes() {
  return {
    type: "array",
    items: ["0", "1", "2", "3"],
  };
}
export function BorderRadiusPositions() {
  return {
    type: "array",
    items: ["top", "end", "bottom", "start", "circle", "pill"],
  };
}

// padding
export function PaddingSizes() {
  return {
    type: "array",
    items: ["0", "1", "2", "3", "4", "5"],
  };
}

// margin
export function MarginSizes() {
  return {
    type: "array",
    items: ["0", "1", "2", "3", "4", "5", "auto"],
  };
}

// gap
export function GapSizes() {
  return {
    type: "array",
    items: ["0", "1", "2", "3", "4", "5"],
  };
}

// Font
export function FontSizes() {
  return {
    type: "array",
    items: ["1", "2", "3", "4", "5", "6"],
  };
}
export function FontStyles() {
  return {
    type: "array",
    items: ["italic", "normal"],
  };
}
export function HeadingDisplaySizes() {
  return {
    type: "array",
    items: ["1", "2", "3", "4", "5", "6"],
  };
}
export function FontWeights() {
  return {
    type: "array",
    items: ["light", "lighter", "normal", "bold", "semibold", "bolder"],
  };
}

// Text
export function TextAligns() {
  return {
    type: "array",
    items: ["start", "end", "center"],
  };
}
export function TextWraps() {
  return {
    type: "array",
    items: ["wrap", "nowrap", "break"],
  };
}
export function TextLineHeights() {
  return {
    type: "array",
    items: ["1", "sm", "base", "lg"],
  };
}
export function TextDecorations() {
  return {
    type: "array",
    items: ["none", "underline", "line-through"],
  };
}
export function TextTransforms() {
  return {
    type: "array",
    items: ["lowercase", "uppercase", "capitalize"],
  };
}
export function TextHeadings() {
  return {
    type: "array",
    items: ["1", "2", "3", "4", "5", "6"],
  };
}
export function OverflowTypes() {
  return {
    type: "array",
    items: ["auto", "hidden", "visible", "scroll"],
  };
}
export function TranslateMiddleTypes() {
  return {
    type: "array",
    items: ["x", "y", "xy"],
  };
}
export function FloatPositions() {
  return {
    type: "array",
    items: ["start", "end", "none"],
  };
}

// Vertical align
export function VerticalAligns() {
  return {
    type: "array",
    items: ["baseline", "top", "middle", "bottom", "text-bottom", "text-top"],
  };
}

// Col Sizes and settings
export function ColSizes() {
  return {
    type: "array",
    items: [
      "1",
      "2",
      "3",
      "4",
      "5",
      "6",
      "7",
      "8",
      "9",
      "10",
      "11",
      "12",
      "auto",
    ],
  };
}

export function ColSizesBool() {
  return {
    type: "array",
    items: [
      "1",
      "2",
      "3",
      "4",
      "5",
      "6",
      "7",
      "8",
      "9",
      "10",
      "11",
      "12",
      "auto",
      true,
    ],
  };
}

export function ColOrders() {
  return {
    type: "array",
    items: ["1", "2", "3", "4", "5", "first", "last"],
  };
}

export function OffsetSizes() {
  return {
    type: "array",
    items: [
      "0",
      "1",
      "2",
      "3",
      "4",
      "5",
      "6",
      "7",
      "8",
      "9",
      "10",
      "11",
      "12",
      "auto",
    ],
  };
}

// Container Sizes and settings
export function ContainerMaxWidths() {
  return {
    type: "array",
    items: [true, "sm", "md", "lg", "xl", "xxl", "fluid"],
  };
}

// Row sizes and settings
export function RowColSizes() {
  return {
    type: "array",
    items: ["1", "2", "3", "4", "5", "6", "auto"],
  };
}

export function RowGutterSizes() {
  return {
    type: "array",
    items: ["0", "1", "2", "3", "4", "5"],
  };
}

// Align items
export function AlignItemsTypes() {
  return {
    type: "array",
    items: ["start", "end", "center"],
  };
}

export function AlignSelfTypes() {
  return {
    type: "array",
    items: ["start", "end", "center"],
  };
}

export function JustifyContentTypes() {
  return {
    type: "array",
    items: ["start", "end", "center", "between", "around", "evenly"],
  };
}

export function TextColors() {
  return {
    type: "array",
    items: [...colors],
  };
}

export function BackgroundColors() {
  return {
    type: "array",
    items: [
      ...colors,
      //   named
      ...namedColors,
      //   social
      ...socialColors,
      "body",
    ],
  };
}

export function Opacities() {
  return {
    type: "array",
    items: ["10", "25", "50", "75"],
  };
}

export function TextOpacities() {
  return {
    type: "array",
    items: ["25", "50", "75"],
  };
}

// Display
export function DisplayRatioTypes() {
  return {
    type: "array",
    items: ["1x1", "4x3", "16x9", "21x9"],
  };
}
export function DisplayStickyTypes() {
  return {
    type: "array",
    items: ["top", "sm-top", "md-top", "lg-top", "xl-top"],
  };
}
export function DisplayFixedTypes() {
  return {
    type: "array",
    items: ["top", "bottom"],
  };
}
export function DisplayTypes() {
  return {
    type: "array",
    items: [
      ,
      "none",
      "inline",
      "inline-block",
      "block",
      "grid",
      "table-cell",
      "table-row",
      "flex",
      "inline-flex",
      "table",
    ],
  };
}

// shadow
export function ShaddowSizes() {
  return {
    type: "array",
    items: ["none", "sm", "lg", true],
  };
}

export function List(items) {
  return { type: "array", items };
}
