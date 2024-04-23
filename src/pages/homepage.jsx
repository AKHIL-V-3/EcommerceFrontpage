import { IconArrowAutofitHeight, IconArrowUpRight, IconSearch } from "@tabler/icons-react"
import Header from "../Components/Header"

function Homepage() {
    return (
        <>
            <Header />
            <div className="w-100 px-10 h-auto flex mt-12 gap-20 justify-between">
                <div className="w-1/3 flex flex-col gap-10 h-full">
                    <div>
                        <h1 className="text-4xl font-bold">Discovering the Undiscovered  <br />Charms.</h1>
                    </div>
                    <div>
                        <p>Provider in Yogyakarta  with a sustainable tourism concept, <br />delivering a meaningful journey through cycling tours. </p>
                    </div>
                    <div>
                        <div className="w-4/5 flex justify-between px-3 border border-black rounded-3xl h-14 items-center gap-2">
                            <IconSearch />
                            <input type="text" placeholder="Seach on Product" className="border-none outline-none w-full text-sm" />
                            <button className="bg-black text-white rounded-3xl w-24 flex justify-center items-center text-sm h-8">Search</button>
                        </div>

                    </div>
                    <div className="flex justify-between gap-5 items-start">
                        <div className="w-60 h-48 object-contain bg-cover rounded-xl">
                            <img className="w-full h-full rounded-xl" src="https://as1.ftcdn.net/v2/jpg/01/43/74/70/1000_F_143747055_YgzXj9gvfKXI4uhlCAPhuq8ujpkMB2UZ.jpg" alt="" />
                        </div>
                        <div className="w-60 h-48 object-contain rounded-xl">
                            <img className="w-full h-full rounded-xl" src="https://as1.ftcdn.net/v2/jpg/01/43/74/70/1000_F_143747055_YgzXj9gvfKXI4uhlCAPhuq8ujpkMB2UZ.jpg" alt="" />
                        </div>
                    </div>
                </div>

                <div className="w-80 rounded-xl">
                    <img className="w-full h-full rounded-xl" src="https://s3.envato.com/files/440883618/728A0818.jpg" alt="" />
                </div>
                <div className="w-96 flex flex-col gap-5 h-full">
                    <div className="w-56 h-32 object-cover rounded-t-xl">
                        <img className="w-full h-full rounded-t-xl" src="https://i.pinimg.com/originals/67/8a/2d/678a2d302b24fe65fde8c2fbe9522213.jpg" alt="" />
                    </div>

                    <div className="text-sm">
                        <p>Provider in Yogyakarta with <br />
                            a meaningful journey <br /> through cycling tours.</p>
                    </div>

                    <button className="border w-32 h-7 font-semibold border-black rounded-3xl bg-transparent">Explore More</button>

                    <div className="mb-2">
                        <h3 className="text-2xl font-bold">4.9</h3>
                        <p>Our Customer Rating</p>
                    </div>

                    <div className="relative h-1 w-60 bg-gray-200 rounded-lg">
                        <div className="absolute top-0 bottom-0 left-0 right-0 bg-black rounded-lg w-1/2"></div>
                        <div className="absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-4 h-4 bg-black rounded-full"></div>
                    </div>

                    <div className="flex">
                        <div className="bg-red-400 w-14 h-14 rounded-full"></div>
                        <div className="bg-green-400 w-14 h-14 rounded-full ml-[-15px]"></div>
                        <div className="bg-yellow-400 w-14 h-14 rounded-full ml-[-15px] "></div>
                        <div className="bg-orange-400 w-14 h-14 rounded-full ml-[-15px] "></div>
                        <div className="bg-black w-14 h-14 rounded-full ml-[-15px]"></div>
                    </div>

                    <div className="text-sm">
                        <p>Provider in Yogyakarta with <br /> a meaningful journey. </p>
                    </div>

                    <button className="border w-32 h-7 font-semibold border-black rounded-3xl bg-transparent">Explore More</button>
                </div>
            </div>



            <div className="w-full px-10 h-auto bg-black text-white  pb-20  mt-10 flex-col gap-12">

                <div className="flex justify-center items-center pt-12">
                    <h1 className="text-4xl font-semibold">Ride Your Cycle to Heaven With Us</h1>
                </div>

                <div className="flex">
                    <div className="bg-white h-96 w-72 text-black p-5 rounded-2xl">

                        <div className="flex justify-between items-center">
                            <h1 className="text-4xl font-semibold">01</h1>
                            <div className="w-12 h-12 border rounded-full flex justify-center items-center"><IconArrowUpRight /></div>
                        </div>
                        <div>
                            <p className="opacity-75">The cycle route quiz volutes sit  <br /> aspirator aut oddity aut fugit</p>
                        </div>
                        <div className="w-56 h-60 object-cover rounded-2xl">
                            <img className="w-full h-full rounded-2xl" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSgihT4rT9LuayVwos1LbdzgbTPJ0UbCvkLRsEenOhLTQ&s" alt="" />
                        </div>

                    </div>
                    <div></div>
                    <div></div>
                    <div></div>
                </div>

            </div>


        </>
    )
}

export default Homepage