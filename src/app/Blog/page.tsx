import Image from "next/image"
import Blogpage from "@/images/productsImages/Blogpage.png.png" 



export default function Blog(){
    return(
        <div className=" bg-black"> 
            <Image className="absolute top-[70px] w-[1500px] h-[1800px]" src={Blogpage} alt="image"></Image>
        </div>
     
            
    )
}
