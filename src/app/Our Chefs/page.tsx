import Image from "next/image"
import OurChefs from "@/images/productsImages/OurChefs.png"

export default function OurChef(){
    return(
        <div className=" bg-black"> 
            <Image className="absolute top-[250px] w-[1350px] h-[500px]" src={OurChefs} alt="image"></Image>
        </div>
   
           
    )
}
