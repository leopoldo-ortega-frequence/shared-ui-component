import { createWidget } from "../../helper/renderEngine";

export default {
  title: "Frequence/Appendix Zips/Widgets/wgt-zipcodes-appendix",
  tags: ["autodocs"],
  render: ({ zipcode_count }) => {
    const data = [...Array(zipcode_count).fill("#####")];
    const props = {
      list: data,
    };
    return /*html*/ `
    <div style="transform: scale(0.6) translate(-20%, -30%); width: 500px; height: 509px;">
        ${createWidget("wgt-zipcodes-appendix", props)}
    </div>
    `;
    // return div.innerHTML;
  },
  parameters: {
    docs: {
      source: {
        code: WidgetZipcodesAppendix.toString(),
        language: "js",
      },
    },
  },
  argTypes: {
    zipcode_count: { control: { type: "number", min: 0, max: 15, step: 1 } },
  },
};

export const Default = {
  args: {
    zipcode_count: 5,
  },
};
