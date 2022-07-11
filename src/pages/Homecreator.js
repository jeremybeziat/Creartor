import React from "react";
import HeaderCreator from "../components/HeaderCreator";
import { useState, useEffect } from "react";
import CardCreator from "../components/CardCreator";
import { tronquer } from "../services/global.js";

function Home() {
  const [unsplash, setUnsplash] = useState([
    {
      url: "element.urls.regular",
      username: "element.user.username",
      pic: "element.user.profile_image.full",
    },
  ]);
  const [renderHtml, setRenderHtml] = useState(
    <div>
      <p>image en cours de chargement !</p>
    </div>
  );
  useEffect(() => {
    let response = [];
    async function fetchData(url) {
      try {
        const res = await fetch(url);
        let data = await res.json();
        const array = data.results;
        console.log(data.results);

        array.forEach((element) => {
          response.push({
            url: element.urls.regular,
            username: element.user.username,
            pic: element.user.profile_image.full,
          });
        });
        setUnsplash(response);
      } catch (error) {
        console.log(error);
      }
    }
    fetchData(
      "https://api.unsplash.com/search/photos?query=Art&client_id=NtPmUNSwcDiBLX0gnKItq8QDRjnbOamSfTMqK1E-CYE&per_page=30"
    );
  }, []);

  useEffect(() => {
    function renderCard() {
      let res = [];
      for (let i = 0; i < unsplash.length; i++) {
        res.push(
          <div key={i}>
            <CardCreator
              alt={unsplash[i].alt}
              src={unsplash[i].url}
              icone={unsplash[i].pic}
              createur={tronquer(unsplash[i].username, 15, 700)}
            />
          </div>
        );
      }
      return res;
    }
    setRenderHtml(renderCard());
  }, [unsplash]);

  return (
    <div id="home">
      <HeaderCreator />
      <div className="home">{renderHtml}</div>
    </div>
  );
}

export default Home;
