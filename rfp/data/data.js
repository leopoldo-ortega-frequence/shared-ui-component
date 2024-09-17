//! We want to use this as an in-between for raw API data and values we want to use

import { DEMO_ICONS, POPULATION_ICONS } from "../js/assets";

// const rendered = Mustache.render(`
// [
//   {{#pricing}}
//   "{{name}}",
//   {{/pricing}}
// ];
// `,
// RFP_DATA)

// console.log(eval(rendered));

import { API } from "./rawData";
import { RFP_DATA } from "./formatted_rfp_data"; // this is actual FP data

// Email slide
export const emailLists = {
  "includes & excludes": {
    available: API.email.availableInventory,
    "email sends": API.email.emailSends,
    location: API.email.location,
    include: API.email.include,
    exclude: API.email.exclude,
  },
  "includes only": {
    available: API.email.availableInventory,
    "email sends": API.email.emailSends,
    location: API.email.location,
    include: API.email.include,
  },
  "excludes only": {
    available: API.email.availableInventory,
    "email sends": API.email.emailSends,
    location: API.email.location,
    exclude: API.email.exclude,
  },
};

export const targetGeo = {
  default: {
    map: API.geo_map,
    population: API.demographics.insights.population,
    avg_commute: `${API.demographics.insights.avg_commute}`,
    avg_income: `${API.demographics.insights.avg_income}`,
    avg_home_val: `${API.demographics.insights.avg_home_val}`,
    median_age: `${API.demographics.insights.median_age}`,
    address: API.address,
  },
};

export const demographicsData = {
  default: {
    demo_info: [
      {
        name: "Age",
        value: API.demographics.selected_demos.age,
        icon: DEMO_ICONS.age,
      },
      {
        name: "Income",
        value: API.demographics.selected_demos.income,
        icon: DEMO_ICONS.income,
      },
      {
        name: "Gender",
        value: API.demographics.selected_demos.gender,
        icon: DEMO_ICONS.gender,
      },
      {
        name: "Family",
        value: API.demographics.selected_demos.family,
        icon: DEMO_ICONS.family,
      },
      {
        name: "Education",
        value: API.demographics.selected_demos.educations,
        icon: DEMO_ICONS.education,
      },
    ],
    demo_values: [
      {
        name: "Age",
        value: API.demographics.selected_demo_values.age,
      },
      {
        name: "Income",
        value: API.demographics.selected_demo_values.income,
      },
      {
        name: "Gender",
        value: API.demographics.selected_demo_values.gender,
      },
      {
        name: "Family",
        value: API.demographics.selected_demo_values.family,
      },
      {
        name: "Education",
        value: API.demographics.selected_demo_values.education,
      },
    ],
  },
  "max value": {
    demo_info: [
      {
        name: "Age",
        value: "All",
        icon: DEMO_ICONS.age,
      },
      {
        name: "Income",
        value: "All",
        icon: DEMO_ICONS.income,
      },
      {
        name: "Gender",
        value: "All",
        icon: DEMO_ICONS.gender,
      },
      {
        name: "Family",
        value: "All",
        icon: DEMO_ICONS.family,
      },
      {
        name: "Education",
        value: "All",
        icon: DEMO_ICONS.education,
      },
    ],
    demo_values: [
      {
        name: "Age",
        value: 100,
      },
      {
        name: "Income",
        value: 100,
      },
      {
        name: "Gender",
        value: 100,
      },
      {
        name: "Family",
        value: 100,
      },
      {
        name: "Education",
        value: 100,
      },
    ],
  },
};

export const productVariaions = {
  few: RFP_DATA.pricing.slice(0, 3),
  default: RFP_DATA.pricing.slice(0, 10),
  many: RFP_DATA.pricing.slice(0, 20),
  max: RFP_DATA.pricing,
};

export const geofenceLocations = {
  "few locations": RFP_DATA.geofence_sb.slice(0, 2),
  default: RFP_DATA.geofence_sb.slice(0, 4),
  "many locations": RFP_DATA.geofence_sb,
};

export const reachFreqData = {
  "one option": {
    options: API.reach_freq.slice(0, 1),
    population: [
      {
        name: "Target Population",
        value: API.demographics.insights.target_population,
        icon: POPULATION_ICONS.target_pop,
      },
      {
        name: "Total Population",
        value: API.demographics.insights.population,
        icon: POPULATION_ICONS.total_pop,
      },
    ],
  },
  "two options": {
    options: API.reach_freq.slice(0, 2),
    population: [
      {
        name: "Target Population",
        value: API.demographics.insights.target_population,
        icon: POPULATION_ICONS.target_pop,
      },
      {
        name: "Total Population",
        value: API.demographics.insights.population,
        icon: POPULATION_ICONS.total_pop,
      },
    ],
  },
  "three options": {
    options: API.reach_freq.slice(0, 3),
    population: [
      {
        name: "Target Population",
        value: API.demographics.insights.target_population,
        icon: POPULATION_ICONS.target_pop,
      },
      {
        name: "Total Population",
        value: API.demographics.insights.population,
        icon: POPULATION_ICONS.total_pop,
      },
    ],
  },
};

export const networksData = {
  default: API.ctv_ott_networks,
  few: API.ctv_ott_networks.slice(0, 8),
};

export const targetAudienceData = {
  many: {
    interests: API.audience_interest,
    demographics: API.demographics.selected_demos_alt,
  },
  default: {
    interests: API.audience_interest.slice(0, 2),
    demographics: API.demographics.selected_demos_alt,
  },
  few: {
    interests: API.audience_interest.slice(0, 1),
    demographics: API.demographics.selected_demos_alt,
  },
};

export const addressableData = {
  demographics: {
    details: {
      title: "Demographic",
      subheader:
        "Ensure your message reaches the right households with our custom audience data.",
      image: "demographics",
    },
    items: {
      default: API.addressable
        .filter((addr) => addr?.is_demographic)
        // .sort((a, b) => {
        //   const parentA = a.parent.split("Demographic > ")[1] || a.parent;
        //   const parentB = b.parent.split("Demographic > ")[1] || b.parent;

        //   // Sorting alphabetically
        //   return parentA.localeCompare(parentB);
        // })
        .slice(0, 3),
      many: API.addressable
        .filter((addr) => addr?.is_demographic)
        // .sort((a, b) => {
        //   const parentA = a.parent.split("Demographic > ")[1] || a.parent;
        //   const parentB = b.parent.split("Demographic > ")[1] || b.parent;

        //   // Sorting alphabetically
        //   return parentA.localeCompare(parentB);
        // })
        .slice(0, 5),
    },
  },
  interests: {
    details: {
      title: "Interest",
      subheader:
        "Elevate Your Message with Interest-Driven Addressable Targeting",
      image: "interest",
    },
    items: {
      default: API.addressable
        .filter((addr) => addr?.is_interest)
        // .sort((a, b) => {
        //   const parentA = a.parent.split("Interest > ")[1] || a.parent;
        //   const parentB = b.parent.split("Interest > ")[1] || b.parent;

        //   // Sorting alphabetically
        //   return parentA.localeCompare(parentB);
        // })
        .slice(0, 2),
      many: API.addressable
        .filter((addr) => addr?.is_interest)
        // .sort((a, b) => {
        //   const parentA = a.parent.split("Interest > ")[1] || a.parent;
        //   const parentB = b.parent.split("Interest > ")[1] || b.parent;

        //   // Sorting alphabetically
        //   return parentA.localeCompare(parentB);
        // })
        .slice(0, 5),
    },
  },
  purchase_intent: {
    details: {
      title: "Purchase Intent",
      subheader: "Select your audience segments with addressable targeting.",
      image: "purchase",
    },
    items: {
      default: API.addressable
        .filter((addr) => addr?.is_purchase_intent)
        // .sort((a, b) => {
        //   const parentA = a.parent.split("Purchase Intent > ")[1] || a.parent;
        //   const parentB = b.parent.split("Purchase Intent > ")[1] || b.parent;

        //   // Sorting alphabetically
        //   return parentA.localeCompare(parentB);
        // })
        .slice(1, 3),
      many: API.addressable
        .filter((addr) => addr?.is_purchase_intent)
        // .sort((a, b) => {
        //   const parentA = a.parent.split("Purchase Intent > ")[1] || a.parent;
        //   const parentB = b.parent.split("Purchase Intent > ")[1] || b.parent;

        //   // Sorting alphabetically
        //   return parentA.localeCompare(parentB);
        // })
        .slice(0, 5),
    },
  },
};

