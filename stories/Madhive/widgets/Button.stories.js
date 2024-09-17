export default {
  title: "Madhive/Elements/Button",
  tags: ["autodocs"],
  render: ({ btn_type }) => {
    return /* HTML */ ` <button class="button is-${btn_type}">Button</button> `;
    // return div.innerHTML;
  },
  argTypes: {
    btn_type: {
      control: { type: "select" },
      options: ["default", "white", "light", "dark"],
    },
  },
};

export const Default = {
  args: {
    btn_type: "default",
  },
};
