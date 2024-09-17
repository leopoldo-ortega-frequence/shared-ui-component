export default {
  title: "Madhive/Widgets/Form",
  tags: ["autodocs"],
  render: () => {
    // const props = {
    //   title: widget_title,
    //   list: data,
    //   alignment: "center",
    // };
    return /* HTML */ ` <div class="field">
        <label class="label">Name</label>
        <div class="control">
          <input class="input" type="text" placeholder="Text input" />
        </div>
      </div>

      <div class="field">
        <label class="label">Notes</label>
        <div class="control">
          <textarea class="textarea" placeholder="Textarea"></textarea>
        </div>
      </div>

      <div class="field">
        <div class="control">
          <label class="checkbox">
            <input type="checkbox" />
            I agree to the <a href="#">terms and conditions</a>
          </label>
        </div>
      </div>

      <div class="field is-grouped">
        <div class="control">
          <button class="button is-link">Submit</button>
        </div>
        <div class="control">
          <button class="button is-link is-light">Cancel</button>
        </div>
      </div>`;
    // return div.innerHTML;
  },
  argTypes: {},
};

export const Default = {
  args: {},
};