export const SEMBudgetData = {
  "One Option": API.sem_clicks.slice(0, 1),
  "Two Options": API.sem_clicks.slice(0, 2),
  "Three Options": API.sem_clicks.slice(0, 3),
};
export const SocialBudgetData = {
  "One Option": API.social_clicks.slice(0, 1),
  "Two Options": API.social_clicks.slice(0, 2),
  "Three Options": API.social_clicks.slice(0, 3),
};

export const SEMKeywordsData = {
  Few: API.keywords.slice(0, 3),
  Default: API.keywords.slice(0, 10),
  Many: API.keywords,
};

export const tvScheduleData = {
  few: {
    num_tv_stations: RFP_DATA.num_tv_xml_stations,
    num_tv_spots: RFP_DATA.num_tv_xml_spots,
    total_tv_budget: RFP_DATA.formatted_total_tv_xml_budget,
    total_tv_duration: RFP_DATA.total_tv_xml_duration_string,
    // schedule: RFP_DATA.tv_xml_station_schedule_map,
    days: ["Mon", "Tue", "Wed", "Thur", "Fri", "Sat", "Sun"],
    stations: RFP_DATA.tv_xml_stations.slice(0, 2),
  },
  default: {
    num_tv_stations: 4,
    num_tv_spots: RFP_DATA.num_tv_xml_spots,
    total_tv_budget: "12,000",
    total_tv_duration: RFP_DATA.total_tv_xml_duration_string,
    days: ["Mon", "Tue", "Wed", "Thur", "Fri", "Sat", "Sun"],
    stations: RFP_DATA.tv_xml_stations.slice(0, 4),
  },
  many: {
    num_tv_stations: 8,
    num_tv_spots: RFP_DATA.num_tv_xml_spots,
    total_tv_budget: "24,000",
    total_tv_duration: RFP_DATA.total_tv_xml_duration_string,
    schedule: RFP_DATA.tv_xml_station_schedule_map,
    days: ["Mon", "Tue", "Wed", "Thur", "Fri", "Sat", "Sun"],
    stations: RFP_DATA.tv_xml_stations.slice(0, 8),
  },
};

export const radioSchedulData = {
  // num_radio_stations: RFP_DATA.num_radio_stations,
  // num_radio_spots: RFP_DATA.num_radio_spots,
  // total_radio_budget: RFP_DATA.formatted_total_radio_budget,
  // total_radio_duration: RFP_DATA.total_radio_duration_string,
  // schedule: RFP_DATA.radio_station_schedule_map,
  // days: ["Mon", "Tue", "Wed", "Thur", "Fri", "Sat", "Sun"],
  // stations: {
  //   many: RFP_DATA.radio_stations,
  //   several: RFP_DATA.radio_stations.slice(0, 4),
  //   few: RFP_DATA.radio_stations.slice(0, 2),
  // },

  few: {
    num_radio_stations: RFP_DATA.num_radio_stations,
    num_radio_spots: RFP_DATA.num_radio_spots,
    total_radio_budget: RFP_DATA.formatted_total_radio_budget,
    total_radio_duration: RFP_DATA.total_radio_duration_string,
    // schedule: RFP_DATtion_schedule_map,
    days: ["Mon", "Tue", "Wed", "Thur", "Fri", "Sat", "Sun"],
    stations: RFP_DATA.radio_stations.slice(0, 2),
  },
  default: {
    num_radio_stations: 4,
    num_radio_spots: RFP_DATA.num_radio_spots,
    total_radio_budget: "12,000",
    total_radio_duration: RFP_DATA.total_radio_duration_string,
    days: ["Mon", "Tue", "Wed", "Thur", "Fri", "Sat", "Sun"],
    stations: RFP_DATA.radio_stations.slice(0, 4),
  },
  many: {
    num_radio_stations: 8,
    num_radio_spots: RFP_DATA.num_radio_spots,
    total_radio_budget: "24,000",
    total_radio_duration: RFP_DATA.total_radio_duration_string,
    days: ["Mon", "Tue", "Wed", "Thur", "Fri", "Sat", "Sun"],
    stations: RFP_DATA.radio_stations.slice(0, 8),
  },
};

export const audienceInterestData = {
  few: RFP_DATA.iab_categories.slice(0, 2),
  default: RFP_DATA.iab_categories.slice(0, 5),
  many: RFP_DATA.iab_categories,
};

//? Why am I duplicating logic here?
export const printPubData = {
  default: {
    "few": RFP_DATA.pricing.filter((item) =>
      item.hasOwnProperty("publications_pagewise")
    )[0]["publications_pagewise"][0],
    "default": RFP_DATA.pricing.filter((item) =>
      item.hasOwnProperty("publications_pagewise")
    )[0]["publications_pagewise"][0],
    "many": RFP_DATA.pricing.filter((item) =>
      item.hasOwnProperty("publications_pagewise")
    )[0]["publications_pagewise"][0],
  },
  long: {
    "few": RFP_DATA.sb_publications_pagewise,
    "default": RFP_DATA.sb_publications_pagewise,
    "many": RFP_DATA.sb_publications_pagewise,
  },

};

export const overviewData = {
  demographics: {
    population:
      RFP_DATA.region_overview.demographics.region_population_formatted,
    "avg income": RFP_DATA.region_overview.demographics.income,
    "median age": RFP_DATA.region_overview.demographics.MedianAge,
    "avg home values": RFP_DATA.region_overview.demographics.HouseValue,
    "avg commute": RFP_DATA.region_overview.commute_times.region,
  },
  budgets: {
    "one budget": RFP_DATA.options.slice(0, 1),
    "two budgets": RFP_DATA.options.slice(0, 2),
    "three budgets": RFP_DATA.options,
  },
  products: {
    few: RFP_DATA.pricing.slice(0, 3),
    default: RFP_DATA.pricing.slice(0, 10),
    many: RFP_DATA.pricing.slice(0, 20),
    max: RFP_DATA.pricing,
  },
  map: RFP_DATA.geo_overview_link,
};

// Appendix Keywords
export const appendixKeywordsData = {
  few: RFP_DATA.sem_keywords_chunk.slice(0, 9),
  default: RFP_DATA.sem_keywords_chunk.slice(0, 30 ),
  max: RFP_DATA.sem_keywords_chunk,
};

export const appendixZipsData = {
  few: RFP_DATA.zip_codes_chunk.slice(0, 33),
  default: RFP_DATA.zip_codes_chunk.slice(0, 57),
  max: RFP_DATA.zip_codes_chunk,
};

export const appendixWebsitesData = {
  few: RFP_DATA.categorized_sitelist_v2.pages
    .flatMap((page) => page.columns)
    .flatMap((column) => column.sites)
    .map((site) => site.url)
    .slice(0, 10),
  default: RFP_DATA.categorized_sitelist_v2.pages
    .flatMap((page) => page.columns)
    .flatMap((column) => column.sites)
    .map((site) => site.url)
    .slice(0, 31),
  max: RFP_DATA.categorized_sitelist_v2.pages
    .flatMap((page) => page.columns)
    .flatMap((column) => column.sites)
    .map((site) => site.url),
};

