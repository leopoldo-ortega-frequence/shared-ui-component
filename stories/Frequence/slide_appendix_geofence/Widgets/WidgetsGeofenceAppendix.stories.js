import { createWidget } from "../../helper/renderEngine";

export default {
  title: "Frequence/Widgets/wgt-geo-appendix",
  tags: ["autodocs"],
  render: ({ location_count }) => {
    const data = [
      ...Array(location_count)
        .fill("")
        .map((val, idx) =>
          idx === 4
            ? "location | lat, long | radius/polygon | The text might be long enough to wrap so we have to add as much text as possible in order to show what it looks like when wrapped."
            : "location | lat, long | radius/polygon"
        ),
    ];

    const props = {
      list: data,
    };
    return /*html*/ `
    <div style="transform: scale(0.6) translate(-20%, -30%); width: 900px; height: 500px;">
        ${createWidget("wgt-geo-appendix", props)}
    </div>
    `;
    // return div.innerHTML;
  },
  parameters: {
    docs: {
      source: {
        code: WidgetGeoAppendix.toString(),
        language: "js",
      },
    },
  },
  argTypes: {
    location_count: { control: { type: "number", min: 0, max: 15, step: 1 } },
  },
};

export const Default = {
  args: {
    location_count: 5,
  },
};
