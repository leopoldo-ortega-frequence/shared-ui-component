import "../rfp/css/common.css";
import "../rfp/css/components.css";

import { withClassName } from "./decorators";

export const decorators = [withClassName];

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  options: {
    storySort: {
      method: "alphabetical",
      order: [
        "F15.1",
        [
          "Base",
          [
            "Widgets",
            [
              "wgt-header",
              "wgt-footer",
              "wgt-list",
              "wgt-data-callout",
              "wgt-battery-chart",
              "wgt-map",
            ],
          ],
          // This list should just automarically be sorted alphabetically!
          "Cover", [
            "Slide-default",
            "Slide-Alt",
          ],
          "Overview",
          "Product Overview",
          "Target Geography",
          "Audience Interests",
          "Target Audience",
          "Target Demographics",
          "Geofence",
          "CTV OTT",
          "Reach & Frequency",
          "Social",
          "Email", 
          [
            "Slide-default",
            "Widget",
            [
              "wgt-email-data",
              "wgt-email-audience",
              "wgt-email-includes",
              "wgt-email-excludes",
            ],
          ],
          "Addressable",
          "SEM",
          "Print", [
            "Slide-default",
            "Widget", [
              "wgt-print-table", [
                "Elements", [
                  "elem-print-column",
                  "elem-print-block"
                ]
              ]
            ]
          ],
          "Budget",
          "Radio",
          "Television",
        ],
        "Base",
        [
          "Base",
          [
            "Widgets",
            [
              "wgt-header",
              "wgt-footer",
              "wgt-list",
              "wgt-data-callout",
              "wgt-battery-chart",
              "wgt-map",
            ],
          ],
          // This list should just automarically be sorted alphabetically!
          "Cover", [
            "Slide-default",
            "Slide-Alt",
          ],
          "Overview",
          "Product Overview",
          "Target Geography",
          "Audience Interests",
          "Target Audience",
          "Target Demographics",
          "Geofence",
          "CTV OTT",
          "Reach & Frequency",
          "Social",
          "Email", 
          [
            "Slide-default",
            "Widget",
            [
              "wgt-email-data",
              "wgt-email-audience",
              "wgt-email-includes",
              "wgt-email-excludes",
            ],
          ],
          "Addressable",
          "SEM",
          "Print", [
            "Slide-default",
            "Widget", [
              "wgt-print-table", [
                "Elements", [
                  "elem-print-column",
                  "elem-print-block"
                ]
              ]
            ]
          ],
          "Budget",
          "Radio",
          "Television",
        ],
      ],
    },
  },
};
