import { useState } from 'react';
import { AsyncPaginate } from 'react-select-async-paginate';
import { fetchCities } from '../service/location';

type LocationSearchProps = {
  onChangeSearch: (value: any) => void;
};

const LocationSearch = ({ onChangeSearch }: LocationSearchProps) => {
  const [searchValue, setSearchValue] = useState(null);

  const loadOptions = async (inputValue: string) => {
    const citiesList = await fetchCities(inputValue);

    return {
      options: citiesList.data.map((city: ICity) => {
        return {
          value: `${city.latitude} ${city.longitude}`,
          label: `${city.name}, ${city.region}, ${city.country}`,
        };
      }),
    };
  };

  const onChangeHandler = (enteredData: any) => {
    setSearchValue(enteredData);
    onChangeSearch(enteredData);
  };

  return (
    <AsyncPaginate
      aria-label="search city location"
      value={searchValue}
      placeholder="Search city"
      loadOptions={loadOptions}
      onChange={onChangeHandler}
      debounceTimeout={1000}
    />
  );
};

export default LocationSearch;
