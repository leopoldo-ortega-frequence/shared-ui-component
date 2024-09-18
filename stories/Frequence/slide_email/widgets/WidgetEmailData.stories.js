import { createWidget } from "../../helper/renderEngine.js";

export default {
  title: "Frequence/Widgets/wgt-email-data",
  tags: ["autodocs"],
  render: ({ total_email_sends, available_inventory, location }) => {
    const props = {
      email_sends: total_email_sends,
      inventory: available_inventory,
      location: location,
    };

    return createWidget("wgt-email-data", props);
  },
  parameters: {
    docs: {
      source: {
        code: WidgetEmailData.toString(),
        language: "js",
      },
    },
  },
  argTypes: {
    total_email_sends: { control: "text" },
    available_inventory: { control: "text" },
    location: { control: "text" },
  },
};

export const AvailableInventory = {
  args: {
    total_email_sends: "505",
    available_inventory: "400,000",
    location: "San Francisco, CA, USA - San Francisco, CA, USA",
  },
};
