import { createWidget } from "../../helper/renderEngine.js";
import { emailLists } from "../../../../rfp/data/data.js";

export default {
  title: "Frequence/Widgets/wgt-email-includes",
  tags: ["autodocs"],
  render: ({ audience_count }) => {
    let list = [];

    if (audience_count === "default") {
      list = emailLists["includes only"].include.slice(0, 10);
    } else {
      list = emailLists["includes only"].include;
    }

    const props = {
      list: list,
    };

    return /*html*/ `
    <div style="transform: scale(0.7) translateX(-20%); height: 300px;">
    ${createWidget("wgt-email-includes", props)}
    </div>
    `;
  },
  parameters: {
    docs: {
      source: {
        code: WidgetEmailIncludes.toString(),
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
