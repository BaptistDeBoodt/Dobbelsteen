// data.js
export const scenes = [
  {
    id: 1,
    env: "/environmentMaps/playground.jpg",

    pois: [
      {
        id: 101,
        position: [-9.1, 2, 0.0],
        title: "Natuurlijke Speelzone",
        image: "/poi/jungle.jpg",
      },
      {
        id: 102,
        position: [50.0, 4.0, 19.6],
        title: "Buitenkeuken",
        image: "/poi/buitenkeuken.jpg",
      },
      {
        id: 103,
        position: [50.0, 4.0, 34.6],
        title: "Spelen met Modder",
        image: "/poi/modderkeuken.png",
      },
    ],

    navs: [
      {
        id: 1001,
        position: [-15.9, 2, 2.6],
        rotation: [1.60, -0.70, -0.02],
        targetSceneId: 3, // changed to numeric id
      },
      {
        id: 1002,
        position: [2.4, 2, -13.5],
        rotation: [-1.47, -0.19, -2.01],
        targetSceneId: 2,
      },
      {
        id: 1003,
        position: [11.9, 2.6, 16.8],
        rotation: [1.17, 0.06, -1.95],
        targetSceneId: 6,
      }
    ],
  },

  {
    id: 2,
    env: "/environmentMaps/gate.jpg",
    pois: [
      {
        id: 201,
        position: [-5.8, 2.0, 14.2],
        title: "Boekentassenrek",
        image: "/poi/boekentassenrek.jpg",
      }
    ],
    navs: [
      {
        id: 2001,
        position: [0, 2, -13.7],
        rotation: [2.28, -0.26, 1.66],
        targetSceneId: 1,
      },
    ],
  },

  {
    id: 3,
    env: "/environmentMaps/footballfield.jpg",
    pois: [
      {
        id: 301,
        position: [-5.8, 3.3, 4.8],
        title: "Voetbalveld",
        image: "/poi/voetbal.jpg",
      },
      {
        id: 302,
        position: [-30.2, 3.0, -5.4],
        title: "Ravotzone Kleuters",
        image: "/poi/ravotten.jpg",
      }
    ],
    navs: [
      {
        id: 3001,
        position: [17.6, 1.8, -9.0],
        rotation: [-1.66, 2.56, -0.22],
        targetSceneId: 1,
      },
      {
        id: 3002,
        position: [-19.2, 2.9, -7.5],
        rotation: [1.58, -0.52, 0],
        targetSceneId: 4,
      }
    ],
  },
  {
    id: 4,
    env: "/environmentMaps/toddlerplayground.jpg",
    pois: [{
      id: 401,
      position: [26.6, 5.4, 32.9],
      title: "Bank",
      image: "/poi/picknicktable.jpg",
    },
    {
      id: 402,
      position: [-10.5, -0.4, 24.6],
      title: "Natuurlijke Zandbak",
      image: "/poi/zanbak.jpg",
    }
  ],
    navs: [{
      id: 4001,
      position: [14.1, 2.7, -0.7],
      rotation: [1.69, 0.87, 3.14],
      targetSceneId: 3,
    },
    {
      id: 4002,
      position: [6.5, 3.1, -17.3],
      rotation: [1.83, 0.25, 2.05],
      targetSceneId: 5,
    }
  ],
  },
  {
    id: 5,
    env: "/environmentMaps/bikestand.jpg",
    pois: [
      {
        id: 501,
        position: [11.7, 6.0, 12.5],
        title: "Fietsenstalling",
        image: "/poi/fietsen.jpg",
      }
    ],
    navs: [
      {
        id: 5001,
        position: [-6.4, 4.1, 2.6],
        rotation: [1.69, 2.98, -1.76],
        targetSceneId: 4,
      },
    ],
  },
  {
    id: 6,
    env: "/environmentMaps/viking.jpg",
    pois: [
      {
        id: 601,
        position: [5.6, 3.1, -7.9],
        title: "Vikingboot",
        image: "/poi/vikingboot.png",
      },
      {
        id: 602,
        position: [-12.0, 2.0, -6.6],
        title: "Bergen Ravotzone",
        image: "/poi/bergenravot.png",
      }
    ],
    navs: [
      {
        id: 6001,
        position: [13.9, 1.7, -7.7],
        rotation: [-1.64, -0.30, -3.14],
        targetSceneId: 1,
      },
      {
        id: 6002,
        position: [-1.9, 2.0, 9.9],
        rotation: [-1.82, -0.07, 1.13],
        targetSceneId: 7,
      }
    ],
  },
  {
    id: 7,
    env: "/environmentMaps/vikingbos.jpg",
    pois: [],
    navs: [
      {
        id: 7001,
        position: [-1.9, 2.0, 9.9],
        rotation: [-1.82, -0.07, 1.13],
        targetSceneId: 6,
      },
    ],
  }
];
