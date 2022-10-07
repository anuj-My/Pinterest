import { setSelectionRange } from "@testing-library/user-event/dist/utils";
import { useEffect, useState } from "react";
import unsplashapi from "../Apis/unsplashapi";
import Navbar from "../components/Navbar";
import PinterestGrid from "../components/PinterestGrid";
const Home = () => {
  const [data, setData] = useState([]);

  async function getUnsplashData(term) {
    const response = await unsplashapi.get("/search/photos/", {
      params: {
        query: term,
      },
    });
    return response;
  }

  const onSearchSubmit = (term) => {
    getUnsplashData(term).then((res) => {
      let results = res.data.results;

      let newPins = [...results, ...data];

      setData(newPins);
    });
  };

  const getNewPins = () => {
    let promises = [];
    let pinData = [];

    let pins = ["ocean", "anime", "naruto", "cats", "tokyo", "ghost", "nature"];

    pins.forEach((pinterm) => {
      promises.push(
        getUnsplashData(pinterm).then((res) => {
          let result = res.data.results;
          pinData = pinData.concat(result); //concating array
          // console.log(pinData);

          pinData.sort(function (a, b) {
            return 0.5 - Math.random();
          });
        })
      );
    });
    Promise.all(promises).then(() => {
      setData(pinData);
    });
  };

  useEffect(() => {
    getNewPins();
  }, []);

  return (
    <div>
      <Navbar onSubmit={onSearchSubmit} />
      <PinterestGrid data={data} />
    </div>
  );
};

export default Home;
