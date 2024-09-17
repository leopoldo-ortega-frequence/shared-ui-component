import { createWidget } from "../../helper/renderEngine.js";
import { targetGeo } from "../../../../rfp/data/data.js";
import { DEMO_ICONS } from "../../../../rfp/js/assets.js";

export default {
  title: "Frequence/Target Geography/Widgets/wgt-target-geo-data",
  tags: ["autodocs"],
  render: ({
    population,
    avg_commute,
    avg_income,
    avg_home_value,
    median_age,
  }) => {
    return /*html*/ `
    <div style="transform: scale(0.6) translateX(-450px); width: 1420px;">
      ${createWidget("wgt-target-geo-data", {
        population_value: population,
        population_icon: DEMO_ICONS.population,
        commute_value: avg_commute,
        commute_icon: DEMO_ICONS["avg commute"],
        income_value: avg_income,
        income_icon: DEMO_ICONS["avg income"],
        home_value_value: avg_home_value,
        home_value_icon: DEMO_ICONS["avg home value"],
        age_value: median_age,
        age_icon: DEMO_ICONS["median age"],
      })}
    </div>
    `;
  },
  parameters: {
    docs: {
      source: {
        code: WidgetTargetGeoMap.toString(),
        language: "js",
      },
    },
  },
  argTypes: {
    population: { control: "text" },
    avg_commute: { control: "text" },
    avg_income: { control: "text" },
    avg_home_value: { control: "text" },
    median_age: { control: "text" },
  },
};

export const Default = {
  args: {
    population: targetGeo.default.population,
    avg_commute: targetGeo.default.avg_commute,
    avg_income: targetGeo.default.avg_income,
    avg_home_value: targetGeo.default.avg_home_val,
    median_age: targetGeo.default.median_age,
  },
};
