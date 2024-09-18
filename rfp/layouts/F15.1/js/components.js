// Base components

//* Base template for our widgets to reduce boiler plate code and provide a template
// ✅
class BaseWidget extends HTMLElement {
  constructor() {
    super();
  }

  /**
   * Called when the element is added to the DOM.
   * It ensures the widget's content is rendered.
   * Can be customized in subclasses to add additional behavior.
   * Add attributes here, variable name should match attribute name.
   * Please make sure to add default value after the pipes || to prevent errors
   */
  connectedCallback() {
    //this.render()
  }

  // TODO - create method to pass data in a loop format

  createWidget(widget, data) {
    //const div = document.createElement("div");
    const _widget = document.createElement(widget);
    //div.appendChild(widget);
    _widget.data = data;

    return _widget.outerHTML;
  }

  get template() {
    return /*html*/ `
          <div>Hello World!</div>
          `;
  }

  render() {
    this.innerHTML = this.template;
  }
}

/******************/
/******************/
/**** ELEMENTS ****/
/******************/
/******************/
class ElementNetworkLogo extends BaseWidget {
  connectedCallback() {
    this.name = "";
    this.img = "";
    this.value = 0;
    this.show_strength = false;
    this.background = "default";
  }

  set data(props) {
    this.name = props?.name;
    this.img = props?.img;
    this.value = props?.value || 0;
    this.show_strength = props?.show_strength || false;
    this.background = props?.background || "default";
    this.render();
  }

  get template() {
    return /*html*/ `
          <div id="network-icon">
              <span class="label-small">${this.name}</span>
              <div class="network-data">
                  <div class="element-network-logo ${this.background}">
                      <img src="${this.img}"/>
                  </div>
                  <div class="network-strength ${this.show_strength ? "" : "hidden"}">
                      <div class="network-strength-value" style="height: ${this.value}%"></div>
                  </div>
              </div>
          </div>
          `;
  }
}

class ElementProductIcon extends BaseWidget {
  connectedCallback() {
    this.name = "";
    this.type = "default";
    this.icon = "";
  }

  set data(props) {
    this.name = props?.name || "";
    this.type = props?.type || "default";
    this.icon = props?.icon || "";
    this.render();
  }

  get template() {
    return /*html*/ `
          <div id="product-icon" class="${this.type}">
              <div class="_icon">
                  ${this.icon}
              </div>
              <span class="label">${this.name}</span>
          </div>
          `;
  }
}

// Product list element, this is different that elem-list-item
class ElementProductList extends BaseWidget {
  set data(props) {
    this.name = props?.name || "";
    this.icon = props?.icon || "";
    this.render();
  }

  get template() {
    return /*html*/ `
      <li id="elem-product-list" class="label-small">
        <div class="product-icon">
          ${this.icon}
        </div>
        <div class="product-name">
          ${this.name}
        </div>
      </li>
      `;
  }
}

// Generic Image Element
class ElementImage extends BaseWidget {
  connectedCallback() {
    this.img = this.getAttribute("img") || "";
    this.size = this.getAttribute("size") || "cover";
    this.height = this.getAttribute("height") || "100%";
    this.type = this.getAttribute("type") || "default";
    this.render();
  }

  get template() {
    return /*html*/ `
              <div id="element-image" class="${this.type}" style="height: ${this.height}">
                  <img src="${this.img}" style="object-fit: ${this.size}">
              </div>
          `;
  }
}

class ElementListItem extends BaseWidget {
  // AFTER the element get's added to the DOM, execute this.
  connectedCallback() {
    this.text = "";
    this.icon = "";
  }

  set data(props) {
    this.text = props?.text || "";
    this.icon = props?.icon || "";
    this.tier = props?.tier || 1;
    this.text_size = props?.text_size || "default";
    this.render();
  }

  //* If this is a common method we may want to super it
  getLabelSize(text_size) {
    switch (text_size) {
      case "default":
        return "label";
      case "large":
        return "text";
      default:
        return "label";
    }
  }

  get template() {
    const icons = Array(this.tier).fill(this.icon);
    return /*html*/ `
          <li id="elem-list-item">
            <div class="bullet-tiers">
              ${icons
                .map(
                  (icon) => /*html*/ `
                <div class="bullet-container ${this.text_size}">
                  ${icon}
                </div>
              `
                )
                .join("")}
            </div>
              <span class=${this.getLabelSize(this.text_size)}>${this.text}</span>
          </li>
          `;
  }
}

//! This one ought to be made redundant
class ElementGeofenceCount extends BaseWidget {
  // AFTER the element get's added to the DOM, execute this.
  connectedCallback() {
    this.text = "";
  }

  set data(props) {
    this.text = props?.text || "";
    this.render();
  }

  get template() {
    return /*html*/ `
          <div id="element-geofence-count">
              <span class="text">Number of Geofences: </span>
              <span class="text">${this.text}</span>
          </div>
          `;
  }
}

class ElementTargetItem extends BaseWidget {
  connectedCallback() {
    this.text = this.getAttribute("text") || "";
  }

  set data(props) {
    this.text = props?.text || "";
    this.render();
  }

  get template() {
    return /*html*/ `
          <div id="element-target-item">
            <span class="label">${this.text}</span>
          </div>
          `;
  }
}

class ElementScheduleData extends BaseWidget {
  set data(props) {
    this.icon = props?.icon || "";
    this.schedule_data_title_1 = props?.schedule_data_title_1 || "";
    this.schedule_data_title_2 = props?.schedule_data_title_2 || "";
    this.schedule_data_title_3 = props?.schedule_data_title_3 || "";
    this.schedule_data_title_4 = props?.schedule_data_title_4 || "";
    this.schedule_data_title_5 = props?.schedule_data_title_5 || "";
    this.schedule_data_1 = props?.schedule_data_1 || "";
    this.schedule_data_2 = props?.schedule_data_2 || "";
    this.schedule_data_3 = props?.schedule_data_3 || "";
    this.schedule_data_4 = props?.schedule_data_4 || "";
    this.schedule_data_5 = props?.schedule_data_5 || "";
    this.render();
  }

  get template() {
    return /*html*/ `
        <div class="elem-schedule-data">
        <div class="elem-schedule-scale">
        <div class="label-large">Schedule: </div>
        <div class="scale-visual">
          <div class="label-small">Many</div>
          <div class="scale-icons">
          ${this.createWidget(ELEM_SCHEDULE_STRENGTH, {
            icon: this.icon,
            strength: 5,
          })}
          ${this.createWidget(ELEM_SCHEDULE_STRENGTH, {
            icon: this.icon,
            strength: 4,
          })}
          ${this.createWidget(ELEM_SCHEDULE_STRENGTH, {
            icon: this.icon,
            strength: 3,
          })}
          ${this.createWidget(ELEM_SCHEDULE_STRENGTH, {
            icon: this.icon,
            strength: 2,
          })}
          ${this.createWidget(ELEM_SCHEDULE_STRENGTH, {
            icon: this.icon,
            strength: 1,
          })}
          </div>
          <div class="label-small">Few</div>
        </div>
      </div>
         <div>
          <span class="label-large">${this.schedule_data_title_1}: </span>
          <span class="label">${this.schedule_data_1}</span>
         </div>
         <div>
          <span class="label-large">${this.schedule_data_title_2}: </span>
          <span class="label">${this.schedule_data_2}</span>
         </div>
         <div>
          <span class="label-large">${this.schedule_data_title_3}: </span>
          <span class="label">${this.schedule_data_3}</span>
         </div>
         <div>
          <span class="label-large">${this.schedule_data_title_4}: </span>
          <span class="label">${this.schedule_data_4}</span>
         </div>
         <div>
          <span class="label-large">${this.schedule_data_title_5}: </span>
          <span class="label">${this.schedule_data_5}</span>
         </div>
        </div>
      `;
  }
}

