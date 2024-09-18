export default {
  title: "Madhive/Widgets/Form",
  tags: ["autodocs"],
  render: ({ form_type }) => {
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

      ${form_type === "file uploader"
        ? /*HTML*/ `
        
        <div class="file">
        <label class="file-label">
            <input class="file-input" type="file" name="resume" />
            <span class="file-cta">
            <span class="file-icon">
                <i class="fas fa-upload"></i>
            </span>
            <span class="file-label"> Choose a file… </span>
            </span>
        </label>
        </div>

        `
        : ""}
      ${form_type === "long"
        ? /*HTML*/ `
            
            <div class="field">
            <label class="label">Email</label>
            <div class="control">
              <input class="input" type="text" placeholder="Text input" />
            </div>
          </div>

          <div class="field">
        <label class="label">Phone Number</label>
        <div class="control">
          <input class="input" type="text" placeholder="Text input" />
        </div>
      </div>
    
            `
        : ""}

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
  argTypes: {
    form_type: {
      control: { type: "select" },
      options: ["default", "file uploader", "long"],
    },
  },
};

export const Default = {
  args: {},
};

export const LongForm = {
  args: {
    form_type: "long",
  },
};

export const FileUpload = {
  args: {
    form_type: "file uploader",
  },
};
