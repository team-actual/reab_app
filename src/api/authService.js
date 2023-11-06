import axios from 'axios';

const { BASE_URL } = Constants.manifest.extra;

const authService = {
  handleLogin: async (cpf, password) => {
    try {
      const response = await axios.post(`${BASE_URL}/users/login`, {
        cpf: cpf,
        password: password,
      });
      
      if (response.status == 200) {
        return response.data;
      } else {
        throw new Error('Erro no login');
      }
    } catch (error) {
      console.log('Erro ao fazer login', error);
      throw error;
    }
  },

  handleRegister: async (data) => {
    try {
      const response = await axios.post(`${BASE_URL}/users`, data);

      if (response.status === 201) {

        return response.data;
      } else {
        throw new Error('Erro ao registrar usuário');
      }
    } catch (error) {
      console.error('Erro ao registrar usuário', error); 
      throw error;
    }
  },

  getUser: async (user_id) => {
    try {
      const response = await axios.get(`${BASE_URL}/users/${user_id}`);

      if (response.status === 200) {
        return response.data;
      } else {
        throw new Error('Erro ao buscar usuário');
      }

    } catch (error) {
      console.log('Erro ao buscar usuário', error);
      throw error;
    }
  }
}

export default authService;