class ElementScheduleStrength extends BaseWidget {
  set data(props) {
    this.icon = props?.icon || "";
    this.strength = props?.strength || 0;
    // 4D JavaScript
    this.show_icon = props?.show_icon ?? true;
    this.render();
  }

  get template() {
    return /*html*/ `
        <div id="elem-schedule-strength">
        <div class="base-icon strength-${this.strength}">
        ${this.show_icon ? `${this.icon}` : ""}
        </div>
        </div>
      `;
  }
}

class ElemBubbleCallout extends BaseWidget {
  set data(props) {
    this.label = props?.label || "";
    this.render();
  }

  get template() {
    return /*html*/ `
        <div class="elem-bubble-callout">
          <span class="label-large">${this.label}</span>
        </div>
        `;
  }

  render() {
    this.innerHTML = this.template;
  }
}

class ElemBudgetRow extends BaseWidget {
  set data(props) {
    this.type = props?.type || "default";
    this.name = props?.name || "";
    this.details = props?.details || "";
    this.details_label = props?.details_label || "";
    this.budget_value = props?.budget_value || "";
    this.render();
  }

  get template() {
    return /*html*/ `
        <div class="elem-budget-row ${this.name} ${this.type}">
            <span class="label name">${this.name}</span>
            <div class="item-details">
                <span class="label small">${this.details}&nbsp;</span>
                <span class="label small">${this.details_label}</span>
            </div>
            <span class="label value">${this.budget_value}</span>
        </div>
        `;
  }
}

class ElemScheduleTimeBlock extends BaseWidget {
  set data(props) {
    this.day = props?.day || "";
    this.icon = props?.icon || "";
    this.schedule = props?.schedule || [];
    this.render();
  }

  get template() {
    return /*html*/ `
        <div class="elem-daily-strength">
          ${this.schedule.days
            .map(
              (strength) => /*html*/ `
            <div class="basic-icon heat-${strength}">
              ${this.icon}
            </div>`
            )
            .join("")}

            <span class="label-small">${this.schedule.label}</span>
        </div>
      `;
  }
}

class ElementPrintBlock extends BaseWidget {
  set data(props) {
    this.total = props?.total || 0;
    this.name = props?.name || "";
    this.values = props?.values || [{ key: "", value: "" }];
    this.render();
  }

  get template() {
    return /*html*/ `
      <div id="elem-print-block">
        <div class="label-small pub-name">${this.name}</div>
        <div class="table">
          <div class="data">
            ${this.values
              .map(
                (value) => /*html*/ `
            <div class="data-row">
              <span class="label-small label-name">${value.key}:</span>
              <span class="label-small label-details">${value.value}</span>
            </div>
            `
              )
              .join("")}
          </div>
          <div class="budget">
            <div class="label">$${this.total}/Mo</div>
          </div>
        </div>
      </div>
      `;
  }
}

class ElementPrintColumn extends BaseWidget {
  set data(props) {
    this.name = props?.name || "";
    this.total = props?.total || 0;
    this.options = props?.options || [{ name: "", total: 0, values: [] }];
    this.render();
  }

  get template() {
    return /*html*/ `
      <div id="elem-print-column">
        <h2>${this.name}</h2>
        <div class="publication-blocks">
          ${this.options
            .map((option) =>
              this.createWidget(ELEM_PRINT_BLOCK, {
                name: option?.name,
                total: option?.total,
                values: option?.values,
              })
            )
            .join("")}
        </div>
        <div class="total">
          <span class="text emphasis">Total: </span>
          <span class="text">$${this.total}/Mo</span>
        </div>
      </div>
      `;
  }
}

class ElementTargetGroup extends BaseWidget {
  connectedCallback() {
    //implementation
    this.title = "";
    this.items = [];
    this.layout = "center";
  }

  set data(props) {
    this.title = props?.title || "";
    this.items = props?.items || [];
    this.layout = props?.layout || "center";
    this.render();
  }

  get template() {
    return /*html*/ `
          <div id="elem-target-group" class="align-${this.layout}">
              <div class="text">${this.title}</div>
              <div class="group-items" style="justify-content: ${this.layout}">
              ${this.items
                .map((item) =>
                  this.createWidget(ELEM_TARGET_ITEM, {
                    text: item,
                  })
                )
                .join("")} 
              </div>
          </div>
          `;
  }
}

class ElemScheduleTable extends BaseWidget {
  set data(props) {
    this.icon = props?.icon || "";
    this.schedule = props?.schedule || [];
    this.days = props?.days || [];
    this.render();
  }

  get template() {
    return /*html*/ `
        <div class="elem-schedule-table">
          <!-- Render Row for Icons -->
          <div class="day-labels">
          ${this.days
            .map(
              (day) => /*html*/ `
            <span class="label-large">${day}</span>
            `
            )
            .join("")}
          </div>
          ${this.schedule
            .map((sche, idx) =>
              this.createWidget(ELEM_SCHEDULE_TIME_BLOCK, {
                icon: this.icon,
                schedule: sche,
              })
            )
            .join("")}
        </div>
      `;
  }
}

/******************/
/******************/
/**** Base Widgets ****/
/******************/
/******************/

// Generic Image Element
class WidgetImage extends BaseWidget {
  connectedCallback() {
    this.img = this.getAttribute("img") || "";
    this.size = this.getAttribute("size") || "cover";
    this.height = this.getAttribute("height") || "100%";
    this.type = this.getAttribute("type") || "default";
    this.render();
  }

  get template() {
    return /*html*/ `
              <div id="element-image" class="${this.type}" style="height: ${this.height}">
                  <img src="${this.img}" style="object-fit: ${this.size}">
              </div>
          `;
  }
}

class WidgetGeoMap extends BaseWidget {
  set data(props) {
    this.img = props?.img || "";
    this.render();
  }

  get template() {
    return /*html*/ `
      <div id="wgt-geo-map">
        <img src="${this.img}" />
      </div>
      `;
  }
}

class WidgetHeader extends BaseWidget {
  connectedCallback() {
    this.title = this.getAttribute("title") || "";
    this.render();
  }

  get template() {
    return /*html*/ `
          <div id="module-header" class="section-header">
              <div class="header-bg">
                  <svg width="1653" height="224" viewBox="0 0 1653 224" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path fill-rule="evenodd" clip-rule="evenodd" d="M1653 0H0V224C0 188.654 28.6538 160 64 160H1589C1624.35 160 1653 188.654 1653 224V0Z" class="fill-primary"/>
                  </svg>
              </div>
              <h1>${this.title}</h1>
          </div>
          `;
  }
}
class WidgetFooter extends BaseWidget {
  connectedCallback() {
    this.advertiser_name = this.getAttribute("advertiser_name") || "";
    this.proposal_name = this.getAttribute("proposal_name") || "";
    this.date = this.getAttribute("date") || "";
    this.page = this.getAttribute("page") || "#";
    this.render();
  }

