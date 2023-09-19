
export const useLocalStorage = () => {

export default function useLocalStorage() {

  const setLocalStorage = (key, data) => {
    const setStorage = localStorage.setItem(key, data);
    return setStorage;
  };

  const getLocalStorage = (key) => {
    const Storage = localStorage.getItem(key);
    return Storage;
  };

  return { getLocalStorage, setLocalStorage };
}
