import React from "react";
import { useEffect, useState } from "react";
import "./jobCard.css";

export default function JobCardFetch() {
  const [ads, setAds] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [sparadeJobData, setSparadeJobData] = useState([]);
  // const currentAd = ads[currentIndex];

  const handleNejTackClick = () => {
    console.log("nej tack button clicked");
    setCurrentIndex((currentIndex - 1) % ads.length);
  };

  const handleSparaClick = () => {
    console.log("spara button clicked");
    setCurrentIndex((currentIndex + 1) % ads.length);
  };

  const handlePrevClick = () => {
    console.log("next button clicked");
    setCurrentIndex((currentIndex - 1) % ads.length);
  };

  const handleNextClick = () => {
    console.log("next button clicked");
    setCurrentIndex((currentIndex + 1) % ads.length);
  };

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch("/api/ads");
      const data = await response.json();
      setAds(data);
    };

    fetchData();
  }, []);
  console.log(ads);

  if (!ads) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      {ads.map((ad, index) => (
        <div
          className="jobContainer"
          key={ad.annonsId}
          style={{ display: index === currentIndex ? "flex" : "none" }}
        >
          <p className="jobTitle">{ad.annonsrubrik}</p>
          <p>{ad.yrkesroll.namn}</p>
          {/* <p>{ad.arbetsplatsadress.kommun?.namn}</p> */}
          <p>
            {ad.arbetsplatsadress.kommun
              ? ad.arbetsplatsadress.kommun.namn
              : "Se adress"}
          </p>
          <p>current index: {index}</p>
          <div className="btnContainer">
            <div>
              <button onClick={handleNejTackClick}>Nej Tack</button>
              <button onClick={handleSparaClick}>Spara</button>
            </div>
            <div>
              <button onClick={handlePrevClick}>Föregående</button>
              <button onClick={handleNextClick}>Nästa</button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
