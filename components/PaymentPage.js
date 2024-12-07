"use client"
import React, { useEffect, useState } from 'react'
import Script from 'next/script'
import { useSession } from 'next-auth/react'
import { fetchuser, fetchpayments, initiate } from '@/actions/useractions'
import { useSearchParams } from 'next/navigation'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Bounce } from 'react-toastify';
import { useRouter } from 'next/navigation'
import { notFound } from "next/navigation"

const PaymentPage = ({ username }) => {
    // const { data: session } = useSession()

    const [paymentform, setPaymentform] = useState({name: "", message: "", amount: ""})
    const [currentUser, setcurrentUser] = useState({})
    const [payments, setPayments] = useState([])
    const searchParams = useSearchParams()
    const router = useRouter()

    useEffect(() => {
        getData()
    }, [])

    useEffect(() => {
        if(searchParams.get("paymentdone") == "true"){
        toast('Thanks for your donation!', {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
            transition: Bounce,
            });
        }
        router.push(`/${username}`)
     
    }, [])
    

    const handlechange = (e) => {
        setPaymentform({ ...paymentform, [e.target.name]: e.target.value })
    }

    const getData = async () => {
        let u = await fetchuser(username)
        setcurrentUser(u)
        let dbpayments = await fetchpayments(username)
        setPayments(dbpayments) 
    }


    const pay = async (amount) => {
        // Get the order Id 
        let a = await initiate(amount, username, paymentform)
        let orderId = a.id
        var options = {
            "key": currentUser.razorpayid, // Enter the Key ID generated from the Dashboard
            "amount": amount, // Amount is in currency subunits. Default currency is INR. Hence, 50000 refers to 50000 paise
            "currency": "INR",
            "name": "Get Me A Chai", //your business name
            "description": "Test Transaction",
            "image": "https://example.com/your_logo",
            "order_id": orderId, //This is a sample Order ID. Pass the `id` obtained in the response of Step 1
            "callback_url": `${process.env.NEXT_PUBLIC_URL}/api/razorpay`,
            "prefill": { //We recommend using the prefill parameter to auto-fill customer's contact information especially their phone number
                "name": "Gaurav Kumar", //your customer's name
                "email": "gaurav.kumar@example.com",
                "contact": "9000090000" //Provide the customer's phone number for better conversion rates 
            },
            "notes": {
                "address": "Razorpay Corporate Office"
            },
            "theme": {
                "color": "#3399cc"
            }
        }

        var rzp1 = new Razorpay(options);
        rzp1.open();
    }


    return (
        <>
         <ToastContainer
                position="top-right"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="light" />
            {/* Same as */}
            <ToastContainer />
            <Script src="https://checkout.razorpay.com/v1/checkout.js"></Script>




            <div className="cover w-full relative ">
                <img className='w-full' src="https://c10.patreonusercontent.com/4/patreon-media/p/campaign/4842667/452146dcfeb04f38853368f554aadde1/eyJ3Ijo5NjAsIndlIjoxfQ%3D%3D/17.gif?token-time=1735948800&token-hash=wXm8-1Z2WP1Yx3YWi7rplx1cJZvHHK10AaSuuEGlOgg%3D" alt="" />
                <div className="profile-pic absolute -bottom-16 right-[46%]">
                    <img className='w-[120px] h-[120px] rounded-xl ' src="https://easy-peasy.ai/cdn-cgi/image/quality=80,format=auto,width=700/https://fdczvxmwwjwpwbeeqcth.supabase.co/storage/v1/object/public/images/d575d443-7b5f-4dbf-bb23-af1c5858ab0b/59cead85-9986-4194-81dd-a9c50581a33e.png" alt="" />
                </div>
            </div>
            <div className='inf0 flex justify-center items-center mt-20 mb-10 gap-2 flex-col'>
                <div className="font-bold text-3xl">
                    @{username}
                </div>
                <div className="text-slate-400">
                    Creating Animated art for VTT's
                </div>
                <div className="text-slate-400 mb-5">
                    15,070 members93 posts$16,190/release
                </div>

                <div className="payment flex md:flex-row flex-col gap-3 w-[80%]">
                    <div className="supporters w-full md:w-1/2  bg-slate-900 rounded-xl p-10">
                        {/* Show List Of All supporters As A Leaderboard */}
                        <h2 className='text-center font-bold text-2xl'>Supporters</h2>
                        <ul className='overflow-y-scroll max-h-80  [&::-webkit-scrollbar]:w-2
                                                  [&::-webkit-scrollbar-track]:rounded-full
                                                  [&::-webkit-scrollbar-track]:bg-gray-100
                                                  [&::-webkit-scrollbar-thumb]:rounded-full
                                                [&::-webkit-scrollbar-thumb]:bg-gray-300
                                                  dark:[&::-webkit-scrollbar-track]:bg-neutral-700
                                                  dark:[&::-webkit-scrollbar-thumb]:bg-neutral-500'>
                            <li className='my-4 text-sm flex items-center'>
                                <img width={30} src="avatar.gif" alt="" />
                                <span>
                                    Shubham Donated <span className='font-bold'>₹30</span> with a Message "Love You Bro. Lots Of ❤️"
                                </span>
                            </li>
                            <li className='my-4 text-sm flex items-center'>
                                <img width={30} src="avatar.gif" alt="" />
                                <span>
                                    Shubham Donated <span className='font-bold'>₹30</span> with a Message "Love You Bro. Lots Of ❤️"
                                </span>
                            </li>
                            <li className='my-4 text-sm flex items-center'>
                                <img width={30} src="avatar.gif" alt="" />
                                <span>
                                    Shubham Donated <span className='font-bold'>₹30</span> with a Message "Love You Bro. Lots Of ❤️"
                                </span>
                            </li>
                            <li className='my-4 text-sm flex items-center'>
                                <img width={30} src="avatar.gif" alt="" />
                                <span>
                                    Shubham Donated <span className='font-bold'>₹30</span> with a Message "Love You Bro. Lots Of ❤️"
                                </span>
                            </li>
                            <li className='my-4 text-sm flex items-center'>
                                <img width={30} src="avatar.gif" alt="" />
                                <span>
                                    Shubham Donated <span className='font-bold'>₹30</span> with a Message "Love You Bro. Lots Of ❤️"
                                </span>
                            </li>
                            <li className='my-4 text-sm flex items-center'>
                                <img width={30} src="avatar.gif" alt="" />
                                <span>
                                    Shubham Donated <span className='font-bold'>₹30</span> with a Message "Love You Bro. Lots Of ❤️"
                                </span>
                            </li>
                            <li className='my-4 text-sm flex items-center'>
                                <img width={30} src="avatar.gif" alt="" />
                                <span>
                                    Shubham Donated <span className='font-bold'>₹30</span> with a Message "Love You Bro. Lots Of ❤️"
                                </span>
                            </li>
                            <li className='my-4 text-sm flex items-center'>
                                <img width={30} src="avatar.gif" alt="" />
                                <span>
                                    Shubham Donated <span className='font-bold'>₹30</span> with a Message "Love You Bro. Lots Of ❤️"
                                </span>
                            </li>
                            <li className='my-4 text-sm flex items-center'>
                                <img width={30} src="avatar.gif" alt="" />
                                <span>
                                    Shubham Donated <span className='font-bold'>₹30</span> with a Message "Love You Bro. Lots Of ❤️"
                                </span>
                            </li>
                            <li className='my-4 text-sm flex items-center'>
                                <img width={30} src="avatar.gif" alt="" />
                                <span>
                                    Shubham Donated <span className='font-bold'>₹30</span> with a Message "Love You Bro. Lots Of ❤️"
                                </span>
                            </li>
                            <li className='my-4 text-sm flex items-center'>
                                <img width={30} src="avatar.gif" alt="" />
                                <span>
                                    Shubham Donated <span className='font-bold'>₹30</span> with a Message "Love You Bro. Lots Of ❤️"
                                </span>
                            </li>
                            <li className='my-4 text-sm flex items-center'>
                                <img width={30} src="avatar.gif" alt="" />
                                <span>
                                    Shubham Donated <span className='font-bold'>₹30</span> with a Message "Love You Bro. Lots Of ❤️"
                                </span>
                            </li>
                            <li className='my-4 text-sm flex items-center'>
                                <img width={30} src="avatar.gif" alt="" />
                                <span>
                                    Shubham Donated <span className='font-bold'>₹30</span> with a Message "Love You Bro. Lots Of ❤️"
                                </span>
                            </li>
                            <li className='my-4 text-sm flex items-center'>
                                <img width={30} src="avatar.gif" alt="" />
                                <span>
                                    Shubham Donated <span className='font-bold'>₹30</span> with a Message "Love You Bro. Lots Of ❤️"
                                </span>
                            </li>

                        </ul>
                    </div>

                    <div className="makepayment  w-full md:w-1/2 bg-slate-900 rounded-xl p-10">
                        <h2 className='text-center font-bold text-2xl'>Make A Payment</h2>
                        <div className="flex gap-2 my-3 flex-col">
                            <input onChange={handlechange} value={paymentform.name} name='name' type="text" className='w-full p-3 rounded-lg bg-slate-800' placeholder='Enter Name' />
                            <input onChange={handlechange} value={paymentform.message} name='message' type="text" className='w-full p-3 rounded-lg bg-slate-800' placeholder='Enter Message' />
                            <input onChange={handlechange} value={paymentform.amount} name='amount' type="text" className='w-full p-3 rounded-lg bg-slate-800' placeholder='Enter Amount' />
                            <button id="rzp-button1" type="button" className="transition-all text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mb-2">Pay</button>
                        </div>
                        {/* Or Choose From These Amounts */}
                        <div className="flex justify-between gap-2 my-3">
                            <button className='p-3 rounded-lg bg-slate-800 hover:bg-slate-500 transition-all' onClick={()=>{pay(1000)}}>Pay ₹10</button>
                            <button className='p-3 rounded-lg bg-slate-800 hover:bg-slate-500 transition-all' onClick={()=>{pay(5000)}}>Pay ₹50</button>
                            <button className='p-3 rounded-lg bg-slate-800 hover:bg-slate-500 transition-all' onClick={()=>{pay(10000)}}>Pay ₹100</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default PaymentPage