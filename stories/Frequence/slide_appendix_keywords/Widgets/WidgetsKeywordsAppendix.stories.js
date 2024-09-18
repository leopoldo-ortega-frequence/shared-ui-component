import { createWidget } from "../../helper/renderEngine";

export default {
  title: "Frequence/Widgets/wgt-keywords-appendix",
  tags: ["autodocs"],
  render: ({ keyword_count }) => {
    const data = [
      ...Array(keyword_count)
        .fill("")
        .map((val, idx) =>
          idx === 4
            ? "keyword that is needs to wrap and so it is very long with very many characters"
            : "keyword"
        ),
    ];
    const props = {
      list: data,
    };
    return /*html*/ `
    <div style="transform: scale(0.6) translate(-20%, -30%); width: 1400px; height: 509px;">
        ${createWidget("wgt-keywords-appendix", props)}
    </div>
    `;
    // return div.innerHTML;
  },
  parameters: {
    docs: {
      source: {
        code: WidgetKeywordsAppendix.toString(),
        language: "js",
      },
    },
  },
  argTypes: {
    keyword_count: { control: { type: "number", min: 0, max: 15, step: 1 } },
  },
};

export const Default = {
  args: {
    keyword_count: 5,
  },
};
