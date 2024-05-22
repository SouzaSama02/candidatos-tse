import axios from "axios";

import verificate from "./verificateFields.js";

export async function callApi(values) {
  const queryString = verificate(values);

  console.log(queryString);
  const apiUrl = `https://hackathon-orbita-2024-elotfz5co-rodrigobeckmanns-projects.vercel.app/candidatos?${queryString}`;

  try {
    const response = await axios.get(apiUrl);
    console.log(response.data);
  } catch (e) {
    console.error(e);
  }
}

callApi({ estado: "BA", municipio: "xique" });
