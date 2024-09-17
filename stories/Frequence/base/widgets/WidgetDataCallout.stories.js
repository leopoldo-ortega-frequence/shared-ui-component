import { createWidget, showSourceCode } from "../../helper/renderEngine.js";
import {
  EMAIL_ICONS,
  POPULATION_ICONS,
  SB_ICONS,
} from "../../../../rfp/js/assets.js";

export default {
  title: "Frequence/Base/Widgets/wgt-data-callout",
  tags: ["autodocs"],
  render: ({
    text_weight,
    alignment,
    widget_title,
    label,
    show_icon,
    icon,
  }) => {
    const concatList = { ...EMAIL_ICONS, ...POPULATION_ICONS, ...SB_ICONS };

    const props = {
      type: text_weight,
      alignment: alignment,
      value: label,
      name: widget_title,
      icon: concatList[icon],
      show_icon: show_icon,
    };

    return createWidget("wgt-data-callout", props);
  },
  parameters: {
    docs: {
      source: {
        code: WidgetDataCallout.toString(),
        language: "js",
      },
    },
  },
  argTypes: {
    text_weight: {
      control: { type: "select" },
      options: ["default", "light"],
    },
    alignment: {
      control: { type: "select" },
      options: ["left", "center"],
    },
    icon: {
      control: { type: "select" },
      options: [
        ...Object.keys(EMAIL_ICONS),
        ...Object.keys(POPULATION_ICONS),
        ...Object.keys(SB_ICONS),
      ],
    },
    widget_title: { control: "text" },
    label: { control: "text" },
    show_icon: { control: "boolean" },
  },
};

export const Default = {
  args: {
    widget_title: "widget-title",
    text_weight: "default",
    alignment: "left",
    label: "label-text",
    show_icon: true,
    icon: "placeholder",
  },
};

export const DefaultAlignCenter = {
  args: {
    widget_title: "widget-title",
    text_weight: "default",
    alignment: "center",
    label: "label-text",
    show_icon: true,
    icon: "placeholder",
  },
};

export const LightAlignLeft = {
  args: {
    widget_title: "widget-title",
    text_weight: "light",
    alignment: "left",
    label: "label-text",
    show_icon: true,
    icon: "placeholder",
  },
};

export const LightAlignRight = {
  args: {
    widget_title: "widget-title",
    text_weight: "light",
    alignment: "center",
    label: "label-text",
    show_icon: true,
    icon: "placeholder",
  },
};
