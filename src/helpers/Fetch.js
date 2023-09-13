export const getFetch = async (api) => {
  try {
    const response = await fetch(api);
    const json = await response.json();
    return json;
  } catch (error) {
    console.log(error);
  }
};

export const postFetch = async (api, data ) => {
  try {
    let response = await fetch(api, {
      method: "POST",
      headers: { "Content-type": "application/json; charset=utf-8"},
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
