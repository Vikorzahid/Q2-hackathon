import Image from "next/image"
 import unsplash from "@/images/productsImages/unsplash.png"
 import unsplash2 from "@/images/productsImages/unsplash2.png"
 import unsplash3 from "@/images/productsImages/unsplash3.png"
export function Footer(){
    return(
        <footer className="font-sans tracking-wide bg-black pt-12 pb-4 px-10">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-screen-xl mx-auto">
        <div>
          <h4 className="text-[#FFA726] font-semibold text-lg mb-6">About Us.</h4>
          <p>orporate clients and leisure travelers hasbeen <br/> relying on Groundlink for dependablesafe, and <br/>  professional chauffeured carservice in major<br/>  cities across World.</p>
          <p><br/>Opening Houres Mon - Sat(8.00 - 6.00) Sunday - Closed</p>          
        </div>


        <div>
          <h4 className="text-[#FFA726] font-semibold text-lg mb-6">Useful Links</h4>
          <ul className="space-y-4">
            <li>
              <a href="javascript:void(0)" className="hover:text-[#FFA726] text-gray-300 text-[15px] transition-all">About</a>
            </li>
            <li>
              <a href="javascript:void(0)" className="hover:text-[#FFA726] text-gray-300 text-[15px] transition-all">News</a>
            </li>
            <li>
              <a href="javascript:void(0)" className="hover:text-[#FFA726] text-gray-300 text-[15px] transition-all">Partens</a>
            </li>
            <li>
              <a href="javascript:void(0)" className="hover:text-[#FFA726] text-gray-300 text-[15px] transition-all">Team</a>
            </li>
            <li>
              <a href="javascript:void(0)" className="hover:text-[#FFA726] text-gray-300 text-[15px] transition-all">Menu</a>
            </li>
            <li>
              <a href="javascript:void(0)" className="hover:text-[#FFA726] text-gray-300 text-[15px] transition-all">Contac</a>
            </li>
          </ul>
        </div>

        <div>
          <h4 className="text-[#FFA726] font-semibold text-lg mb-6">Help</h4>
          <ul className="space-y-5">
            <li>
              <a href="javascript:void(0)" className="hover:text-[#FFA726] text-gray-300 text-[15px] transition-all">FAQ</a>
            </li>
            <li>
              <a href="javascript:void(0)" className="hover:text-[#FFA726] text-gray-300 text-[15px] transition-all">Terams & Conditions</a>
            </li>
            <li>
              <a href="javascript:void(0)" className="hover:text-[#FFA726] text-gray-300 text-[15px] transition-all">Reporting</a>
            </li>
            <li>
              <a href="javascript:void(0)" className="hover:text-[#FFA726] text-gray-300 text-[15px] transition-all">Documentation</a>
            </li>
            <li>
              <a href="javascript:void(0)" className="hover:text-[#FFA726] text-gray-300 text-[15px] transition-all">Suport Policy</a>
            </li>
            <li>
              <a href="javascript:void(0)" className="hover:text-[#FFA726] text-gray-300 text-[15px] transition-all">Privacy</a>
            </li>
          </ul>
        </div>

        <div>
          <h4 className="text-[#FFA726] font-semibold text-lg mb-3">Recent Post</h4>
          <ul className="space-y-2">
            <li>
              <Image src={unsplash} alt="image"></Image><h1>Is fastfood good for your body? February 28,2022</h1>
            </li>
            <li>
            <Image src={unsplash2} alt="image"></Image><h1>Change your food habit With organic food February 28,2022</h1>
            </li>
            <li>
            <Image src={unsplash3} alt="image"></Image><h1>Do you like fastfood for your life? February 28,2022</h1>
            </li>
              </ul>
        </div>
      </div>

      <div className="border-t text-center border-[#6b5f5f] pt-4 mt-8">
        <p className="text-gray-300 text-[15px]">
          © Zahid Ullah UI. All rights reserved.
        </p>
      </div>
    </footer>
    )
}