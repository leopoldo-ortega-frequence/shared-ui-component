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

export const Primary = {
  args: {
    tag_type: "info",
  },
};

export const Dark = {
  args: {
    tag_type: "dark",
  },
};

export const Danger = {
  args: {
    tag_type: "danger",
  },
};

export const Warning = {
  args: {
    tag_type: "warning",
  },
};
