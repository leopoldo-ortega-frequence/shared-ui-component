import { createWidget } from "../../helper/renderEngine.js";

export default {
  title: "Frequence/Social/Widgets/wgt-social-chart",
  tags: ["autodocs"],
  render: ({ widget_title, percent_strength, clicks }) => {
    const props = {
      title: widget_title,
      percent: percent_strength,
      clicks: clicks,
      term: "Mo",
    };
    return createWidget("xwgt-social-chart", props);
    // return div.innerHTML;
  },
  parameters: {
    docs: {
      source: {
        code: WidgetSocialChart.toString(),
        language: "js",
      },
    },
  },
  argTypes: {
    widget_title: { control: "text" },
    percent_strength: { control: { type: "range", min: 0, max: 100, step: 1 } },
    clicks: { control: "text" },
  },
};

export const Default = {
  args: {
    widget_title: "widget-title",
    percent_strength: 50,
    clicks: "567-974",
  },
};

export const Low_Clicks = {
  args: {
    widget_title: "widget-title",
    percent_strength: 25,
    clicks: "234-457",
  },
};

export const High_Clicks = {
  args: {
    widget_title: "widget-title",
    percent_strength: 80,
    clicks: "1,345-1,678",
  },
};
