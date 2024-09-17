import { createWidget } from "../../helper/renderEngine.js";
import { LIST_ICONS } from "../../../../rfp/js/assets.js";
import { targetAudienceInterests } from "../../../../rfp/data/data.js";

export default {
  title: "Frequence/Target Audience/Widgets/wgt-target-interests",
  tags: ["autodocs"],
  render: ({ interest_category, sub_interest_count }) => {
    return /*html*/ `<div style="width: 400px; height: 450px; transform: scale(0.9)">${createWidget(
      "wgt-target-interests",
      {
        title: interest_category,
        subheaders: targetAudienceInterests[sub_interest_count],
        icon: LIST_ICONS.arrow,
      }
    )}</div>`;
  },
  parameters: {
    docs: {
      source: {
        code: WidgetTargetDemo.toString(),
        language: "js",
      },
    },
  },
  argTypes: {
    interest_category: { control: "text" },
    sub_interest_count: {
      control: { type: "select" },
      options: ["few", "default", "many", "none"],
    },
  },
};

export const Default = {
  args: {
    interest_category: "interest-type",
    sub_interest_count: "default",
  },
};
