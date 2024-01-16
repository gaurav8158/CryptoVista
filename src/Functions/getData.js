import axios from "axios";

export async function getData() {
  let data;
  try {
  data =await axios.get(
      "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false",
      { crossDomain: true }
    )
      .then((res) => {
        return res.data;
      })
      .catch((error) => {
        console.log(error);
      });
  }
  catch (error) {
    console.log(error);
  }

  return data;
}