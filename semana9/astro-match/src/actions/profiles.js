import axios from 'axios';

const baseUrl = "https://us-central1-missao-newton.cloudfunctions.net/astroMatch/ivana"; 
export const clearSwipes = () => async (dispatch) => {
	await axios.put(`${baseUrl}/clear`)
}

export const getProfile = () => async (dispatch) => {
	const response = await axios.get(`${baseUrl}/person`)
	console.log(response.data.profile)
	dispatch(setProfile(response.data.profile));
}

export const setProfile = (profile) => {
	return {
		type: "SET_PROFILE",
		payload: {
			profile,
		}
	}
}