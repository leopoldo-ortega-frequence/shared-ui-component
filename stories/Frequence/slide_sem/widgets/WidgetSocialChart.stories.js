import { createWidget } from "../../helper/renderEngine.js";

export default {
  title: "Frequence/wgt-sem-chart",
  tags: ["autodocs"],
  render: ({ widget_title, percent, clicks }) => {
    const props = {
      title: widget_title,
      percent: percent,
      clicks: clicks,
      term: "Mo",
    };
    return createWidget("wgt-sem-chart", props);
    // return div.innerHTML;
  },
  parameters: {
    docs: {
      source: {
        code: WidgetSEMChart.toString(),
        language: "js",
      },
    },
  },
  argTypes: {
    widget_title: { control: "text" },
    percent: { control: { type: "range", min: 0, max: 100, step: 1 } },
    clicks: { control: "text" },
  },
};

export const Default = {
  args: {
    widget_title: "widget-title",
    percent: 50,
    clicks: "567-974",
  },
};

export const Low_Clicks = {
  args: {
    widget_title: "widget-title",
    percent: 25,
    clicks: "234-457",
  },
};

export const High_Clicks = {
  args: {
    widget_title: "widget-title",
    percent: 80,
    clicks: "1,345-1,678",
  },
};
