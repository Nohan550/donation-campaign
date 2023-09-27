import { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";
const Card = () => {
  const [card, setCard] = useState({});
  const { id } = useParams();

  const cards = useLoaderData();

  useEffect(() => {
    const findCard = cards?.find((card) => card.id == id);

    setCard(findCard);
  }, [id, cards]);
  
  const { title, picture, text_button_bg_color, price, description } = card;
  

    const HandleDonate = () =>{

    
          
      const donationArray =[];

      
      const donationCard = JSON.parse(localStorage.getItem('donation')) 
      if(!donationCard){
        donationArray.push(card)
        localStorage.setItem('donation',JSON.stringify(donationArray))
        toast.success(' Wow You Donated', {
            position: "top-center",
            autoClose: 2000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "colored",
            });
          
      }
      else{
    
        const isExist = donationCard.find( card => card.id ===id) 
        // console.log(isExist)
        
      if(!isExist){
        
        
        donationArray.push(...donationCard , card)
        localStorage.setItem('donation',JSON.stringify(donationArray));
        toast.success(' Wow You Donated', {
          position: "top-center",
          autoClose: 2000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "colored",
          });
      }
      else{
       
        toast.error('Already Donated', {
          position: "top-right",
          autoClose: 2000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
          });
      }
  
      }
 
    }
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
            <button
            
              onClick={HandleDonate}
              style={{ backgroundColor: text_button_bg_color }}
              className="btn  text-white"
            >
              Donate {price}
            </button>
          </div>
        </figure>
        <div className="py-14">
          <h2 className="text-4xl font-bold">{title}</h2>
          <p className="text-base h-36 md:h-32 lg:h-24 py-6 font-normal">
            {description}
          </p>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
};

export default Card;
