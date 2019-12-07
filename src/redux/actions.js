const ADD_ROCKET = "add-rocket";
const REMOVE_ROCKET = "remove-rocket";

const add = () =>{
	return{
		type: ADD_ROCKET,
		payload: {
		  isLaunched: false,
		  counter: 5
		}
	}
}



const remove= () =>{
	return{
		type: REMOVE_ROCKET,
	}
}


// { type: 'FETCH_POSTS_REQUEST' }
// { type: 'FETCH_POSTS_FAILURE' , error: 'Oops' }
// { type: 'FETCH_POSTS_SUCCESS' , response: { ... } }

//action func can be use as action
const DEC_COUNT = 'dec-count';
const LAUNCHED = "launched";

const launchRocket = (id) => (dispatch) => {
	[4,3,2,1].forEach((el)=>{
		setTimeout(()=>{
			dispatch({
				type: DEC_COUNT,
				payload: id
			})
		}, 1000);
	})
	setTimeout(()=>{
		dispatch({
			type: LAUNCHED,
			payload: id
		})
	},5000)

};







export { add, remove, ADD_ROCKET, REMOVE_ROCKET, launchRocket, DEC_COUNT, LAUNCHED};
