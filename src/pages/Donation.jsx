import { useEffect, useState } from "react";
import DonationSingleCard from "../components/DonationSingleCard/DonationSingleCard";

const Donation = () => {
  const [showAll, setShowAll] = useState(false);

  const [noDataFound, setNoDataFound] = useState(false);

  const [data, setData] = useState([]);
  useEffect(() => {
    const donatedItems = JSON.parse(localStorage.getItem('donations'));
    if (donatedItems) {
      setData(donatedItems);
    }
    else {
      setNoDataFound(true);
    }
  }, [])

  const handleRemove = () => {
    localStorage.clear();
    setData([]);
    setNoDataFound("No Data Found");
  };

  return (
    <>
      {
        noDataFound ? (<p className="h-[80vh] flex justify-center items-center text-2xl">No data found! Please add some donations</p>)
          : (
            <div>
              {
                data.length > 0 && (
                  <div>
                    <button
                      onClick={handleRemove}
                      className="text-white font-bold my-5 px-4 py-3 rounded-md bg-orange-300 block mx-auto"
                    >
                      Deleted All Donations
                    </button>
                  </div>
                )
              }
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
                {
                  showAll ? data.map((d) => (
                    <DonationSingleCard key={d.id} d={d}></DonationSingleCard>
                  ))

                    : data.slice(0, 2).map((d) => (
                      <DonationSingleCard key={d.id} d={d}></DonationSingleCard>
                    ))
                }
              </div>

              {data.length >= 1 && <button onClick={() => setShowAll(!showAll)} className="my-5 px-4 py-3 rounded-md bg-green-400 block mx-auto font-bold text-white">
                {showAll ? "See less" : "Show All"}
              </button>}
            </div>
          )
      }
    </>


  );
};

export default Donation;  