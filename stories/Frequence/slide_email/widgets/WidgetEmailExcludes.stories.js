import { createWidget } from "../../helper/renderEngine.js";
import { emailLists } from "../../../../rfp/data/data.js";

export default {
  title: "Frequence/Email/Widget/wgt-email-excludes",
  tags: ["autodocs"],
  render: ({ audience_count }) => {
    let list = [];

    if (audience_count === "default") {
      list = emailLists["excludes only"].exclude.slice(0, 10);
    } else {
      list = emailLists["excludes only"].exclude;
    }

    const props = {
      list: list,
    };

    return /*html*/ `
    <div style="transform: scale(0.7) translateX(-20%); height: 300px;">
    ${createWidget("wgt-email-excludes", props)}
    </div>
    `;
  },
  parameters: {
    docs: {
      source: {
        code: WidgetEmailExcludes.toString(),
        language: "js",
      },
    },
  },
  argTypes: {
    audience_count: {
      control: { type: "select" },
      options: ["default", "many"],
    },
  },
};

export const Default = {
  args: {
    audience_count: "default",
  },
};
