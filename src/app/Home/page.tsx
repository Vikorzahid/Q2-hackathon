import Image from "next/image"
import Headerhero from "@/images/productsImages/Header hero.png"
import Aboutus1 from "@/images/productsImages/About us 1.png"
import Aboutus2 from "@/images/productsImages/About us2.png"
import FoodCatagory from "@/images/productsImages/Food Catagory.png"
import Whychose from "@/images/productsImages/Why chose.png"
import Clientcustomers from "@/images/productsImages/Clientcustomers.png"
import OurMenu from "@/images/productsImages/Our Menu.png"
import Meetourcheef from "@/images/productsImages/Meet our cheef.png"
import Testimonials from "@/images/productsImages/Testimonials.png"
import RestraindcreativeProcess from "@/images/productsImages/Restraind creative Process.png"
import Blog from "@/images/productsImages/Blog.png"
import Footer from "@/images/productsImages/Footer.png"
export default function Menu(){
    return(
        <div className=" bg-black"> 
            <Image className="absolute top-[50px] w-[1350px] h-[500px]" src={Headerhero} alt="image"></Image>
            <div>
                <Image className="absolute top-[550px] right-10w left-[650px] h-[500px] " src={Aboutus1} alt="image"></Image>
            </div>
            <div>
                <Image className="absolute top-[550px] right-10w left-[2px] h-[500px] " src={Aboutus2} alt="image"></Image>

            </div>
            <div>
                <Image className=" bg-black absolute top-[1055px] right-10w left-[10px] h-[400px] " src={FoodCatagory} alt="image"></Image>

            </div>
            <div>
                <Image className=" bg-black absolute top-[1460px] right-[20px] left-[7px] h-[500px] " src={Whychose} alt="image"></Image>

            </div>
            <div>
                <Image className=" bg-black absolute top-[1970px] right-20w left-[2px] h-[300px] " src={Clientcustomers} alt="image"></Image>

            </div>
            <div>
                <Image className=" bg-black absolute top-[2280px] right-[50px] left-[12px] h-[500px] " src={OurMenu} alt="image"></Image>

            </div>
            <div>
                <Image className=" bg-black absolute top-[2800px] right-[10px] left-[6px] h-[500px] " src={Meetourcheef} alt="image"></Image>

            </div>
            <div>
                <Image className="  bg-black absolute top-[3305px] w-[2500] right-[100px] left-[9px] h-[600px] " src={Testimonials} alt="image"></Image>

            </div>
            <div>
                <Image className=" bg-black absolute  top-[3910px] right-[20px] left-[10px] h-[400px] " src={RestraindcreativeProcess} alt="image"></Image>

            </div>
            <div>
                <Image className=" bg-black absolute  top-[4315px] right-[20px] left-[10px] h-[400px] " src={Blog} alt="image"></Image>

            </div>
            <div>
                <Image className=" bg-black absolute  top-[4720px] right-[20px] left-[10px] h-[400px] " src={Footer} alt="image"></Image>

            </div>
        </div> 
            
    )
}