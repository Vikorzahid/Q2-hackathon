import Image from "next/image"
 import Menu2 from "@/images/productsImages/Menu2.png"
 import Coffee from "@/images/productsImages/Coffee.png"
 import unsplash4 from "@/images/productsImages/unsplash4.png"
 import Clientcustomers from "@/images/productsImages/Clientcustomers.png"
 import unsplash5 from "@/images/productsImages/unsplash5.png"
 import unsplash6 from "@/images/productsImages/unsplash6.png"
 import Clientsandpartner from "@/images/productsImages/Clients and partner.png"
import Component75 from "@/images/productsImages/Component 75.png"
 

 
 export default function Menu(){
    return(
        <div className="bg-white menu">
            <div className="absolute top-[80px] left-[600px]  ">
                <h1><Image src={Coffee} alt="image"></Image></h1>
            </div>
            <div className=" absolute top-[105px] left-[600px]">
                <h1 className="font-extrabold text-[150px]-Helvetica text-[#333333]"> Starter Menu</h1>
                <h1 className=" font-bold text-[24px]-Helvetica text-[#333333] mt-[10px]">Alder Grilled Chinook Salmon<p className="text-center absolute left-[500px] top-[40px] text-[#FF9F0D]">32$</p></h1> 
                <p className="font-normal text-sm  text-[#4F4F4F] mt-[10px]">Toasted French bread topped with romano, cheddar </p>
                <p className="text-[#828282] mt-[10px]">560 CAL</p>
                <h1 className="font-bold text-[24px]-Helvetica text-[#FF9F0D] mt-[10px]">Berries and creme tart<p className="text-center absolute left-[500px] top-[130px] text-[#FF9F0D]">43$</p></h1> 
                <p className="font-normal text-sm text-[#4F4F4F] mt-[10px]">Gorgonzola, ricotta, mozzarella, taleggio</p>
                <p className="font-normal text-[#828282] mt-[10px]">700 CAL</p>
                <h1 className="font-bold text-[24px]-Helvetica text-[#333333] mt-[10px]">Tormentoso Bush Pizza Pintoage<p className="text-center absolute left-[500px] top-[230px] text-[#FF9F0D]"> 14$</p></h1> 
                <p className="font-normal text-sm text-[#4F4F4F]">Ground cumin, avocados, peeled and cubed</p>
                <p className="text-[#828282] mt-[10px]">1000 CAL</p>
                <h1 className="font-bold text-[24px]-Helvetica text-[#333333] mt-[10px]">Spicy Vegan Potato Curry<p className="text-center absolute left-[500px] top-[307px] text-[#FF9F0D]">35$</p></h1> 
                <p className="font-normal text-sm text-[#4F4F4F] mt-[10px]">Spreadable cream cheese, crumbled blue cheese</p>
                <p className="text-[#828282] mt-[10px]"> 560 CAL</p>
            </div>
            <div className=""> <Image className="absolute top-[85px] left-[150px] w-[348px] h-[426px]" src={Menu2} alt="image" ></Image></div>
        
            <div className="absolute top-[80px] left-[600px]  ">
                <h1><Image src={Coffee} alt="image"></Image></h1>
            </div>
            <div className=" absolute top-[600px] left-[140px]">
                <h1 className="font-extrabold text-[150px]-Helvetica text-[#333333]"> Main Course</h1>
                <h1 className=" font-bold text-[24px]-Helvetica text-[#333333] mt-[10px]">Optic Big Breakfast Combo Menu<p className="text-center absolute left-[500px] top-[40px] text-[#FF9F0D]">32$</p></h1> 
                <p className="font-normal text-sm  text-[#4F4F4F] mt-[10px]">Toasted French bread topped with romano, cheddar </p>
                <p className="text-[#828282] mt-[10px]">560 CAL</p>
                <h1 className="font-bold text-[24px]-Helvetica text-[#FF9F0D] mt-[10px]">Cashew Chicken With Stir-Fry<p className="text-center absolute left-[500px] top-[130px] text-[#FF9F0D]">43$</p></h1> 
                <p className="font-normal text-sm text-[#4F4F4F] mt-[10px]">Gorgonzola, ricotta, mozzarella, taleggio</p>
                <p className="font-normal text-[#828282] mt-[10px]">700 CAL</p>
                <h1 className="font-bold text-[24px]-Helvetica text-[#333333] mt-[10px]">Vegetables & Green Salad<p className="text-center absolute left-[500px] top-[230px] text-[#FF9F0D]"> 14$</p></h1> 
                <p className="font-normal text-sm text-[#4F4F4F]">Ground cumin, avocados, peeled and cubed</p>
                <p className="text-[#828282] mt-[10px]">1000 CAL</p>
                <h1 className="font-bold text-[24px]-Helvetica text-[#333333] mt-[10px]">Spicy Vegan Potato Curry<p className="text-center absolute left-[500px] top-[307px] text-[#FF9F0D]">35$</p></h1> 
                <p className="font-normal text-sm text-[#4F4F4F] mt-[10px]">Spreadable cream cheese, crumbled blue cheese</p>
                <p className="text-[#828282] mt-[10px]"> 560 CAL</p>
            </div>
            <div className=""> 
                <Image className="absolute top-[600px] left-[800px] w-[348px] h-[426px]" src={unsplash4} alt="image" ></Image>
            </div>
            <div className="">
                <Image className="absolute top-[1100px] left-[-1px]  w-[1723px] h-[298px]" src={Clientcustomers} alt="image" ></Image>
            </div>
            <div className="absolute top-[80px] left-[600px]  ">
                <h1><Image src={Coffee} alt="image"></Image></h1>
            </div>
            <div className=" absolute top-[1500px] left-[600px]">
                <h1 className="font-extrabold text-[150px]-Helvetica text-[#333333]"> Dessert</h1>
                <h1 className=" font-bold text-[24px]-Helvetica text-[#333333] mt-[10px]">Fig and lemon cake<p className="text-center absolute left-[500px] top-[40px] text-[#FF9F0D]">32$</p></h1> 
                <p className="font-normal text-sm  text-[#4F4F4F] mt-[10px]">Toasted French bread topped with romano, cheddar</p>
                <p className="text-[#828282] mt-[10px]">560 CAL</p>
                <h1 className="font-bold text-[24px]-Helvetica text-[#333333] mt-[10px]">Creamy mascarpone cake<p className="text-center absolute left-[500px] top-[130px] text-[#FF9F0D]">43$</p></h1> 
                <p className="font-normal text-sm text-[#4F4F4F] mt-[10px]">Gorgonzola, ricotta, mozzarella, taleggio</p>
                <p className="font-normal text-[#828282] mt-[10px]">700 CAL</p>
                <h1 className="font-bold text-[24px]-Helvetica text-[#333333] mt-[10px]">Pastry, blueberries, lemon juice<p className="text-center absolute left-[500px] top-[230px] text-[#FF9F0D]"> 14$</p></h1> 
                <p className="font-normal text-sm text-[#4F4F4F]">Ground cumin, avocados, peeled and cubed</p>
                <p className="text-[#828282] mt-[10px]">1000 CAL</p>
                <h1 className="font-bold text-[24px]-Helvetica text-[#333333] mt-[10px]">Pain au chocolat<p className="text-center absolute left-[500px] top-[307px] text-[#FF9F0D]">35$</p></h1> 
                <p className="font-normal text-sm text-[#4F4F4F] mt-[10px]">Spreadable cream cheese, crumbled blue cheese</p>
                <p className="text-[#828282] mt-[10px]"> 560 CAL</p>
            </div> 
            <div className=""> <Image className="absolute top-[1500px] left-[150px] w-[348px] h-[426px]" src={unsplash5} alt="image" ></Image></div>
            <div className="absolute top-[80px] left-[600px]  ">
                <h1><Image src={Coffee} alt="image"></Image></h1>
            </div>
            <div className=" absolute top-[2000px] left-[140px]">
                <h1 className="font-extrabold text-[150px]-Helvetica text-[#333333]"> Drinks</h1>
                <h1 className=" font-bold text-[24px]-Helvetica text-[#333333] mt-[10px]">Caffè macchiato<p className="text-center absolute left-[500px] top-[40px] text-[#FF9F0D]">32$</p></h1> 
                <p className="font-normal text-sm  text-[#4F4F4F] mt-[10px]">Toasted French bread topped with romano, cheddar </p>
                <p className="text-[#828282] mt-[10px]">560 CAL</p>
                <h1 className="font-bold text-[24px]-Helvetica text-[#333333]  mt-[10px]">Aperol Spritz Capacianno<p className="text-center absolute left-[500px] top-[130px] text-[#FF9F0D]">43$</p></h1> 
                <p className="font-normal text-sm text-[#4F4F4F] mt-[10px]">Gorgonzola, ricotta, mozzarella, taleggio</p>
                <p className="font-normal text-[#828282] mt-[10px]">700 CAL</p>
                <h1 className="font-bold text-[24px]-Helvetica text-[#333333] mt-[10px]">Caffe Latte Campuri<p className="text-center absolute left-[500px] top-[230px] text-[#FF9F0D]"> 14$</p></h1> 
                <p className="font-normal text-sm text-[#4F4F4F]">Ground cumin, avocados, peeled and cubed</p>
                <p className="text-[#828282] mt-[10px]">1000 CAL</p>
                <h1 className="font-bold text-[24px]-Helvetica text-[#333333] mt-[10px]">Tormentoso BushTea Pintoage<p className="text-center absolute left-[500px] top-[307px] text-[#FF9F0D]">35$</p></h1> 
                <p className="font-normal text-sm text-[#4F4F4F] mt-[10px]">Spreadable cream cheese, crumbled blue cheese</p>
                <p className="text-[#828282] mt-[10px]"> 560 CAL</p>
            </div>
            <div className=""> 
                <Image className="absolute top-[2000px] left-[800px] w-[348px] h-[426px]" src={unsplash6} alt="image" ></Image>
            </div>
            <div className=""> 
                <Image className="absolute top-[2400px] left-[150px] w-[1000px] h-[226px]" src={Clientsandpartner} alt="image" ></Image>
            </div> 
            <div className=""> 
                <Image className="absolute top-[2800px] w-[1350px] h-[500px]" src={Component75} alt="image"></Image>
            </div> 
        </div>
    
    )
 }
  

  
