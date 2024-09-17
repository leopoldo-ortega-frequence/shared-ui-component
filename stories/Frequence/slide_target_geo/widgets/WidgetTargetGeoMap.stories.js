import { createWidget } from "../../helper/renderEngine.js";
import {
  targetGeoMaps,
  targetGeoLocations,
} from "../../../../rfp/data/data.js";

export default {
  title: "Frequence/Target Geography/Widgets/wgt-target-geo-map",
  tags: ["autodocs"],
  render: ({ location, zip_count, zip_name }) => {
    return createWidget("wgt-target-geo-map", {
      img: targetGeoMaps[location],
      location: targetGeoLocations[location]["name"],
      zips: zip_name,
      zip_count: zip_count,
    });
  },
  parameters: {
    docs: {
      source: {
        code: WidgetTargetGeoMap.toString(),
        language: "js",
      },
    },
  },
  argTypes: {
    location: {
      control: { type: "select" },
      options: ["default", "far locations", "canada"],
    },
    zip_count: { type: "number" },
    zip_name: { control: "text" },
  },
};

export const Default = {
  args: {
    location: "default",
    zip_count: 50,
    zip_name: "Zips",
  },
};
