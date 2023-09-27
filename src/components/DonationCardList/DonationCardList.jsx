import { Link } from "react-router-dom";

const DonationCardList = ({ card }) => {
    const { id, category, title, picture,card_bg_color,category_bg_color, text_button_bg_color, price } = card;
  return (
    <div>
      <div style={{backgroundColor:card_bg_color}} className=" md:w-[400px ] lg:w-[600px] rounded-lg h-52">
        <div className=" flex">
          <img
            src={picture}
            className="h-52 w-52 rounded-lg"
          />
          <div className="flex flex-col pl-2 justify-center">
            <h1 style={{backgroundColor:category_bg_color,color:text_button_bg_color}} className="text-sm font-normal w-fit px-2 py-1 rounded">{category}</h1>
            <p className=" py-2 text-2xl font-semibold">
           {title}
            </p>
            <h1 style={{color:text_button_bg_color}} className="pb-3">{price}</h1>
            <Link to={`/cards/${id}`}>
            <button style={{background:text_button_bg_color}} className="btn w-fit text-white">View Details</button></Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DonationCardList;
