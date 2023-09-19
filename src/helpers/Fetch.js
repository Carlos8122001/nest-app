const apiurl = import.meta.env.VITE_API_URL;

export const getFetch = async (route) => {
  try {
    const response = await fetch(`${apiurl}${route}`);
    const json = await response.json();
    return json;
  } catch (error) {
    console.log(error);
  }
};

export const postFetch = async (route, data) => {
  try {
    let response = await fetch(`${apiurl}${route}`, {
      method: "POST",
      headers: { "Content-type": "application/json; charset=utf-8" },
      body: JSON.stringify(data),
    });

    if (response.ok) {
      const jsonResponse = await response.json();
      return jsonResponse;
    }
  } catch (err) {
    return console.log("petición fallida", err);
  }
};