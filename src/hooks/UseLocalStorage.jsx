import React, { useState } from "react";

export default function UseLocalStorage() {
  const setLocalStorage = (key, data) => {
    const setStorage = localStorage.setItem(key,JSON.stringify(data));
    return setStorage;
  };

  const getLocalStorage = (key,data) => {
    const getStorage = JSON.parse(localStorage.getItem(key, data));
    return getStorage;
  };

  return { getLocalStorage, setLocalStorage };
}
