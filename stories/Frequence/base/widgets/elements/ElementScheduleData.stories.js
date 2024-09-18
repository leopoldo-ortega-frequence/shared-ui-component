import { createWidget } from "../../../helper/renderEngine";
import { ALL_ICONS } from "../../../../../rfp/js/assets.js";

export default {
  title: "Frequence/Widgets/wgt-schedule-chart/Elements/elem-schedule-data",
  tags: ["autodocs"],
  render: ({
    schedule_data_1,
    schedule_data_2,
    schedule_data_3,
    schedule_data_4,
    schedule_data_5,
  }) => {
    console.log(schedule_data_1);
    return /*html*/ `
    <div style="width: 1500px; transform: scale(0.6) translateX(-30%);">
    ${createWidget("elem-schedule-data", {
      schedule_data_title_1: schedule_data_1.title,
      schedule_data_title_2: schedule_data_2.title,
      schedule_data_title_3: schedule_data_3.title,
      schedule_data_title_4: schedule_data_4.title,
      schedule_data_title_5: schedule_data_5.title,
      schedule_data_1: schedule_data_1.value,
      schedule_data_2: schedule_data_2.value,
      schedule_data_3: schedule_data_3.value,
      schedule_data_4: schedule_data_4.value,
      schedule_data_5: schedule_data_5.value,
      icon: ALL_ICONS.placeholder,
    })}
    </div>
     
    `;
  },
  parameters: {
    docs: {
      source: {
        code: ElementScheduleData.toString(),
        language: "js",
      },
    },
  },
  argTypes: {
    schedule_data_1: { control: "object" },
    schedule_data_2: { control: "object" },
    schedule_data_3: { control: "object" },
    schedule_data_4: { control: "object" },
    schedule_data_5: { control: "object" },
  },
};

export const Default = {
  args: {
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
