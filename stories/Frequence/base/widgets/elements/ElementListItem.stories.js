import { LIST_ICONS } from "../../../../../rfp/js/assets.js";
import { createWidget } from "../../../helper/renderEngine.js";

export default {
  title: "Frequence/Base/Widgets/wgt-list/Elements/elem-list",
  tags: ["autodocs"],
  render: ({ text, bullet_style, tier, text_size }) => {
    const props = {
      text: text,
      icon: LIST_ICONS[bullet_style] ? LIST_ICONS[bullet_style] : "",
      text_size: text_size,
      tier: tier,
    };
    return createWidget("elem-list-item", props);
  },
  parameters: {
    docs: {
      source: {
        code: ElementListItem.toString(),
        language: "js",
      },
    },
  },
  argTypes: {
    text: { control: "text" },
    bullet_style: {
      control: { type: "select" },
      options: ["default", "arrow", "none"],
    },
    text_size: {
      control: { type: "select" },
      options: ["default", "large"],
    },
    tier: {
      control: { type: "number", min: 1, max: 3, step: 1 },
    },
  },
};

export const Default = {
  args: {
    text: "Some text goes here...",
    bullet_style: "default",
    text_size: "default",
    tier: 1,
  },
};
