
const INITIAL_STATE = {
   loading: false,
   createOrEdit: 0,
   index: '',
   dataForEdit: [],
   data: []
}

const Landing_page_reducer = (state = { ...INITIAL_STATE }, action) => {
   switch (action.type) {
      case "FETCH_POSTS":
         return ({
            ...state,
            data: action.payload.data,
            loading: true
         })
      default:
         return state;
   }
}

export default Landing_page_reducer
