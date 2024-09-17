import { createWidget } from "../../helper/renderEngine.js";

export default {
  title: "Frequence/Reach & Frequency/Widgets/wgt-reach-frequency",
  tags: ["autodocs"],
  render: ({ widget_title, reach_percent, frequency }) => {
    const props = {
      title: widget_title,
      reach: reach_percent,
      frequency: frequency,
    };
    return createWidget("wgt-reach-frequency", props);
    // return div.innerHTML;
  },
  parameters: {
    docs: {
      source: {
        code: WidgetReachFrequency.toString(),
        language: "js",
      },
    },
  },
  argTypes: {
    widget_title: { control: "text" },
    reach_percent: { control: { type: "range", min: 0, max: 100, step: 1 } },
    frequency: { control: "text" },
  },
};

export const Default = {
  args: {
    widget_title: "widget-title",
    reach_percent: 50,
    frequency: "18.5",
  },
};

export const Low_Strength = {
  args: {
    widget_title: "widget-title",
    reach_percent: 25,
    frequency: "5.4",
  },
};

export const High_Strength = {
  args: {
    widget_title: "widget-title",
    reach_percent: 80,
    frequency: "29.9",
  },
};
