export default {
  title: "Madhive/Widgets/Breadcrumbs",
  tags: ["autodocs"],
  render: () => {
    return /* HTML */ `
      <nav class="breadcrumb has-arrow-separator" aria-label="breadcrumbs">
        <ul>
          <li><a href="#">Start</a></li>
          <li><a href="#">Documentation</a></li>
          <li><a href="#">Components</a></li>
          <li class="is-active">
            <a href="#" aria-current="page">Breadcrumb</a>
          </li>
        </ul>
      </nav>
    `;
    // return div.innerHTML;
  },
  argTypes: {},
};

export const Default = {
  args: {},
};
