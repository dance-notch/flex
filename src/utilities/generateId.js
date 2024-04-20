import React from "react";

function generateId() {
  const characters = "0123456789";
  const idLength = 6;
  let id = "";

  for (let i = 0; i < idLength; i++) {
    const randomIndex = Math.floor(Math.random() * characters.length);
    id += characters.charAt(randomIndex);
  }

  return id;
}

export default generateId;
