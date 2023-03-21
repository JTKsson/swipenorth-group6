import React from "react";

export const Card = () => {
  const cardArray = [
    {
      title: "Fritidsledare",
      company: "Sollentuna Kommun",
      applyDate: "2023-04-09",
      employment: "heltid, tillsvidareanstälning",
    },

    {
      title: "Bibliotikarie",
      company: "Farsta Kommun",
      applyDate: "2023-05-09",
      employment: "deltid, timvikariat",
    },

    {
      title: "Administratör",
      company: "Astra Zeneca",
      applyDate: "2023-04-03",
      employment: "heltid, vikariat",
    },

    {
      title: "Förskolelärare",
      company: "Montesoriskola",
      applyDate: "2023-06-04",
      employment: "deltid, ferieanställning",
    },
  ];

  return (
  <div>
    <p>{card.title}</p>
    <p>{card.company}</p>
    <p>{card.applyDate}</p>
    <p>{card.employment}</p>
  </div>
  );
};
