import { createWidget } from "../../../helper/renderEngine.js";
import { ALL_ICONS } from "../../../../../rfp/js/assets.js";
import { tvScheduleData } from "../../../../../rfp/data/data.js";
import { dummyScheduleHeatMap } from "../../../../../rfp/data/data.js";

export default {
  title: "Frequence/Base/Widgets/wgt-schedule-chart/Elements/elem-schedule-map",
  tags: ["autodocs"],
  render: ({ strength_type }) => {
    //TODO, we need to get schedule and days
    const data = structuredClone(tvScheduleData);
    const icons = {
      television: "TV_ICON",
      radio: "RADIO_ICON",
    };
    data.schedule = dummyScheduleHeatMap[strength_type.toLowerCase()].map(
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

    return /*html*/ `
    <div style="height: 400px; width: 1500px; transform: scale(0.6) translateX(-450px)">
    ${createWidget("elem-schedule-table", {
      icon: ALL_ICONS.placeholder,
      schedule: data.schedule,
      days: data.days,
    })}
    </div>
    `;
  },
  parameters: {
    docs: {
      source: {
        code: ElemScheduleTable.toString(),
        language: "js",
      },
    },
  },
  argTypes: {
    strength_type: {
      control: { type: "select" },
      options: ["Default", "Max"],
    },
  },
};

export const Default = {
  args: {
    strength_type: "Default",
  },
};
