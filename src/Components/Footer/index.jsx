import { IconBrandFacebook, IconBrandInstagram, IconBrandLinkedin, IconBrandTwitterFilled } from "@tabler/icons-react"


function Footer() {
  return (
    <>
     <div className="w-full h-96 mt-12 p-10 ">

           <div className="w-full h-full  flex justify-center px-5 pt-5 gap-48">

                 <div className=" h-full flex flex-col  gap-4">
                     <p className="text-lg font-semibold">Home</p>
                     <p>Businesses</p>
                     <p>Suppliers</p>
                     <p>Use Cases</p>
                     <p>FAQ</p>
                     <p>About Us</p>
                 </div>

                 <div className="h-full flex flex-col  gap-4">
                    <p className="text-lg  font-semibold">Support</p>
                    <p>Acount</p>
                    <p>Supper Center</p>
                    <p>Feedback</p>
                    <p>Contact Us</p>

                 </div>
                 <div className="h-full flex flex-col  gap-4">
                    <p className="text-lg font-semibold">Contact</p>
                    <p>Careers</p>
                    <p>Terms of Service</p>
                    <p>Privacy Policy</p>
                    <p>Cookies Policy</p>
                    <p>Contact Us</p>

                 </div>


                 <div className="h-full flex flex-col  gap-4">
                    <div>
                        <h1 className="text-xl font-semibold">Tranch you later, innovator</h1>
                    </div>

                    <div className="flex w-80 h-10 border border-black rounded-e-lg">
                         <input type="text" placeholder="Subscribe now" className="w-full h-full text-sm px-4 outline-none border-none" name="" id="" />
                        <button className="bg-black text-white text-center w-40 rounded-e-lg">Submit</button>
                    </div>

                    <div className="flex gap-3 mt-6">

                        <div className="w-12 h-12 bg-black rounded-full flex justify-center items-center text-white">
                            <IconBrandFacebook />
                        </div>

                        <div className="w-12 h-12 flex justify-center items-center border rounded-full border-black">
                            <IconBrandTwitterFilled className="text-black"/>
                        </div>

                        <div className="w-12 h-12 flex justify-center items-center border rounded-full border-black">
                            <IconBrandInstagram/>
                        </div>

                        <div className="w-12 h-12 flex justify-center items-center border rounded-full border-black">
                            <IconBrandLinkedin/>
                        </div>

                       

                    </div>
                 </div> 
           </div>
           <div className="w-full flex justify-center">
              <p>@2024 Hussain. All rights reserved.</p>
           </div>
                
     </div>
    </>
  )
}

export default Footer