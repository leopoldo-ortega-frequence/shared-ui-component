import { imgMap } from "../../helper/imgMap";

export default {
  title: "Frequence/Widgets/wgt-image",
  tags: ["autodocs"],
  render: ({ type, image, img_fill }) => {
    //   return createWidget('elem-image', props);
    return /*html*/ `
    <!-- annoying but should include a way to differentiate between different image modes -->
    <div class="sb-wgt-image" >
      <wgt-image
      type = ${type}
      img = ${imgMap[image]}
      size = ${img_fill}
      ><wgt-image>
    </div>
    `;
  },
  parameters: {
    docs: {
      source: {
        code: ElementImage.toString(),
        language: "js",
      },
    },
  },
  argTypes: {
    type: {
      control: { type: "select" },
      options: ["default", "full-bleed"],
    },
    img_fill: {
      control: { type: "select" },
      options: ["cover", "contain"],
    },
    image: {
      control: { type: "select" },
      options: Object.keys(imgMap),
    },
  },
};

export const Default = {
  args: {
    type: "default",
    img_fill: "contain",
    image: Object.keys(imgMap)[0],
  },
};
