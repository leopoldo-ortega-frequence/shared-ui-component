import { LIST_ICONS } from "../../../../rfp/js/assets.js";
import { createWidget } from "../../helper/renderEngine.js";
import { genericList } from "../../../../rfp/data/data.js";

export default {
  title: "Frequence/Widgets/wgt-list",
  tags: ["autodocs"],
  render: ({ text_size, spacing }) => {
    const props = {
      list: genericList,
      icon: LIST_ICONS.bullet,
      text_size: text_size,
      spacing: spacing,
    };

    return /*html*/ `
        <div style="zoom: 0.7">
          ${createWidget("wgt-list", props)}
        </div>`;
  },
  parameters: {
    docs: {
      source: {
        code: WidgetList.toString(),
        language: "js",
      },
    },
  },
  argTypes: {
    text_size: {
      control: { type: "select" },
      options: ["default", "large"],
    },
    spacing: {
      control: { type: "select" },
      options: ["default", "small"],
    },
  },
};

export const Default = {
  args: {
    text_size: "default",
    spacing: "default",
  },
};
