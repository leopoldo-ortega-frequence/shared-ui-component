import { createWidget } from "../../helper/renderEngine";

export default {
  title: "Frequence/Widgets/wgt-websites-appendix",
  tags: ["autodocs"],
  render: ({ website_count }) => {
    const data = [
      ...Array(website_count).fill("www.some-website-goes-here.com"),
    ];
    const props = {
      list: data,
    };
    return /*html*/ `
    <div style="transform: scale(0.6) translate(-20%, -30%); width: 1200px; height: 509px;">
        ${createWidget("wgt-websites-appendix", props)}
    </div>
    `;
    // return div.innerHTML;
  },
  parameters: {
    docs: {
      source: {
        code: WidgetWebsitesAppendix.toString(),
        language: "js",
      },
    },
  },
  argTypes: {
    website_count: { control: { type: "number", min: 0, max: 15, step: 1 } },
  },
};

export const Default = {
  args: {
    website_count: 5,
  },
};