export const appendixGeofenceData = {
  few: RFP_DATA.geofence_sb.slice(0, 4),
  default: RFP_DATA.geofence_sb.slice(0, 7),
  max: RFP_DATA.geofence_sb,
};

/*---------------------------*/
/*---------------------------*/
/*--- SB Only Sample Data ---*/
/*---------------------------*/
/*---------------------------*/

/**
 * We can't awlways show the RFP data due to many variations needed
 * This will be used as the placeholder
 */

export const genericList = [
  "list-item",
  "list-item",
  "list-item",
  "list-item",
  "list-item",
  "list-item",
  "list-item",
  "list-item",
  "list-item",
];

export const targetGeoMaps = {
  default: RFP_DATA.geo_overview_link,
  "far locations": "/assets/geo_map_wide.png",
  canada: "/assets/canada.png",
};

export const targetGeoLocations = {
  default: {
    name: "San Diego CCD, California - San Diego CCD, California",
    zips_abrev: RFP_DATA.international_strategy_config.postal_code_abbreviation,
    map: RFP_DATA.geo_overview_link,
    num_zips: 200,
    details: {
      population_value: RFP_DATA.region_overview.formatted_demo_population,
      commute_value: RFP_DATA.region_overview.commute_times.region,
      income_value: RFP_DATA.region_overview.demographics.income,
      home_value: RFP_DATA.region_overview.demographics.HouseValue,
      age_value: RFP_DATA.region_overview.demographics.MedianAge,
    },
  },
  "far locations": {
    name: "Big Apple - New York, New Yorka",
    zips_abrev: RFP_DATA.international_strategy_config.postal_code_abbreviation,
    map: "/assets/geo_map_wide.png",
    num_zips: 250,
    details: {
      population_value: "1,234,563",
      commute_value: 23.6,
      income_value: "156,789",
      home_value: "789,345",
      age_value: 31,
    },
  },
  canada: {
    name: "Vancouver, BC - Vancouver, BC",
    zips_abrev: "FSA",
    map: "/assets/canada.png",
    num_zips: 57,
    details: {
      population_value: "634,563",
      commute_value: 13.6,
      income_value: "126,789",
      home_value: "989,345",
      age_value: 33,
    },
  },
};

export const targetAudienceInterests = {
  few: ["Long Sub Interest Name Here", "Long Sub Interest Name Here"],
  default: [
    "Long Sub Interest Name Here",
    "Long Sub Interest Name Here",
    "Long Sub Interest Name Here Going to Two Lines",
    "Long Sub Interest Name Here",
  ],
  many: [
    "Long Sub Interest Name Here",
    "Long Sub Interest Name Here",
    "Long Sub Interest Name Here Going to Two Lines",
    "Long Sub Interest Name Here",
    "Long Sub Interest Name Here",
    "Long Sub Interest Name Here",
    "Long Sub Interest Name Here Going to Two Lines",
    "Long Sub Interest Name Here",
    "Long Sub Interest Name Here Going to Two Lines",
    "Long Sub Interest Name Here",
  ],
  none: [],
};

export const demographicsSelection = {
  few: {
    age: "18-24",
    income: "Under $50k",
    gender: "Female",
    family: "No Kids",
    education: "College",
  },
  many: {
    age: "Under 18, 18-24, 25-34, 35-44, 45-64, 65+",
    income: "Under $50k, $100k-$150k, $150k+",
    gender: "Female",
    family: "Has Kids",
    education: "No College, Grad School",
  },
  all: {
    age: "All",
    income: "All",
    gender: "All",
    family: "All",
    education: "All",
  },
};

export const demographicsSelectionCA = {
  few: {
    age: "18-24",
    income: "Under $50k",
    gender: "Female",
    family: "No Kids",
    education: "Bachelor Degree",
  },
  many: {
    age: "Under 18, 18-24, 25-34, 35-44, 45-64, 65+",
    income: "Under $50k, $100k-$150k, $150k+",
    gender: "Female",
    family: "Has Kids",
    education:
      "High School Education or Below, Postsecondary Certificate or Diploma, Grad Degree or Higher",
  },
  all: {
    age: "All",
    income: "All",
    gender: "All",
    family: "All",
    education: "All",
  },
};

// handler for USA or Canada options, kind of anniying though
export const regionDemographics = {
  USA: demographicsSelection,
  Canada: demographicsSelectionCA,
};

export const dummRegionDemoValues = {
  few: [
    {
      name: "Age",
      value: 15,
    },
    {
      name: "Income",
      value: 15,
    },
    {
      name: "Gender",
      value: 45,
    },
    {
      name: "Family",
      value: 45,
    },
    {
      name: "Education",
      value: 15,
    },
  ],
  many: [
    {
      name: "Age",
      value: 75,
    },
    {
      name: "Income",
      value: 75,
    },
    {
      name: "Gender",
      value: 45,
    },
    {
      name: "Family",
      value: 45,
    },
    {
      name: "Education",
      value: 75,
    },
  ],
  all: [
    {
      name: "Age",
      value: 100,
    },
    {
      name: "Income",
      value: 100,
    },
    {
      name: "Gender",
      value: 100,
    },
    {
      name: "Family",
      value: 100,
    },
    {
      name: "Education",
      value: 100,
    },
  ],
};

export const dummyAddressableElementData = {
  title: "#group-label",
  items: {
    default: [
      "item-default",
      "item-default",
      "item-extra-extra-extra-long-text",
      "item-sm",
    ],
    many: [
      "item-default",
      "item-extra-extra-extra-long-text",
      "item-extra-extra-extra-long-text",
      "item-sm",
      "item-default",
      "item-default",
      "item-extra-extra-extra-long-text",
      "item-sm",
      "item-default",
      "item-default",
      "item-extra-extra-extra-long-text",
    ],
  },
};

// function sb_budget_helper(options, recurring_options, non_recurring_options) {
//   return  [
//     ...options.filter((item) => item.term_based).slice(0, recurring_options),
//     {
//       name: "Recurring Total",
//       formatted_budget: options
//         .filter((item) => item.term_based)
//         .slice(0, recurring_options)
//         .reduce((total, item) => {
//           return total + parseFloat(item.formatted_budget.replace(/,/g, ""));
//         }, 0)
//         .toLocaleString(), // Convert number back to string with commas
//       term: "Mo",
//       is_total: true,
//     },
//     ...options.filter((item) => !item.term_based).slice(0, non_recurring_options),
//     {
//       name: "Grand Total",
//       formatted_budget: (
//         options
//           .filter((item) => item.term_based)
//           .slice(0, recurring_options)
//           .reduce((total, item) => {
//             return (
//               total + parseFloat(item.formatted_budget.replace(/,/g, "") * 6)
//             );
//           }, 0) +
//         options
//           .filter((item) => !item.term_based)
//           .slice(0, non_recurring_options)
//           .reduce((total, item) => {
//             return total + parseFloat(item.formatted_budget.replace(/,/g, ""));
//           }, 0)
//       ).toLocaleString(), // Convert number back to string with commas
//       term: "Mo",
//       is_total: true,
//     },
//   ]
// }

function sb_budget_helper(options, recurring_options, non_recurring_options) {
  const formatBudget = (budget) => parseFloat(budget.replace(/,/g, ""));

  const calculateTotal = (items) =>
    items.reduce(
      (total, item) => total + formatBudget(item.formatted_budget),
      0
    );

  const getTermBasedItems = (limit) =>
    options.filter((item) => item.term_based).slice(0, limit);

  const getNonTermBasedItems = (limit) =>
    options.filter((item) => !item.term_based).slice(0, limit);

  const recurringItems = getTermBasedItems(recurring_options);
  const nonRecurringItems = getNonTermBasedItems(non_recurring_options);

  const recurringTotal = calculateTotal(recurringItems).toLocaleString();
  const grandTotal = (
    calculateTotal(recurringItems) * 6 +
    calculateTotal(nonRecurringItems)
  ).toLocaleString();

  // Build the result array
  let result = [...recurringItems];

  // Only add "Recurring Total" if there are recurring items
  if (recurringItems.length > 0) {
    result.push({
      name: "Recurring Total",
      formatted_budget: recurringTotal,
      term: "Mo",
      is_total: true,
    });
  }

  result = [
    ...result,
    ...nonRecurringItems,
    {
      name: "Grand Total",
      formatted_budget: grandTotal,
      term: "Mo",
      is_total: true,
    },
  ];

  return result;
}

