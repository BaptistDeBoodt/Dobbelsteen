// data.js
export const scenes = [
  {
    id: 1,
    env: "/environmentMaps/playground.jpg",

    pois: [
      {
        id: 101,
        position: [-10, 2, 3.3],
        title: "The Slide",
        description: "A fun area for kids.",
        image: "/images/slide.jpg",
      },
      {
        id: 102,
        position: [21.7, 2, 4.3],
        title: "Relax Bench",
        description: "Great spot to rest.",
        image: "/images/bench.jpg",
      },
    ],

    navs: [
      {
        id: 1001,
        position: [-18.7, 2, 3.3],
        targetSceneId: 3, // changed to numeric id
      },
      {
        id: 1002,
        position: [2.2, 2, -13.7],
        targetSceneId: 2,
      },
    ],
  },

  {
    id: 2,
    env: "/environmentMaps/gate.jpg",
    pois: [],
    navs: [
      {
        id: 2001,
        position: [0, 2, -13.7],
        targetSceneId: 1,
      },
    ],
  },

  {
    id: 3,
    env: "/environmentMaps/footballfield.jpg",
    pois: [],
    navs: [
      {
        id: 3001,
        position: [20.2, 2, -9.2],
        targetSceneId: 1,
      },
    ],
  },
];
