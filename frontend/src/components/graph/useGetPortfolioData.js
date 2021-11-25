import { useState, useCallback } from "react";
export default function useGetPortfolioData() {
  const [loading, setLoading] = useState(false);
  const funtionretrevial = useCallback((selectedButton, accountName) => {
    // default to 1m and tfsa

    //ENV VAR
    const backend = process.env.REACT_APP_BACKEND_URL;
    // -----------------------------------------------

    setLoading(true);
    fetch(
      `${backend}/api/ws/getHistoricalData/${selectedButton}/${accountName}`
    )
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error("Something went wrong");
        }
      })
      .then((data) => {
        setLoading(false);
        return {
          labels: data.ws_dates,
          datasets: [data.ws_dataset],
        };
      })
      .catch((error) => console.log(error));
  }, []);

  return [funtionretrevial, loading];
}
