import { useLoaderData } from "react-router-dom";
import Banner from "../components/Header/Banner/Banner";
import DonationCategories from "../components/DonationCategories/DonationCategories";
import { useEffect, useState } from "react";

const Home = () => {
  // const categories2 = useLoaderData();
  // console.log(categories2);

  const [categories, setCategories] = useState([])
  
  useEffect(()=>{
    fetch('/data.json')
    .then(res=>res.json())
    .then(data=> setCategories(data.data))
  },[]);

  // console.log(categories)

  const handleSearch = (inputFieldValue) => {
    // console.log(event.target.value)    
    const searchedCategories = categories.filter(c=> (c.category).toString().toLowerCase() ==inputFieldValue )

    setCategories( searchedCategories )
  }

  return (
    <div>
      <Banner handleSearch={handleSearch}></Banner>
      <DonationCategories categories={categories}></DonationCategories>
    </div>
  );
};

export default Home;