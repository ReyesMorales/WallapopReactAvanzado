import { login } from './components/auth/service';
import { LOGIN_SUCCESS, LOGIN_FAILURE } from './store';

export const loginUser = (credentials, remember) => {
    return async (dispatch) => {
      try {
        // Realizar la llamada al método login y obtener la respuesta
        const response = await login(credentials, remember);
        
        // Despachar la acción de login exitoso
        dispatch({ type: LOGIN_SUCCESS, payload: response });
      } catch (error) {
        // Despachar la acción de login fallido
        dispatch({ type: LOGIN_FAILURE, payload: error.message });
      }
    };
  };
  
