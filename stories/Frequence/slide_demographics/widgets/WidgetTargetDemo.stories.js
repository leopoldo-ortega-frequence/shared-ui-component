import { createWidget } from "../../helper/renderEngine.js";
import { DEMO_ICONS } from "../../../../rfp/js/assets.js";
import { regionDemographics } from "../../../../rfp/data/data.js";

export default {
  title: "Frequence/Target Demographics/Widgets/wgt-target-demo",
  tags: ["autodocs"],
  render: ({ demo_selected, region }) => {
    // build the object here
    const demo_data = regionDemographics[region][demo_selected.toLowerCase()];
    const data = [];

    for (let key in demo_data) {
      const map = {};
      map["name"] = key.charAt(0).toUpperCase() + key.slice(1);
      map["icon"] = DEMO_ICONS[key];
      map["value"] = demo_data[key];

      data.push(map);
    }

    return /*html*/ `
    <div style="transform: scale(0.6) translate(-250px,-120px); height: 300px">
      ${createWidget("wgt-target-demo", {
        targetDemoData: data,
      })}
    </div>
    `;
  },
  parameters: {
    docs: {
      source: {
        code: WidgetTargetDemo.toString(),
        language: "js",
      },
    },
  },
  argTypes: {
    demo_selected: {
      control: { type: "select" },
      options: ["Few", "Many", "All"],
    },
    region: {
      control: { type: "select" },
      options: ["USA", "Canada"],
    },
  },
};

export const Default = {
  args: {
    demo_selected: "Few",
    region: "USA",
  },
};
