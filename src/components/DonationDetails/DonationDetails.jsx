import React, { useEffect, useState } from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import NavBar from '../Header/NavBar/NavBar';
import Swal from 'sweetalert2';

const DonationDetails = () => {
  const { id } = useParams();

  const [selectedData, setSelectedData] = useState({});
  
  const allData = useLoaderData();
  const allData2 = allData.data

  useEffect(() => {
    const selectedCategoryDonation = allData2.find(singleData => singleData.id == id)
    setSelectedData(selectedCategoryDonation)
  }, [id, allData2])

  const { price, title, description, image, text_color } = selectedData;

  const idFromSelectedData = selectedData.id;

  
  const handleDonateButton = (idFromSelectedData) => {
    //* storing selected carts to local storage
    
    const allDonations = []

    const prevDonations = JSON.parse( localStorage.getItem('donations') );
    console.log(prevDonations)

    if( !prevDonations ){
      allDonations.push(selectedData)
      localStorage.setItem( 'donations' , JSON.stringify( allDonations))
      Swal.fire(`Added donation`)
    }
    else{
      const isExits = prevDonations.find( x=> x.id === idFromSelectedData ) 

      if( !isExits){
        allDonations.push( ...prevDonations , selectedData);
        localStorage.setItem( 'donations', JSON.stringify( allDonations ) );
        Swal.fire(`Added donation`)
      }
      else{
        Swal.fire(`You already donated for id: ${id}`)
      }
    }
  }

  return (
    <div>
      {/* my hand made card */}
      <div className="relative w-[80%] mx-auto">
        <img className='w-full h-[70vh] rounded-none' src={image} alt="" />
        <div className='absolute bottom-0 bg-black w-full opacity-80'>
          <button onClick={()=>handleDonateButton(idFromSelectedData)} className='rounded-md m-1 lg:m-4 py-1 px-2 lg:py-4 lg:px-5 text-white text-xl font-bold ' style={{ backgroundColor: `${text_color}` }}>Donate ${price}</button>
        </div>


      </div>
      <div className="w-[80%] mx-auto my-5">
        <h2 className='font-bold text-3xl mb-3'>{title}</h2>
        <p>{description}</p>
      </div>
    </div>
  );
};

export default DonationDetails;