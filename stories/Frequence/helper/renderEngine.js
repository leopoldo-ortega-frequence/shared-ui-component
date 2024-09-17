// Widget render helper to enable rendering widgets that require use of complex data
// Uses hybrid approach (attributes and properties)
export const renderWidget = (widgetName, html, complexData) => {
    if (document.querySelector('.widget-placeholder')) {
        document.querySelector('.widget-placeholder').remove();
      }
      const placeHolder = document.createElement("div");
      placeHolder.className = "widget-placeholder";
      placeHolder.style.display = "none";
      placeHolder.innerHTML = html;
      
      document.body.append(placeHolder);

      if (Object.keys(complexData).length > 0) {
        for (let key in complexData) {
            document.querySelector(`.widget-placeholder ${widgetName}`)[key] = complexData[key];
        }
      }
      
      return placeHolder.innerHTML;
}

// pass data to widget, this will be for widgets that are ALREADY appended on the DOM

export const injectData = (widgetSelector, data) => {
  const widget = document.querySelector(widgetSelector);
  if (widget) {
    widget.data = data;
  }
}

// create a widget with data, this will be for widgets that are to be dynamically added to the DOM
// TODO ~ In RFP, might not need div wrapper
export const createWidget = (widget, data) => {
  const _widget = document.createElement(widget);
  _widget.data = data;

  return _widget.outerHTML;
}

export const showSourceCode = (widget) => {
  return `<script>${widget.toString()}</script>`
}