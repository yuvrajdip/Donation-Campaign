// import DonationDetails from "../DonationCategory/DonationCategory";

import DonationCategory from "../DonationCategory/DonationCategory";

const DonationCategories = ({ categories }) => {
  const donationCategories = categories;

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 py-10">
      {
        donationCategories.map(donationCategory => <DonationCategory
          key={donationCategory.id}
          donationCategory={donationCategory}
        ></DonationCategory>
        )
      }
    </div>
  );
};

export default DonationCategories;