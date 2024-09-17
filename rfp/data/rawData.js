export const API = {
  email: {
    availableInventory: "400,000",
    emailSends: "505",
    location: "San Francisco, CA, USA - San Francisco, CA, USA",
    include: [
      "Grandparents not in Household",
      "Attending Adult Education Classes",
      "High School Diploma/GED",
      "Equestrian",
      "Philanthropy",
      "Personalized Products",
      "Technology Interest / Techies",
      "Dining Out Interest",
      "Active Lifestyle",
      "Dieting / Weight Loss",
      "College Degree",
      "Annuities",
      "Country Club Member",
      "Grandparents in Household",
      "Real Estate Investor",
      "Men's Fashion",
      "Kid's Fashion",
    ],
    exclude: [
      "College Degree",
      "Annuities",
      "Country Club Member",
      "Grandparents in Household",
      "Real Estate Investor",
      "Men's Fashion",
      "Kid's Fashion",
      "Accessories",
      "Beauty & Cosmetics",
      "Photography",
      "Grandparents not in Household",
      "Attending Adult Education Classes",
      "High School Diploma/GED",
      "Philanthropy",
      "Personalized Products",
      "Technology Interest / Techies",
      "Dining Out Interest",
    ],
  },
  products: [
    "display",
    "ctv",
    "email",
    "radio",
    "outdoor",
    "generic",
    "OTT",
    "pre roll",
    "print",
    "ctv",
    "email",
    "radio",
    "outdoor",
    "generic",
  ],
  demographics: {
    insights: {
      population: "700,000",
      target_population: "467,000",
      avg_commute: "35.4",
      avg_income: "98,000",
      avg_home_val: "265,000",
      median_age: "39",
    },
    selected_demos: {
      age: "Under 18, 25-34, 45-54, 65+",
      income: "0-50k, 100-150k, 150k+",
      gender: "Female",
      family: "Has Kids",
      educations: "No College, Graduate, Grad School",
    },
    selected_demos_alt: [
      {
        name: "Age",
        value: "Under 18, 25-34, 45-54, 65+",
      },
      {
        name: "Income",
        value: "0-50k, 100-150k, 150k+",
      },
      {
        name: "Gender",
        value: "Female",
      },
      {
        name: "Family",
        value: "Has Kids",
      },
      {
        name: "Education",
        value: "No College, Graduate, Grad School",
      },
    ],
    selected_demo_values: {
      age: 45,
      income: 45,
      gender: 70,
      family: 75,
      education: 45,
    },
  },
  geo_map:
    "https://brandcdn-assets-staging.s3.amazonaws.com/snapshots/06-18-2024/2983464_697171_2024-06-18_21-40-03.png",
  address: "San Francisco, CA, USA - San Francisco, CA, USA |  Zips: 27",
  locations: [
    "Berkeley The Super Deluxe Premium Coffee Emporium and Artisanal Bookstore Experience Featuring Live Jazz Music and Organic Pastries, CA, USA | Offline Visits |  37.8715, -122.273 | 200m | custom",
    "Fremont Fremont’s Most Exquisite Fine Dining and International Gourmet Cuisine with a World-Class Wine Cellar and Personal Chef Experience, CA, USA | 37.5485, -121.9886 | 1200m | custom",
    "Fresno Yosemite International Airport FAT The Legendary All-Inclusive International Traveler’s Lounge and Luxury Spa for VIP Members Only, East Clinton Way, Fresno, CA, USA | 36.7782, -119.7165 | 800m | custom",
    "Fresno, CA, USA | 36.7378, -119.7871 | 800m | custom",
    "Los Altos Hills, CA, USA | 37.3797, -122.1375 | 800m | custom",
    "Oakland The Ultimate Adventure Sports Complex and Rock Climbing Center for Elite Athletes and Fitness Enthusiasts of All Levels, CA, USA | 37.8044, -122.2712 | Custom Polygon",
    "Palo Alto Airport, Embarcadero Road, Palo Alto, CA, USA | 37.455, -122.1108 | Custom Polygon",
    "Pier 9, San Francisco, CA, USA | Offline Visits | 37.8022, -122.4048 | Custom Polygon",
    "Rancho San Antonio Open Space Preserve, Cristo Rey Drive, Cupertino, CA, USA | 37.336, -122.0912 | Custom Polygon",
    "Redwood City, CA, USA | 37.4848, -122.2281 | 800m | custom",
    "Richmond, CA, USA | 37.9358, -122.3477 | 800m | custom",
    "Sacramento, CA, USA | 38.5816, -121.4944 | 800m | custom",
    "Salesforce Tower, Mission Street, San Francisco, CA, USA | Offline Visits | 37.7897, -122.3972 | 150m | custom",
    "San Francisco State University The Grand Academic Hub and Global Research Innovation Center for Future Leaders and Visionaries in Technology and Science, Holloway Avenue, San Francisco, CA, USA | 37.7241, -122.4799 | 800m | custom",
    "San Francisco, CA, USA | 37.7749, -122.4194 | 800m | custom",
    "San Jose Mineta International Airport SJC, Airport Boulevard, San Jose, CA, USA | 37.3635, -121.9286 | 800m | custom",
    "San Mateo, CA, USA | Offline Visits | 37.563, -122.3255 | 150m | custom",
    "Saratoga, CA, USA | 37.2717, -122.0184 | 800m | custom",
    "Sunnyvale, CA, USA | 37.3688, -122.0363 | 800m | custom",
    "Tesla Destination Charger, Luma Hotel, Channel Street, San Francisco, CA, USA | 37.7747, -122.3902 | 800m | custom",
    "Tyler Florence Rotisserie, South Airport Boulevard, San Francisco, CA, USA | 37.6367, -122.4005 | 800m | custom",
    "University Preparatory Academy, Canoas Garden Avenue, San Jose, CA, USA | Offline Visits | 37.2909, -121.8736 | 150m | custom",
  ],
  reach_freq: [
    {
      name: "Option 1",
      reach: 12.5,
      frequency: "1.0",
    },
    {
      name: "Option 2",
      reach: 45.6,
      frequency: "1.5",
    },
    {
      name: "Option 3",
      reach: 74.5,
      frequency: "2.4",
    },
  ],
  ctv_ott_networks: [
    {
      logo_path:
        "https://spectrumreach-data.s3.amazonaws.com/network-logos/FXX.png",
      name: "Chiller",
      value: 10,
    },
    {
      logo_path:
        "https://spectrumreach-data.s3.amazonaws.com/network-logos/FS1.png",
      name: "Fox Sports 1",
      value: 20,
    },
    {
      logo_path:
        "https://spectrumreach-data.s3.amazonaws.com/network-logos/FXX.png",
      name: "FXX",
      value: 10,
    },
    {
      logo_path:
        "https://spectrumreach-data.s3.amazonaws.com/network-logos/NBCS.png",
      name: "NBC Sports",
      value: 45,
    },
    {
      logo_path:
        "https://spectrumreach-data.s3.amazonaws.com/network-logos/CMT.png",
      name: "Country Music Television",
      value: 60,
    },
    {
      logo_path:
        "https://spectrumreach-data.s3.amazonaws.com/network-logos/CMDY.png",
      name: "Comedy Central",
      value: 35,
    },
    {
      logo_path:
        "https://spectrumreach-data.s3.amazonaws.com/network-logos/ADSM.png",
      name: "Adult Swim",
      value: 75,
    },
    {
      logo_path:
        "https://spectrumreach-data.s3.amazonaws.com/network-logos/TOON.png",
      name: "Cartoon Network",
      value: 65,
    },
    {
      logo_path:
        "https://spectrumreach-data.s3.amazonaws.com/network-logos/AHC.png",
      name: "American Military History",
      value: 35,
    },
    {
      logo_path:
        "https://s3.amazonaws.com/brandcdn-assets/images/tv_network_logos/SPSN.png",
      name: "Spectrum Sports Net",
      value: 5,
    },
    {
      logo_path:
        "https://spectrumreach-data.s3.amazonaws.com/network-logos/NGWD.png",
      name: "Nat Geo Wild",
      value: 100,
    },
    {
      logo_path:
        "https://spectrumreach-data.s3.amazonaws.com/network-logos/FCSA.png",
      name: "Fox College Sports",
      value: 100,
    },
    {
      logo_path:
        "https://spectrumreach-data.s3.amazonaws.com/network-logos/FXX.png",
      name: "Chiller",
      value: 10,
    },
    {
      logo_path:
        "https://spectrumreach-data.s3.amazonaws.com/network-logos/FS1.png",
      name: "Fox Sports 1",
      value: 20,
    },
    {
      logo_path:
        "https://spectrumreach-data.s3.amazonaws.com/network-logos/FXX.png",
      name: "FXX",
      value: 10,
    },
    {
      logo_path:
        "https://spectrumreach-data.s3.amazonaws.com/network-logos/NBCS.png",
      name: "NBC Sports",
      value: 45,
    },
    {
      logo_path:
        "https://spectrumreach-data.s3.amazonaws.com/network-logos/CMT.png",
      name: "Country Music Television",
      value: 60,
    },
    {
      logo_path:
        "https://spectrumreach-data.s3.amazonaws.com/network-logos/CMDY.png",
      name: "Comedy Central",
      value: 35,
    },
    {
      logo_path:
        "https://spectrumreach-data.s3.amazonaws.com/network-logos/ADSM.png",
      name: "Adult Swim",
      value: 75,
    },
    {
      logo_path:
        "https://spectrumreach-data.s3.amazonaws.com/network-logos/TOON.png",
      name: "Cartoon Network",
      value: 65,
    },
    {
      logo_path:
        "https://spectrumreach-data.s3.amazonaws.com/network-logos/AHC.png",
      name: "American Military History",
      value: 35,
    },
    {
      logo_path:
        "https://s3.amazonaws.com/brandcdn-assets/images/tv_network_logos/SPSN.png",
      name: "Spectrum Sports Net",
      value: 5,
    },
    {
      logo_path:
        "https://spectrumreach-data.s3.amazonaws.com/network-logos/NGWD.png",
      name: "Nat Geo Wild",
      value: 100,
    },
    {
      logo_path:
        "https://spectrumreach-data.s3.amazonaws.com/network-logos/FCSA.png",
      name: "Fox College Sports",
      value: 100,
    },
  ],
  audience_interest: [
    {
      name: "Arts & Entertainment",
      subheaders: [
        "Celebrities & Entertainment News",
        "Comics & Animation",
        "Entertainment Industry",
        "Events & Listings",
        "Gossip & Tabloid News",
        "Humor",
      ],
    },
    {
      name: "Autos & Vehicles",
      subheaders: [
        "Acura",
        "Audi",
        "Bentley",
        "BMW",
        "Boats & Watercraft",
        "Buick",
      ],
    },
    {
      name: "Books & Literature",
      subheaders: [
        "Book Retailers",
        "Literary Classics",
        "Poetry",
        "Writers Resources",
        "eBooks",
      ],
    },
    {
      name: "Business & Finance",
      subheaders: [
        "Business News",
        "Economics",
        "Investing",
        "Personal Finance",
        "Real Estate",
      ],
    },
    {
      name: "Computers & Electronics",
      subheaders: [
        "Computer Hardware",
        "Computer Security",
        "Consumer Electronics",
        "Programming",
        "Software",
      ],
    },
    {
      name: "Food & Drink",
      subheaders: [
        "Cooking & Recipes",
        "Drinks & Beverages",
        "Food",
        "Restaurants",
        "Vegetarian & Vegan",
      ],
    },
    {
      name: "Health",
      subheaders: [
        "Diseases & Conditions",
        "Fitness",
        "Health Education",
        "Medicine",
        "Mental Health",
      ],
    },
    {
      name: "Home & Garden",
      subheaders: [
        "Gardening",
        "Home Appliances",
        "Home Furnishings",
        "Home Improvement",
        "Interior Decorating",
      ],
    },
  ],
  addressable: [
    {
      parent: "Demographic > Affiliations",
      is_demographic: true,
      display_text: ["Small Business Owners", "Union Members"],
    },
    {
      parent: "Demographic > Age Range",
      is_demographic: true,
      display_text: ["21-24", "30-34", "45-49", "40-44", "55-59", "50-54"],
    },
    {
      parent: "Demographic > Education",
      is_demographic: true,
      display_text: [
        "Secondary Education",
        "Primary Education",
        "College Education",
      ],
    },
    {
      parent: "Demographic > Employment Status",
      is_demographic: true,
      display_text: [
        "Full-Time",
        "Part-Time",
        "Student",
        "Self-Employed",
        "Retired",
        "Unemployed",
      ],
    },
    {
      parent: "Demographic > Political Affiliation ",
      is_demographic: true,
      display_text: [
        "Republican",
        "Moderates",
        "Conservative",
        "Democrat",
        "Independent",
        "Liberal",
      ],
    },
       {
      parent: "Interest > Automotive",
      is_interest: true,
      display_text: [
        "Auto Buying and Selling",
        "Auto Shows",
        "Auto Technology",
        "Budget Cars",
        "Car Culture",
        "Motorcycles",
        "Luxury Cars",
      ],
    },
    {
      parent: "Interest > Economy",
      is_interest: true,
      display_text: [
        "Commodities",
        "Currencies",
        "Financial Crisis",
        "Financial Reform",
        "Financial Regulation",
        "Gasoline Prices",
        "Housing Market",
      ],
    },
    {
      parent: "Interest > Business",
      is_interest: true,
      display_text: [
        "Angel Investment",
        "Bankruptcy",
        "Business Loans",
        "Business Administration",
        "Business I.T.",
        "Consumer Issues",
        "Debt Factoring & Invoice Discounting",
        "Executive Leadership & Management",
        "Small and Medium-sized Business",
        "Mergers and Acquisitions",
      ],
    },
    {
      parent: "Interest > Books and Literature",
      is_interest: true,
      display_text: [
        "Art and Photography Books",
        "Biographies",
        "Cookbooks",
        "Fiction",
        "Young Adult Literature",
        "Travel Books",
        "Poetry",
      ],
    },
    {
      parent: "Interest > Careers",
      is_interest: true,
      display_text: [
        "Apprenticeships",
        "Career Advice",
        "Career Planning",
        "Remote Working",
        "Vocational Training",
      ],
    },
    {
      parent: "Interest > Food & Drink",
      is_interest: true,
      display_text: ["Vegan Diets"],
    },
    {
      parent: "Interest > Medical Services",
      is_interest: true,
      display_text: [
        "Hair Loss Treatments",
        "Physical Therapists",
        "Pain Management",
        "Massage Therapists",
        "Mental Health",
      ],
    },
    {
      parent: "Interest > Technology & Computing",
      is_interest: true,
      display_text: [
        "Artificial Intelligence",
        "Web Hosting",
        "Web Design and HTML",
        "Social Networking",
        "Virtual Reality",
        "Web Development",
      ],
    },
    {
      parent: "Purchase Intent > Business and Industrial",
      is_purchase_intent: true,
      display_text: [
        "Conferences/Events/Seminars",
        "Aerospace and Defense",
        "Advertising and Marketing",
        "Industrial Conglomerates",
        "Laundry and Dry Cleaning Services",
        "Oil, Gas and Consumable Fuels",
        "Medical and Biotechnology",
        "Trading Companies and Distributors",
      ],
    },
    {
      parent: "Purchase Intent > Coffee & Tea",
      is_purchase_intent: true,
      display_text: ["Coffee Filters", "Coffee Creamer", "Coffee"],
    },
    {
      parent: "Purchase Intent > Finance and Insurance",
      is_purchase_intent: true,
      display_text: [
        "Student Financial Aid",
        "Retirement Planning",
        "Tax Preparation Services",
        "Payday Loans",
        "Medical Insurance",
        "Credit Cards",
        "Home Insurance",
        "Life Insurance",
      ],
    },
    {
      parent: "Purchase Intent > Health and Medical Services",
      is_purchase_intent: true,
      display_text: [
        "Vision Care",
        "Smoking Cessation",
        "Physical Therapists",
        "Massage Therapists",
        "Hospitals",
        "Health Services",
        "Hair Loss",
      ],
    },
    {
      parent: "Purchase Intent > Household Cleaning",
      is_purchase_intent: true,
      display_text: [
        "Rug/Upholstery/Fabric Treatment",
        "Cleaning Tools/Mops/Brooms",
        "Household Cleaner",
        "Household Cleaner Cloths",
        "Sponges & Scouring Pads",
      ],
    },
    {
      parent: "Purchase Intent > Snacks",
      is_purchase_intent: true,
      display_text: [
        "Popcorn/Popcorn Oil",
        "Rice/Popcorn Cakes",
        "Snack Bars/Granola Bars",
        "Snack Nuts/Seeds/Corn Nuts",
        "Dried Meat Snacks",
        "Dip/Dip Mixes",
        "Dry Fruit Snacks",
      ],
    },
    {
      parent: "Purchase Intent > Travel and Tourism",
      is_purchase_intent: true,
      display_text: [
        "Bed and Breakfasts",
        "Auto Rental",
        "Air Travel",
        "Adventure Travel",
        "Cruise Travel",
        "Coach Travel",
        "Family Travel",
        "Honeymoons and Getaways",
      ],
    },
  ],
  keywords: [
    "electronics store near me",
    "computer repair",
    "best stores near me to buy tech gadgets for computer repair",
    "computer repair near me",
    "computer repair in my area",
    "latest tech gadgets",
    "new tech gadgets",
    "electronics shopping sites",
    "pc shop repair",
    "high tech gadgets",
    "best local electronics and repair stores for tech gadgets",
    "electrical and electronics shop near me",
    "fun high tech gadgets",
    "latest electronic gadgets"
  ],
  sem_clicks: [
    {
      name: "Option 1",
      value: "15",
      click_range: "100-200",
      term: "Mo",
    },
    {
      name: "Option 2",
      value: "45",
      click_range: "500-700",
      term: "Mo",
    },
    {
      name: "Option 3",
      value: "75",
      click_range: "1500-2000",
      term: "Mo",
    },
  ],
  social_clicks: [
    {
      name: "Option 1",
      value: "15",
      click_range: "100-200",
      term: "Mo",
    },
    {
      name: "Option 2",
      value: "45",
      click_range: "500-700",
      term: "Mo",
    },
    {
      name: "Option 3",
      value: "75",
      click_range: "1500-2000",
      term: "Mo",
    },
  ],
  tv_schedule: [
    {
      label: "12-5A",
      heat: [1, 1, 1, 1, 1, 1, 1],
    },
    {
      label: "5A",
      heat: [1, 1, 1, 1, 1, 1, 1],
    },
    {
      label: "6A",
      heat: [2, 2, 2, 2, 2, 2, 2],
    },
    {
      label: "7A",
      heat: [2, 2, 2, 2, 2, 2, 2],
    },
    {
      label: "8A",
      heat: [1, 1, 1, 1, 1, 1, 1],
    },
    {
      label: "9A",
      heat: [1, 1, 1, 1, 1, 1, 1],
    },
    {
      label: "10A",
      heat: [3, 3, 3, 3, 3, 3, 1],
    },
    {
      label: "11A",
      heat: [3, 3, 3, 3, 3, 3, 1],
    },
    {
      label: "12P",
      heat: [3, 1, 1, 1, 1, 1, 1],
    },
    {
      label: "1P",
      heat: [4, 4, 4, 4, 4, 4, 1],
    },
    {
      label: "2P",
      heat: [4, 4, 4, 4, 4, 4, 1],
    },
    {
      label: "3P",
      heat: [4, 4, 4, 4, 4, 4, 1],
    },
    {
      label: "4P",
      heat: [1, 1, 1, 1, 1, 1, 1],
    },
    {
      label: "5P",
      heat: [5, 5, 5, 5, 5, 5, 5],
    },
    {
      label: "6P",
      heat: [5, 5, 5, 5, 5, 5, 5],
    },
    {
      label: "7P",
      heat: [5, 5, 5, 5, 5, 5, 5],
    },
    {
      label: "8P",
      heat: [5, 5, 5, 5, 5, 5, 5],
    },
    {
      label: "9P",
      heat: [1, 1, 1, 1, 1, 1, 1],
    },
    {
      label: "10P",
      heat: [1, 1, 1, 1, 1, 1, 1],
    },
    {
      label: "11P",
      heat: [1, 1, 1, 1, 1, 1, 1],
    },
  ],
  radio_schedule: [
    {
      label: "12-5A",
      heat: [1, 1, 1, 1, 1, 1, 1],
    },
    {
      label: "5A",
      heat: [1, 1, 1, 1, 1, 1, 1],
    },
    {
      label: "6A",
      heat: [2, 2, 2, 2, 2, 2, 2],
    },
    {
      label: "7A",
      heat: [2, 2, 2, 2, 2, 2, 2],
    },
    {
      label: "8A",
      heat: [1, 1, 1, 1, 1, 1, 1],
    },
    {
      label: "9A",
      heat: [1, 1, 1, 1, 1, 1, 1],
    },
    {
      label: "10A",
      heat: [3, 3, 3, 3, 3, 3, 1],
    },
    {
      label: "11A",
      heat: [3, 3, 3, 3, 3, 3, 1],
    },
    {
      label: "12P",
      heat: [3, 1, 1, 1, 1, 1, 1],
    },
    {
      label: "1P",
      heat: [4, 4, 4, 4, 4, 4, 1],
    },
    {
      label: "2P",
      heat: [4, 4, 4, 4, 4, 4, 1],
    },
    {
      label: "3P",
      heat: [4, 4, 4, 4, 4, 4, 1],
    },
    {
      label: "4P",
      heat: [1, 1, 1, 1, 1, 1, 1],
    },
    {
      label: "5P",
      heat: [5, 5, 5, 5, 5, 5, 5],
    },
    {
      label: "6P",
      heat: [5, 5, 5, 5, 5, 5, 5],
    },
    {
      label: "7P",
      heat: [5, 5, 5, 5, 5, 5, 5],
    },
    {
      label: "8P",
      heat: [5, 5, 5, 5, 5, 5, 5],
    },
    {
      label: "9P",
      heat: [1, 1, 1, 1, 1, 1, 1],
    },
    {
      label: "10P",
      heat: [1, 1, 1, 1, 1, 1, 1],
    },
    {
      label: "11P",
      heat: [1, 1, 1, 1, 1, 1, 1],
    },
  ],
  schedule_days: ["Mon", "Tues", "Wes", "Thurs", "Fri", "Sat", "Sun"],
  stations: ["ESPN", "TNT", "AMC", "FOX", "MTV", "USA"],
  geofence_sb: [
    "Best Buy, West Bluemound Road, Wauwatosa, WI, USA | 43.0356, -88.0415 | Custom Polygon",
    "ALDI, West Saint Paul Avenue, Waukesha, WI, USA | 42.9925, -88.2663  | Custom Polygon",
    "Meijer, East Main Street, Waukesha, WI, USA | 43.0325, -88.2057 | Custom Polygon | A large supercenter offering groceries, electronics, clothing, and more, located just off the busy East Main Street in the heart of Waukesha",
    "Staples, East Moreland Boulevard, Waukesha, WI, USA | 43.0222, -88.2007 | Custom Polygon",
    "Trader Joe's, Bluemound Road, Brookfield, WI, USA | 43.0472, -88.0920 | Custom Polygon | A popular grocery store chain known for affordable specialty foods, friendly service, and unique grocery finds",
    "Walmart Supercenter, East Sunset Drive, Waukesha, WI, USA | 42.9965, -88.2275 | Custom Polygon",
    "Home Depot, North 124th Street, Wauwatosa, WI, USA | 43.0534, -88.0901 | Custom Polygon | Your go-to store for hardware, home improvement products, and expert advice on DIY projects of any size",
    "Goodwill Store & Donation Center, Summit Avenue, Oconomowoc, WI, USA",
    "Ross Dress for Less, West Sunset Drive, Waukesha, WI, USA | 42.9898, -88.2535  | Custom Polygon",
    "Sam's Club, South West Avenue, Waukesha, WI, USA | 42.9784, -88.2362 | Custom Polygon | A membership-only retail warehouse offering bulk items and great savings for the Waukesha community",
    "ALDI, Arcadian Avenue, Waukesha, WI, USA | 43.0131, -88.2019  | Custom Polygon",
    "Pick 'n Save, West Greenfield Avenue, West Allis, WI, USA | 43.0171, -88.0235 | Custom Polygon | A local grocery chain with a wide selection of fresh produce, meats, and household goods",
    "Michael's, West Bluemound Road, Brookfield, WI, USA | 43.0359, -88.0981 | Custom Polygon",
    "T.J. Maxx, West Sunset Drive, Waukesha, WI, USA",
    "Menards, East Moreland Boulevard, Waukesha, WI, USA | 43.0213, -88.2005 | Custom Polygon | A popular hardware store with home improvement products, lumber, tools, and appliances for all your DIY needs",
    "Costco Wholesale, North Barker Road, Brookfield, WI, USA | 43.0567, -88.1730 | Custom Polygon",
    "PetSmart, West Bluemound Road, Brookfield, WI, USA | 43.0361, -88.0990 | Custom Polygon",
    "Piggly Wiggly, East Racine Avenue, Waukesha, WI, USA | 42.9791, -88.2395 | Custom Polygon | A local grocery store offering great deals on fresh produce, meat, and household goods, serving the Waukesha area for decades",
    "Dollar Tree, West Sunset Drive, Waukesha, WI, USA | 42.9916, -88.2583  | Custom Polygon",
    "Whole Foods Market, North Mayfair Road, Wauwatosa, WI, USA | 43.0557, -88.0468 | Custom Polygon | A high-end grocery store known for organic produce and specialty foods, located near the popular Mayfair shopping area",
    "Five Below, West Bluemound Road, Brookfield, WI, USA | 43.0337, -88.0954 | Custom Polygon",
    "Target, Bluemound Road, Brookfield, WI, USA | 43.0339, -88.0970 | Custom Polygon",
    "Kohl's, Moorland Road, Brookfield, WI, USA | 43.0167, -88.1095 | Custom Polygon",
    "Bed Bath & Beyond, West Bluemound Road, Brookfield, WI, USA | 43.0348, -88.0973 | Custom Polygon",
  ],
};
