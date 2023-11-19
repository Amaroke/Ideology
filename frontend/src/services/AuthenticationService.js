import axios from 'axios';

const AuthenticationService = {
    login: async (formData, cookieDuration) => {
        try {
            formData = {
                ...formData,
                duration: cookieDuration,
            };
            const response = await axios.post('http://localhost:8080/login', formData);
            return response.data;
        } catch (error) {
            throw error;
        }
    },
    register: async (formData) => {
        try {
            const response = await axios.post('http://localhost:8080/register', formData);
            return response.data;
        } catch (error) {
            throw error;
        }
    },
};

export default AuthenticationService;