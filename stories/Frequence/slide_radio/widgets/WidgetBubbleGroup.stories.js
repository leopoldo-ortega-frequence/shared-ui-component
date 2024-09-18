import { createWidget } from "../../helper/renderEngine.js";

export default {
  title: "Frequence/Widgets/wgt-bubble-group",
  tags: ["autodocs"],
  render: ({ count }) => {
    return /*html*/ `
    <div style="height: 300px; width: 1700px; transform: scale(0.5) translateX(-50%);">
      ${createWidget("wgt-bubble-group", {
        groups: new Array(count).fill("ABCD"),
      })}
    </div>
    `;
  },
  parameters: {
    docs: {
      source: {
        code: WidgetBubbleGroup.toString(),
        language: "js",
      },
    },
  },
  argTypes: {
    count: { control: { type: "number", min: 0, max: 10, step: 1 } },
  },
};

export const Default = {
  args: {
    count: 5,
  },
};