export const budgetData = {
  default: {
    recurring: sb_budget_helper(RFP_DATA.sb_budget, 12, 5),
    non_recurring: sb_budget_helper(RFP_DATA.sb_budget, 12, 5),
  },
  many: {
    recurring: [
      sb_budget_helper(RFP_DATA.sb_budget, 15, 11).slice(0, 21),
      sb_budget_helper(RFP_DATA.sb_budget, 15, 11).slice(21, 30),
    ],
    non_recurring: [
      sb_budget_helper(RFP_DATA.sb_budget, 15, 11).slice(0, 24),
      sb_budget_helper(RFP_DATA.sb_budget, 15, 11).slice(23, 30),
    ],
  },
};

export const dummyBudgetData = {
  default: RFP_DATA["budget table_sb"].data["Recurring & Grand Total"],
  "no recurring": RFP_DATA["budget table_sb"].data["Grand Total Only"],
  stacked: RFP_DATA["budget table_sb"].data["Stacked"],
};

export const dummmyEmailPlaceholder = {
  default: [
    "audience-type",
    "audience-type",
    "audience-type",
    "audience-type",
    "audience-type",
    "audience-type",
    "audience-type",
    "audience-type",
    "audience-type",
  ],
  many: [
    "audience-type",
    "audience-type",
    "audience-type",
    "audience-type",
    "audience-type",
    "audience-type",
    "audience-type",
    "audience-type",
    "audience-type",
    "audience-type",
    "audience-type",
    "audience-type",
    "audience-type",
    "audience-type",
    "audience-type",
    "audience-type",
    "audience-type",
    "audience-type",
    "audience-type",
    "audience-type",
  ],
};

export const dummyCustomFullbleedImage = {
  placeholder: "/assets/fulbleed-placeholder.png",
  "digital campaigns": "/assets/static-lift.jpg",
};

const dummyKewordAppendxList = [
  "some-other-keyword-here",
  "short-key",
  "some-keyword-here",
  "some-very-long-keyword-meant-to-wrap-to-the-other-line",
  "some-keyword-here",
  "some-other-keyword-here",
  "short-key",
  "some-keyword-here",
  "some-very-long-keyword-meant-to-wrap-to-the-other-line",
  "some-keyword-here",
  "some-other-keyword-here",
  "short-key",
  "some-keyword-here",
  "some-very-long-keyword-meant-to-wrap-to-the-other-line",
  "some-keyword-here",
  "some-other-keyword-here",
  "short-key",
  "some-keyword-here",
  "some-very-long-keyword-meant-to-wrap-to-the-other-line",
  "some-keyword-here",
  "some-other-keyword-here",
  "short-key",
  "some-keyword-here",
  "some-very-long-keyword-meant-to-wrap-to-the-other-line",
  "some-keyword-here",
  "some-other-keyword-here",
  "short-key",
  "some-keyword-here",
  "some-very-long-keyword-meant-to-wrap-to-the-other-line",
  "some-keyword-here",
  "some-other-keyword-here",
  "short-key",
  "some-keyword-here",
  "some-very-long-keyword-meant-to-wrap-to-the-other-line",
  "some-keyword-here",
  "some-other-keyword-here",
  "short-key",
  "some-keyword-here",
  "some-very-long-keyword-meant-to-wrap-to-the-other-line",
  "some-keyword-here",
  "some-other-keyword-here",
  "short-key",
  "some-keyword-here",
  "some-very-long-keyword-meant-to-wrap-to-the-other-line",
  "some-keyword-here",
  "some-other-keyword-here",
  "short-key",
  "some-keyword-here",
  "some-very-long-keyword-meant-to-wrap-to-the-other-line",
  "some-keyword-here",
  "some-other-keyword-here",
  "short-key",
  "some-keyword-here",
  "some-very-long-keyword-meant-to-wrap-to-the-other-line",
  "some-keyword-here",
  "some-other-keyword-here",
  "short-key",
  "some-keyword-here",
  "some-very-long-keyword-meant-to-wrap-to-the-other-line",
  "some-keyword-here",
  "some-other-keyword-here",
  "short-key",
  "some-keyword-here",
  "some-very-long-keyword-meant-to-wrap-to-the-other-line",
  "some-keyword-here",
  "some-other-keyword-here",
  "short-key",
  "some-keyword-here",
  "some-very-long-keyword-meant-to-wrap-to-the-other-line",
  "some-keyword-here",
];

const dummyZipcodeList = [
  "#####",
  "#####",
  "#####",
  "#####",
  "#####",
  "#####",
  "#####",
  "#####",
  "#####",
  "#####",
  "#####",
  "#####",
  "#####",
  "#####",
  "#####",
  "#####",
  "#####",
  "#####",
  "#####",
  "#####",
  "#####",
  "#####",
  "#####",
  "#####",
  "#####",
  "#####",
  "#####",
  "#####",
  "#####",
  "#####",
  "#####",
  "#####",
  "#####",
  "#####",
  "#####",
  "#####",
  "#####",
  "#####",
  "#####",
  "#####",
  "#####",
  "#####",
  "#####",
  "#####",
  "#####",
  "#####",
  "#####",
  "#####",
  "#####",
  "#####",
  "#####",
  "#####",
  "#####",
  "#####",
  "#####",
  "#####",
  "#####",
  "#####",
  "#####",
  "#####",
  "#####",
  "#####",
  "#####",
  "#####",
  "#####",
  "#####",
  "#####",
  "#####",
  "#####",
  "#####",
  "#####",
  "#####",
  "#####",
  "#####",
  "#####",
  "#####",
  "#####",
  "#####",
  "#####",
  "#####",
  "#####",
  "#####",
  "#####",
  "#####",
  "#####",
  "#####",
  "#####",
  "#####",
  "#####",
  "#####",
  "#####",
  "#####",
  "#####",
  "#####",
  "#####",
  "#####",
  "#####",
  "#####",
  "#####",
  "#####",
  "#####",
  "#####",
  "#####",
  "#####",
  "#####",
  "#####",
  "#####",
  "#####",
  "#####",
  "#####",
  "#####",
  "#####",
  "#####",
  "#####",
  "#####",
  "#####",
  "#####",
  "#####",
  "#####",
  "#####",
  "#####",
  "#####",
  "#####",
  "#####",
  "#####",
  "#####",
  "#####",
  "#####",
  "#####",
  "#####",
  "#####",
  "#####",
  "#####",
  "#####",
  "#####",
  "#####",
  "#####",
  "#####",
  "#####",
  "#####",
  "#####",
  "#####",
  "#####",
  "#####",
  "#####",
  "#####",
  "#####",
  "#####",
  "#####",
  "#####",
  "#####",
  "#####",
  "#####",
  "#####",
  "#####",
  "#####",
  "#####",
  "#####",
  "#####",
  "#####",
  "#####",
  "#####",
  "#####",
  "#####",
  "#####",
  "#####",
  "#####",
  "#####",
  "#####",
  "#####",
  "#####",
  "#####",
  "#####",
  "#####",
  "#####",
  "#####",
  "#####",
  "#####",
  "#####",
  "#####",
  "#####",
  "#####",
  "#####",
  "#####",
  "#####",
  "#####",
  "#####",
  "#####",
  "#####",
  "#####",
  "#####",
  "#####",
  "#####",
  "#####",
  "#####",
  "#####",
  "#####",
  "#####",
  "#####",
  "#####",
  "#####",
  "#####",
  "#####",
  "#####",
  "#####",
  "#####",
  "#####",
  "#####",
  "#####",
  "#####",
];

