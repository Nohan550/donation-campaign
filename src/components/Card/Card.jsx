import { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";

const Card = () => {
    const[card,setCard]=useState({});
    const {id} =useParams();
    
    const cards =useLoaderData();

    useEffect(()=>{
        const findCard = cards?.find((card) => card.id==id);
        
        setCard(findCard)
    },[id,cards])
    const{title,picture,text_button_bg_color,price,description} = card;
    console.log(card)
  return (
    <div>
      <div className=" w-full relative ">
        <figure>
          <img
            src={picture}
            alt=""
            className="w-full md:h-[450px] lg:h-[700px]"
          />
           <div className="justify-start w-full h-20 bottom-[325px] px-9 md:h-36 flex backdrop-brightness-50 items-center md:bottom-72 lg:bottom-64 absolute ">
            <button style={{backgroundColor:text_button_bg_color}} className="btn  text-white">Donate {price}</button>
          </div>
        </figure>
        <div className="py-14">
          <h2 className="text-4xl font-bold">{title}</h2>
          <p className="text-base h-36 md:h-32 lg:h-24 py-6 font-normal">{description}</p>
         
        </div>
      </div>
    </div>
  );
};

export default Card;
