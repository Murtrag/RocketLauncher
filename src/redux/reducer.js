import { combineReducers } from "redux";
import { ADD_ROCKET, REMOVE_ROCKET } from "./actions";

// basic reducer
function rocket(state=[], action) {
	switch(action.type){
		case ADD_ROCKET:
			return [...state, action.payload] 
		case REMOVE_ROCKET:
			return [...state.splice(0,state.length-1)]
	}
        return state
}

export default rocket;
// export default combineReducers({
//         rocket
// });


