import Image from "next/image"
import shop from "@/images/productsImages/shop.png"
import ShopDetails from "@/images/productsImages/Blogpage.png.png"
import ShoppingCart from "@/images/productsImages/BlogDetailspage.png"

export default function Shop(){
    return(
        <div className=" bg-black"> 
            <Image className="absolute top-[100px] w-[1350px] h-[1000px]" src={shop} alt="image"></Image>
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


