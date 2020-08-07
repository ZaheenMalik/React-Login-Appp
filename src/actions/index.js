export const logout = () => {
	return{
		type: "LOGOUT"
		}
}

export const login = () => {
	return{
		type: "LOGIN"
		}
}

export const addUser = (newUser) => {
    return{
        type: "ADD USER",
        payload: newUser
    }
}