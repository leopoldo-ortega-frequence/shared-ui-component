import { createWidget } from "../../helper/renderEngine.js";
import { printPubData } from "../../../../rfp/data/data.js";
import { mutatePrintData } from "../../helper/sbDataMutate.js";

export default {
  title: "Frequence/Print/Widget/wgt-print-table",
  tags: ["autodocs"],
  render: ({ data_set, show_long_text }) => {
    const printData = mutatePrintData(
      structuredClone(
        printPubData[show_long_text ? "long" : "default"][
          data_set.toLowerCase()
        ]
      )
    );
    let numBudgets = 1;
    let values = [];

    switch (data_set) {
      case "Many":
        numBudgets = 3;
        values = [3, 3, 3];
        break;
      case "Default":
        numBudgets = 2;
        values = [3, 2];
        break;
      default:
        numBudgets = 1;
        values = [2];
        break;
    }

    // modify the number of
    printData.forEach((print, idx) => {
      print.options = print.options.slice(0, values[idx]);
      // for storybook... recalc the total budget
      let total = 0;
      print.options.forEach((option) => {
        total += option.total;
      });
      print["total"] = total.toLocaleString();
    });

    const props = {
      options: printData.slice(0, numBudgets),
    };
    return /*html*/ `
      <div style="transform: scale(0.6) translate(-30%, -30%); height: 600px; width: 1000px;">
      ${createWidget("wgt-print-table", props)}
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
    data_set: {
      control: { type: "select" },
      options: ["Few", "Default", "Many"],
    },
    show_long_text: { control: "boolean" },
  },
};

export const Default = {
  args: {
    data_set: "Default",
    show_long_text: false,
  },
};
