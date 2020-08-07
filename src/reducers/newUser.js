const addUser = (state = [{userid: "zaheen", password: "123"}], action) => {
	switch(action.type){
		case "ADD USER":
			let newState = [...state]; 
			newState.push(action.payload);
			return newState;
		default: return state;
	}
}

export default addUser;