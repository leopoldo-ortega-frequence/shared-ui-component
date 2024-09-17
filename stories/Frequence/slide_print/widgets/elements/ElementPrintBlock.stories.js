import { createWidget } from "../../../helper/renderEngine.js";

export default {
  title: "Frequence/Print/Widget/wgt-print-table/Elements/elem-print-block",
  tags: ["autodocs"],
  render: ({ publication_name, budget_value, publication_details }) => {
    // convert the common values into an array of objects
    console.log(publication_details);
    const props = {
      name: publication_name,
      total: `${budget_value}`,
      values: publication_details,
    };
    return /*html*/ `
      <div>
      ${createWidget("elem-print-block", props)}
      </div>
      `;
  },
  parameters: {
    docs: {
      source: {
        code: ElementPrintBlock.toString(),
        language: "js",
      },
    },
  },
  argTypes: {
    publication_name: { control: "text" },
    budget_value: { control: "text" },
    publication_details: { control: "object" },
  },
};

export const Default = {
  args: {
    publication_name: "Publication Name",
    budget_value: "##,###",
    publication_details: [
      {
        key: "print-detail-1",
        value: "print-detail-data",
      },
      {
        key: "print-detail-2",
        value: "print-detail-data",
      },
      {
        key: "print-detail-3",
        value: "print-detail-data",
      },
      {
        key: "print-detail-4",
        value: "print-detail-data",
      },
      {
        key: "print-detail-5",
        value: "print-detail-data",
      },
    ],
  },
};

export const F15_Preset = {
  args: {
    publication_name: "publication-details",
    budget_value: "#####",
    publication_details: [
      {
        key: "Insertions",
        value: "##",
      },
      {
        key: "Section",
        value: "section-details",
      },
      {
        key: "Placements",
        value: "placement-details",
      },
      {
        key: "Page Size",
        value: "page-size-details",
      },
      {
        key: "Color",
        value: "Yes",
      },
    ],
  },
};
