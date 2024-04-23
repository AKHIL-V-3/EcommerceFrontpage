import { IconArrowUpRight, IconSearch } from "@tabler/icons-react"
import Header from "../Components/Header"
import Footer from "../Components/Footer"

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
                            <img className="w-full h-full rounded-xl" src="https://c1.wallpaperflare.com/preview/891/139/586/wheel-road-bike-cycling-sport.jpg" alt="" />
                        </div>
                        <div className="w-60 h-48 object-contain rounded-xl">
                            <img className="w-full h-full rounded-xl" src="https://previews.123rf.com/images/halfpoint/halfpoint1405/halfpoint140500817/28546625-d%C3%A9tail-de-cycliste-homme-pieds-en-vtt-sur-la-piste-en-plein-air-dans-le-pr%C3%A9-ensoleill%C3%A9.jpg" alt="" />
                        </div>
                    </div>
                </div>

                <div className="w-80 rounded-xl">
                    <img className="w-full h-full rounded-xl" src="https://media.gettyimages.com/id/642106733/photo/young-man-riding-bicycle.jpg?s=612x612&w=0&k=20&c=CTJKyCC5J9rVpzvAIFDOir_eSWkSqhuuBLXjQndejs8=" alt="" />
                </div>
                <div className="w-96 flex flex-col gap-5 h-full">
                    <div className="w-56 h-32 bg-cover rounded-t-xl">
                        <img className="w-full h-full rounded-t-xl" src="https://media.istockphoto.com/id/1331133424/photo/young-man-riding-a-road-bicycle-outdoors.jpg?s=612x612&w=0&k=20&c=X45AiY2B1PsuAxQsUFQe08dCoJlE_OuhwyH7q2MHl_Y=" alt="" />
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
                        <div className="bg-red-400 w-14 h-14 rounded-full">
                            <img src="https://img.freepik.com/free-photo/portrait-man-laughing_23-2148859448.jpg?size=338&ext=jpg&ga=GA1.1.1224184972.1713744000&semt=ais" className="w-full h-full rounded-full" alt="" />
                        </div>
                        <div className="bg-red-400 w-14 h-14 rounded-full ml-[-15px]">
                            <img src="https://images.pexels.com/photos/3777943/pexels-photo-3777943.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" className="w-full h-full rounded-full" alt="" />
                        </div>
                        <div className="bg-red-400 w-14 h-14 rounded-full ml-[-15px]">
                            <img src="https://st3.depositphotos.com/1017228/18878/i/450/depositphotos_188781580-stock-photo-handsome-cheerful-young-man-standing.jpg" className="w-full h-full rounded-full" alt="" />
                        </div>
                        <div className="bg-red-400 w-14 h-14 rounded-full ml-[-15px]">
                            <img src="https://media.istockphoto.com/id/1317804578/photo/one-businesswoman-headshot-smiling-at-the-camera.webp?b=1&s=170667a&w=0&k=20&c=cVdVl-0bpliZ0Sduc7ZDkMPwLnbxaMXZONllS39oeFc=" className="w-full h-full rounded-full" alt="" />
                        </div>
                        <div className="bg-red-400 w-14 h-14 rounded-full ml-[-15px]">
                            <img src="https://media.istockphoto.com/id/1300512215/photo/headshot-portrait-of-smiling-ethnic-businessman-in-office.jpg?s=612x612&w=0&k=20&c=QjebAlXBgee05B3rcLDAtOaMtmdLjtZ5Yg9IJoiy-VY=" className="w-full h-full rounded-full" alt="" />
                        </div>

                    </div>

                    <div className="text-sm">
                        <p>Provider in Yogyakarta with <br /> a meaningful journey. </p>
                    </div>

                    <button className="border w-32 h-7 font-semibold border-black rounded-3xl bg-transparent">Explore More</button>
                </div>
            </div>



            {/* Ride your cycle to heven with us part */}


            <div className="w-full px-10 h-auto bg-black text-white  pb-20  mt-10 flex-col gap-12">

                <div className="flex justify-center items-center pt-12">
                    <h1 className="text-4xl font-semibold">Ride Your Cycle to Heaven With Us</h1>
                </div>

                <div className="flex mt-20 justify-center gap-7">

                    <div className="bg-white h-auto pb-10 w-80 text-black px-10 py-7 rounded-2xl">

                        <div className="flex justify-between items-center mb-5">
                            <h1 className="text-4xl font-semibold">01</h1>
                            <div className="w-12 h-12 border rounded-full flex justify-center items-center"><IconArrowUpRight /></div>
                        </div>
                        <div className="mb-4">
                            <p className="opacity-75">The cycle route quiz volutes sit  <br /> aspirator aut oddity aut fugit</p>
                        </div>
                        <div className="w-56 h-60 object-contain rounded-2xl">
                            <img className="w-full h-full rounded-2xl" src="https://images.unsplash.com/photo-1601971360277-7b4c8aa60894?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
                        </div>
                    </div>

                    <div className="bg-white h-auto pb-10 w-80 text-black px-10 py-7 rounded-2xl">

                        <div className="flex justify-between items-center mb-5">
                            <h1 className="text-4xl font-semibold">02</h1>
                            <div className="w-12 h-12 border rounded-full flex justify-center items-center"><IconArrowUpRight /></div>
                        </div>
                        <div className="mb-4">
                            <p className="opacity-75">The cycle route quiz volutes sit  <br /> aspirator aut oddity aut fugit</p>
                        </div>
                        <div className="w-56 h-60 object-contain rounded-2xl">
                            <img className="w-full h-full rounded-2xl" src="https://images.unsplash.com/photo-1574965234283-2f20a4cffa43?q=80&w=1920&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
                        </div>
                    </div>

                    <div className="bg-white h-auto pb-10 w-80 text-black px-10 py-7 rounded-2xl">

                        <div className="flex justify-between items-center mb-5">
                            <h1 className="text-4xl font-semibold">03</h1>
                            <div className="w-12 h-12 border rounded-full flex justify-center items-center"><IconArrowUpRight /></div>
                        </div>
                        <div className="mb-4">
                            <p className="opacity-75">The cycle route quiz volutes sit  <br /> aspirator aut oddity aut fugit</p>
                        </div>
                        <div className="w-56 h-60 object-contain rounded-2xl">
                            <img className="w-full h-full rounded-2xl" src="https://images.unsplash.com/photo-1596731530340-64945278d9f6?q=80&w=2014&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
                        </div>
                    </div>

                    <div className="bg-white h-auto pb-10 w-80 text-black px-10 py-7 rounded-2xl">

                        <div className="flex justify-between items-center mb-5">
                            <h1 className="text-4xl font-semibold">04</h1>
                            <div className="w-12 h-12 border rounded-full flex justify-center items-center"><IconArrowUpRight /></div>
                        </div>
                        <div className="mb-4">
                            <p className="opacity-75">The cycle route quiz volutes sit  <br /> aspirator aut oddity aut fugit</p>
                        </div>
                        <div className="w-56 h-60 object-contain rounded-2xl">
                            <img className="w-full h-full rounded-2xl" src="https://images.unsplash.com/photo-1541584285245-c83a93cce0e8?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
                        </div>
                    </div>

                </div>

            </div>


            {/* Our Best products part */}

            <div className="mt-12 w-full h-auto pb-12  flex justify-center">

                <div className="w-10/12 h-full">

                    <div className="flex justify-center">
                        <h1 className="text-5xl font-bold">Our Best Products</h1>
                    </div>


                    <div className="w-full h-full flex mt-20 justify-center ">

                        <div className="w-10/12 flex flex-wrap justify-start gap-20 ">

                            <div className="w-72 h-80  flex-col text-center justify-center">

                                <div className="w-72 h-72 bg-gray-100 rounded-full flex justify-center items-center">
                                    <div className="w-52 h-52 object-contain rounded-full">
                                        <img className="w-full h-full rounded-full" src="https://post.healthline.com/wp-content/uploads/2020/11/533606-5-joovy-noodle-helmut.png" alt="" />
                                    </div>

                                </div>

                                <div>
                                    <h4 className="text-lg font-semibold">Poc Cycling Helmets</h4>
                                    <p className="text-sm font-semibold">$29.90</p>

                                </div>


                            </div>

                            <div className="w-72 h-80  flex-col text-center justify-center">

                                <div className="w-72 h-72 bg-gray-100 rounded-full flex justify-center items-center">
                                    <div className="w-52 h-52 object-contain rounded-full">
                                        <img className="w-full h-full rounded-full" src="https://img4.dhresource.com/webp/m/0x0/f3/albu/km/n/27/74706172-d441-42b0-8319-f890e0564294.jpg" alt="" />
                                    </div>

                                </div>

                                <div>
                                    <h4 className="text-lg font-semibold">Poc Cycling Helmets</h4>
                                    <p className="text-sm font-semibold">$29.90</p>

                                </div>


                            </div>


                            <div className="w-72 h-80  flex-col text-center justify-center">

                                <div className="w-72 h-72 bg-gray-100 rounded-full flex justify-center items-center">
                                    <div className="w-52 h-52 object-contain rounded-full">
                                        <img className="w-full h-full rounded-full" src="https://i5.walmartimages.com/asr/0596275f-3c5c-4b44-af5c-2771c5ee4917_1.1217a6cb3dfd9afd4410850dc2126a31.jpeg?odnHeight=320&odnWidth=320&odnBg=FFFFFF" alt="" />
                                    </div>

                                </div>

                                <div>
                                    <h4 className="text-lg font-semibold">Poc Cycling Helmets</h4>
                                    <p className="text-sm font-semibold">$29.90</p>

                                </div>


                            </div>

                            <div className="w-72 h-80  flex-col text-center justify-center">

                                <div className="w-72 h-72 bg-gray-100 rounded-full flex justify-center items-center">
                                    <div className="w-52 h-52 object-contain rounded-full">
                                        <img className="w-full h-full rounded-full" src="https://www.bilmola.com/wp-content/uploads/2022/06/Img-ex-grey-1500x1500-02-1.png" alt="" />
                                    </div>

                                </div>

                                <div>
                                    <h4 className="text-lg font-semibold">Poc Cycling Helmets</h4>
                                    <p className="text-sm font-semibold">$29.90</p>

                                </div>


                            </div>

                            <div className="w-72 h-80  flex-col text-center justify-center">

                                <div className="w-72 h-72 bg-gray-100 rounded-full flex justify-center items-center">
                                    <div className="w-52 h-52 object-contain rounded-full">
                                        <img className="w-full h-full rounded-full" src="https://shop.studds.com/wp-content/uploads/2023/03/THUNDER-D5-BLACK-GREEN-YELLOW.jpg" alt="" />
                                    </div>

                                </div>

                                <div>
                                    <h4 className="text-lg font-semibold">Poc Cycling Helmets</h4>
                                    <p className="text-sm font-semibold">$29.90</p>

                                </div>


                            </div>

                            <div className="w-72 h-80  flex-col text-center justify-center">

                                <div className="w-72 h-72 bg-gray-100 rounded-full flex justify-center items-center">
                                    <div className="w-52 h-52 object-contain rounded-full">
                                        <img className="w-full h-full rounded-full" src="https://i.ebayimg.com/images/g/VhMAAOSwbcZk7JR4/s-l1200.jpg" alt="" />
                                    </div>

                                </div>

                                <div>
                                    <h4 className="text-lg font-semibold">Poc Cycling Helmets</h4>
                                    <p className="text-sm font-semibold">$29.90</p>

                                </div>


                            </div>

                        </div>

                    </div>

                </div>
            </div>


            {/* make everyday extra ordinary for your journey part */}



            <div className="w-full h-auto pb-12 p-10 flex mt-20">


                <div className="w-1/2">
                    <div className="w-9/12 h-5/6 rounded-tl-full rounded-tr-full rounded-bl-full rounded-br-full">
                        <img className="w-full h-full rounded-tl-full rounded-tr-full  rounded-bl-full rounded-br-full " src="https://s3.envato.com/files/440883618/728A0818.jpg" alt="" />
                    </div>

                </div>

                <div className=" w-1/2 ">

                    <div className="flex justify-between items-center">
                        <div>
                            <p className="text-lg font-semibold">Which means that your heart, Diode  <br /> visor and lings all perspir and experience <br /> increased</p>
                        </div>

                        <div className="w-52 h-52 bg-gray-100 rounded-full flex justify-center items-center">
                            <div className="w-32 h-32 object-contain rounded-full">
                                <img className="w-full h-full rounded-full" src="https://post.healthline.com/wp-content/uploads/2020/11/533606-5-joovy-noodle-helmut.png" alt="" />
                            </div>

                        </div>
                    </div>

                    <div className="mt-12">
                        <h1 className="text-5xl font-bold leading-tight">Make Everyday <br /> Extraordinary for Your <br /> Journey</h1>
                    </div>

                    <div className="mt-10">
                        <p className="opacity-80">Our bikes are statements you can drive daily. Take a penny to work, to the <br /> gym, for a meetup  with friends. You`ll be rolling in style</p>
                    </div>

                </div>

            </div>

            {/* Ride your bike to heven with us part */}


            <div className="w-full h-auto pb-12 bg-black flex justify-center items-center relative">

                <div className="mt-12 w-10/12 h-full flex justify-between">
                    <div className="w-72  rounded-lg ">
                        <img className="w-full h-full rounded-xl " src="https://www.shutterstock.com/image-photo/handlebar-600nw-213798493.jpg" alt="" />
                    </div>

                    <div className="w-72  rounded-lg ">
                        <img className="w-full h-full rounded-xl" src="https://cdn.shopify.com/s/files/1/0040/5251/6910/files/Adidas_Road_Cycling_shoe_1024x1024.jpg?v=1606215167" alt="" />
                    </div>

                    <div className="w-72  rounded-lg ">
                        <img className="w-full h-full rounded-xl" src="https://images.unsplash.com/photo-1647524147652-b7c337455ef6?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
                    </div>

                    <div className="w-72  rounded-lg ">
                        <img className="w-full h-full rounded-xl" src="https://c1.wallpaperflare.com/preview/491/141/79/mountain-bike-people-woman.jpg" alt="" />
                    </div>

                    <div className="bg-transparent absolute left-40  bottom-24 text-white text-4xl font-bold">
                           <span className="bg-black pe-3 pb-3 rounded-lg ps-3"><span className="pe-3">Ride your bike to heaven</span>  <br />  <span className="ps-3">with us</span></span>
                    </div>

                </div>
            </div>


          <Footer/>



        </>
    )
}

export default Homepage