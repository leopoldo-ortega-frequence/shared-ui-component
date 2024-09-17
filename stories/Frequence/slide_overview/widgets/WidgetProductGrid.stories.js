import { createWidget } from "../../helper/renderEngine.js";
import { overviewData } from "../../../../rfp/data/data.js";
import { getProductIcon } from "../../../../rfp/js/assets.js";

export default {
  title: "Frequence/Overview/Widgets/wgt-product-grid",
  tags: ["autodocs"],
  render: ({ product_count, extra_products }) => {
    const data = overviewData.products[product_count];
    const get_icon_size = (num_products) => {
      if (num_products <= 5) {
        return "large";
      } else if (num_products < 15) {
        return "default";
      } else if (num_products < 21) {
        return "reduced";
      } else {
        return "list";
      }
    };

    const filteredNames = data
      .filter((item) => item.has_budget)
      .map((item) => item.name);

    const productObject = [];

    filteredNames.forEach((product) => {
      productObject.push({
        name: product,
        icon: getProductIcon(product.toLowerCase()),
      });
    });

    // Get the last item
    let lastItem = productObject[productObject.length - 1];

    // Create an array with the last item cloned n times
    let clonedItems = new Array(extra_products).fill(lastItem);
    // Concatenate the original array with the cloned items
    const allProducts = productObject.concat(clonedItems);

    // else render normal product grid
    return /*html*/ `<div style="height: 400px">
    ${createWidget("wgt-product-grid", {
      type: get_icon_size(allProducts.length),
      products: allProducts,
    })}
    </div>`;
    // }
  },
  parameters: {
    docs: {
      source: {
        code: WidgetProductGrid.toString(),
        language: "js",
      },
    },
  },
  argTypes: {
    product_count: {
      control: { type: "select" },
      options: ["few", "default", "many", "max"],
    },
    extra_products: { control: { type: "number", min: 0, max: 30, step: 1 } },
  },
};

export const Default = {
  args: {
    product_count: "default",
    extra_products: 0,
  },
};
