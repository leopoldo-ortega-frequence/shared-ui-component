import { createWidget } from "../../helper/renderEngine.js";
import { tvScheduleData } from "../../../../rfp/data/data.js";
import { ALL_ICONS } from "../../../../rfp/js/assets.js";
import { dummyScheduleHeatMap } from "../../../../rfp/data/data.js";

export default {
  title: "Frequence/Base/Widgets/wgt-schedule-chart",
  tags: ["autodocs"],
  render: (args) => {
    // build the object here
    const data = structuredClone(tvScheduleData.default);
    // data.stations = data.stations.few;
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
      ${createWidget(WGT_SCHEDULE_CHART, {
        icon: ALL_ICONS.placeholder,
        schedule_data_title_1: args.schedule_data_1.title,
        schedule_data_title_2: args.schedule_data_2.title,
        schedule_data_title_3: args.schedule_data_3.title,
        schedule_data_title_4: args.schedule_data_4.title,
        schedule_data_title_5: args.schedule_data_5.title,
        schedule_data_1: args.schedule_data_1.value,
        schedule_data_2: args.schedule_data_2.value,
        schedule_data_3: args.schedule_data_3.value,
        schedule_data_4: args.schedule_data_4.value,
        schedule_data_5: args.schedule_data_5.value,
        schedule: data.schedule,
        days: data.days,
      })}
    </div>
    `;
  },
  parameters: {
    docs: {
      source: {
        code: WidgetScheduleChart.toString(),
        language: "js",
      },
    },
  },
  argTypes: {
    strength_type: {
      control: { type: "select" },
      options: ["Default", "Max"],
    },
    schedule_data_1: { control: "object" },
    schedule_data_2: { control: "object" },
    schedule_data_3: { control: "object" },
    schedule_data_4: { control: "object" },
    schedule_data_5: { control: "object" },
  },
};

export const Default = {
  args: {
    strength_type: "Default",
    schedule_data_1: {
      title: "data-value",
      value: "data",
    },
    schedule_data_2: {
      title: "data-value",
      value: "data",
    },
    schedule_data_3: {
      title: "data-value",
      value: "data",
    },
    schedule_data_4: {
      title: "data-value",
      value: "data",
    },
    schedule_data_5: {
      title: "data-value",
      value: "data",
    },
  },
};