  get template() {
    return /*html*/ `
          <div class="section-footer">
            <div class="dynamic-proposal-info">${this.advertiser_name}  |  ${this.proposal_name}  |  ${this.date}</div>
            <div class="confidential-tag">Confidential & Proprietary</div>
            <div class="page-number">${this.page}</div>
          </div>
          `;
  }
}
class WidgetDataCallout extends BaseWidget {
  set data(props) {
    this.name = props?.name || "";
    this.value = props?.value || "";
    this.icon = props?.icon || "";
    this.type = props?.type || "default";
    this.alignment = props?.alignment || "left";
    this.show_icon = props?.show_icon || true;
    this.render();
  }

  getLabelType() {
    switch (this.type) {
      case "light":
        return "label";
      default:
        return "label-large";
    }
  }

  get template() {
    return /*html*/ `
      <div class="wgt-data-callout ${this.alignment}">
          <h3>${this.name}:</h3>
          <div class="demo-data">
            ${
              this.show_icon
                ? /*html*/ `
              <div class="basic-icon">
                    ${this.icon}
              </div>
            `
                : ""
            }
              <span class="${this.getLabelType()}">${this.value}</span>
          </div>
        </div>
      `;
  }
}

class WidgetPopulationData extends BaseWidget {
  set data(props) {
    this.total_pop_value = props?.total_pop_value || "";
    this.target_pop_value = props?.target_pop_value || "";
    this.total_pop_icon = props?.total_pop_icon || "";
    this.target_pop_icon = props?.target_pop_icon || "";
    this.render();
  }

  get template() {
    return /*html*/ `
      <div id="wgt-population-data">
        <div class="target-population">
          <div class="basic-icon">
            ${this.target_pop_icon}
          </div>
          <div class="data">
            <h3>Target Population</h3>
            <span class="text">${this.target_pop_value}</span>
          </div>
        </div>
        <div class="total-population">
          <div class="basic-icon">
            ${this.total_pop_icon}
          </div>
          <div class="data">
            <h3>Total Population</h3>
            <span class="text">${this.total_pop_value}</span>
          </div>
        </div>
      </div>
      `;
  }
}

// List widget
class WidgetList extends BaseWidget {
  set data(props) {
    this.list = props?.list || [];
    this.icon = props?.icon || "";
    this.text_size = props?.text_size || "default";
    this.tier = props?.tier || 1;
    this.spacing = props?.spacing || "default";
    this.render();
  }

  get template() {
    return /*html*/ `
        <div id="widget-list" class="${this.spacing}">
            ${this.list
              .map(
                (item) =>
                  /*html*/ `${this.createWidget(ELEM_LIST_ITEM, {
                    text: item,
                    icon: this.icon,
                    text_size: this.text_size,
                    tier: this.tier,
                  })}`
              )
              .join("")}
        </div>
        `;
  }
}

// Battery Bar Widget
class WidgetBatteryBar extends BaseWidget {
  set data(props) {
    this.title = props?.title || "";
    this.label_left = props?.label_left || "";
    this.label_right = props?.label_right || "";
    this.strength = props?.strength || 0;
    this.render();
  }

  get template() {
    return /*html*/ `
          <div id="wgt-battery-chart">
              <h3>${this.title}</h3>
              <div class="data">
                  <div class="widget-labels">
                      <span class="label-large">${this.label_left}</span>
                      <span class="label">${this.label_right}</span>
                  </div>
                  <div class="widget-visual">
                      <div class="bar">
                          <div class="inner-bar" style="width: ${this.strength}%"></div>
                      </div>
                  </div>
              </div>
          </div>
          `;
  }
}

// Product Grid
class WidgetProductGrid extends BaseWidget {
  connectedCallback() {
    this.type = "default";
    this.products = [{ name: "", icon: "" }];
  }

  set data(props) {
    this.products = props?.products || [{ name: "", icon: "" }];
    this.type = props?.type || "default";
    this.render();
  }

  get template() {
    return /*html*/ `
          <!-- ${this.styles} -->
          <div id="product-icon-widget" class="widget type-${this.type}">
              ${this.products
                .map(
                  (product) =>
                    /*html*/ `${this.createWidget(ELEM_PRODUCT_ICON, {
                      name: product.name,
                      icon: product.icon,
                      type: this.type,
                    })}`
                )
                .join("")}
          </div>
          `;
  }
}

// Target Demograohics wrapper
// ? This is a wrapper for widgets, I wonder if this should be a new category?
class WidgetTargetDemo extends BaseWidget {
  connectedCallback() {
    this.targetDemoData = [{ name: "", value: "", icon: "" }];
  }

  set data(props) {
    this.targetDemoData = props.targetDemoData || [
      { name: "", value: "", icon: "" },
    ];
    this.render();
  }

  get template() {
    return /*html*/ `
      <div id="wgt-target-demo">
        ${this.targetDemoData
          .map(
            (_data) =>
              /*html*/ `${this.createWidget(WGT_DATA_CALLOUT, {
                name: _data.name,
                value: _data.value,
                icon: _data.icon,
              })}`
          )
          .join("")}
      </div>
      `;
  }
}

class WidgetGeofenceLocations extends BaseWidget {
  connectedCallback() {
    this.icon = "";
    this.locations = [];
  }

  set data(props) {
    this.icon = props?.icon || "";
    this.locations = props?.locations || [];
    this.render();
  }

  get template() {
    return /*html*/ `
          <div id="wgt-geo-locations">
              ${this.createWidget(ELEM_GEOFENCE_COUNT, { text: this.locations.length })}
              ${this.createWidget(WGT_LIST, {
                icon: this.icon,
                list: this.locations,
                spacing: "small",
              })}
          </div>
          `;
  }
}

class WidgetNetworkGrid extends BaseWidget {
  connectedCallback() {
    this.networks = [{ title: "", img: "", value: 0 }];
    this.config = { show_strength: false, background: "default" };
  }

  set data(props) {
    this.networks = props?.networks || [
      {
        name: "",
        logo_path: "",
        value: 0,
        show_strength: false,
        background: "default",
      },
    ];
    this.config = props?.config || {
      show_strength: false,
      background: "default",
    };
    this.render();
  }

  get template() {
    return /*html*/ `
         <div id="wgt-network-grid">
         ${this.networks
           .map(
             (network) => /*html*/ `
              ${this.createWidget(ELEM_NETWORK_LOGO, {
                name: network.name,
                img: network.logo_path,
                value: network.value,
                show_strength: this.config.show_strength,
                background: this.config.background,
              })}
              `
           )
           .join("")}
          `;
  }
}

class WidgetTargetInterests extends BaseWidget {
  connectedCallback() {
    this.title = "";
    this.subheaders = [];
    this.icon = "";
  }

  set data(props) {
    this.title = props?.title || "";
    this.subheaders = props?.subheaders || [];
    this.icon = props?.icon || "";
    this.render();
  }

