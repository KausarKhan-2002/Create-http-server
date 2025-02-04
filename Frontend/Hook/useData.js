import { useEffect } from "react";
import { useItems } from "../src/Context/ItemsProvider";
import { useLocation, useParams } from "react-router-dom";

const useData = () => {
  const { setData } = useItems();

  const { pathname } = useLocation();

  const { id } = useParams();

  const fetchData = async () => {
    if (pathname == "/") {
      const items = await fetch("http://localhost:5678/");
      const response = await items.json();
      setData(response);
    } else {
      const items = await fetch(`http://localhost:5678/items/${id}`);
      const response = await items.json();
      setData(response);
    }
  };

  useEffect(() => {
    fetchData();
  }, [pathname]);
};

export default useData;
