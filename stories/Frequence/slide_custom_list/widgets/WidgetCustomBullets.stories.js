import { createWidget } from "../../helper/renderEngine.js";

export default {
  title: "Frequence/Widgets/wgt-custom-bullets",
  tags: ["autodocs"],
  render: ({ sample_input, text_size }) => {
    const props = {
      text_size: text_size,
      list: sample_input,
    };
    return /*html*/ `
    <div style="transform: scale(0.6); height: 450px;">
    ${createWidget("wgt-custom-bullets", props)}
    </div>
    `;
    // return div.innerHTML;
  },
  parameters: {
    docs: {
      source: {
        code: WidgetCustomBullets.toString(),
        language: "js",
      },
    },
  },
  argTypes: {
    sample_input: {
      control: "object",
    },
    text_size: {
      control: { type: "select" },
      options: ["default", "large"],
    },
  },
};

export const Default = {
  args: {
    text_size: "large",
    sample_input: ["Enter you text here..."],
  },
};
