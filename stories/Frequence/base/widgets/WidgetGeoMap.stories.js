import { createWidget } from "../../helper/renderEngine.js";
import { RFP_DATA } from "../../../../rfp/data/formatted_rfp_data.js";

export default {
  title: "Frequence/Base/Widgets/wgt-map",
  tags: ["autodocs"],
  render: ({ map, width }) => {
    let imgSrc;

    if (map === "Single Location") imgSrc = RFP_DATA.geo_overview_link;
    else if (map === "Far Locations") imgSrc = "/assets/geo_map_wide.png";

    return /*html*/ `
    <div style="width: ${width}%; height: 315px;">
      ${createWidget("wgt-map", {
        img: imgSrc,
      })}
    </div>
    `;
  },
  parameters: {
    docs: {
      source: {
        code: WidgetGeoMap.toString(),
        language: "js",
      },
    },
  },
  argTypes: {
    map: {
      control: { type: "select" },
      options: ["Single Location", "Far Locations"],
    },
    width: { control: { type: "range", min: 0, max: 100, step: 1 } },
  },
};

export const Default = {
  args: {
    map: "Single Location",
    width: 100,
  },
};
