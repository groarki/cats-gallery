import axios from "axios";

export default async function getCats() {
  const cats = await axios.get("https://api.thecatapi.com/v1/images/search", {
    headers: {
      "x-api-key":
        "live_ADCcTWf3YbuJty3S6jee0UIds01H7rTt9arLl13FKxDFubx3XsvHWZiznq45hTfd",
    },
    params: {
      limit: 6,
    },
  });

  return cats.data;
}
