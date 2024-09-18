import { createWidget } from "../../../helper/renderEngine.js";

export default {
  title: "Frequence/Widgets/wgt-target-segments/Elements/elem-target-item",
  tags: ["autodocs"],
  render: ({ interest_name }) => {
    const props = {
      text: interest_name,
    };
    return /*html*/ `<div style="display: flex">${createWidget("elem-target-item", props)}</div>`;
  },
  parameters: {
    docs: {
      source: {
        code: ElementTargetItem.toString(),
        language: "js",
      },
    },
  },
  argTypes: {
    interest_name: {
      control: "text",
    },
  },
};

export const Default = {
  args: {
    interest_name: "item-default",
  },
};
