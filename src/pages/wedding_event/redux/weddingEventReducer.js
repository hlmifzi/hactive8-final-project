
const INITIAL_STATE = {
   loading: false,
   index: '',
   dataUndangan: '',
   dataDiundangList: [],
   dataListWedding: [],
   dataDetailWedding: '',
   dataDiundangCategory: [],
}

const weddingEventReducer = (state = { ...INITIAL_STATE }, action) => {
   switch (action.type) {
      case "FETCH_WEDDING_LIST":
         return ({
            ...state,
            dataListWedding: action.payload,
            loading: true
         })
      case "FETCH_WEDDING_DETAIL":
         return ({
            ...state,
            dataDetailWedding: action.payload,
            loading: true
         })
      case "FETCH_WEDDING_DIUNDANG_CATEGORY":
         return ({
            ...state,
            dataDiundangCategory: action.payload,
            loading: true
         })
      case "FETCH_WEDDING_DIUNDANG_LIST":
         return ({
            ...state,
            dataDiundangList: action.payload,
            loading: true
         })
      case "FETCH_WEDDING_DIUNDANG_UPDATE":
         return ({
            ...state,
            dataDiundangList: action.payload,
            loading: true,
            message: action.berhasil
         })
      default:
         return state;
   }
}

export default weddingEventReducer
