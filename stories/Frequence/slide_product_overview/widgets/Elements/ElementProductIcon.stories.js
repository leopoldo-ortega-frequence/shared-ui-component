import { PRODUCTS } from "../../../../../rfp/js/assets.js";
import { createWidget } from "../../../helper/renderEngine.js";

export default {
  title: "Frequence/Widgets/wgt-product-grid/Elements/elem-product-icon",
  tags: ["autodocs"],
  render: ({ name, size, icon }) => {
    const props = {
      name: name,
      type: size,
      icon: PRODUCTS[icon],
    };

    return createWidget("elem-product-icon", props);
  },
  parameters: {
    docs: {
      source: {
        code: ElementProductIcon.toString(),
        language: "js",
      },
    },
  },
  argTypes: {
    name: { control: "text" },
    size: {
      control: { type: "select" },
      options: ["default", "large", "small", "list"],
    },
    icon: {
      control: { type: "select" },
      options: [...Object.keys(PRODUCTS)],
    },
  },
};

export const Default = {
  args: {
    name: "Product",
    icon: "ctv",
    size: "default",
  },
};
export const Large = {
  args: {
    name: "Product",
    icon: "ctv",
    size: "large",
  },
};
export const Reduced = {
  args: {
    name: "Product",
    icon: "ctv",
    size: "reduced",
  },
};
export const List = {
  args: {
    name: "Product",
    icon: "ctv",
    size: "list",
  },
};
