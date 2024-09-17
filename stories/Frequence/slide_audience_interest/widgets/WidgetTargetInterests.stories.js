import { createWidget } from "../../helper/renderEngine.js";
import { LIST_ICONS } from "../../../../rfp/js/assets.js";
import { targetAudienceInterests } from "../../../../rfp/data/data.js";

export default {
  title: "Frequence/Audience Interests/Widgets/wgt-target-interests",
  tags: ["autodocs"],
  render: ({ interest_category, extra_sub_interests }) => {
    const data = [...Array(5).fill("interest-name")];
    data.push(...Array(extra_sub_interests).fill("interest-name"));
    const props = {
      list: data,
      title: interest_category,
      subheaders: data,
      icon: LIST_ICONS.arrow,
    };
    return /*html*/ `<div style="width: 400px; height: 450px; transform: scale(0.8)">${createWidget(
      "wgt-target-interests",
      props
    )}</div>`;
  },
  parameters: {
    docs: {
      source: {
        code: WidgetTargetInterests.toString(),
        language: "js",
      },
    },
  },
  argTypes: {
    interest_category: { control: "text" },
    extra_sub_interests: {
      control: { type: "number", min: 0, max: 10, step: 1 },
    },
  },
};

export const Default = {
  args: {
    interest_category: "interest-type",
    extra_sub_interests: 0,
  },
};
