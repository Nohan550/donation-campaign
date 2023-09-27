import { useEffect, useState } from "react";
import DonationCardList from "../DonationCardList/DonationCardList";

const DonationCart = () => {
    const[donation,setDonation]=useState([]) 
     const[noData,setNoData]=useState(false)
     const[isShow,setIsShow]=useState(4)
    useEffect(()=>{
        const donationCard = JSON.parse(localStorage.getItem('donation')); 
        if(donationCard){
            setDonation(donationCard)
        }
        else{
          setNoData('No Donation Made')
        }
    },[])
  
    return (
        <div>
            {noData?<p className="text-5xl font-semibold text-center">{noData}</p> :<div>
                
                    <div className="grid md:grid-cols-2 gap-6">
                        {donation?.slice(0,isShow).map(card => <DonationCardList key={card.id} card={card}></DonationCardList>)}
                    </div>
                <div className={isShow === donation.length ? "hidden" : ""}><div className="flex justify-center">
                <button  onClick={()=> setIsShow(donation.length)} className="btn my-10  text-white bg-[#009444]"> See All</button></div></div>
                </div>}
        </div>
    );
};

export default DonationCart;