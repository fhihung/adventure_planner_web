import { useNavigate } from 'react-router-dom';

export const useCustomNavigate = () => {
  const navigate = useNavigate();

  const navigateTo = (target) => {
    navigate(`/${target}`);
  };

  return navigateTo;
};
