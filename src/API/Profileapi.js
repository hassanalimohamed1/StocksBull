import { useState, useEffect } from "react";

async function getData(search) {
  const url = `https://www.alphavantage.co/query?function=OVERVIEW&symbol=${search}&apikey=${YOUR_API_KEY_HERE}`;
  let res = await fetch(url);
  let data = await res.json();
  return data;
}
export default function useProfileAPI(search) {
  const [loading, setLoading] = useState(true);
  const [profile, setProfile] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    (async () => {
      try {
        setProfile(await getData(search));
        setLoading(false);
      } catch (err) {
        setError(err);
        setLoading(false);
      }
    })();
  }, [search]);
  return {
    loading,
    profile,
    error,
  };
}
