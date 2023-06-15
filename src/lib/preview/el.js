import { El } from "yesvelte";
import {
  AlignItemsTypes,
  AlignSelfTypes,
  BackgroundColors,
  BorderRadiusPositions,
  BorderRoundSizes,
  BorderSizes,
  ColOrders,
  Colors,
  ColSizesBool,
  ContainerMaxWidths,
  DisplayFixedTypes,
  DisplayRatioTypes,
  DisplayStickyTypes,
  DisplayTypes,
  FloatPositions,
  FontSizes,
  FontStyles,
  FontWeights,
  GapSizes,
  JustifyContentTypes,
  MarginSizes,
  MaxSizes,
  OffsetSizes,
  Opacities,
  PaddingSizes,
  PositionsTypes,
  PositionValues,
  RowColSizes,
  RowGutterSizes,
  ShaddowSizes,
  Sizes,
  TextAligns,
  TextColors,
  TextDecorations,
  TextHeadings,
  TextLineHeights,
  TextOpacities,
  TextTransforms,
  TextWraps,
  VerticalAligns,
} from "./types.js";

export default {
  name: "El",
  component: El,
  props: {
    componentName: "string",
    tag: "string",
    show: "boolean",

    bgColor: BackgroundColors(),
    bgGradient: "boolean",
    bgOpacity: Opacities(),

    // border properties
    border: BorderSizes(),
    borderTop: BorderSizes(),
    borderStart: BorderSizes(),
    borderEnd: BorderSizes(),
    borderBottom: BorderSizes(),
    borderColor: Colors(),
    borderRadius: BorderRadiusPositions(),
    borderRoundSize: BorderRoundSizes(),
    borderOpacity: Opacities(),

    // padding properties
    p: PaddingSizes(),
    pt: PaddingSizes(),
    pb: PaddingSizes(),
    ps: PaddingSizes(),
    pe: PaddingSizes(),
    px: PaddingSizes(),
    py: PaddingSizes(),

    // margin properties
    m: MarginSizes(),
    mt: MarginSizes(),
    mb: MarginSizes(),
    ms: MarginSizes(),
    me: MarginSizes(),
    mx: MarginSizes(),
    my: MarginSizes(),

    // gaps
    gap: GapSizes(),

    // display properties
    clearfix: "boolean",
    ratio: DisplayRatioTypes(),
    sticky: DisplayStickyTypes(),
    fixed: DisplayFixedTypes(),
    d: DisplayTypes(),
    dSm: DisplayTypes(),
    dMd: DisplayTypes(),
    dLg: DisplayTypes(),
    dXl: DisplayTypes(),
    dXxl: DisplayTypes(),
    dPrint: DisplayTypes(),

    // shadow
    shadow: ShaddowSizes(),

    // sizing
    w: Sizes(),
    h: Sizes(),
    mw: MaxSizes(),
    mh: MaxSizes(),

    // position
    position: PositionsTypes(),
    top: PositionValues(),
    start: PositionValues(),
    bottom: PositionValues(),
    end: PositionValues(),

    // Vertical aligh
    vAlign: VerticalAligns(),

    // text
    textColor: TextColors(),
    textAlign: TextAligns(),
    textAlignSm: TextAligns(),
    textAlignMd: TextAligns(),
    textAlignLg: TextAligns(),
    textAlignXl: TextAligns(),
    textWrap: TextWraps(),
    textTransform: TextTransforms(),
    textDecoration: TextDecorations(),
    lineHeight: TextLineHeights(),
    textMuted: "boolean",
    textLead: "boolean",
    textHeading: TextHeadings(),
    textTruncate: "boolean",
    textOpacity: TextOpacities(),

    // font
    fontSize: FontSizes(),
    fontWeight: FontWeights(),
    fontStyle: FontStyles(),

    //Visibility
    hidden: "boolean",

    // Float
    float: FloatPositions(),
    floatSm: FloatPositions(),
    floatMd: FloatPositions(),
    floatLg: FloatPositions(),
    floatXl: FloatPositions(),
    floatXxl: FloatPositions(),

    // container
    container: ContainerMaxWidths(),

    // Col
    col: ColSizesBool(),
    colSm: ColSizesBool(),
    colMd: ColSizesBool(),
    colLg: ColSizesBool(),
    colXl: ColSizesBool(),
    colXxl: ColSizesBool(),

    // Col Order
    order: ColOrders(),
    orderSm: ColOrders(),
    orderMd: ColOrders(),
    orderLg: ColOrders(),
    orderXl: ColOrders(),
    orderXxl: ColOrders(),

    //Col Offset
    offset: OffsetSizes(),
    offsetSm: OffsetSizes(),
    offsetMd: OffsetSizes(),
    offsetLg: OffsetSizes(),
    offsetXl: OffsetSizes(),
    offsetXxl: OffsetSizes(),

    // Row
    row: {
      type: "array",
      items: [true, "deck"],
    },
    rowCols: RowColSizes(),
    rowColsSm: RowColSizes(),
    rowColsMd: RowColSizes(),
    rowColsLg: RowColSizes(),
    rowColsXl: RowColSizes(),
    rowColsXxl: RowColSizes(),

    // Gutter
    g: RowGutterSizes(),
    gSm: RowGutterSizes(),
    gMd: RowGutterSizes(),
    gLg: RowGutterSizes(),
    gXl: RowGutterSizes(),
    gXxl: RowGutterSizes(),
    gx: RowGutterSizes(),
    gy: RowGutterSizes(),

    // Align Items
    alignItems: AlignItemsTypes(),
    alignSelf: AlignSelfTypes(),

    // Justify Content
    justifyContent: JustifyContentTypes(),
  },
};
