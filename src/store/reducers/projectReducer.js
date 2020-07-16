const initState = {
  projects: [
    { id: '1', title: 'koftov', content: 'hakoltov' },
    { id: '2', title: 'koftov', content: 'hakoltov' },
    { id: '3', title: 'koftov', content: 'hakoltov' },
  ],
};

const projectReducer = (state = initState, action) => {
  switch (action.type) {
    case 'CREATE_PROJECT':
      console.log(action.project);
      return state;
    case 'CREATE_PROJECT_ERROR':
      console.log('create project error', action.err);
      return state;
    default:
      return state;
  }
};

export default projectReducer;
