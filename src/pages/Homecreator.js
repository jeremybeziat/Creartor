import React from "react";
import HeaderCreator from "../components/HeaderCreator";
import Card from "../components/Card";
import Ball from "../assets/img/publication/ball.jpg";
import Icon from "../assets/img/icon2.png";
import Galaxi from "../assets/img/publication/galaxi.jpg";
import Statue from "../assets/img/publication/statue.jpg";
import Tache from "../assets/img/publication/tache.jpg";
import Violet from "../assets/img/publication/violet.jpg";
import Trou from "../assets/img/publication/trou_noir.jpg";
import Cloud from "../assets/img/publication/cloud.jpg";
import Blue from "../assets/img/publication/blue.jpg";
import Africa from "../assets/img/publication/africa.jpg";
import Plaque from "../assets/img/publication/plaque.jpg";
import Orange from "../assets/img/publication/orange.jpg";
import Design from "../assets/img/publication/design.jpg";
import Rideau from "../assets/img/publication/rideau.jpg";
import Yellow from "../assets/img/publication/yellow.jpg";

function Home() {
  return (
    <div id="home">
      <HeaderCreator />
      <div className="home">
        <Card
          src={Ball}
          alt="ball"
          icone={Icon}
          creator="icon"
          title="rude_bear"
        />
        <Card
          src={Galaxi}
          alt="galaxi"
          icone={Icon}
          creator="icon"
          title="dangerous_horse"
        />
        <Card
          src={Statue}
          alt="statue"
          icone={Icon}
          creator="icon"
          title="giant_crocodile"
        />
        <Card
          src={Tache}
          alt="statue"
          icone={Icon}
          creator="icon"
          title="giant_crocodile"
        />
        <Card
          src={Violet}
          alt="statue"
          icone={Icon}
          creator="icon"
          title="giant_crocodile"
        />
        <Card
          src={Trou}
          alt="statue"
          icone={Icon}
          creator="icon"
          title="giant_crocodile"
        />
        <Card
          src={Cloud}
          alt="statue"
          icone={Icon}
          creator="icon"
          title="giant_crocodile"
        />
        <Card
          src={Blue}
          alt="statue"
          icone={Icon}
          creator="icon"
          title="giant_crocodile"
        />
        <Card
          src={Africa}
          alt="statue"
          icone={Icon}
          creator="icon"
          title="giant_crocodile"
        />
        <Card
          src={Plaque}
          alt="statue"
          icone={Icon}
          creator="icon"
          title="giant_crocodile"
        />
        <Card
          src={Orange}
          alt="statue"
          icone={Icon}
          creator="icon"
          title="giant_crocodile"
        />
        <Card
          src={Design}
          alt="statue"
          icone={Icon}
          creator="icon"
          title="giant_crocodile"
        />
        <Card
          src={Rideau}
          alt="statue"
          icone={Icon}
          creator="icon"
          title="giant_crocodile"
        />
        <Card
          src={Yellow}
          alt="statue"
          icone={Icon}
          creator="icon"
          title="giant_crocodile"
        />
      </div>
    </div>
  );
}

export default Home;
