import React from 'react'
import { useEffect, useState } from 'react';
import "./jobCard.css";

export default function JobCardFetch() {
  const [ads, setAds] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch('/api/ads');
      const data = await response.json();
      setAds(data);
    };

    fetchData();
  }, []);

  if (!ads) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      {ads.map(ad => (
        <div className='jobContainer' key={ad.annonsId}>
          <p className='jobTitle'>{ad.annonsrubrik}</p>
          {/* <p>{ad.yrkesroll}</p> */}
          {/* <p>{ad.arbetsplatsadress.kommun}</p> */}


        </div>
      ))}
    </div>
  );
};