const dummyWebsites = [
  "www.some-website-goes-here.com",
  "www.some-website-goes-here.com",
  "www.some-website-goes-here.com",
  "www.some-website-goes-here.com",
  "www.some-website-goes-here.com",
  "www.some-website-goes-here.com",
  "www.some-website-goes-here.com",
  "www.some-website-goes-here.com",
  "www.some-website-goes-here.com",
  "www.some-website-goes-here.com",
  "www.some-website-goes-here.com",
  "www.some-website-goes-here.com",
  "www.some-website-goes-here.com",
  "www.some-website-goes-here.com",
  "www.some-website-goes-here.com",
  "www.some-website-goes-here.com",
  "www.some-website-goes-here.com",
  "www.some-website-goes-here.com",
  "www.some-website-goes-here.com",
  "www.some-website-goes-here.com",
  "www.some-website-goes-here.com",
  "www.some-website-goes-here.com",
  "www.some-website-goes-here.com",
  "www.some-website-goes-here.com",
  "www.some-website-goes-here.com",
  "www.some-website-goes-here.com",
  "www.some-website-goes-here.com",
  "www.some-website-goes-here.com",
  "www.some-website-goes-here.com",
  "www.some-website-goes-here.com",
  "www.some-website-goes-here.com",
  "www.some-website-goes-here.com",
  "www.some-website-goes-here.com",
  "www.some-website-goes-here.com",
  "www.some-website-goes-here.com",
  "www.some-website-goes-here.com",
  "www.some-website-goes-here.com",
  "www.some-website-goes-here.com",
  "www.some-website-goes-here.com",
  "www.some-website-goes-here.com",
  "www.some-website-goes-here.com",
  "www.some-website-goes-here.com",
  "www.some-website-goes-here.com",
  "www.some-website-goes-here.com",
  "www.some-website-goes-here.com",
  "www.some-website-goes-here.com",
  "www.some-website-goes-here.com",
  "www.some-website-goes-here.com",
  "www.some-website-goes-here.com",
  "www.some-website-goes-here.com",
  "www.some-website-goes-here.com",
  "www.some-website-goes-here.com",
  "www.some-website-goes-here.com",
  "www.some-website-goes-here.com",
  "www.some-website-goes-here.com",
  "www.some-website-goes-here.com",
  "www.some-website-goes-here.com",
  "www.some-website-goes-here.com",
  "www.some-website-goes-here.com",
  "www.some-website-goes-here.com",
  "www.some-website-goes-here.com",
  "www.some-website-goes-here.com",
  "www.some-website-goes-here.com",
  "www.some-website-goes-here.com",
  "www.some-website-goes-here.com",
  "www.some-website-goes-here.com",
  "www.some-website-goes-here.com",
  "www.some-website-goes-here.com",
  "www.some-website-goes-here.com",
  "www.some-website-goes-here.com",
  "www.some-website-goes-here.com",
  "www.some-website-goes-here.com",
  "www.some-website-goes-here.com",
  "www.some-website-goes-here.com",
  "www.some-website-goes-here.com",
  "www.some-website-goes-here.com",
  "www.some-website-goes-here.com",
  "www.some-website-goes-here.com",
  "www.some-website-goes-here.com",
  "www.some-website-goes-here.com",
  "www.some-website-goes-here.com",
  "www.some-website-goes-here.com",
  "www.some-website-goes-here.com",
  "www.some-website-goes-here.com",
  "www.some-website-goes-here.com",
  "www.some-website-goes-here.com",
  "www.some-website-goes-here.com",
  "www.some-website-goes-here.com",
  "www.some-website-goes-here.com",
  "www.some-website-goes-here.com",
  "www.some-website-goes-here.com",
  "www.some-website-goes-here.com",
  "www.some-website-goes-here.com",
  "www.some-website-goes-here.com",
  "www.some-website-goes-here.com",
  "www.some-website-goes-here.com",
  "www.some-website-goes-here.com",
  "www.some-website-goes-here.com",
  "www.some-website-goes-here.com",
  "www.some-website-goes-here.com",
  "www.some-website-goes-here.com",
  "www.some-website-goes-here.com",
  "www.some-website-goes-here.com",
  "www.some-website-goes-here.com",
  "www.some-website-goes-here.com",
  "www.some-website-goes-here.com",
  "www.some-website-goes-here.com",
  "www.some-website-goes-here.com",
  "www.some-website-goes-here.com",
  "www.some-website-goes-here.com",
  "www.some-website-goes-here.com",
  "www.some-website-goes-here.com",
  "www.some-website-goes-here.com",
  "www.some-website-goes-here.com",
  "www.some-website-goes-here.com",
  "www.some-website-goes-here.com",
  "www.some-website-goes-here.com",
  "www.some-website-goes-here.com",
  "www.some-website-goes-here.com",
  "www.some-website-goes-here.com",
];

export const dummyKewordAppendxData = {
  default: dummyKewordAppendxList.slice(0, 24),
  few: dummyKewordAppendxList.slice(0, 5),
  max: dummyKewordAppendxList,
};

export const dummyZipcodesAppendixData = {
  default: dummyZipcodeList.slice(0, 70),
  few: dummyZipcodeList.slice(0, 5),
  max: dummyZipcodeList,
};

export const dummyWebsitesAppendixData = {
  default: dummyWebsites.slice(0, 40),
  few: dummyWebsites.slice(0, 5),
  max: dummyWebsites,
};

