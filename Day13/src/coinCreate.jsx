import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchData } from "./slice1";
import CoinCard from "./coinCard";

export default function CoinCreate() {
  const dispatch = useDispatch();

  const { data, loading, error } = useSelector((state) => state.slice1);

  useEffect(() => {
    dispatch(fetchData(20));
  }, []);

  if (loading) return <h1>Data is Loading</h1>;

  if (error) return <h1>Error has occured</h1>;

  return (
    <>
      <div
        style={{ display: "flex", flexWrap: "wrap", justifyContent: "center" }}
      >
        {data.map((value) => (
          <CoinCard key={value.id} coin={value}></CoinCard>
        ))}
      </div>
    </>
  );
}
