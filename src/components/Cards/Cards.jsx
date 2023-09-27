import { useEffect, useState } from "react";
import CardsDetails from "../CardsDetails/CardsDetails";



const Cards = () => {
    const[cards,setCards]=useState();
    
    useEffect(
         () => {
            fetch('/infos.json')
             .then(res => res.json())
             .then(data => setCards(data))
        }
         ,[])
   
    return (
        <div className="grid md:grid-cols-2 lg:grid-cols-4 px-9 lg:px-0 gap-6 py-24 ">
            
        {

        cards?.map(card=> <CardsDetails key={card.id} card={card}></CardsDetails>)

        }
       
        </div>
    );
};

export default Cards;