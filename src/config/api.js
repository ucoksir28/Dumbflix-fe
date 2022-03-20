import axios from 'axios';
// Set config defaults when creating the instance
export const API = axios.create({
	baseURL: 'http://api.teknoinet.com/api/v1'
});

// Alter defaults after instance has been created
export const setAuthToken = (token) => {
	if (token) {
		API.defaults.headers.common['Authorization'] = `Bearer ${token}`;
	} else {
		delete API.defaults.headers.common['Authorization'];
	}
};
