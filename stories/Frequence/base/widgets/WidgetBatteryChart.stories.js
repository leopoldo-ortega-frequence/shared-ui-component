import { createWidget } from "../../helper/renderEngine.js";

export default {
  title: "Frequence/Base/Widgets/wgt-battery-chart",
  tags: ["autodocs"],
  render: ({ widget_title, strength, label_left, label_right }) => {
    const props = {
      title: widget_title,
      strength: strength,
      label_left: label_left,
      label_right: label_right,
    };
    return createWidget("wgt-battery-chart", props);
    // return div.innerHTML;
  },
  parameters: {
    docs: {
      source: {
        code: WidgetBatteryBar.toString(),
        language: "js",
      },
    },
  },
  argTypes: {
    widget_title: { control: "text" },
    strength: { control: { type: "range", min: 0, max: 100, step: 1 } },
    label_left: { controle: "text" },
    label_right: { control: "text" },
  },
};

export const Default = {
  args: {
    widget_title: "widget-title",
    strength: 50,
    label_left: "label-left",
    label_right: "label-right",
  },
};

export const Low_Strength = {
  args: {
    widget_title: "chart-title",
    strength: 25,
    label_left: `label-left`,
    label_right: "label-right",
  },
};

export const High_Strength = {
  args: {
    widget_title: "chart-title",
    strength: 80,
    label_left: `label-left`,
    label_right: "label-right",
  },
};
