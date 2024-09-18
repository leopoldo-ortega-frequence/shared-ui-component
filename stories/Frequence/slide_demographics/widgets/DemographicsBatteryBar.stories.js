import { createWidget } from "../../helper/renderEngine.js";

export default {
  title: "Frequence/Widgets/wgt-demographics-chart",
  tags: ["autodocs"],
  render: ({ population_value, label }) => {
    const props = {
      value: population_value,
    };
    return createWidget("wgt-demographics-chart", props);
    // return div.innerHTML;
  },
  parameters: {
    docs: {
      source: {
        code: WidgetDemographicsChart.toString(),
        language: "js",
      },
    },
  },
  argTypes: {
    population_value: { control: { type: "range", min: 0, max: 100, step: 1 } },
  },
};

export const Default = {
  args: {
    population_value: 50,
  },
};
