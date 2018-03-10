import axios from "axios/index";
const baseUrl = '/api/users'

export const getAll = () => {
	const request = axios.get(baseUrl)
	return request.then(response => response.data)
}

export default {getAll}