import Image from "next/image"
import Erorpage from "@/images/productsImages/Erorpage.png"

export default function Erorr(){
    return(
        <div className=" bg-black"> 
            <Image className="absolute top-[250px] w-[1350px] h-[500px]" src={Erorpage} alt="image"></Image>
        </div>
   
           
    )
}