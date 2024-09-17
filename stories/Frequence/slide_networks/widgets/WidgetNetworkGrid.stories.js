import { createWidget } from "../../helper/renderEngine.js";
import { networksData } from "../../../../rfp/data/data.js";

export default {
  title: "Frequence/CTV OTT/Widget/wgt-network-grid",
  tags: ["autodocs"],
  render: ({ show_network_strength }) => {
    const data = networksData.default;
    const props = {
      networks: data,
      config: {
        show_strength: show_network_strength,
        background: "default",
      },
    };
    const html = /*html*/ `
    <div class="page slide" style="padding: 0 10rem; height: 900px !important;">
        ${createWidget("wgt-network-grid", props)}
    </div>
    `;
    return html;
  },
  parameters: {
    docs: {
      source: {
        code: WidgetNetworkGrid.toString(),
        language: "js",
      },
    },
  },
  argTypes: {
    show_network_strength: { control: "boolean" },
  },
};

export const Default = {
  args: {
    show_network_strength: false,
  },
};
