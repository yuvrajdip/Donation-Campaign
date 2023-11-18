import React from 'react';
import { Link } from 'react-router-dom';

const DonationSingleCard = ({ d }) => {
  const {id, price, category, description, title, image, text_color, card_bg, button_bg } = d;
  // console.log(d);
  return (
    <div>
      {/* my hand made donation single card */}
      <div style={{ backgroundColor: `${card_bg}` }} className="h-[220px] flex rounded-md gap-9">
        <img className='w-1/3 h-auto' src={image} alt="" />
        <div className='flex flex-col'>
          <div className="flex-grow">
            <h2 style={{ color: `${text_color}` }} className='text-2xl font-bold py-3'>{title}</h2>
            <h3 style={{ color: `${text_color}` }} className='text-xl font-bold  py-3'>${price}</h3>
            <p className='pr-5'>{description.slice(0, 50) + '...'}</p>
            <Link to={`/donationdetails/${id}`}>
              <button style={{ color: 'white', backgroundColor: text_color }} className='hidden lg:block rounded-md my-2 text-xl py-2 px-4'>Details</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DonationSingleCard;