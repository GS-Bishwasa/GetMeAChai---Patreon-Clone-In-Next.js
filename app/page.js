import Image from "next/image";

export default function Home() {
  return (
    <>
      <div className="flex gap-4 justify-center flex-col h-[44vh] items-center">
        <div className="flex items-center text-2xl sm:text-5xl font-bold">Get Me A Chai
          <span>
            <lord-icon
              src="https://cdn.lordicon.com/tonguyuk.json"
              trigger="loop"
              delay="2000"
              colors="primary:#ebe6ef,secondary:#b4b4b4,tertiary:#ffffff"
              className="w-[48px] h-[48px]">
            </lord-icon>
          </span>

        </div>
        <p className="text-center">A Crowdfunding Platform For Creators. Get Funded By Your Fans And Followers</p>
        <div>
          <button type="button" className="text-white transition bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">Start Now</button>
          <button type="button" className="text-white transition bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">Read More</button>
        </div>
      </div>
      <div className="bg-white h-1 opacity-10"></div>

      <div className=" container mx-auto ">
        <h1 className="text-2xl font-bold text-center my-14">Your Fans Can Buy You a Chai</h1>
        <div className="flex gap-5 justify-around mb-9 flex-col sm:flex-row">
          <div className="item  space-y-3 flex flex-col items-center justify-center">
            <img className="bg-slate-400 rounded-full p-2" width={88} src="man.gif" alt="" />
            <p className="text-center">Fund Yourself</p>
            <p className="text-center">Your Fans Want To Help You</p>
          </div>
          <div className="item  space-y-3 flex flex-col items-center justify-center">
            <img className="bg-slate-400 rounded-full p-2" width={88} src="coin.gif" alt="" />
            <p className="text-center">Fund Yourself</p>
            <p className="text-center">Your Fans Want To Help You</p>
          </div>
          <div className="item  space-y-3 flex flex-col items-center justify-center">
            <img className="bg-slate-400 rounded-full p-2" width={88} src="group.gif" alt="" />
            <p className="text-center">Fans Want To Help</p>
            <p className="text-center">Your Fans Want To Help You</p>
          </div>
        </div>
      </div>


      <div className="bg-white h-1 opacity-10"></div>

      <div className="container mx-auto flex-row md:flex-col">
        <h1 className="text-2xl font-bold text-center my-14">Learn More About Us</h1>
        <div className="flex gap-5 justify-around mb-9 flex-col sm:flex-row">
        <iframe width="560" height="315" src="https://www.youtube.com/embed/cQsAba_gGNU?si=p_6_shpY8ZV36_1u" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
        </div>
      </div>
    </>
  );
}
