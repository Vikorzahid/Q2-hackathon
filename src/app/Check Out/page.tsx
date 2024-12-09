import Image from "next/image"
import Cheekoupage from "@/images/productsImages/Cheekoupage.jpg"

export default function CheckOut(){
    return(
        <div className=" bg-black"> 
            <Image className="absolute top-[250px] w-[1350px] h-[500px]" src={Cheekoupage} alt="image"></Image>
        </div>
   
           
    )
}