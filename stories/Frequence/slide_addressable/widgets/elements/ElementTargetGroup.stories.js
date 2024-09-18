import { createWidget } from "../../../helper/renderEngine.js";

export default {
  title: "Frequence/Widgets/wgt-target-segments/Elements/elem-target-group",
  tags: ["autodocs"],
  render: ({ title, alignment, item_count, show_long_text }) => {
    const data = [
      ...Array(item_count).fill(
        !show_long_text ? "item-default" : "item-default-long-text"
      ),
    ];
    const props = {
      title: title,
      items: data,
      layout: alignment,
    };
    return /*html*/ `
    <div style="transform: scale(0.6); height: 500px; width: 400px">
    ${createWidget("elem-target-group", props)}
    </div>`;
    // return div.innerHTML;
  },
  parameters: {
    docs: {
      source: {
        code: ElementTargetGroup.toString(),
        language: "js",
      },
    },
  },
  argTypes: {
    title: {
      control: "text",
    },
    item_count: { control: { type: "number", min: 0, max: 15, step: 1 } },
    show_long_text: { control: "boolean" },
  },
};

export const Default = {
  args: {
    title: "#group-label",
    item_count: 5,
    show_long_text: false,
  },
};
