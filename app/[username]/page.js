import React from 'react'

const username = ({ params }) => {
  return (
    <>
      <div className="cover w-full relative ">
        <img className='w-full' src="https://c10.patreonusercontent.com/4/patreon-media/p/campaign/4842667/452146dcfeb04f38853368f554aadde1/eyJ3Ijo5NjAsIndlIjoxfQ%3D%3D/17.gif?token-time=1735948800&token-hash=wXm8-1Z2WP1Yx3YWi7rplx1cJZvHHK10AaSuuEGlOgg%3D" alt="" />
        <div className="profile-pic absolute -bottom-16 right-[46%]">
          <img className='w-[120px] h-[120px] rounded-xl ' src="https://easy-peasy.ai/cdn-cgi/image/quality=80,format=auto,width=700/https://fdczvxmwwjwpwbeeqcth.supabase.co/storage/v1/object/public/images/d575d443-7b5f-4dbf-bb23-af1c5858ab0b/59cead85-9986-4194-81dd-a9c50581a33e.png" alt="" />
        </div>
      </div>
      <div className='inf0 flex justify-center items-center mt-20 mb-10 gap-2 flex-col'>
        <div className="font-bold text-3xl">
          @{params.username}
        </div>
        <div className="text-slate-400">
          Creating Animated art for VTT's
        </div>
        <div className="text-slate-400">
          15,070 members93 posts$16,190/release
        </div>

        <div className="payment flex gap-3">
          <div className="supporters">
            dvssdvvsdv
          </div>

          <div className="makepayment">
            sdvsdvsddvsd
          </div>
        </div>
      </div>
    </>
  )
}

export default username