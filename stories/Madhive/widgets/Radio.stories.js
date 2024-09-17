export default {
  title: "Madhive/Widgets/Radio Button",
  tags: ["autodocs"],
  render: ({ btn_type }) => {
    return /* HTML */ `
      <div class="radios" style="display: flex; flex-direction: column;">
        <label class="radio">
          <input type="radio" name="rsvp" />
          Option 1
        </label>
        <label class="radio">
          <input type="radio" name="rsvp" />
          Option 2
        </label>
        <label class="radio" disabled>
          <input type="radio" name="rsvp" disabled />
          Disabled
        </label>
      </div>
    `;
    // return div.innerHTML;
  },
  argTypes: {},
};

export const Default = {
  args: {},
};
