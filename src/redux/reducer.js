import { combineReducers } from "redux";
import { ADD_ROCKET, REMOVE_ROCKET, LAUNCHED, DEC_COUNT } from "./actions";

// basic reducer
function rocket(state=[], action) {
	switch(action.type){
		case ADD_ROCKET:
			console.log(state);
			return [...state, action.payload] 
		case REMOVE_ROCKET:
			return [...state.splice(0,state.length-1)]
		case DEC_COUNT:
			return state.map((el, i)=>{
				if(i==action.payload){
					console.log (el.counter -1 )
					return { isLaunched: false, counter: el.counter -1 }
				}else{ return el}
			})
			
		case LAUNCHED:
			return state.map((el, i)=>{
				if(i==action.payload){
					return { isLaunched: true, counter: 0 }
				}else{ return el}
			})
	}
        return state
}

export default rocket;
// export default combineReducers({
//         rocket
// });


