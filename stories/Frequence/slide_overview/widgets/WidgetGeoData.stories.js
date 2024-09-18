import { createWidget } from "../../helper/renderEngine.js";
import { overviewData, targetGeoMaps } from "../../../../rfp/data/data.js";

export default {
  title: "Frequence/Widgets/wgt-geo-data",
  tags: ["autodocs"],
  render: ({
    map,
    population,
    avg_income,
    median_age,
    avg_home_value,
    avg_commute_time,
  }) => {
    //const data = overviewData.demographics;

    let img_src = targetGeoMaps[map.toLowerCase()];

    const props = {
      img: img_src,
      title: "Geographic Makeup",
      population: population,
      income: `$${avg_income}`,
      age: median_age,
      home_value: `$${avg_home_value}`,
      commute: `${avg_commute_time} minutes`,
    };
    return /*html*/ `
     <div style="transform: scale(0.6) translateX(-450px); width: 1400px; height: 300px">
     ${createWidget("wgt-geo-data", props)}
     </div>`;
  },
  parameters: {
    docs: {
      source: {
        code: WidgetGeoData.toString(),
        language: "js",
      },
    },
  },
  argTypes: {
    map: {
      control: { type: "select" },
      options: ["default", "Far Locations", "Canada"],
    },
    population: { control: "text" },
    avg_income: { control: "text" },
    median_age: { control: "text" },
    avg_home_value: { control: "text" },
    avg_commute_time: { control: "text" },
  },
  args: {
    map: "default",
    population: "18,111,785",
    avg_income: `102,191`,
    median_age: "39",
    avg_home_value: `603,199`,
    avg_commute_time: `29.3`,
  },
};

export const Default = {
  map: "default",
  population: "18,111,785",
  avg_income: `102,191`,
  median_age: "39",
  avg_home_value: `603,199`,
  avg_commute_time: `29.3`,
};
