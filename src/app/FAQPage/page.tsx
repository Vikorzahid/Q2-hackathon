import Image from "next/image"
import FAQPage from "@/images/productsImages/FAQPage.png"

export default function FaqpPage(){
    return(
        <div className=" bg-black"> 
            <Image className="absolute top-[250px] w-[1350px] h-[500px]" src={FAQPage} alt="image"></Image>
        </div>
   
           
    )
}