// Television and radio dummy data
export const dummyScheduleHeatMap = {
  max: [
    {
      monday: {
        multiplier: 37,
        heat_group: "5",
      },
      label: "12-5A",
      tuesday: {
        multiplier: 37,
        heat_group: "5",
      },
      wednesday: {
        multiplier: 37,
        heat_group: "5",
      },
      thursday: {
        multiplier: 37,
        heat_group: "5",
      },
      friday: {
        multiplier: 37,
        heat_group: "5",
      },
      saturday: {
        multiplier: 0,
        heat_group: "5",
      },
      sunday: {
        multiplier: 0,
        heat_group: "5",
      },
    },
    {
      monday: {
        multiplier: 1.3333333333333333,
        heat_group: "5",
      },
      label: "5A",
      tuesday: {
        multiplier: 1.3333333333333333,
        heat_group: "5",
      },
      wednesday: {
        multiplier: 1.3333333333333333,
        heat_group: "5",
      },
      thursday: {
        multiplier: 1.3333333333333333,
        heat_group: "5",
      },
      friday: {
        multiplier: 1.3333333333333333,
        heat_group: "5",
      },
      saturday: {
        multiplier: 0,
        heat_group: "5",
      },
      sunday: {
        multiplier: 0,
        heat_group: "5",
      },
    },
    {
      monday: {
        multiplier: 10.333333333333334,
        heat_group: "5",
      },
      label: "6A",
      tuesday: {
        multiplier: 10.333333333333334,
        heat_group: "5",
      },
      wednesday: {
        multiplier: 10.333333333333334,
        heat_group: "5",
      },
      thursday: {
        multiplier: 10.333333333333334,
        heat_group: "5",
      },
      friday: {
        multiplier: 10.333333333333334,
        heat_group: "5",
      },
      saturday: {
        multiplier: 0,
        heat_group: "5",
      },
      sunday: {
        multiplier: 0,
        heat_group: "5",
      },
    },
    {
      monday: {
        multiplier: 10.4,
        heat_group: "5",
      },
      label: "7A",
      tuesday: {
        multiplier: 10.4,
        heat_group: "5",
      },
      wednesday: {
        multiplier: 10.4,
        heat_group: "5",
      },
      thursday: {
        multiplier: 10.4,
        heat_group: "5",
      },
      friday: {
        multiplier: 10.4,
        heat_group: "5",
      },
      saturday: {
        multiplier: 0,
        heat_group: "5",
      },
      sunday: {
        multiplier: 0,
        heat_group: "5",
      },
    },
    {
      monday: {
        multiplier: 7.933333333333334,
        heat_group: "5",
      },
      label: "8A",
      tuesday: {
        multiplier: 7.933333333333334,
        heat_group: "5",
      },
      wednesday: {
        multiplier: 7.933333333333334,
        heat_group: "5",
      },
      thursday: {
        multiplier: 7.933333333333334,
        heat_group: "5",
      },
      friday: {
        multiplier: 7.933333333333334,
        heat_group: "5",
      },
      saturday: {
        multiplier: 0,
        heat_group: "5",
      },
      sunday: {
        multiplier: 38.5,
        heat_group: "5",
      },
    },
    {
      monday: {
        multiplier: 7.4,
        heat_group: "5",
      },
      label: "9A",
      tuesday: {
        multiplier: 7.4,
        heat_group: "5",
      },
      wednesday: {
        multiplier: 7.4,
        heat_group: "5",
      },
      thursday: {
        multiplier: 7.4,
        heat_group: "5",
      },
      friday: {
        multiplier: 7.4,
        heat_group: "5",
      },
      saturday: {
        multiplier: 0,
        heat_group: "5",
      },
      sunday: {
        multiplier: 39,
        heat_group: "5",
      },
    },
    {
      monday: {
        multiplier: 7.4,
        heat_group: "5",
      },
      label: "10A",
      tuesday: {
        multiplier: 7.4,
        heat_group: "5",
      },
      wednesday: {
        multiplier: 7.4,
        heat_group: "5",
      },
      thursday: {
        multiplier: 7.4,
        heat_group: "5",
      },
      friday: {
        multiplier: 7.4,
        heat_group: "5",
      },
      saturday: {
        multiplier: 0,
        heat_group: "5",
      },
      sunday: {
        multiplier: 0,
        heat_group: "5",
      },
    },
    {
      monday: {
        multiplier: 7.4,
        heat_group: "5",
      },
      label: "11A",
      tuesday: {
        multiplier: 7.4,
        heat_group: "5",
      },
      wednesday: {
        multiplier: 7.4,
        heat_group: "5",
      },
      thursday: {
        multiplier: 7.4,
        heat_group: "5",
      },
      friday: {
        multiplier: 7.4,
        heat_group: "5",
      },
      saturday: {
        multiplier: 0,
        heat_group: "5",
      },
      sunday: {
        multiplier: 0,
        heat_group: "5",
      },
    },
    {
      monday: {
        multiplier: 13.3,
        heat_group: "5",
      },
      label: "12P",
      tuesday: {
        multiplier: 13.3,
        heat_group: "5",
      },
      wednesday: {
        multiplier: 13.3,
        heat_group: "5",
      },
      thursday: {
        multiplier: 13.3,
        heat_group: "5",
      },
      friday: {
        multiplier: 13.3,
        heat_group: "5",
      },
      saturday: {
        multiplier: 0,
        heat_group: "5",
      },
      sunday: {
        multiplier: 0,
        heat_group: "5",
      },
    },
    {
      monday: {
        multiplier: 7.4,
        heat_group: "5",
      },
      label: "1P",
      tuesday: {
        multiplier: 7.4,
        heat_group: "5",
      },
      wednesday: {
        multiplier: 7.4,
        heat_group: "5",
      },
      thursday: {
        multiplier: 7.4,
        heat_group: "5",
      },
      friday: {
        multiplier: 7.4,
        heat_group: "5",
      },
      saturday: {
        multiplier: 0,
        heat_group: "5",
      },
      sunday: {
        multiplier: 0,
        heat_group: "5",
      },
    },
    {
      monday: {
        multiplier: 7.4,
        heat_group: "5",
      },
      label: "2P",
      tuesday: {
        multiplier: 7.4,
        heat_group: "5",
      },
      wednesday: {
        multiplier: 7.4,
        heat_group: "5",
      },
      thursday: {
        multiplier: 7.4,
        heat_group: "5",
      },
      friday: {
        multiplier: 7.4,
        heat_group: "5",
      },
      saturday: {
        multiplier: 0,
        heat_group: "5",
      },
      sunday: {
        multiplier: 0,
        heat_group: "5",
      },
    },
    {
      monday: {
        multiplier: 7.4,
        heat_group: "5",
      },
      label: "3P",
      tuesday: {
        multiplier: 7.4,
        heat_group: "5",
      },
      wednesday: {
        multiplier: 7.4,
        heat_group: "5",
      },
      thursday: {
        multiplier: 7.4,
        heat_group: "5",
      },
      friday: {
        multiplier: 7.4,
        heat_group: "5",
      },
      saturday: {
        multiplier: 0,
        heat_group: "5",
      },
      sunday: {
        multiplier: 0,
        heat_group: "5",
      },
    },
    {
      monday: {
        multiplier: 7.4,
        heat_group: "5",
      },
      label: "4P",
      tuesday: {
        multiplier: 7.4,
        heat_group: "5",
      },
      wednesday: {
        multiplier: 7.4,
        heat_group: "5",
      },
      thursday: {
        multiplier: 7.4,
        heat_group: "5",
      },
      friday: {
        multiplier: 7.4,
        heat_group: "5",
      },
      saturday: {
        multiplier: 37.5,
        heat_group: "5",
      },
      sunday: {
        multiplier: 39.5,
        heat_group: "5",
      },
    },
    {
      monday: {
        multiplier: 8.316666666666666,
        heat_group: "5",
      },
      label: "5P",
      tuesday: {
        multiplier: 8.316666666666666,
        heat_group: "5",
      },
      wednesday: {
        multiplier: 8.316666666666666,
        heat_group: "5",
      },
      thursday: {
        multiplier: 8.316666666666666,
        heat_group: "5",
      },
      friday: {
        multiplier: 8.316666666666666,
        heat_group: "5",
      },
      saturday: {
        multiplier: 38,
        heat_group: "5",
      },
      sunday: {
        multiplier: 0,
        heat_group: "5",
      },
    },
    {
      monday: {
        multiplier: 8.366666666666667,
        heat_group: "5",
      },
      label: "6P",
      tuesday: {
        multiplier: 8.366666666666667,
        heat_group: "5",
      },
      wednesday: {
        multiplier: 8.366666666666667,
        heat_group: "5",
      },
      thursday: {
        multiplier: 8.366666666666667,
        heat_group: "5",
      },
      friday: {
        multiplier: 8.366666666666667,
        heat_group: "5",
      },
      saturday: {
        multiplier: 0,
        heat_group: "5",
      },
      sunday: {
        multiplier: 0,
        heat_group: "5",
      },
    },
    {
      monday: {
        multiplier: 7.4,
        heat_group: "5",
      },
      label: "7P",
      tuesday: {
        multiplier: 7.4,
        heat_group: "5",
      },
      wednesday: {
        multiplier: 7.4,
        heat_group: "5",
      },
      thursday: {
        multiplier: 7.4,
        heat_group: "5",
      },
      friday: {
        multiplier: 7.4,
        heat_group: "5",
      },
      saturday: {
        multiplier: 0,
        heat_group: "5",
      },
      sunday: {
        multiplier: 0,
        heat_group: "5",
      },
    },
    {
      monday: {
        multiplier: 7.4,
        heat_group: "5",
      },
      label: "8P",
      tuesday: {
        multiplier: 7.4,
        heat_group: "5",
      },
      wednesday: {
        multiplier: 7.4,
        heat_group: "5",
      },
      thursday: {
        multiplier: 7.4,
        heat_group: "5",
      },
      friday: {
        multiplier: 7.4,
        heat_group: "5",
      },
      saturday: {
        multiplier: 0,
        heat_group: "5",
      },
      sunday: {
        multiplier: 0,
        heat_group: "5",
      },
    },
    {
      monday: {
        multiplier: 7.4,
        heat_group: "5",
      },
      label: "9P",
      tuesday: {
        multiplier: 7.4,
        heat_group: "5",
      },
      wednesday: {
        multiplier: 7.4,
        heat_group: "5",
      },
      thursday: {
        multiplier: 7.4,
        heat_group: "5",
      },
      friday: {
        multiplier: 7.4,
        heat_group: "5",
      },
      saturday: {
        multiplier: 0,
        heat_group: "5",
      },
      sunday: {
        multiplier: 0,
        heat_group: "5",
      },
    },
    {
      monday: {
        multiplier: 8.466666666666667,
        heat_group: "5",
      },
      label: "10P",
      tuesday: {
        multiplier: 8.466666666666667,
        heat_group: "5",
      },
      wednesday: {
        multiplier: 8.466666666666667,
        heat_group: "5",
      },
      thursday: {
        multiplier: 8.466666666666667,
        heat_group: "5",
      },
      friday: {
        multiplier: 8.466666666666667,
        heat_group: "5",
      },
      saturday: {
        multiplier: 0,
        heat_group: "5",
      },
      sunday: {
        multiplier: 0,
        heat_group: "5",
      },
    },
    {
      monday: {
        multiplier: 7.4,
        heat_group: "5",
      },
      label: "11P",
      tuesday: {
        multiplier: 7.4,
        heat_group: "5",
      },
      wednesday: {
        multiplier: 7.4,
        heat_group: "5",
      },
      thursday: {
        multiplier: 7.4,
        heat_group: "5",
      },
      friday: {
        multiplier: 7.4,
        heat_group: "5",
      },
      saturday: {
        multiplier: 0,
        heat_group: "5",
      },
      sunday: {
        multiplier: 0,
        heat_group: "5",
      },
    },
  ],
  default: [
    {
      monday: {
        multiplier: 37,
        heat_group: "1",
      },
      label: "12-5A",
      tuesday: {
        multiplier: 37,
        heat_group: "1",
      },
      wednesday: {
        multiplier: 37,
        heat_group: "1",
      },
      thursday: {
        multiplier: 37,
        heat_group: "1",
      },
      friday: {
        multiplier: 37,
        heat_group: "1",
      },
      saturday: {
        multiplier: 0,
        heat_group: "1",
      },
      sunday: {
        multiplier: 0,
        heat_group: "1",
      },
    },
    {
      monday: {
        multiplier: 1.3333333333333333,
        heat_group: "1",
      },
      label: "5A",
      tuesday: {
        multiplier: 1.3333333333333333,
        heat_group: "1",
      },
      wednesday: {
        multiplier: 1.3333333333333333,
        heat_group: "1",
      },
      thursday: {
        multiplier: 1.3333333333333333,
        heat_group: "1",
      },
      friday: {
        multiplier: 1.3333333333333333,
        heat_group: "1",
      },
      saturday: {
        multiplier: 0,
        heat_group: "1",
      },
      sunday: {
        multiplier: 0,
        heat_group: "1",
      },
    },
    {
      monday: {
        multiplier: 10.333333333333334,
        heat_group: "2",
      },
      label: "6A",
      tuesday: {
        multiplier: 10.333333333333334,
        heat_group: "2",
      },
      wednesday: {
        multiplier: 10.333333333333334,
        heat_group: "2",
      },
      thursday: {
        multiplier: 10.333333333333334,
        heat_group: "2",
      },
      friday: {
        multiplier: 10.333333333333334,
        heat_group: "2",
      },
      saturday: {
        multiplier: 0,
        heat_group: "2",
      },
      sunday: {
        multiplier: 0,
        heat_group: "2",
      },
    },
    {
      monday: {
        multiplier: 10.4,
        heat_group: "2",
      },
      label: "7A",
      tuesday: {
        multiplier: 10.4,
        heat_group: "2",
      },
      wednesday: {
        multiplier: 10.4,
        heat_group: "2",
      },
      thursday: {
        multiplier: 10.4,
        heat_group: "2",
      },
      friday: {
        multiplier: 10.4,
        heat_group: "2",
      },
      saturday: {
        multiplier: 0,
        heat_group: "2",
      },
      sunday: {
        multiplier: 0,
        heat_group: "2",
      },
    },
    {
      monday: {
        multiplier: 7.933333333333334,
        heat_group: "3",
      },
      label: "8A",
      tuesday: {
        multiplier: 7.933333333333334,
        heat_group: "3",
      },
      wednesday: {
        multiplier: 7.933333333333334,
        heat_group: "3",
      },
      thursday: {
        multiplier: 7.933333333333334,
        heat_group: "3",
      },
      friday: {
        multiplier: 7.933333333333334,
        heat_group: "3",
      },
      saturday: {
        multiplier: 0,
        heat_group: "3",
      },
      sunday: {
        multiplier: 38.5,
        heat_group: "3",
      },
    },
    {
      monday: {
        multiplier: 7.4,
        heat_group: "3",
      },
      label: "9A",
      tuesday: {
        multiplier: 7.4,
        heat_group: "3",
      },
      wednesday: {
        multiplier: 7.4,
        heat_group: "3",
      },
      thursday: {
        multiplier: 7.4,
        heat_group: "3",
      },
      friday: {
        multiplier: 7.4,
        heat_group: "3",
      },
      saturday: {
        multiplier: 0,
        heat_group: "3",
      },
      sunday: {
        multiplier: 39,
        heat_group: "3",
      },
    },
    {
      monday: {
        multiplier: 7.4,
        heat_group: "4",
      },
      label: "10A",
      tuesday: {
        multiplier: 7.4,
        heat_group: "4",
      },
      wednesday: {
        multiplier: 7.4,
        heat_group: "4",
      },
      thursday: {
        multiplier: 7.4,
        heat_group: "4",
      },
      friday: {
        multiplier: 7.4,
        heat_group: "4",
      },
      saturday: {
        multiplier: 0,
        heat_group: "4",
      },
      sunday: {
        multiplier: 0,
        heat_group: "4",
      },
    },
    {
      monday: {
        multiplier: 7.4,
        heat_group: "4",
      },
      label: "11A",
      tuesday: {
        multiplier: 7.4,
        heat_group: "4",
      },
      wednesday: {
        multiplier: 7.4,
        heat_group: "4",
      },
      thursday: {
        multiplier: 7.4,
        heat_group: "4",
      },
      friday: {
        multiplier: 7.4,
        heat_group: "4",
      },
      saturday: {
        multiplier: 0,
        heat_group: "4",
      },
      sunday: {
        multiplier: 0,
        heat_group: "4",
      },
    },
    {
      monday: {
        multiplier: 13.3,
        heat_group: "5",
      },
      label: "12P",
      tuesday: {
        multiplier: 13.3,
        heat_group: "5",
      },
      wednesday: {
        multiplier: 13.3,
        heat_group: "5",
      },
      thursday: {
        multiplier: 13.3,
        heat_group: "5",
      },
      friday: {
        multiplier: 13.3,
        heat_group: "5",
      },
      saturday: {
        multiplier: 0,
        heat_group: "5",
      },
      sunday: {
        multiplier: 0,
        heat_group: "5",
      },
    },
    {
      monday: {
        multiplier: 7.4,
        heat_group: "5",
      },
      label: "1P",
      tuesday: {
        multiplier: 7.4,
        heat_group: "5",
      },
      wednesday: {
        multiplier: 7.4,
        heat_group: "5",
      },
      thursday: {
        multiplier: 7.4,
        heat_group: "5",
      },
      friday: {
        multiplier: 7.4,
        heat_group: "5",
      },
      saturday: {
        multiplier: 0,
        heat_group: "5",
      },
      sunday: {
        multiplier: 0,
        heat_group: "5",
      },
    },
    {
      monday: {
        multiplier: 7.4,
        heat_group: "5",
      },
      label: "2P",
      tuesday: {
        multiplier: 7.4,
        heat_group: "5",
      },
      wednesday: {
        multiplier: 7.4,
        heat_group: "5",
      },
      thursday: {
        multiplier: 7.4,
        heat_group: "5",
      },
      friday: {
        multiplier: 7.4,
        heat_group: "5",
      },
      saturday: {
        multiplier: 0,
        heat_group: "5",
      },
      sunday: {
        multiplier: 0,
        heat_group: "5",
      },
    },
    {
      monday: {
        multiplier: 7.4,
        heat_group: "4",
      },
      label: "3P",
      tuesday: {
        multiplier: 7.4,
        heat_group: "4",
      },
      wednesday: {
        multiplier: 7.4,
        heat_group: "4",
      },
      thursday: {
        multiplier: 7.4,
        heat_group: "4",
      },
      friday: {
        multiplier: 7.4,
        heat_group: "4",
      },
      saturday: {
        multiplier: 0,
        heat_group: "4",
      },
      sunday: {
        multiplier: 0,
        heat_group: "4",
      },
    },
    {
      monday: {
        multiplier: 7.4,
        heat_group: "4",
      },
      label: "4P",
      tuesday: {
        multiplier: 7.4,
        heat_group: "4",
      },
      wednesday: {
        multiplier: 7.4,
        heat_group: "4",
      },
      thursday: {
        multiplier: 7.4,
        heat_group: "4",
      },
      friday: {
        multiplier: 7.4,
        heat_group: "4",
      },
      saturday: {
        multiplier: 37.5,
        heat_group: "4",
      },
      sunday: {
        multiplier: 39.5,
        heat_group: "4",
      },
    },
    {
      monday: {
        multiplier: 8.316666666666666,
        heat_group: "3",
      },
      label: "5P",
      tuesday: {
        multiplier: 8.316666666666666,
        heat_group: "3",
      },
      wednesday: {
        multiplier: 8.316666666666666,
        heat_group: "3",
      },
      thursday: {
        multiplier: 8.316666666666666,
        heat_group: "3",
      },
      friday: {
        multiplier: 8.316666666666666,
        heat_group: "3",
      },
      saturday: {
        multiplier: 38,
        heat_group: "3",
      },
      sunday: {
        multiplier: 0,
        heat_group: "3",
      },
    },
    {
      monday: {
        multiplier: 8.366666666666667,
        heat_group: "3",
      },
      label: "6P",
      tuesday: {
        multiplier: 8.366666666666667,
        heat_group: "3",
      },
      wednesday: {
        multiplier: 8.366666666666667,
        heat_group: "3",
      },
      thursday: {
        multiplier: 8.366666666666667,
        heat_group: "3",
      },
      friday: {
        multiplier: 8.366666666666667,
        heat_group: "3",
      },
      saturday: {
        multiplier: 0,
        heat_group: "3",
      },
      sunday: {
        multiplier: 0,
        heat_group: "3",
      },
    },
    {
      monday: {
        multiplier: 7.4,
        heat_group: "2",
      },
      label: "7P",
      tuesday: {
        multiplier: 7.4,
        heat_group: "2",
      },
      wednesday: {
        multiplier: 7.4,
        heat_group: "2",
      },
      thursday: {
        multiplier: 7.4,
        heat_group: "2",
      },
      friday: {
        multiplier: 7.4,
        heat_group: "2",
      },
      saturday: {
        multiplier: 0,
        heat_group: "2",
      },
      sunday: {
        multiplier: 0,
        heat_group: "2",
      },
    },
    {
      monday: {
        multiplier: 7.4,
        heat_group: "2",
      },
      label: "8P",
      tuesday: {
        multiplier: 7.4,
        heat_group: "2",
      },
      wednesday: {
        multiplier: 7.4,
        heat_group: "2",
      },
      thursday: {
        multiplier: 7.4,
        heat_group: "2",
      },
      friday: {
        multiplier: 7.4,
        heat_group: "2",
      },
      saturday: {
        multiplier: 0,
        heat_group: "2",
      },
      sunday: {
        multiplier: 0,
        heat_group: "2",
      },
    },
    {
      monday: {
        multiplier: 7.4,
        heat_group: "1",
      },
      label: "9P",
      tuesday: {
        multiplier: 7.4,
        heat_group: "1",
      },
      wednesday: {
        multiplier: 7.4,
        heat_group: "1",
      },
      thursday: {
        multiplier: 7.4,
        heat_group: "1",
      },
      friday: {
        multiplier: 7.4,
        heat_group: "1",
      },
      saturday: {
        multiplier: 0,
        heat_group: "1",
      },
      sunday: {
        multiplier: 0,
        heat_group: "1",
      },
    },
    {
      monday: {
        multiplier: 8.466666666666667,
        heat_group: "1",
      },
      label: "10P",
      tuesday: {
        multiplier: 8.466666666666667,
        heat_group: "1",
      },
      wednesday: {
        multiplier: 8.466666666666667,
        heat_group: "1",
      },
      thursday: {
        multiplier: 8.466666666666667,
        heat_group: "1",
      },
      friday: {
        multiplier: 8.466666666666667,
        heat_group: "1",
      },
      saturday: {
        multiplier: 0,
        heat_group: "1",
      },
      sunday: {
        multiplier: 0,
        heat_group: "1",
      },
    },
    {
      monday: {
        multiplier: 7.4,
        heat_group: "1",
      },
      label: "11P",
      tuesday: {
        multiplier: 7.4,
        heat_group: "1",
      },
      wednesday: {
        multiplier: 7.4,
        heat_group: "1",
      },
      thursday: {
        multiplier: 7.4,
        heat_group: "1",
      },
      friday: {
        multiplier: 7.4,
        heat_group: "1",
      },
      saturday: {
        multiplier: 0,
        heat_group: "1",
      },
      sunday: {
        multiplier: 0,
        heat_group: "1",
      },
    },
  ],
};

