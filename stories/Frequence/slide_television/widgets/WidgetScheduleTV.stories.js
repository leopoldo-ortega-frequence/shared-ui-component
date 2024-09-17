import { createWidget } from "../../helper/renderEngine.js";
import { tvScheduleData } from "../../../../rfp/data/data.js";
import { SCHEDULE_ICONS } from "../../../../rfp/js/assets.js";
import { dummyScheduleHeatMap } from "../../../../rfp/data/data.js";

export default {
  title: "Frequence/Television/Widgets/wgt-schedule-tv",
  tags: ["autodocs"],
  render: (args) => {
    // build the object here
    const data = structuredClone(tvScheduleData.default);
    //data.stations = data.stations.few;
    // convert the data into column format
    data.schedule = dummyScheduleHeatMap[args.strength_type.toLowerCase()].map(
      (sche) => {
        const map = {};
        const heatDays = [];
        map.label = sche.label;
        heatDays.push(sche.monday.heat_group);
        heatDays.push(sche.tuesday.heat_group);
        heatDays.push(sche.wednesday.heat_group);
        heatDays.push(sche.thursday.heat_group);
        heatDays.push(sche.friday.heat_group);
        heatDays.push(sche.saturday.heat_group);
        heatDays.push(sche.sunday.heat_group);
        map.days = heatDays;
        return map;
      }
    );

    data.stations = data.stations.map((item) => item.call_letters);

    return /*html*/ `
    <div style="transform: scale(0.6) translate(-450px,-120px); height: 300px; width: 1500px">
      ${createWidget("wgt-schedule-tv", {
        icon: SCHEDULE_ICONS.TV_ICON,
        top_network: args.top_networks,
        networks: args.network_count,
        spots: args.spot_count,
        budget: args.budget,
        duration: `${args.duration} Weeks`,
        schedule: data.schedule,
        days: data.days,
      })}
    </div>
    `;
  },
  parameters: {
    docs: {
      source: {
        code: WidgetScheduleTV.toString(),
        language: "js",
      },
    },
  },
  argTypes: {
    strength_type: {
      control: { type: "select" },
      options: ["Default", "Max"],
    },
    top_networks: { control: "text" },
    network_count: { control: "text" },
    spot_count: { control: "text" },
    budget: { control: "text" },
    duration: { control: "text" },
  },
};

export const Default = {
  args: {
    strength_type: "Default",
    top_networks: "ABCD",
    network_count: "##",
    spot_count: "##",
    budget: "#,###",
    duration: "#",
  },
};