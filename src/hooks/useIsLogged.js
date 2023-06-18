import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { LOGOUT } from './../store/reducers/sessionReducer';

export const useIsLogged = () => {
  const navigate = useNavigate();
  const isLoggedIn = useSelector((state) => state.session.isLoggedIn);
  const dispatch = useDispatch();
  
  useEffect(() => {
    if (!isLoggedIn) {
      navigate('/login');
      dispatch({ type: LOGOUT });
    }
  }, [dispatch, isLoggedIn, navigate]);
};
