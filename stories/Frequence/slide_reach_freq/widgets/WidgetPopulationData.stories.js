import { createWidget } from "../../helper/renderEngine.js";
import {
  SB_ICONS,
  EMAIL_ICONS,
  POPULATION_ICONS,
  DEMO_ICONS,
} from "../../../../rfp/js/assets.js";

export default {
  title: "Frequence/Widgets/wgt-population-data",
  tags: ["autodocs"],
  render: ({ target_population, total_population }) => {
    const props = {
      total_pop_value: total_population,
      target_pop_value: target_population,
      total_pop_icon: POPULATION_ICONS.total_pop,
      target_pop_icon: POPULATION_ICONS.target_pop,
    };

    return createWidget("wgt-population-data", props);
    // return div.innerHTML;
  },
  parameters: {
    docs: {
      source: {
        code: WidgetPopulationData.toString(),
        language: "js",
      },
    },
  },
  argTypes: {
    target_population: { control: "text" },
    total_population: { control: "text" },
  },
};

export const Default = {
  args: {
    target_population: "467,000",
    total_population: "700,000",
  },
};