  get template() {
    return /*html*/ `
          <div id="widget-target-demo">
          <h3>${this.title}</h3>
          <ul>
          ${this.subheaders
            .map(
              (interest) => /*html*/ `
              ${this.createWidget(ELEM_LIST_ITEM, {
                icon: this.icon,
                text: interest,
              })}
              `
            )
            .join("")}
          </ul>
          </div>
          `;
  }
}

class WidgetTargetSegments extends BaseWidget {
  connectedCallback() {
    //implementation
    this.title = "";
    this.items = [];
  }

  // We will need this approach as the raw data cannot be passed as it, needs to be modified
  set data(props) {
    this.title = props?.title || "";
    this.list = props?.list || [];
    this.alignment = props?.alignment || "center";
    this.render();
  }

  get template() {
    return /*html*/ `
          <div id="target-segments" class="align-${this.alignment}">
              <h3>${this.title}</h3>
              ${this.list
                .map(
                  (item) => /*html*/ `
              ${this.createWidget(ELEM_TARGET_GROUP, {
                title: item.title,
                items: item.items,
                layout: this.alignment,
              })}
              `
                )
                .join("")}
          </div>
          `;
  }
}

class WidgetScheduleChart extends BaseWidget {
  set data(props) {
    this.icon = props?.icon || "";
    this.schedule_data_title_1 = props?.schedule_data_title_1 || "";
    this.schedule_data_title_2 = props?.schedule_data_title_2 || "";
    this.schedule_data_title_3 = props?.schedule_data_title_3 || "";
    this.schedule_data_title_4 = props?.schedule_data_title_4 || "";
    this.schedule_data_title_5 = props?.schedule_data_title_5 || "";
    this.schedule_data_1 = props?.schedule_data_1 || "";
    this.schedule_data_2 = props?.schedule_data_2 || "";
    this.schedule_data_3 = props?.schedule_data_3 || "";
    this.schedule_data_4 = props?.schedule_data_4 || "";
    this.schedule_data_5 = props?.schedule_data_5 || "";
    this.schedule = props?.schedule || [];
    this.days = props?.days || [];
    this.render();
  }

  get template() {
    return /*html*/ `
        <div id="wgt-schedule-chart">
          <div class="data-container">
            <!-- Render Schedule widget -->
            <!-- ${this.createWidget("elem-schedule-scale", { icon: this.icon })} -->
            <!-- Render Data widget -->
            ${this.createWidget(ELEM_SCHEDULE_DATA, {
              icon: this.icon,
              schedule_data_title_1: this.schedule_data_title_1,
              schedule_data_title_2: this.schedule_data_title_2,
              schedule_data_title_3: this.schedule_data_title_3,
              schedule_data_title_4: this.schedule_data_title_4,
              schedule_data_title_5: this.schedule_data_title_5,
              schedule_data_1: this.schedule_data_1,
              schedule_data_2: this.schedule_data_2,
              schedule_data_3: this.schedule_data_3,
              schedule_data_4: this.schedule_data_4,
              schedule_data_5: this.schedule_data_5,
              schedule_data_points: this.schedule_data_points || [
                { key: "key", value: "value" },
              ],
            })}
          </div>
          <!-- Render Table -->
          ${this.createWidget(ELEM_SCHEDULE_TABLE, {
            icon: this.icon,
            schedule: this.schedule,
            days: this.days,
          })}
        </div>
        `;
  }
}

class WidgetBubbleGroup extends BaseWidget {
  set data(props) {
    this.groups = props?.groups || [];
    this.render();
  }

  get template() {
    return /*html*/ `
        <div id="widget-callout-group">
        ${this.groups
          .map(
            (label) =>
              /*html*/ `${this.createWidget(ELEM_BUBBLE_CALLOUT, {
                label: label,
              })}`
          )
          .join("")}
        </div>
        `;
  }
}

class WidgetPrintTable extends BaseWidget {
  // render n number of print columns
  set data(props) {
    this.options = props?.options || [];
    this.render();
  }

  get template() {
    return /*html*/ `
      <div id="wgt-print-table">
      ${this.options
        .map((option) =>
          this.createWidget(ELEM_PRINT_COLUMN, {
            name: option?.name,
            total: option?.total,
            options: option?.options,
          })
        )
        .join("")}
       </div>
      `;
  }
}

class WidgetBudget extends BaseWidget {
  set data(props) {
    this.title = props?.title || "";
    this.big_text = props?.big_text || "";
    this.sub_text = props?.sub_text || "";
    this.variant = props?.variant || "default";
    this.render();
  }

  get template() {
    return /*html*/ `
          <div id="budget-widget" class="${this.variant}">
              <h3 class="title">${this.title}</h3>
              <div class="callout">${this.big_text}</div>    
              <div class="label">${this.sub_text}</div>    
          </div>
          `;
  }
}

class WidgetGeoData extends BaseWidget {
  set data(props) {
    this.title = props?.title || "";
    this.img = props?.img || "";
    this.variant = props?.variant || "default";
    this.population = props?.population || "default";
    this.income = props?.income || "default";
    this.age = props?.age || "default";
    this.home_value = props?.home_value || "default";
    this.commute = props?.commute || "default";
    this.render();
  }

  get template() {
    return /*html*/ `
          <div id="overview-widget" class="${this.variant} widget">
              <div class="content-left">
                  <img src="${this.img}">
              </div>
              <div class="content-right">
                  <h2 class="title">${this.title}</h2>
                  <div class="info">
                      <div>
                          <h3>Population:</h3>
                          <span class="label">${this.population}</span>
                      </div>
                      <div>
                          <h3>Avg. Income:</h3>
                          <span class="label">${this.income}</span>
                      </div>
                      <div>
                          <h3>Median Age:</h3>
                          <span class="label">${this.age}</span>
                      </div>
                      <div>
                          <h3>Avg. Home Value:</h3>
                          <span class="label">${this.home_value}</span>
                      </div>
                      <div>
                          <h3>Avg. Commute Time:</h3>
                          <span class="label">${this.commute}</span>
                      </div>
                  </div>
              </div>
          </div>
          `;
  }
}

class WidgetBudgetTable extends BaseWidget {
  set data(props) {
    this.header = props?.header || "";
    this.duration = props?.duration || "";
    this.details = props?.details || [];
    this.render();
  }

  get template() {
    return /*html*/ `
    <div id="wgt-budget-table">
      <div class="widget-header">
        <h2>${this.header}</h2>
        <span class="label">Term: ${this.duration} Months</span>
      </div>
      <div class="table-container">
        <!-- render widgets here -->
   
        ${this.details
          .map((item) =>
            this.createWidget(ELEM_BUDGET_ROW, {
              type: item?.type,
              name: item.name,
              details: item?.details,
              details_label: item?.details_label,
              budget_value: item.budget_value,
            })
          )
          .join("")}
      </div>
      <div class="signage-container">
        <div class="signage">
          <div class="form-field flights">
            <span class="label-small">Flight Dates | Start - End</span>
          </div>
          <div class="form-field partner">
            <span class="label-small">Partner Signature</span>
          </div>
          <div class="form-field date">
            <span class="label-small">Date</span>
          </div>
          <div class="form-field advertiser">
            <span class="label-small">Advertiser Signature</span>
          </div>
          <div class="form-field date">
            <span class="label-small">Date</span>
          </div>
        </div>
      </div>
    </div>
    `;
  }

  render() {
    this.innerHTML = this.template;
  }
}

