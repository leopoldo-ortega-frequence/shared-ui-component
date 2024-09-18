export default {
  title: "Frequence/Widgets/wgt-header",
  tags: ["autodocs"],
  render: ({ slide_title }) => /*html*/ `
        <div class="slide" style="width: 1653px">
            <wgt-header
            title = '${slide_title}'
            >
            </wgt-header>
        </div>
        `,
  parameters: {
    docs: {
      source: {
        code: WidgetHeader.toString(),
        language: "js",
      },
    },
  },
  argTypes: {
    slide_title: { control: "text" },
  },
};

export const Default = {
  args: {
    slide_title: "Slide Title",
  },
};
