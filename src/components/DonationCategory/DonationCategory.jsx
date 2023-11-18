import { useNavigate } from "react-router-dom";

const DonationCategory = ({ donationCategory }) => {
  // console.log(donationCategory);
  const { id, image, title , category , card_bg , text_color , button_bg} = donationCategory || {} ; //* optional destructuring
  // console.log(text_color, button_bg , card_bg);


  const navigate = useNavigate();
  const handleDonationCategory = (id)=> {
    // console.log(id);
    navigate(`/donationdetails/${id}`);
  }

  return (
    <div onClick={()=>handleDonationCategory(id)} className="hover:cursor-pointer">
      <div style={{backgroundColor:`${card_bg}`}} className='m-3 rounded-t-lg flex flex-col bg-clip-border text-gray-700 shadow-md'>
        <div className="overflow-hidden bg-blue-gray-500 bg-clip-border text-white shadow-lg shadow-blue-gray-500/40">
          <img
            className="w-full"
            src={image}
            alt="img-blur-shadow"
            layout="fill"
          />
        </div>
        <div className="pt-3 pl-6">
          <button style={{backgroundColor:`${button_bg}`, color: `${text_color}`}}
            className="rounded-md select-none py-[4px] px-[10px] text-center align-middle font-sans text-xs font-bold uppercase shadow-md shadow-pink-500/20 transition-all hover:shadow-lg hover:shadow-pink-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
            type="button"
            data-ripple-light="true"
          >
            {category}
          </button>
        </div>
        <div className="p-6">
          <h5 style={{color:`${text_color}`}} className="mb-2 block font-sans text-xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased">
            {title}
          </h5>
        </div>
      </div>
    </div>
  );
};

export default DonationCategory;