/*---------------------------*/
/*---------------------------*/
/*----- PRESET WIDGETS ------*/
/*---------------------------*/
/*---------------------------*/
/**
 * These are widgets that use existing "base" widgets but for a more specifc purpose
 * Generally, they will have fixed values and configurations to make them easier to reuse
 * Also prevents developers from having to set lots of default's when using widgets
 */

class WidgetTargetGeoMap extends BaseWidget {
  set data(props) {
    this.img = props?.img || "";
    this.location = props?.location || "";
    this.zips = props?.zips || "";
    this.zip_count = props?.zip_count || "";
    this.render();
  }

  get template() {
    return /*html*/ `
      <div id="wgt-target-geo-map">
        ${this.createWidget(WGT_MAP, {
          img: this.img,
        })}
        <div class="geo-map-data">
          <span class="location label">${this.location}</span>
          <span class="divider label">|</span>
          <span class="zip-data label">
            <div class="zips">${this.zips}:</div>
            <div class="zip-count">${this.zip_count}</div>
          </span>
        </div>
      </div>`;
  }
}

class WidgetTargetGeoData extends BaseWidget {
  set data(props) {
    this.population_value = props?.population_value || "";
    this.population_icon = props?.population_icon || "";
    this.commute_value = props?.commute_value || "";
    this.commute_icon = props?.commute_icon || "";
    this.income_value = props?.income_value || "";
    this.income_icon = props?.income_icon || "";
    this.home_value_value = props?.home_value_value || "";
    this.home_value_icon = props?.home_value_icon || "";
    this.age_value = props?.age_value || "";
    this.age_icon = props?.age_icon || "";
    this.render();
  }

  get template() {
    return /*html*/ `
      <div id="wgt-target-geo-data">
      ${this.createWidget("wgt-data-callout", {
        alignment: "center",
        name: "Population",
        value: this.population_value,
        icon: this.population_icon,
      })}
      ${this.createWidget("wgt-data-callout", {
        alignment: "center",
        name: "Avg Commute",
        value: `${this.commute_value} minutes`,
        icon: this.commute_icon,
      })}
      ${this.createWidget("wgt-data-callout", {
        alignment: "center",
        name: "Avg Income",
        value: `$${this.income_value}`,
        icon: this.income_icon,
      })}
      ${this.createWidget("wgt-data-callout", {
        alignment: "center",
        name: "Avg Home Value",
        value: `$${this.home_value_value}`,
        icon: this.home_value_icon,
      })}
      ${this.createWidget("wgt-data-callout", {
        alignment: "center",
        name: "Median Age",
        value: `${this.age_value} years`,
        icon: this.age_icon,
      })}
      </div>`;
  }
}

//? This shows the value of preset widgets more, we can 'rename' keys and separate their use cases more. Case in point, as we are using the battery bar chart to show percentage we only need one data attribtue for both text and value rather than needing two separate data attribtues
class WidgetDemographicsChart extends BaseWidget {
  set data(props) {
    this.value = props?.value;
    this.render();
  }

  get template() {
    return this.createWidget("wgt-battery-chart", {
      strength: this.value,
      label_right: `${this.value}% of Population`,
    });
  }
}
class WidgetReachFrequency extends BaseWidget {
  set data(props) {
    this.reach = props?.reach || 0;
    this.frequency = props?.frequency || "";
    this.title = props?.title || "";
    this.render();
  }

  get template() {
    return this.createWidget("wgt-battery-chart", {
      title: this.title,
      strength: this.reach,
      label_left: `${this.reach}% Reach`,
      label_right: `${this.frequency}x Frequency`,
    });
  }
}

class WidgetSocialChart extends BaseWidget {
  set data(props) {
    this.title = props?.title || "";
    this.percent = props?.percent || 0;
    this.clicks = props?.clicks || "";
    this.term = props?.term || "Mo";
    this.render();
  }

  get template() {
    return this.createWidget("wgt-battery-chart", {
      title: this.title,
      strength: this.percent,
      label_left: `${this.percent}% Opportunity`,
      label_right: `${this.clicks} Clicks/${this.term}*`,
    });
  }
}

class _WidgetSocialChart extends WidgetBatteryBar {
  set data(props) {
    this.title = props?.title || "";
    this.label_left = props?.percent ? `${props?.percent}% Opportunity` : "";
    this.label_right = `${props?.clicks || 0} Clicks/${props?.term || "Mo"}*`;
    this.strength = props?.percent || 0;
    this.render();
  }
}

class WidgetSEMChart extends BaseWidget {
  set data(props) {
    this.title = props?.title || "";
    this.percent = props?.percent || 0;
    this.clicks = props?.clicks || "";
    this.term = props?.term || "Mo";
    this.render();
  }

  get template() {
    return this.createWidget("wgt-battery-chart", {
      title: this.title,
      strength: this.percent,
      label_left: `${this.percent}% Opportunity`,
      label_right: `${this.clicks} Clicks/${this.term}*`,
    });
  }
}

