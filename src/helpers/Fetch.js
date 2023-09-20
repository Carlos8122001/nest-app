const apiurl = import.meta.env.VITE_API_URL;

export const getFetch = async (route, token) => {
  try {
    const response = await fetch(`${apiurl}${route}`, {
      method: "GET",
      headers: new Headers({
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      }),
    });
    const json = await response.json();
    return json;
  } catch (error) {
    console.log(error);
  }
};

export const postFetch = async (route, data, token) => {
  try {
    let response = await fetch(`${apiurl}${route}`, {
      method: "POST",
      headers: new Headers({
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      }),
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
