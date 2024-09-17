import { createWidget } from "../../../helper/renderEngine.js";
import {
  SCHEDULE_ICONS,
  SB_ICONS,
  ALL_ICONS,
} from "../../../../../rfp/js/assets.js";

export default {
  title:
    "Frequence/Base/Widgets/wgt-schedule-chart/Elements/elem-schedule-strength",
  tags: ["autodocs"],
  render: ({ icon, show_icon, strength }) => {
    return /*html*/ `
      ${createWidget("elem-schedule-strength", {
        icon: ALL_ICONS[icon],
        show_icon: show_icon,
        strength: strength,
      })}
    `;
  },
  parameters: {
    docs: {
      source: {
        code: ElementScheduleStrength.toString(),
        language: "js",
      },
    },
  },
  argTypes: {
    strength: { control: { type: "range", min: 0, max: 5, step: 1 } },
    show_icon: { control: "boolean" },
    icon: {
      control: { type: "select" },
      options: [...Object.keys(SCHEDULE_ICONS), ...Object.keys(SB_ICONS)],
    },
  },
};

export const Default = {
  args: {
    strength: 5,
    show_icon: true,
    icon: "default",
  },
};
