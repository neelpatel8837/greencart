import React from 'react'
import { Link } from 'react-router-dom'

const MainBannerV3 = () => {
  return (
    <div className="relative rounded-2xl overflow-hidden bg-gradient-to-r from-emerald-50 via-green-50 to-teal-50">
      {/* Animated background shapes - lighter */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Floating circles - lighter colors */}
        <div className="absolute top-20 left-10 w-72 h-72 bg-emerald-200/30 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-teal-200/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-1/2 left-1/2 w-80 h-80 bg-green-200/25 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '4s' }}></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-32">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center min-h-96">
          {/* Left Content */}
          <div className="space-y-8">
            {/* Badge */}
            <div className="inline-block">
              <span className="text-sm font-semibold text-emerald-700 uppercase tracking-widest bg-emerald-100 px-4 py-2 rounded-lg border border-emerald-200">
                🚀 Fresh Produce Delivered
              </span>
            </div>

            {/* Heading */}
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-gray-800 leading-tight">
              Freshness You Can{' '}
              <span className="bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">
                Trust
              </span>
            </h1>

            {/* Subheading */}
            <p className="text-xl text-gray-700 max-w-lg leading-relaxed">
              Premium quality vegetables and fruits sourced directly from farms. Experience the difference of truly fresh produce with our 24-hour delivery guarantee.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Link
                to="/products"
                className="group relative inline-flex items-center justify-center gap-2 px-8 py-4 bg-gradient-to-r from-emerald-500 to-emerald-600 hover:from-emerald-600 hover:to-emerald-700 text-white font-semibold rounded-[10px] transition-all duration-300 hover:shadow-lg hover:shadow-emerald-500/30 overflow-hidden"
              >
                <span className="relative z-10">Shop Now</span>
                <svg className="w-5 h-5 relative z-10 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </Link>

              <Link
                to="/products"
                className="group inline-flex items-center justify-center gap-2 px-8 py-4 border-2 border-emerald-400 text-emerald-700 hover:border-emerald-500 hover:bg-emerald-50 font-semibold rounded-[10px] transition-all duration-300"
              >
                Explore Deals
                <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </Link>
            </div>

            {/* Social proof */}
            <div className="pt-8 border-t border-emerald-200 flex items-center gap-6">
              <div>
                <p className="text-3xl font-bold text-gray-800">50K+</p>
                <p className="text-sm text-gray-600">Active Customers</p>
              </div>
              <div className="h-12 w-px bg-emerald-300"></div>
              <div>
                <p className="text-3xl font-bold text-gray-800">4.8★</p>
                <p className="text-sm text-gray-600">Customer Rating</p>
              </div>
            </div>
          </div>

          {/* Right Side - Feature showcase */}
          <div className="hidden md:flex flex-col gap-6">
            {/* Feature Card 1 */}
            <div className="group bg-white/60 backdrop-blur border border-emerald-200 rounded-[10px] p-6 hover:bg-white/80 hover:shadow-lg transition-all duration-300">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-gradient-to-br from-emerald-400 to-teal-400 flex items-center justify-center text-white text-xl">
                  🌱
                </div>
                <div>
                  <h3 className="text-gray-800 font-semibold mb-2">Farm Fresh Daily</h3>
                  <p className="text-gray-600 text-sm">Handpicked produce harvested daily from trusted farms</p>
                </div>
              </div>
            </div>

            {/* Feature Card 2 */}
            <div className="group bg-white/60 backdrop-blur border border-emerald-200 rounded-[10px] p-6 hover:bg-white/80 hover:shadow-lg transition-all duration-300">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-gradient-to-br from-emerald-400 to-teal-400 flex items-center justify-center text-white text-xl">
                  ⚡
                </div>
                <div>
                  <h3 className="text-gray-800 font-semibold mb-2">24-Hour Delivery</h3>
                  <p className="text-gray-600 text-sm">Fast, reliable delivery right to your doorstep</p>
                </div>
              </div>
            </div>

            {/* Feature Card 3 */}
            <div className="group bg-white/60 backdrop-blur border border-emerald-200 rounded-[10px] p-6 hover:bg-white/80 hover:shadow-lg transition-all duration-300">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-gradient-to-br from-emerald-400 to-teal-400 flex items-center justify-center text-white text-xl">
                  💰
                </div>
                <div>
                  <h3 className="text-gray-800 font-semibold mb-2">Best Prices</h3>
                  <p className="text-gray-600 text-sm">Competitive pricing without compromising quality</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default MainBannerV3


// import React from 'react'
// import { assets } from '../assets/assets'
// import { Link } from 'react-router-dom'

// const MainBanner = () => {
//   return (
//     <div className='relative'>
//         <img src={assets.main_banner_bg} alt="banner" className='w-full hidden md:block' />
//         <img src={assets.main_banner_bg_sm} alt="banner" className='w-full md:hidden' />

//         <div className='absolute inset-0 flex flex-col items-center md:items-start justify-end md:justify-center pb-24 md:pb-0 px-4 md:pl-18 lg:pl-24'>
//             <h1 className='text-3xl md:text-4xl lg:text-5xl font-bold text-center md:text-left max-w-72 md:max-w-80 lg:max-w-105 leading-tight lg:leading-15'>Freshness You Can Trust, Savings You will Love!</h1>
//             <div className='flex items-center mt-6 font-medium'>
//                 <Link to={"/products"} className='group flex items-center gap-2 px-7 md:px-9 py-3 bg-emerald-500 hover:bg-emerald-600 transition rounded text-white cursor-pointer'>
//                     Shop Now
//                     <img className='md:hidden transition group-focus:translate-x-1' src={assets.white_arrow_icon} alt="arrow" />
//                 </Link>

//                 <Link to={"/products"} className='group hidden md:flex items-center gap-2 px-9 py-3 cursor-pointer'>
//                     Explore Deals
//                     <img className='transition group-hover:translate-x-1' src={assets.black_arrow_icon} alt="arrow" />
//                 </Link>
//             </div>
//         </div>
        
//     </div>
//   )
// }

// export default MainBanner
