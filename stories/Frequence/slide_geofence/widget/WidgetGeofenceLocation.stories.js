import { createWidget } from "../../helper/renderEngine.js";
import { geofenceLocations } from "../../../../rfp/data/data.js";
import { LIST_ICONS } from "../../../../rfp/js/assets.js";

export default {
  title: "Frequence/Geofence/Widget/wgt-geofence-location",
  tags: ["autodocs"],
  render: ({ extra_locations }) => {
    const data = [...Array(5).fill("location | lat, long | radius/polygon")];
    data.push(
      ...Array(extra_locations).fill("location | lat, long | radius/polygon")
    );
    const props = {
      locations: data,
      icon: LIST_ICONS.arrow,
    };
    return /*html*/ `<div style="transform: scale(0.7) translate(-150px, -110px); height: 500px; ">
        ${createWidget("wgt-geo-locations", props)}
      </div>`;
  },
  parameters: {
    docs: {
      source: {
        code: WidgetGeofenceLocations.toString(),
        language: "js",
      },
    },
  },
  argTypes: {
    extra_locations: { control: { type: "number", min: 0, max: 10, step: 1 } },
  },
};

export const Location = {
  args: {
    extra_locations: 0,
  },
};