// Addressable Figma placeholder data
export const dummyAddressableData = [
  {
    title: "#group-label",
    items: [
      "item-default",
      "item-default",
      "item-default",
      "item-default",
      "item-default",
      "item-default",
      "item-default",
      "item-default",
      "item-default",
      "item-default",
    ],
  },
  {
    title: "#group-label",
    items: [
      "item-default",
      "item-default",
      "item-default",
      "item-default",
      "item-default",
      "item-default",
      "item-default",
      "item-default",
      "item-default",
      "item-default",
    ],
  },
  {
    title: "#group-label",
    items: [
      "item-default",
      "item-default",
      "item-default",
      "item-default",
      "item-default",
      "item-default",
      "item-default",
      "item-default",
      "item-default",
      "item-default",
    ],
  },
];

// Addressable Figma placeholder data
export const dummySingleAddressableData = {
  default: {
      title: "#group-label",
      items: [
        "item-default",
        "item-default",
        "item-default",
        "item-default",
        "item-default",
        "item-default",
        "item-default",
        "item-default",
        "item-default",
        "item-default",
      ],
  },
  long: {
      title: "#group-label",
      items: [
        "item-default-long-text",
        "item-default-long-text",
        "item-default-long-text",
        "item-default-long-text",
        "item-default-long-text",
        "item-default-long-text",
        "item-default-long-text",
        "item-default-long-text",
        "item-default-long-text",
        "item-default-long-text",
      ],
  },

}
export const placeolderBudgetData = RFP_DATA.sb_budget_placeholder