const CardsDetails = ({ card }) => {
     const{title,picture,category,category_bg_color,card_bg_color,text_button_bg_color} = card;
  return (
    <div onClick={'/details'}>
      <div className={`card  w-[312px] bg-[${card_bg_color}]  rounded-xl`}>
        <figure className=" w-full pb-4">
          <img
            src={picture}
            alt=""
            className=""
          />
        </figure>
        <div className="px-4 pb-4 ">
            <h3 className={`text-[${text_button_bg_color}] bg-[${category_bg_color}] w-fit rounded  text-sm font-medium px-2 py-1`}>{category}</h3>

          <h2 className={`text-[${text_button_bg_color}] text-xl font-semibold`}>{title}</h2>
        </div>
      </div>
    </div>
  );
};

export default CardsDetails;
