import { useLocation, useNavigate } from "react-router-dom";

export default function useAppNavigate() {
  const location = useLocation();
  const navigate = useNavigate();

  return (to: string) => {
    navigate(`${to}${location.search}`);
  };
};