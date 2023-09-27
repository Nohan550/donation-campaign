import { Link } from "react-router-dom";

const CardsDetails = ({ card }) => {
  const {
    id,
    title,
    picture,
    category,
    category_bg_color,
    card_bg_color,
    text_button_bg_color,
  } = card;

  return (
    <div>
      <Link to={`/cards/${id}`}>
        <div
          style={{ backgroundColor: card_bg_color }}
          className={`card  w-[312px]  rounded-xl`}
        >
          <figure className=" w-full pb-4">
            <img src={picture} alt="" className="" />
          </figure>
          <div className="px-4 pb-4 ">
            <h3
              style={{
                backgroundColor: category_bg_color,
                color: text_button_bg_color,
              }}
              className={`
             w-fit rounded  text-sm font-medium px-2 py-1`}
            >
              {category}
            </h3>

            <h2
              style={{ color: text_button_bg_color }}
              className={` text-xl font-semibold`}
            >
              {title}
            </h2>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default CardsDetails;
