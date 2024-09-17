import { renderCover } from "./Cover.js";
export default {
  title: "Frequence/Cover/Slide-default",
  tags: ["autodocs"],
  render: (args) => {
    const options = { year: "numeric", month: "2-digit", day: "2-digit" };
    args.proposal_date = new Date(args.proposal_date).toLocaleDateString(
      "en-US",
      options
    );
    const logos = {
      Tall: "/assets/logo_tall.png",
      Wide: "/assets/logo_wide.png",
    };

    args.logo = logos[args.logo];
    return renderCover(args);
  },
  argTypes: {
    advertiser_name: { control: "text" },
    partner_name: { control: "text" },
    first_name: { control: "text" },
    last_name: { control: "text" },
    submitter_email: { control: "text" },
    phone_number: { control: "text" },
    proposal_date: { control: "date" },
    logo: {
      control: { type: "select" },
      options: ["Tall", "Wide"],
    },
  },
};

export const Default = {
  args: {
    advertiser_name: "Advertiser Name",
    partner_name: "Partner Name",
    first_name: "John",
    last_name: "Doe",
    submitter_email: "fakeemail@gmail.com",
    phone_number: "123-456-7890",
    proposal_date: "01/01/2024",
    logo: "Tall",
  },
};
