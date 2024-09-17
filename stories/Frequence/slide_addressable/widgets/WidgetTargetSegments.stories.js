import { createWidget } from "../../helper/renderEngine.js";
import { addressableData } from "../../../../rfp/data/data.js";
import { dummySingleAddressableData } from "../../../../rfp/data/data.js";

export default {
  title: "Frequence/Addressable/Widgets/wgt-target-segments",
  tags: ["autodocs"],
  render: ({ widget_title, group_count, show_long_text }) => {
    const data = [
      ...Array(group_count).fill(
        dummySingleAddressableData[show_long_text ? "long" : "default"]
      ),
    ];

    console.log(data);

    const props = {
      title: widget_title,
      list: data,
      alignment: "center",
    };
    return /*html*/ `
    <div style="height: 600px">
      <div style="transform: scale(0.5) translateY(-50%);">
      ${createWidget("wgt-target-segments", props)}
      </div>
    </div>`;
    // return div.innerHTML;
  },
  parameters: {
    docs: {
      source: {
        code: WidgetTargetSegments.toString(),
        language: "js",
      },
    },
  },
  argTypes: {
    widget_title: { control: "text" },
    group_count: { control: { type: "number", min: 0, max: 5, step: 1 } },
    show_long_text: { control: "boolean" },
  },
};

export const Default = {
  args: {
    widget_title: "widget-title",
    group_count: 3,
    show_long_text: false,
  },
};
