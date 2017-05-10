const details = (state, action) => {
  switch(action.type){
    case 'ADD_GUEST':
      if(state.id === action.payload){
        return Object.assign({}, state, {guests: state.guests + 1});
      }
      return state;
    case 'REMOVE_GUEST':
      if(state.id === action.payload){
        return Object.assign({}, state, {guests: state.guests - 1});
      }
      return state;

    case 'TOGGLE_ATTENDING':
      if(state.id === action.id){
        return Object.assign({}, state, {attending: !state.attending});
      }
      return state;

    default:
      return state;
  }
};
//remember to avoid mutation within reducers
export const people = (state = [], action) => {
  switch(action.type){
    case 'ADD_PERSON':
      return [
        ...state,
        Object.assign({}, {id: action.payload.id, name: action.payload.name, guests: 0, attending: false})
      ];

    case 'REMOVE_PERSON':
      return state
        .filter(person => person.id !== action.payload);
    //to shorten our case statements, delegate detail updates to second private reducer
    case 'ADD_GUEST':
      return state.map(person => details(person, action));

    case 'REMOVE_GUEST':
      return state.map(person => details(person, action));

    case 'TOGGLE_ATTENDING':
      return state.map(person => details(person, action));
    //always have default return of previous state when action is not relevant
    default:
      return state;
  }
};
