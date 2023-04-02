// Define a GeoJSON data source for the community fridges
export const fridgeData = {
  type: "FeatureCollection",
  features: [
    {
      type: "Feature",
      crs: {
        type: "name",
        properties: {
          name: "urn:ogc:def:crs:OGC:1.3:CRS84",
        },
      },
      properties: {
        name: "Community Fridge 1",
        // address: "1014 N Miro St, New Orleans, Louisiana, 70119",
        description:
          "This is a community fridge that provides free food for those in need.",
      },
      geometry: {
        type: "Point",
        coordinates: [-90.07604887322762, 29.970331029937547],
      },
    },
    {
      type: "Feature",
      properties: {
        name: "Community Fridge 2",
        // address: "1126 Piety St, New Orleans, Louisiana, 70117",
        description:
          "This is another community fridge that provides free food for those in need.",
      },
      geometry: {
        type: "Point",
        coordinates: [-90.04153258672021, 29.968005076403607],
      },
    },
    {
      type: "Feature",
      properties: {
        name: "Community Fridge 3",
        // address: "1206 Touro St, New Orleans, Louisiana, 70116",
        description:
          "This is a community fridge that provides free food for those in need.",
      },
      geometry: {
        type: "Point",
        coordinates: [-90.05960165973512, 29.969730896168194],
      },
    },
    {
      type: "Feature",
      properties: {
        name: "Community Fridge 4",
        address: "1522 N Villere St New Orleans Louisiana 70116",
        description:
          "This is a community fridge that provides free food for those in need.",
      },
      geometry: {
        type: "Point",
        coordinates: [-90.06485180206344, 29.970333966501272],
      },
    },
    {
      type: "Feature",
      properties: {
        name: "Community Fridge 5",
        address: "1609 Delery St, New Orleans, Louisiana, 70117",
        description:
          "This is a community fridge that provides free food for those in need.",
      },
      geometry: {
        type: "Point",
        coordinates: [-90.0055006308994, 29.964104204064505],
      },
    },
    {
      type: "Feature",
      properties: {
        name: "Community Fridge 6",
        // address: "1801 Alvar St, New Orleans, Louisiana, 70117",
        description:
          "This is a community fridge that provides free food for those in need.",
      },
      geometry: {
        type: "Point",
        coordinates: [-90.03397831555591, 29.973209891285293],
      },
    },
    {
      type: "Feature",
      properties: {
        name: "Community Fridge 7",
        // address: "1804 Deslonde St, New Orleans, Louisiana, 70117",
        description:
          "This is a community fridge that provides free food for those in need.",
      },
      geometry: {
        type: "Point",
        coordinates: [-90.02190713089927, 29.970583794971102],
      },
    },
    {
      type: "Feature",
      properties: {
        name: "Community Fridge 8",
        // address: "1823 Washington Ave, New Orleans, Louisiana, 70113",
        description:
          "This is a community fridge that provides free food for those in need.",
      },
      geometry: {
        type: "Point",
        coordinates: [-90.08763915973569, 29.933594042196734],
      },
    },
    {
      type: "Feature",
      properties: {
        name: "Community Fridge 9",
        // address: "1924 Jackson Ave, New Orleans, Louisiana, 70113",
        description:
          "This is a community fridge that provides free food for those in need.",
      },
      geometry: {
        type: "Point",
        coordinates: [-90.08352410206399, 29.937483730631698],
      },
    },
    {
      type: "Feature",
      properties: {
        name: "Community Fridge 10",
        // address: "1941 Marigny St, New Orleans, Louisiana, 70117",
        description:
          "This is a community fridge that provides free food for those in need.",
      },
      geometry: {
        type: "Point",
        coordinates: [-90.05609583089917, 29.977780978406116],
      },
    },
    {
      type: "Feature",
      properties: {
        name: "Community Fridge 11",
        // address: "2425 N Miro St New Orleans Louisiana 70117",
        description:
          "This is a community fridge that provides free food for those in need.",
      },
      geometry: {
        type: "Point",
        coordinates: [-90.05248395973489, 29.980390167793352],
      },
    },
    {
      type: "Feature",
      properties: {
        name: "Community Fridge 12",
        // address: "2528 Lapeyrouse St New Orleans Louisiana 70119",
        description:
          "This is a community fridge that provides free food for those in need.",
      },
      geometry: {
        type: "Point",
        coordinates: [-90.07497154439169, 29.978924970124506],
      },
    },
    {
      type: "Feature",
      properties: {
        name: "Community Fridge 13",
        // address: "2623 Conti St, New Orleans, Louisiana, 70119",
        description:
          "This is a community fridge that provides free food for those in need.",
      },
      geometry: {
        type: "Point",
        coordinates: [-90.08413810206349, 29.967669804578314],
      },
    },
    {
      type: "Feature",
      properties: {
        name: "Community Fridge 14",
        // address: "300 Wagner St, New Orleans, Louisiana, 70114",
        description:
          "This is a community fridge that provides free food for those in need.",
      },
      geometry: {
        type: "Point",
        coordinates: [-90.03907904439208, 29.952840307480763],
      },
    },
    {
      type: "Feature",
      properties: {
        name: "Community Fridge 15",
        // address: "3908 Joliet St New Orleans Louisiana 70118",
        description:
          "This is a community fridge that provides free food for those in need.",
      },
      geometry: {
        type: "Point",
        coordinates: [-90.1124822308993, 29.9698540959953],
      },
    },
    {
      type: "Feature",
      properties: {
        name: "Community Fridge 16",
        // address: "401 Sala Ave, Westwego, Louisiana, 70094",
        description:
          "This is a community fridge that provides free food for those in need.",
      },
      geometry: {
        type: "Point",
        coordinates: [-90.14440855973604, 29.912354077322124],
      },
    },
    {
      type: "Feature",
      properties: {
        name: "Community Fridge 17",
        // address: "923 Hagan Ave, New Orleans, Louisiana, 70119",
        description:
          "This is a community fridge that provides free food for those in need.",
      },
      geometry: {
        type: "Point",
        coordinates: [-90.08761263089916, 29.977167434513447],
      },
    },
  ],
};

// module.exports = {
//   fridgeData,
// };
