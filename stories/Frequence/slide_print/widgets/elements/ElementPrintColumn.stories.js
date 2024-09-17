import { createWidget } from "../../../helper/renderEngine.js";
import { printPubData } from "../../../../../rfp/data/data.js";
import { mutatePrintData } from "../../../helper/sbDataMutate.js";

export default {
  title: "Frequence/Print/Widget/wgt-print-table/Elements/elem-print-column",
  tags: ["autodocs"],
  render: ({ budget_name, publication_count, show_long_text }) => {
    //* As this is for a single column, we only need the values for a single budget
    //* and rather we just make the number of publications confugraable

    const printData = structuredClone(
      printPubData[show_long_text ? "long" : "default"]["default"]
    ).slice(0, publication_count);

    const data = mutatePrintData(printData)[0];

    const props = {
      name: budget_name,
      total: data.total,
      options: data.options,
    };
    return /*html*/ `
      <div style="transform: scale(0.7) translate(-15%, -20%); height: 600px; width: 1000px;">
      ${createWidget("elem-print-column", props)}
      </div>
      `;
  },
  parameters: {
    docs: {
      source: {
        code: WidgetPrintTable.toString(),
        language: "js",
      },
    },
  },
  argTypes: {
    budget_name: { control: "text" },
    publication_count: { control: { type: "number", min: 1, max: 3, step: 1 } },
    show_long_text: { control: "boolean" },
  },
};

export const Default = {
  args: {
    budget_name: "Budget #",
    publication_count: 3,
    show_long_text: false,
  },
};
