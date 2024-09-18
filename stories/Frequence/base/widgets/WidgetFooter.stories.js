export default {
  title: "Frequence/Widgets/wgt-footer",
  tags: ["autodocs"],
  render: ({ advertiser_name, proposal_name, date, page }) => {
    const options = { year: "numeric", month: "2-digit", day: "2-digit" };
    date = new Date(date).toLocaleDateString("en-US", options);
    return /*html*/ `
        <div class="slide" style="width: 1653px">
            <wgt-footer
            advertiser_name = '${advertiser_name}'
            proposal_name = '${proposal_name}'
            date = '${date}'
            page = '${page}'
            >
            </wgt-footer>
        </div>
        `;
  },
  parameters: {
    docs: {
      source: {
        code: WidgetFooter.toString(),
        language: "js",
      },
    },
  },
  argTypes: {
    advertiser_name: { control: "text" },
    proposal_name: { control: "text" },
    date: { control: "date" },
    page: { control: "number" },
  },
};

export const Default = {
  args: {
    advertiser_name: "Advertiser Name Here",
    proposal_name: "Proposal Name Here",
    date: "01/01/2024",
    page: 1,
  },
};
