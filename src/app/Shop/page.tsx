import Image from "next/image"
import ShopDetails from "@/images/productsImages/Blogpage.png.png"
import ShoppingCart from "@/images/productsImages/BlogDetailspage.png"

export default function Shop(){
    return(
        <div className=" bg-black"> 
            <div>
                <Image className="absolute top-[900px]  h-[1000px] " src={ShopDetails} alt="image"></Image>
            </div>
            <div>
                <Image className="absolute top-[800px]  h-[1500px] " src={ShoppingCart} alt="image"></Image>

            </div>
            <div>
            </div>
        </div> 
            
    )
}