class WidgetEmailData extends BaseWidget {
  set data(props) {
    this.email_sends = props?.email_sends || "";
    this.inventory = props?.inventory || "";
    this.location = props?.location || "";
    this.render();
  }
  get template() {
    return /*html*/ `
    <div id="wgt-email-data">
      <div class="data">
          ${this.createWidget("wgt-data-callout", {
            name: "Email Sends",
            value: this.email_sends,
            icon: `
            <svg width="42" height="42" viewBox="0 0 42 42" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g id="at" clip-path="url(#clip0_4613_10166)">
            <path id="Vector" d="M21 0.65625C9.75688 0.65625 0.65625 9.75507 0.65625 21C0.65625 32.2431 9.75507 41.3438 21 41.3438C24.9501 41.3438 28.821 40.1838 32.1077 38.0442C33.0925 37.4031 33.3074 36.0518 32.5631 35.1426L31.7283 34.1227C31.099 33.354 29.991 33.1656 29.1547 33.702C26.7356 35.2535 23.8969 36.0938 21 36.0938C12.6773 36.0938 5.90625 29.3227 5.90625 21C5.90625 12.6773 12.6773 5.90625 21 5.90625C29.2145 5.90625 36.0938 10.6328 36.0938 19.0312C36.0938 22.2129 34.3635 25.5726 31.322 25.8967C29.8988 25.8594 29.9348 24.842 30.2165 23.4338L32.1388 13.499C32.3739 12.2842 31.4432 11.1562 30.206 11.1562H26.5161C26.2437 11.1562 25.9808 11.2565 25.7775 11.438C25.5743 11.6194 25.445 11.8693 25.4143 12.1401L25.4134 12.1476C24.2078 10.6792 22.0954 10.3614 20.4939 10.3614C14.3761 10.3614 9.1875 15.4665 9.1875 22.7858C9.1875 28.1427 12.205 31.4705 17.0625 31.4705C19.276 31.4705 21.7686 30.1877 23.2141 28.326C23.9952 31.1236 26.5456 31.1235 29.0145 31.1235C37.9484 31.1235 41.3438 25.2491 41.3438 19.0312C41.3438 7.84654 32.3222 0.65625 21 0.65625ZM19.2216 25.629C17.3965 25.629 16.2627 24.3474 16.2627 22.2845C16.2627 18.5937 18.7875 16.3185 21.0722 16.3185C22.9008 16.3185 23.9926 17.5687 23.9926 19.6629C23.9926 23.3593 21.2138 25.629 19.2216 25.629Z" fill="#0075A9"/>
            </g>
            <defs>
            <clipPath id="clip0_4613_10166">
            <rect width="42" height="42" fill="white"/>
            </clipPath>
            </defs>
            </svg>
            `,
          })}
          ${this.createWidget("wgt-data-callout", {
            name: "Available Inventory",
            value: this.inventory,
            icon: `
            <svg width="49" height="48" viewBox="0 0 49 48" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g id="envelope-open" clip-path="url(#clip0_4613_14277)">
            <g id="Union">
            <path d="M26.2764 21.0076L27.4247 22.1268C27.4997 22.2007 27.5819 22.287 27.669 22.3786C28.1532 22.8875 28.7912 23.5579 29.1989 23.1392L31.9589 21.1942V30.5209C31.9589 31.1914 32.5124 31.7308 33.2003 31.7308H41.2115C41.8994 31.7308 42.4529 31.1914 42.4529 30.5209V21.1942L45.2129 23.1392C45.6184 23.5514 46.2517 22.8897 46.735 22.3848C46.825 22.2907 46.9099 22.2021 46.987 22.1268L48.1353 21.0076C48.6216 20.5388 48.6216 19.7725 48.1353 19.2986L38.08 9.498C37.599 9.0241 36.8128 9.0241 36.3266 9.498L26.2764 19.2986C25.7902 19.7674 25.7902 20.5337 26.2764 21.0076Z" fill="#0075A9"/>
            <path d="M27.1618 24.5471C27.3441 24.6917 27.6624 24.9255 28.0858 25.0874C27.4181 25.5729 26.7016 26.0934 25.9316 26.6521C25.7094 26.8135 25.4497 27.0142 25.1627 27.236C23.7743 28.309 21.7491 29.8741 20.2647 29.8485C18.7803 29.8741 16.7551 28.309 15.3667 27.236C15.0797 27.0142 14.82 26.8135 14.5978 26.6521C5.10218 19.7612 3.73757 18.6933 1.70777 17.1048L1.7051 17.1027C1.5457 16.978 1.38219 16.85 1.21029 16.7157C0.7625 16.3606 0.5 15.8279 0.5 15.2565V13.7896C0.5 11.7437 2.15993 10.0838 4.20588 10.0838H32.9538L25.0001 17.8712C23.6998 19.1354 23.7128 21.1831 24.9973 22.44L26.1176 23.5364L26.1192 23.538C26.1259 23.5447 26.141 23.5608 26.1632 23.5844C26.3152 23.746 26.7958 24.2568 27.1618 24.5471Z" fill="#0075A9"/>
            <path d="M27.3908 28.6518C28.3267 27.9719 29.1836 27.3486 29.97 26.7758V30.383C29.97 32.1692 31.4456 33.6132 33.2709 33.6132L40.0294 33.6132V36.0249C40.0294 38.0709 38.3695 39.7308 36.3235 39.7308H4.20588C2.15993 39.7308 0.5 38.0709 0.5 36.0249V20.244C0.5 19.858 0.940074 19.6418 1.2489 19.8812C2.97831 21.2246 5.27132 22.9308 13.1463 28.6518C13.3933 28.832 13.666 29.0424 13.9605 29.2697C15.6086 30.5414 17.9394 32.3399 20.2647 32.3268C22.6008 32.3464 24.9702 30.5136 26.5925 29.2586C26.8843 29.033 27.1519 28.8259 27.3908 28.6518Z" fill="#0075A9"/>
            </g>
            </g>
            <defs>
            <clipPath id="clip0_4613_14277">
            <rect width="48" height="48" fill="white" transform="translate(0.5)"/>
            </clipPath>
            </defs>
            </svg>
            `,
          })}
        </div>
        <div class="location">
        ${this.createWidget("wgt-data-callout", {
          name: "Location",
          value: this.location,
          icon: `
          <svg width="50" height="50" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
          <g id="basic-icons / geo-fencing">
          <path id="icon_map _marker" fill-rule="evenodd" clip-rule="evenodd" d="M25.233 8C18.1867 8 12.4668 13.6451 12.4668 20.7526C12.4668 28.1932 18.8601 35.804 23.519 41.143C23.5326 41.1702 24.2876 42 25.2125 42H25.2874C26.2123 42 26.9537 41.1634 26.9809 41.143C31.6398 35.7904 38.0331 28.1796 38.0331 20.7526C38.0127 13.6451 32.2792 8 25.233 8ZM25.2329 26.8534C21.7166 26.8534 18.8397 23.99 18.8397 20.4737C18.8397 16.9574 21.703 14.094 25.2329 14.094C28.7492 14.094 31.6262 16.9574 31.6262 20.4737C31.6262 23.99 28.7628 26.8534 25.2329 26.8534Z" fill="#0075A9"/>
          </g>
          </svg>
          `,
        })}
        </div>
      </div>
    `;
  }
}

class WidgetEmailAudience extends BaseWidget {
  set data(props) {
    this.list = props?.list || [];
    this.title = props?.title || "";
    this.col = props?.col || 2;
    this.render();
  }

  get template() {
    return /*html*/ `
    <div id="wgt-email-audience" class="col-${this.col}">
      <span class="text">${this.title}</span>
      <div class="list">
      ${this.createWidget("wgt-list", {
        icon: `<svg width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g id="elements / list / elem-bullet-arrow">
        <path id="arrow" d="M1.17578 8.47479V1.7139C1.17578 0.948159 2.00121 0.466549 2.66784 0.843337L9.42873 4.66471C10.1472 5.0708 10.0923 6.12327 9.3354 6.45234L2.57451 9.39186C1.91406 9.67901 1.17578 9.19496 1.17578 8.47479Z" fill="#00A0DF"/>
        </g>
        </svg>`,
        list: this.list,
      })}
      </div>
    </div>
    `;
  }
}

class WidgetEmailIncludes extends BaseWidget {
  set data(props) {
    this.list = props?.list || [];
    this.col = props?.col || 1;
    this.render();
  }

  get template() {
    return /*html*/ `
    ${this.createWidget("wgt-email-audience", {
      title: "Includes",
      col: this.col,
      list: this.list,
      icon: `<svg width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g id="elements / list / elem-bullet-arrow">
      <path id="arrow" d="M1.17578 8.47479V1.7139C1.17578 0.948159 2.00121 0.466549 2.66784 0.843337L9.42873 4.66471C10.1472 5.0708 10.0923 6.12327 9.3354 6.45234L2.57451 9.39186C1.91406 9.67901 1.17578 9.19496 1.17578 8.47479Z" fill="#00A0DF"/>
      </g>
      </svg>`,
    })}`;
  }
}

class WidgetEmailExcludes extends BaseWidget {
  set data(props) {
    this.list = props?.list || [];
    this.col = props?.col || 1;
    this.render();
  }

