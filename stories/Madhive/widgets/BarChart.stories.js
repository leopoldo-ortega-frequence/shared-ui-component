export default {
  title: "Madhive/Widgets/Battery Bar Chart",
  tags: ["autodocs"],
  render: ({ strength }) => {
    return /* HTML */ `
      <progress class="progress" value="${strength}" max="100">
        ${strength}%
      </progress>
    `;
    // return div.innerHTML;
  },
  argTypes: {
    strength: { control: { type: "range", min: 0, max: 100, step: 1 } },
  },
};

export const Default = {
  args: {
    strength: 25,
  },
};
