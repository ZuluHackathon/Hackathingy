// Define a GeoJSON data source for the community fridges
const fridgeData = {
  type: 'FeatureCollection',
  features: [
    {
      type: 'Feature',
      properties: {
        name: 'Community Fridge 1',
        address: '1014 N Miro St, New Orleans, Louisiana, 70119',
        description: 'This is a community fridge that provides free food for those in need.'
      },
      geometry: {
        type: 'Point',
        coordinates: [29.970331029937547, -90.07604887322762]
      }
    },
    {
      type: 'Feature',
      properties: {
        name: 'Community Fridge 2',
        address: '1126 Piety St, New Orleans, Louisiana, 70117',
        description: 'This is another community fridge that provides free food for those in need.'
      },
      geometry: {
        type: 'Point',
        coordinates: [29.968005076403607, -90.04153258672021]
      }
    },
    {
      type: 'Feature',
      properties: {
        name: 'Community Fridge 3',
        address: '1206 Touro St, New Orleans, Louisiana, 70116',
        description: 'This is a community fridge that provides free food for those in need.'
      },
      geometry: {
        type: 'Point',
        coordinates: [29.969730896168194, -90.05960165973512]
      }
    },
    {
      type: 'Feature',
      properties: {
        name: 'Community Fridge 4',
        address: '1522 N Villere St New Orleans Louisiana 70116',
        description: 'This is a community fridge that provides free food for those in need.'
      },
      geometry: {
        type: 'Point',
        coordinates: [29.970333966501272, -90.06485180206344]
      }
    },
    {
      type: 'Feature',
      properties: {
        name: 'Community Fridge 5',
        address: '1609 Delery St, New Orleans, Louisiana, 70117',
        description: 'This is a community fridge that provides free food for those in need.'
      },
      geometry: {
        type: 'Point',
        coordinates: [29.964104204064505, -90.0055006308994]
      }
    },
    {
      type: 'Feature',
      properties: {
        name: 'Community Fridge 6',
        address: '1801 Alvar St, New Orleans, Louisiana, 70117',
        description: 'This is a community fridge that provides free food for those in need.'
      },
      geometry: {
        type: 'Point',
        coordinates: [29.973209891285293, -90.03397831555591]
      }
    },
    {
      type: 'Feature',
      properties: {
        name: 'Community Fridge 7',
        address: '1804 Deslonde St, New Orleans, Louisiana, 70117',
        description: 'This is a community fridge that provides free food for those in need.'
      },
      geometry: {
        type: 'Point',
        coordinates: [29.970583794971102, -90.02190713089927]
      }
    },
    {
      type: 'Feature',
      properties: {
        name: 'Community Fridge 8',
        address: '1823 Washington Ave, New Orleans, Louisiana, 70113',
        description: 'This is a community fridge that provides free food for those in need.'
      },
      geometry: {
        type: 'Point',
        coordinates: [29.933594042196734, -90.08763915973569]
      }
    },
    {
      type: 'Feature',
      properties: {
        name: 'Community Fridge 9',
        address: '1924 Jackson Ave, New Orleans, Louisiana, 70113',
        description: 'This is a community fridge that provides free food for those in need.'
      },
      geometry: {
        type: 'Point',
        coordinates: [29.937483730631698, -90.08352410206399]
      }
    },
    {
      type: 'Feature',
      properties: {
        name: 'Community Fridge 10',
        address: '1941 Marigny St, New Orleans, Louisiana, 70117',
        description: 'This is a community fridge that provides free food for those in need.'
      },
      geometry: {
        type: 'Point',
        coordinates: [29.977780978406116, -90.05609583089917]
      }
    },
    {
      type: 'Feature',
      properties: {
        name: 'Community Fridge 11',
        address: '2425 N Miro St New Orleans Louisiana 70117',
        description: 'This is a community fridge that provides free food for those in need.'
      },
      geometry: {
        type: 'Point',
        coordinates: [29.980390167793352, -90.05248395973489]
      }
    },
    {
      type: 'Feature',
      properties: {
        name: 'Community Fridge 12',
        address: '2528 Lapeyrouse St New Orleans Louisiana 70119',
        description: 'This is a community fridge that provides free food for those in need.'
      },
      geometry: {
        type: 'Point',
        coordinates: [29.978924970124506, -90.07497154439169]
      }
    },
    {
      type: 'Feature',
      properties: {
        name: 'Community Fridge 13',
        address: '2623 Conti St, New Orleans, Louisiana, 70119',
        description: 'This is a community fridge that provides free food for those in need.'
      },
      geometry: {
        type: 'Point',
        coordinates: [29.967669804578314, -90.08413810206349]
      }
    },
    {
      type: 'Feature',
      properties: {
        name: 'Community Fridge 14',
        address: '300 Wagner St, New Orleans, Louisiana, 70114',
        description: 'This is a community fridge that provides free food for those in need.'
      },
      geometry: {
        type: 'Point',
        coordinates: [29.952840307480763, -90.03907904439208]
      }
    },
    {
      type: 'Feature',
      properties: {
        name: 'Community Fridge 15',
        address: '3908 Joliet St New Orleans Louisiana 70118',
        description: 'This is a community fridge that provides free food for those in need.'
      },
      geometry: {
        type: 'Point',
        coordinates: [29.9698540959953, -90.1124822308993]
      }
    },
    {
      type: 'Feature',
      properties: {
        name: 'Community Fridge 16',
        address: '401 Sala Ave, Westwego, Louisiana, 70094',
        description: 'This is a community fridge that provides free food for those in need.'
      },
      geometry: {
        type: 'Point',
        coordinates: [29.912354077322124, -90.14440855973604]
      }
    },
    {
      type: 'Feature',
      properties: {
        name: 'Community Fridge 17',
        address: '923 Hagan Ave, New Orleans, Louisiana, 70119',
        description: 'This is a community fridge that provides free food for those in need.'
      },
      geometry: {
        type: 'Point',
        coordinates: [29.977167434513447, -90.08761263089916]
      }
    },
  ]
};

module.exports = {
  fridgeData
}