  get template() {
    return /*html*/ `
    ${this.createWidget("wgt-email-audience", {
      title: "Excludes",
      col: this.col,
      list: this.list,
      icon: `<svg width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g id="elements / list / elem-bullet-arrow">
      <path id="arrow" d="M1.17578 8.47479V1.7139C1.17578 0.948159 2.00121 0.466549 2.66784 0.843337L9.42873 4.66471C10.1472 5.0708 10.0923 6.12327 9.3354 6.45234L2.57451 9.39186C1.91406 9.67901 1.17578 9.19496 1.17578 8.47479Z" fill="#00A0DF"/>
      </g>
      </svg>`,
    })}`;
  }
}

class WidgetCustomBullets extends BaseWidget {
  set data(props) {
    this.list = props?.list || [];
    this.text_size = props?.text_size || "default";
    this.icon = `<svg width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g id="elements / list / elem-bullet-arrow">
      <path id="arrow" d="M1.17578 8.47479V1.7139C1.17578 0.948159 2.00121 0.466549 2.66784 0.843337L9.42873 4.66471C10.1472 5.0708 10.0923 6.12327 9.3354 6.45234L2.57451 9.39186C1.91406 9.67901 1.17578 9.19496 1.17578 8.47479Z" fill="#00A0DF"/>
      </g>
      </svg>`;
    this.render();
  }

  get template() {
    return this.createWidget("wgt-list", {
      icon: this.icon,
      list: this.list,
      text_size: this.text_size,
    });
  }
}

class WidgetKeywordsAppendix extends BaseWidget {
  set data(props) {
    this.list = props?.list || [];
    this.render();
  }

  get template() {
    return this.createWidget("wgt-list", {
      list: this.list,
      icon: `<svg width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g id="elements / list / elem-bullet-arrow">
            <path id="arrow" d="M1.17578 8.47479V1.7139C1.17578 0.948159 2.00121 0.466549 2.66784 0.843337L9.42873 4.66471C10.1472 5.0708 10.0923 6.12327 9.3354 6.45234L2.57451 9.39186C1.91406 9.67901 1.17578 9.19496 1.17578 8.47479Z" fill="#00A0DF"/>
            </g>
            </svg>`,
    });
  }
}

class WidgetZipcodesAppendix extends BaseWidget {
  set data(props) {
    this.list = props?.list || [];
    this.render();
  }

  get template() {
    return this.createWidget("wgt-list", {
      list: this.list,
      icon: `<svg width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g id="elements / list / elem-bullet-arrow">
            <path id="arrow" d="M1.17578 8.47479V1.7139C1.17578 0.948159 2.00121 0.466549 2.66784 0.843337L9.42873 4.66471C10.1472 5.0708 10.0923 6.12327 9.3354 6.45234L2.57451 9.39186C1.91406 9.67901 1.17578 9.19496 1.17578 8.47479Z" fill="#00A0DF"/>
            </g>
            </svg>`,
    });
  }
}

class WidgetGeoAppendix extends BaseWidget {
  set data(props) {
    this.list = props?.list || [];
    this.render();
  }

  get template() {
    return this.createWidget("wgt-list", {
      list: this.list,
      icon: `<svg width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g id="elements / list / elem-bullet-arrow">
            <path id="arrow" d="M1.17578 8.47479V1.7139C1.17578 0.948159 2.00121 0.466549 2.66784 0.843337L9.42873 4.66471C10.1472 5.0708 10.0923 6.12327 9.3354 6.45234L2.57451 9.39186C1.91406 9.67901 1.17578 9.19496 1.17578 8.47479Z" fill="#00A0DF"/>
            </g>
            </svg>`,
    });
  }
}

class WidgetWebsitesAppendix extends BaseWidget {
  set data(props) {
    this.list = props?.list || [];
    this.render();
  }

  get template() {
    return this.createWidget("wgt-list", {
      list: this.list,
      icon: `<svg width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g id="elements / list / elem-bullet-arrow">
            <path id="arrow" d="M1.17578 8.47479V1.7139C1.17578 0.948159 2.00121 0.466549 2.66784 0.843337L9.42873 4.66471C10.1472 5.0708 10.0923 6.12327 9.3354 6.45234L2.57451 9.39186C1.91406 9.67901 1.17578 9.19496 1.17578 8.47479Z" fill="#00A0DF"/>
            </g>
            </svg>`,
    });
  }
}

class WidgetScheduleTV extends BaseWidget {
  set data(props) {
    this.icon = props?.icon || "";
    this.top_network = props?.top_network || "";
    this.networks = props?.networks || "";
    this.spots = props?.spots || "";
    this.budget = props?.budget || "";
    this.duration = props?.duration || "";
    this.schedule = props?.schedule || [];
    this.days = props?.days || [];
    this.render();
  }

  get template() {
    return /*html*/ `
        <div id="wgt-schedule-chart">
          <div class="data-container">
            <!-- Render Schedule widget -->
            <!-- ${this.createWidget("elem-schedule-scale", { icon: this.icon })} -->
            <!-- Render Data widget -->
            ${this.createWidget("elem-schedule-data", {
              icon: this.icon,
              schedule_data_title_1: "Top Network",
              schedule_data_title_2: "Networks",
              schedule_data_title_3: "Spots",
              schedule_data_title_4: "Budget",
              schedule_data_title_5: "Duration",
              schedule_data_1: this.top_network,
              schedule_data_2: this.networks,
              schedule_data_3: this.spots,
              schedule_data_4: `$${this.budget}`,
              schedule_data_5: this.duration,
            })}
            
            ${this.createWidget()}
          </div>
          <!-- Render Table -->
          ${this.createWidget("elem-schedule-table", {
            icon: this.icon,
            schedule: this.schedule,
            days: this.days,
          })}
        </div>
        `;
  }
}
class WidgetScheduleRadio extends BaseWidget {
  set data(props) {
    this.icon = props?.icon || "";
    this.top_station = props?.top_station || "";
    this.stations = props?.stations || "";
    this.spots = props?.spots || "";
    this.budget = props?.budget || "";
    this.duration = props?.duration || "";
    this.schedule = props?.schedule || [];
    this.days = props?.days || [];
    this.render();
  }

  get template() {
    return /*html*/ `
        <div id="wgt-schedule-chart">
          <div class="data-container">
            <!-- Render Schedule widget -->
            <!-- ${this.createWidget("elem-schedule-scale", { icon: this.icon })} -->
            <!-- Render Data widget -->
            ${this.createWidget("elem-schedule-data", {
              icon: this.icon,
              schedule_data_title_1: "Top Station",
              schedule_data_title_2: "Stations",
              schedule_data_title_3: "Spots",
              schedule_data_title_4: "Budget",
              schedule_data_title_5: "Duration",
              schedule_data_1: this.top_station,
              schedule_data_2: this.stations,
              schedule_data_3: this.spots,
              schedule_data_4: `$${this.budget}`,
              schedule_data_5: this.duration,
            })}
          </div>
          <!-- Render Table -->
          ${this.createWidget("elem-schedule-table", {
            icon: this.icon,
            schedule: this.schedule,
            days: this.days,
          })}
        </div>
        `;
  }
}

