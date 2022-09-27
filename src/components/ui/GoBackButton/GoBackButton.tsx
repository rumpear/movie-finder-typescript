import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { IoReturnDownBack } from "react-icons/io5";
import { Button } from "./GoBackButton.styled";

export const GoBackButton = () => {
  const [from, setFrom] = useState({});
  const location = useLocation();
  const navigate = useNavigate();
  const prevLocation = location?.state?.from;

  const handleBtnClick = () => {
    return navigate(from ?? "/");
  };

  useEffect(() => {
    if (prevLocation) {
      setFrom(prevLocation);
    }
  }, [prevLocation]);

  return (
    <Button type="button" onClick={handleBtnClick}>
      <IoReturnDownBack size={30} />
    </Button>
  );
};
