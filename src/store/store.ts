import { action, createStore } from "easy-peasy";

const store = createStore({
  projectMaterials: 0,
  members: 0,
  downloads: 0,
  writers: 0,

  addProjectMaterial: action((state, payload) => {
    //   state
  }),
});

export default store;
