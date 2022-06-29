import React from "react";
import Header from "../components/Header";
import Card from "../components/Card";
import { tronquer } from "../services/global.js";
import { useState, useEffect } from "react";

function Home() {
  const [unsplash, setUnsplash] = useState([
    {
      alt : "element.alt_description",
      url: "element.urls.full",
      username: "element.user.username",
      pic: "element.user.profile_image.small",
    },
  ]);
  const [renderHtml, setRenderHtml] = useState(
    <div>
      <p>image en cours de chargement</p>
    </div>
  );
  useEffect(() => {
    let response = [];
    async function fetchData(url) {
      try {
        const res = await fetch(url);
        let data = await res.json();
        const array = data.results;
        console.log(data.results)

        array.forEach((element) => {
          response.push({
            alt: element.alt_description,
            url: element.urls.small,
            username: element.user.username,
            pic: element.user.profile_image.small,
          });
        });
        setUnsplash(response);
      } catch (error) {
        console.log(error);
      }
    }
    fetchData(
      "https://api.unsplash.com/search/photos?query=Art&client_id=NtPmUNSwcDiBLX0gnKItq8QDRjnbOamSfTMqK1E-CYE&per_page=20"
    );
  }, []);

  useEffect(() => {
    setRenderHtml(renderCard());
  }, [unsplash]);

  function renderCard() {
    let res = [];
    for (let i = 0; i < unsplash.length; i++) {
      res.push(
        <div key={i}>
          <Card
            alt={unsplash[i].alt}
            src={unsplash[i].url}
            icone={unsplash[i].pic}
            createur={tronquer(unsplash[i].username, 18, 700)}
          />
        </div>
      );
    }
    return res;
  }

  return (
    <div id="home">
      <Header />
      <div className="home">{renderHtml}</div>
    </div>
  );
}

export default Home;
