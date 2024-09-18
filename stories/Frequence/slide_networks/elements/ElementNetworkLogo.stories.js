import { createWidget } from "../../helper/renderEngine.js";

export default {
  title: "Frequence/Elements/wgt-network-grid/Elements/elem-network-logo",
  tags: ["autodocs"],
  render: ({ network_name, network_strength, show_strength, background }) => {
    const props = {
      name: network_name,
      img: "/assets/network-logo.png",
      value: network_strength,
      show_strength: show_strength,
      background: background,
    };
    return createWidget("elem-network-logo", props);
    // return div.innerHTML;
  },
  parameters: {
    docs: {
      source: {
        code: ElementNetworkLogo.toString(),
        language: "js",
      },
    },
  },
  argTypes: {
    network_name: { control: "text" },
    network_strength: { control: { type: "range", min: 0, max: 100, step: 1 } },
    background: {
      control: { type: "select" },
      options: ["default", "inverted"],
    },
    show_strength: { control: "boolean" },
  },
};

export const Default = {
  args: {
    network_name: "ESPN",
    network_strength: 0,
    show_strength: false,
    background: "default",
  },
};

export const Inverted = {
  args: {
    network_name: "ESPN",
    network_strength: 0,
    show_strength: false,
    background: "inverted",
  },
};
