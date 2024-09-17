export const withClassName = (storyFn, context) => {
    return /*html*/`
      <div class="page storybook-widget">
        ${storyFn()}
      </div>
    `;
  };