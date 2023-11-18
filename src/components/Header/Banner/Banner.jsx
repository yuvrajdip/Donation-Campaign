import { useState } from "react";

const Banner = ({ handleSearch }) => {

  const [inputField, setInputField] = useState('');

  return (
    <div>
      <div className="relative">
        <div>
          <img className="rounded-md opacity-50 w-full h-[70vh]" src="https://i.ibb.co/gWB9Cr7/charity-93371.webp" alt="" />
        </div>
        <div className="text-center">
          <input
            onChange={() => setInputField(event.target.value)}
            className="rounded-l-md absolute top-1/2 left-[30%] w-[33%] border border-green-500  bg-white px-3 py-2.5 "
            placeholder="Search Here ..."
          />
          <button
            onClick={() => handleSearch(inputField)}
            className="absolute top-1/2 left-[63%] text-white bg-[#FF444A] py-[0.67rem] px-6 text-md font-bold"
          >
            Search
          </button>
        </div>
      </div>
    </div>
  );
};

export default Banner;