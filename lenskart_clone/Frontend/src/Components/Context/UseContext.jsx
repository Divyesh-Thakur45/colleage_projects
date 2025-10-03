import { createContext, useState } from "react";

export const SearchContext = createContext();

export const SearchProvider = ({ children }) => {
  const [searchData, setSearchData] = useState(null);
  const [productFilter, setProductFilter] = useState(null);
  const [brand, setBrand] = useState(null);
  const [price, setPrice] = useState(null);
  const [gender, setGender] = useState(null);

  return (
    <SearchContext.Provider
      value={{
        searchData,
        setSearchData,
        productFilter,
        setProductFilter,
        brand,
        setBrand,
        price,
        setPrice,
        gender,
        setGender,
      }}
    >
      {children}
    </SearchContext.Provider>
  );
};
