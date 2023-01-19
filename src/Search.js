import { useEffect, useState } from "react";

export function Search() {
  const [countryPhoto, setCountryPhoto] = useState();
  const [country, updateCountry] = useState("Japan");
  const [countryData, setCountryData] = useState("");

  function changeCountry(event) {
    updateCountry(event.target.value);
  }

  async function fetchCountry() {
    const response = await fetch(
      `https://restcountries.com/v2/name/${country}?fields=name,capital,region,population`
    );
    const json = await response.json();
    setCountryData(json[0]);
  }

  async function fetchCountryPhoto() {
    const response = await fetch(
      `./.netlify/functions/photo-getter/?country=${country}`
    );
    if (response.ok) {
      const photo = await response.json();
      //console.log(photo.results[0].urls.regular);
      setCountryPhoto(photo.results[0].urls.regular);
    }
  }

  useEffect(() => {
    fetchCountryPhoto();
    fetchCountry();
  }, [country]);

  return (
    <div className="text-center py-8">
      <h3>Popular countries this week:</h3>
      <div className="mb-2">
        <button className="mr-2" onClick={changeCountry} value="USA">
          USA
        </button>
        <button className="mr-2" onClick={changeCountry} value="Japan">
          Japan
        </button>
        <button className="mr-2" onClick={changeCountry} value="Ukraine">
          Ukraine
        </button>
        <button onClick={changeCountry} value="Taiwan">
          Taiwan
        </button>
      </div>

      <div className="flex justify-center align-middle bg-2">
        <img className="w-2/3 rounded-xl" src={countryPhoto} />
      </div>
      <h1 className="text-8xl font-bold mb-4">{country}</h1>
      <h2 className="text-6xl font-semibold mt-4">Quick Facts</h2>
      <h3 className="text-4xl font-light">Region: {countryData.region}</h3>
      <h3 className="text-4xl font-light">Capital: {countryData.capital}</h3>
      <h3 className="text-4xl font-light">Population: {countryData.population}</h3>
    </div>
  );
}
