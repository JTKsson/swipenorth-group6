import React, { useEffect, useRef } from "react";

const Compass = ({ destination }) => {
  const canvasRef = useRef();

  useEffect(() => {
    // Get the user's current location using the Geolocation API
    navigator.geolocation.getCurrentPosition(function(position) {
      const latitude = position.coords.latitude;
      const longitude = position.coords.longitude;

      // Calculate the bearing to the destination
      const bearing = calculateBearing(latitude, longitude, destination.lat, destination.lng);

      // Draw the compass on a canvas element
      const canvas = canvasRef.current;
      const ctx = canvas.getContext("2d");
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.translate(canvas.width / 2, canvas.height / 2);
      ctx.rotate(-bearing * Math.PI / 180);
      ctx.beginPath();
      ctx.moveTo(0, -canvas.height / 2);
      ctx.lineTo(canvas.width / 2, 0);
      ctx.lineTo(0, canvas.height / 2);
      ctx.lineTo(-canvas.width / 2, 0);
      ctx.closePath();
      ctx.stroke();
    });
  }, [destination]);

  // Function to calculate the bearing between two coordinates
  function calculateBearing(lat1, lon1, lat2, lon2) {
    const dLon = (lon2 - lon1) * Math.PI / 180;
    const y = Math.sin(dLon) * Math.cos(lat2 * Math.PI / 180);
    const x = Math.cos(lat1 * Math.PI / 180) * Math.sin(lat2 * Math.PI / 180) -
              Math.sin(lat1 * Math.PI / 180) * Math.cos(lat2 * Math.PI / 180) * Math.cos(dLon);
    const bearing = Math.atan2(y, x) * 180 / Math.PI;
    return (bearing + 360) % 360;
  }

  return (
    <canvas ref={canvasRef} width={200} height={200}></canvas>
  );
};

export default Compass;