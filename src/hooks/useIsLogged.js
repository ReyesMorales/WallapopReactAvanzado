import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

export const useIsLogged = (isLogged) => {
  const navigate = useNavigate();

  useEffect(() => {
    if (!isLogged) {
      navigate('/login');
    }
  }, [isLogged, navigate]);
};
