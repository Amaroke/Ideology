import axios from 'axios';

const AuthenticationService = {
    login: async (formData) => {
        try {
            // const response = await axios.post('http://localhost:3000/login', formData);
            // return response.data;
            return { token: 'yourSimulatedJWTToken' };
        } catch (error) {
            throw error;
        }
    },
};

export default AuthenticationService;