import React from 'react'

const ShopDetail = (props) => {
  return ( <>
          {/* START CONTENT BOX */}
          <div className="pt-3 flex flex-col items-center">
          {/* START NAME AND DESCRIPTION */}
          <div>
            <div className="text-center text-4xl md:text-5xl lg:text-6xl xl:text-7xl">
              <h1 className="">{props.homeContent.shopName}</h1>
            </div>
            <div className="pt-3 text-md md:text-lg lg:text-xl xl:text-2xl">
              <p>{props.homeContent.shopDescription}</p>
            </div>
          </div>
          {/* SEND NAME AND DESCRIPTION */}
  
          {/* START IMAGE */}
          <div className="w-full pt-3">
            <img
              className="rounded-xl w-[100%]"
              src={props.homeContent.shopLogo}
              alt="Shop Logo"
            />
          </div>
          {/* END IMAGE */}
        </div>
        {/* END CONTENT BOX */}
        </>
  )
}

export default ShopDetail