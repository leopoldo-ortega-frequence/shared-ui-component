import { createWidget } from "../../../helper/renderEngine";

export default {
  title: "Frequence/Budget/Widgets/wgt-budget-table/Elements/elem-budget-row",
  tags: ["autodocs"],
  render: (args) => {
    const props = {
      type: args.row_type.toLowerCase(),
      name: args.item_name,
      details: args.details_value,
      details_label: args.details_label,
      budget_value: `$${args.budget_value}/Mo`,
    };
    return /*html*/ `
    <div style="transform: scale(0.6) translate(-30%, -30%); width: 1500px; height: 100px;">
        ${createWidget("elem-budget-row", props)}
    </div>
    `;
    // return div.innerHTML;
  },
  parameters: {
    docs: {
      source: {
        code: ElemBudgetRow.toString(),
        language: "js",
      },
    },
  },
  argTypes: {
    row_type: {
      control: { type: "select" },
      options: ["Default", "total"],
    },
    item_name: { control: "text" },
    details_value: { control: "text", if: { arg: "row_type", neq: "total" } },
    details_label: { control: "text", if: { arg: "row_type", neq: "total" } },
    budget_value: { control: "text" },
  },
};

export const Default = {
  args: {
    row_type: "Default",
    item_name: "Display",
    details_value: "180,000",
    details_label: "Impressions/Month",
    budget_value: "500",
  },
};