/**** DEFINE THE WEB COMPONENTS HERE ****/
// Define ELEMENTS first
customElements.define("elem-network-logo", ElementNetworkLogo);
customElements.define("elem-product-icon", ElementProductIcon);
customElements.define("elem-image", ElementImage);
customElements.define("wgt-image", WidgetImage);
customElements.define("elem-list-item", ElementListItem);
customElements.define("elem-geofence-count", ElementGeofenceCount);
customElements.define("elem-target-item", ElementTargetItem);
customElements.define("elem-schedule-data", ElementScheduleData);
//customElements.define("elem-schedule-scale", ElemScheduleScale);
customElements.define("elem-schedule-strength", ElementScheduleStrength);
customElements.define("elem-schedule-table", ElemScheduleTable);
customElements.define("elem-schedule-time-block", ElemScheduleTimeBlock);
customElements.define("elem-bubble-callout", ElemBubbleCallout);
customElements.define("elem-product-list", ElementProductList);
customElements.define("elem-print-block", ElementPrintBlock);
customElements.define("elem-print-column", ElementPrintColumn);
customElements.define("elem-target-group", ElementTargetGroup);
customElements.define("elem-budget-row", ElemBudgetRow);
//customElements.define('elem-product-label', ElementProductLabel);

// Define widgets
customElements.define("wgt-header", WidgetHeader);
customElements.define("wgt-footer", WidgetFooter);
customElements.define("wgt-data-callout", WidgetDataCallout);
customElements.define("wgt-list", WidgetList);
customElements.define("wgt-battery-chart", WidgetBatteryBar);
customElements.define("wgt-product-grid", WidgetProductGrid);
customElements.define("wgt-target-demo", WidgetTargetDemo);
customElements.define("wgt-geo-locations", WidgetGeofenceLocations);
customElements.define("wgt-network-grid", WidgetNetworkGrid);
customElements.define("wgt-target-interests", WidgetTargetInterests);
customElements.define("wgt-target-segments", WidgetTargetSegments);
customElements.define("wgt-schedule-chart", WidgetScheduleChart);
customElements.define("wgt-bubble-group", WidgetBubbleGroup);
customElements.define("wgt-print-table", WidgetPrintTable);
customElements.define("wgt-budget", WidgetBudget);
customElements.define("wgt-geo-data", WidgetGeoData);
customElements.define("wgt-map", WidgetGeoMap);
customElements.define("wgt-population-data", WidgetPopulationData);
customElements.define("wgt-email-audience", WidgetEmailAudience);
customElements.define("wgt-budget-table", WidgetBudgetTable);
// Define preset widgets
customElements.define("wgt-target-geo-data", WidgetTargetGeoData);
customElements.define("wgt-target-geo-map", WidgetTargetGeoMap);
customElements.define("wgt-demographics-chart", WidgetDemographicsChart);
customElements.define("wgt-reach-frequency", WidgetReachFrequency);
customElements.define("wgt-social-chart", WidgetSocialChart);
//customElements.define("xwgt-social-chart", _WidgetSocialChart);
customElements.define("wgt-sem-chart", WidgetSEMChart);
customElements.define("wgt-email-data", WidgetEmailData);
customElements.define("wgt-email-includes", WidgetEmailIncludes);
customElements.define("wgt-email-excludes", WidgetEmailExcludes);
customElements.define("wgt-custom-bullets", WidgetCustomBullets);
customElements.define("wgt-keywords-appendix", WidgetKeywordsAppendix);
customElements.define("wgt-zipcodes-appendix", WidgetZipcodesAppendix);
customElements.define("wgt-geo-appendix", WidgetGeoAppendix);
customElements.define("wgt-websites-appendix", WidgetWebsitesAppendix);
customElements.define("wgt-schedule-tv", WidgetScheduleTV);
customElements.define("wgt-schedule-radio", WidgetScheduleRadio);

/*---------------------------*/
/*---------------------------*/
/*----- CONSTANTS ------*/
/*---------------------------*/
/*---------------------------*/

// Element Constants
const ELEM_NETWORK_LOGO = "elem-network-logo";
const ELEM_PRODUCT_ICON = "elem-product-icon";
const ELEM_IMAGE = "elem-image";
const WGT_IMAGE = "wgt-image";
const ELEM_LIST_ITEM = "elem-list-item";
const ELEM_GEOFENCE_COUNT = "elem-geofence-count";
const ELEM_TARGET_ITEM = "elem-target-item";
const ELEM_SCHEDULE_DATA = "elem-schedule-data";
const ELEM_SCHEDULE_STRENGTH = "elem-schedule-strength";
const ELEM_SCHEDULE_TABLE = "elem-schedule-table";
const ELEM_SCHEDULE_TIME_BLOCK = "elem-schedule-time-block";
const ELEM_BUBBLE_CALLOUT = "elem-bubble-callout";
const ELEM_PRODUCT_LIST = "elem-product-list";
const ELEM_PRINT_BLOCK = "elem-print-block";
const ELEM_PRINT_COLUMN = "elem-print-column";
const ELEM_TARGET_GROUP = "elem-target-group";
const ELEM_BUDGET_ROW = "elem-budget-row";

// Widget Constants
const WGT_HEADER = "wgt-header";
const WGT_FOOTER = "wgt-footer";
const WGT_DATA_CALLOUT = "wgt-data-callout";
const WGT_LIST = "wgt-list";
const WGT_BATTERY_CHART = "wgt-battery-chart";
const WGT_PRODUCT_GRID = "wgt-product-grid";
const WGT_TARGET_DEMO = "wgt-target-demo";
const WGT_GEO_LOCATIONS = "wgt-geo-locations";
const WGT_NETWORK_GRID = "wgt-network-grid";
const WGT_TARGET_INTERESTS = "wgt-target-interests";
const WGT_TARGET_SEGMENTS = "wgt-target-segments";
const WGT_SCHEDULE_CHART = "wgt-schedule-chart";
const WGT_BUBBLE_GROUP = "wgt-bubble-group";
const WGT_PRINT_TABLE = "wgt-print-table";
const WGT_BUDGET = "wgt-budget";
const WGT_GEO_DATA = "wgt-geo-data";
const WGT_MAP = "wgt-map";
const WGT_POPULATION_DATA = "wgt-population-data";
const WGT_EMAIL_AUDIENCE = "wgt-email-audience";
const WGT_BUDGET_TABLE = "wgt-budget-table";

// Preset Widget Constants
const WGT_TARGET_GEO_DATA = "wgt-target-geo-data";
const WGT_TARGET_GEO_MAP = "wgt-target-geo-map";
const WGT_DEMOGRAPHICS_CHART = "wgt-demographics-chart";
const WGT_REACH_FREQUENCY = "wgt-reach-frequency";
const WGT_SOCIAL_CHART = "wgt-social-chart";
const WGT_SEM_CHART = "wgt-sem-chart";
const WGT_EMAIL_DATA = "wgt-email-data";
const WGT_EMAIL_INCLUDES = "wgt-email-includes";
const WGT_EMAIL_EXCLUDES = "wgt-email-excludes";
const WGT_CUSTOM_BULLETS = "wgt-custom-bullets";
const WGT_KEYWORDS_APPENDIX = "wgt-keywords-appendix";
const WGT_ZIPCODES_APPENDIX = "wgt-zipcodes-appendix";
const WGT_GEO_APPENDIX = "wgt-geo-appendix";
const WGT_WEBSITES_APPENDIX = "wgt-websites-appendix";
const WGT_SCHEDULE_TV = "wgt-schedule-tv";
const WGT_SCHEDULE_RADIO = "wgt-schedule-radio";
