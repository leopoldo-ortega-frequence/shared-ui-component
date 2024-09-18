import { createWidget } from "../../helper/renderEngine.js";
import { placeolderBudgetData } from "../../../../rfp/data/data.js";

export default {
  title: "Frequence/Widgets/wgt-budget-table",
  tags: ["autodocs"],
  render: ({
    budget_name,
    budget_duration,
    show_recurring,
    recurring_product_count,
    non_recurring_product_count,
  }) => {
    const data = placeolderBudgetData;

    // calculate the budgte details
    const formatBudget = (budget) => parseFloat(budget.replace(/,/g, ""));

    const calculateTotal = (items) =>
      items.reduce(
        (total, item) => total + formatBudget(item.formatted_budget),
        0
      );

    const recurringItems = data
      .filter((item) => item.term_based)
      .slice(0, recurring_product_count);
    const nonRecurringItems = data
      .filter((item) => !item.term_based)
      .slice(0, non_recurring_product_count);

    const recurringTotal = calculateTotal(recurringItems).toLocaleString();
    const grandTotal = (
      calculateTotal(recurringItems) * budget_duration +
      calculateTotal(nonRecurringItems)
    ).toLocaleString();

    // Build the result array
    let result = [...recurringItems];

    // Only add "Recurring Total" if there are recurring items
    if (recurringItems.length > 0) {
      result.push({
        name: "Recurring Total",
        formatted_budget: recurringTotal,
        term: "Mo",
        is_total: true,
      });
    }

    result = [
      ...result,
      ...nonRecurringItems,
      {
        name: "Grand Total",
        formatted_budget: grandTotal,
        term: "Mo",
        is_total: true,
      },
    ];

    //TODO ~ Will need to update widget to better reflect Figma and RFP data names
    // format the budget to fit widget format
    result.forEach((product) => {
      product["budget_value"] =
        `$${product.formatted_budget}${product.term_based ? "/Mo" : ""}`;
      product["type"] = product?.is_total ? "total" : "";
    });

    // Hide recurring total if not seleced
    result = show_recurring
      ? result
      : result.filter((item) => item.name !== "Recurring Total");

    const props = {
      header: budget_name,
      duration: budget_duration,
      details: result,
    };
    return /*html*/ `
    <div style="transform: scale(0.6) translate(-30%, -30%); width: 1400px; height: 600px">
        ${createWidget("wgt-budget-table", props)}
    </div>
    `;
    // return div.innerHTML;
  },
  parameters: {
    docs: {
      source: {
        code: WidgetBudgetTable.toString(),
        language: "js",
      },
    },
  },
  argTypes: {
    budget_name: { control: "text" },
    budget_duration: { control: { type: "number", min: 1, max: 12, step: 1 } },
    show_recurring: { control: "boolean" },
    recurring_product_count: {
      control: { type: "number", min: 0, max: 10, step: 1 },
    },
    non_recurring_product_count: {
      control: { type: "number", min: 0, max: 5, step: 1 },
    },
  },
};

export const Default = {
  args: {
    budget_name: "Budget-name",
    budget_duration: 1,
    recurring_product_count: 5,
    non_recurring_product_count: 2,
    show_recurring: true,
  },
};
