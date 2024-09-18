import { createWidget } from "../../../helper/renderEngine.js";

export default {
  title: "Frequence/Widgets/wgt-bubble-group/Elements/elem-bubble-callout",
  tags: ["autodocs"],
  render: ({ callout_text }) => {
    return /*html*/ `
    <div>
    ${createWidget("elem-bubble-callout", {
      label: callout_text,
    })}
    </div>
    `;
  },
  parameters: {
    docs: {
      source: {
        code: ElemBubbleCallout.toString(),
        language: "js",
      },
    },
  },
  argTypes: {
    callout_text: { control: "text" },
  },
};

export const Default = {
  args: {
    callout_text: "label",
  },
};
