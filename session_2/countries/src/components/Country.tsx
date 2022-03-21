import React, { FunctionComponent } from 'react';
import { CountryType } from '../types';

interface ICountryProps {
    country :CountryType
}


/* function Country(props: ICountryProps) {
    return (
        <div>
            
        </div>
    );
} */

//fonksiyon yerine deger atamaya dönüstürüyoruz

const Country: FunctionComponent<ICountryProps> = (props) => {
    const {country} = props;
    return (
      <p>
        {country.name} - {country.capital}
      </p>
    );
}


export default Country;