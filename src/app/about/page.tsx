import Image from "next/image"
 import Aboutus from "@/images/productsImages/About us.png"
 import Whychose from "@/images/productsImages/Why chose us.png"
  import Teammember from "@/images/productsImages/Team Member.png"
  import Testimonials from "@/images/productsImages/Testimonials.png"
  import Foodmenu from "@/images/productsImages/Food Menu.png"

 export default function About(){
    return(
        <div className="bg-white">
            <div className="absolute top-[100px] left-[800px]">
                <p className="text-[#FF9F0D]"> About us</p>
                <p className="font-semibold text-lg text-black"> Food is an important <br/> part Of a balanced Diet</p>
                <p className="text-sm text-gray-500">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque diam<br/> pellentesque bibendum non dui volutpat fringilla bibendum. Urna, elit<br/> augue urna, vitae feugiat pretium donec id elementum. Ultrices mattis<br/> vitae mus risus. Lacus nisi, et ac dapibus sit eu velit in consequat.</p>
            </div>
            <div>
                <h1><Image src={Aboutus} alt="image"></Image></h1>
            </div>
            <div>
                <h1><Image src={Whychose} alt="image"></Image></h1>
            </div>
            <div>
                <h1><Image src={Teammember} alt="image"></Image></h1>
            </div>
            <div>
            <h1><Image src={Testimonials} alt="image"></Image></h1>
            </div>
            <div className=""> 
                <Image className="absolute top-[2800px] w-[1350px] h-[500px]" src={Foodmenu} alt="image"></Image>
            </div> 
            </div>
       )
 }
  
  

