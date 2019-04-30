import { combineReducers } from 'redux';
import Landing_page_reducer from '../pages/landing_page/redux/Landing_page_reducer'
import weddingEventReducer from '../pages/wedding_event/redux/weddingEventReducer'

export default combineReducers({
   Landing_page_reducer,
   weddingEventReducer
})