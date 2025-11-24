// data.js
export const scenes = [
  {
    id: 1,
    env: "/environmentMaps/playground.jpg",

    pois: [
      {
        id: 101,
        position: [-9.7, 2, 14.0],
        title: "De Picknicktafel",
        description: "Dit is een gezellige picknicktafel waar je kunt zitten en genieten van een hapje en een drankje. Hij is gemaakt van duurzaam hout en biedt plaats aan meerdere personen. Perfect voor een pauze tijdens het spelen!",
        image: "/poi/picknicktable.jpg",
      },
      {
        id: 102,
        position: [21.7, 2, 4.3],
        title: "Glijbaan",
        description: "Een kleurrijke glijbaan die zorgt voor uren speelplezier. Kinderen kunnen hier van de top naar beneden glijden en genieten van de snelheid en sensatie. Veilig en leuk voor alle leeftijden!",
        image: "/poi/slide.jpg",
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
    ],
  },

  {
    id: 2,
    env: "/environmentMaps/gate.jpg",
    pois: [
      {
        id: 201,
        position: [6.0, 6.0, 10.5],
        title: "The Gate",
        description: "This is the main entrance gate to the playground area. It was built in 1995 and has been a landmark ever since.",
        image: "/poi/gate.jpg",
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
    pois: [],
    navs: [
      {
        id: 3001,
        position: [20.2, 2, -9.2],
        rotation: [1.50, -1.13, -0.18],
        targetSceneId: 1,
      },
    ],
  },
];
