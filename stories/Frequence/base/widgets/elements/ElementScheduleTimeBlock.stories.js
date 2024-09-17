import { createWidget } from "../../../helper/renderEngine.js";
import {
  SCHEDULE_ICONS,
  SB_ICONS,
  ALL_ICONS,
} from "../../../../../rfp/js/assets.js";

export default {
  title:
    "Frequence/Base/Widgets/wgt-schedule-chart/Elements/elem-schedule-time-block",
  tags: ["autodocs"],
  render: ({ icon, strength, day }) => {
    const map = {};
    map["days"] = new Array(5).fill(strength);
    map["label"] = day;
    return /*html*/ `
    <div style="height: 250px">
    ${createWidget("elem-schedule-time-block", {
      icon: ALL_ICONS[icon],
      schedule: map,
    })}
    </div>
    `;
  },
  parameters: {
    docs: {
      source: {
        code: ElemScheduleTimeBlock.toString(),
        language: "js",
      },
    },
  },
  argTypes: {
    icon: {
      control: { type: "select" },
      options: [...Object.keys(SCHEDULE_ICONS), ...Object.keys(SB_ICONS)],
    },
    strength: { control: { type: "range", min: 0, max: 5, step: 1 } },
    day: { control: "text" },
  },
};

export const Default = {
  args: {
    icon: "default",
    strength: 3,
    day: "Mon",
  },
};
