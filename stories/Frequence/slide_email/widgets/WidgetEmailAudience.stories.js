import { createWidget } from "../../helper/renderEngine.js";
import { dummmyEmailPlaceholder } from "../../../../rfp/data/data.js";

export default {
  title: "Frequence/Widgets/wgt-email-audience",
  tags: ["autodocs"],
  render: ({ audience_count, list_title }) => {
    const props = {
      title: list_title,
      list: dummmyEmailPlaceholder[audience_count],
    };

    return /*html*/ `
    <div style="transform: scale(0.7) translateX(-20%); height: 300px;" >
    ${createWidget("wgt-email-audience", props)}
    </div>
    `;
  },
  parameters: {
    docs: {
      source: {
        code: WidgetEmailAudience.toString(),
        language: "js",
      },
    },
  },
  argTypes: {
    list_title: { control: "text" },
    audience_count: {
      control: { type: "select" },
      options: ["default", "many"],
    },
  },
};

export const AvailableInventory = {
  args: {
    audience_count: "default",
    list_title: "list-title",
  },
};
