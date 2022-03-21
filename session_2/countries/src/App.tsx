import axios from "axios";
import { useEffect, useState } from "react";
import Country from "./components/Country";
import Loading from "./components/Loading";
import { CountryType } from "./types";

function App() {

    const [countries, setCountries] = useState<CountryType[]>([]);
    const [loading, setLoading] = useState<boolean>(false);

    const getCountries = async() => {
            setLoading(true);
        try {
           const { data } = await axios.get<CountryType[]>(
          "https://restcountries.com/v2/all"
        ); 
        setCountries(data);
        } catch{
            console.log("An error occured during the get");
        } finally {
            setLoading(false);
        }
    };

    //bir fonksiyon ve dependency array aliyor (ne zaman calisacagini söyler. bos girince ne ilk yüklendiginde calisir)
    useEffect(() => {
      getCountries();
    }, []);

    console.log({countries});
    

    //useState ve axios a typelari girmeseydik name i göstermekte problem yasayacaktik
    return <div>
        <Loading loading = {loading}>
            {countries.map(country => {
                return (
                  <Country key={country.name} country={country} />
                );
            })}

        </Loading>
            
    </div>;
    
}

export default App;
