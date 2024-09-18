export default {
  title: "Madhive/Widgets/Tags",
  tags: ["autodocs"],
  render: ({ tag_type }) => {
    // const props = {
    //   title: widget_title,
    //   list: data,
    //   alignment: "center",
    // };
    return /* HTML */ ` <span class="tag is-${tag_type}"> Madhive Tag </span>`;
    // return div.innerHTML;
  },
  argTypes: {
    tag_type: {
      control: { type: "select" },
      options: ["default", "info", "black", "dark", "danger", "warning"],
    },
  },
};

export const Default = {
  args: {
    tag_type: "default",
  },
};
