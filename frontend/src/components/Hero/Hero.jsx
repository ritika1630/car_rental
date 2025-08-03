import React from "react";
import { useNavigate } from "react-router-dom";
// This is the new, complete page component
const Hero = () => {
  const navigate = useNavigate();

  // Handle button click to navigate to the booking page
  const handleBookRide = () => {
    navigate("/booking");
  };

  return (
    <div className="relative flex size-full min-h-screen flex-col bg-white group/design-root overflow-x-hidden" style={{ fontFamily: 'Georgia, serif' }}>
      <div className="layout-container flex h-full grow flex-col">

        {/* Main Content Container */}
        <div className="px-40 flex flex-1 justify-center py-5">
          <div className="layout-content-container flex flex-col max-w-[960px] flex-1">
            <div className="@container">
              <div className="@[480px]:p-4">
                {/* Hero Section - styled to match the reference page */}
                <div
                  className="flex min-h-[480px] flex-col gap-6 bg-cover bg-center bg-no-repeat @[480px]:gap-8 @[480px]:rounded-xl items-center justify-center p-4"
                  style={{
                    backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.1) 0%, rgba(0, 0, 0, 0.4) 100%), url("https://lh3.googleusercontent.com/aida-public/AB6AXuDgUgPuZdcecEMsubzNGwY8lyZywscFpZtVIdhfuFRGZLsRfkLv59DRktZlZVSIPXySxlMJ1GM59FSUhLBU3H2F72IDScYKbJqItsugQ_AXvU4v6ocUVFamfIIDIzaPXRg1w-k6JuQXQvRB0pe3UeAVlkfQ5jZ2yz4H_kJCN9foZpDP3D7eCw5iNk_yYwIAw-QZeWDAl34r2wFia9Zj7kGroL-EKRRt-rw4XhDOSHWlxBu4mx7RdoDAyExXQ2znO3R-eaUUT7lmEwnt")',
                  }}
                >
                  <div className="flex flex-col gap-2 text-center">
                    <h1 className="text-white text-[28px] font-bold">
                      Affordable Car Rentals
                    </h1>
                    <p className="text-white text-base pb-3">
                      Experience hassle-free car rentals with a wide range of vehicles at your fingertips. Choose from a wide selection of top-of-the-line vehicles for any occasion.
                    </p>
                  </div>
                  <button
                    onClick={handleBookRide}
                    className="bg-[#d47611] text-white px-5 h-12 rounded-lg font-bold text-base"
                  >
                    <span className="truncate">Book Your Ride</span>
                  </button>
                </div>
              </div>
            </div>

            {/* Why Choose Us? Section */}
            <h2 className="text-[#121417] text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 pb-3 pt-5">Why Choose Us?</h2>
            <div className="flex flex-col gap-10 px-4 py-10 @container">
              <div className="flex flex-col gap-4">
                <h1 className="text-[#121417] tracking-light text-[32px] font-bold leading-tight @[480px]:text-4xl @[480px]:font-black @[480px]:leading-tight @[480px]:tracking-[-0.033em] max-w-[720px]">
                  Experience the Difference
                </h1>
                <p className="text-[#121417] text-base font-normal leading-normal max-w-[720px]">
                  Discover why we're the preferred choice for discerning drivers seeking quality, convenience, and value.
                </p>
              </div>
              <div className="grid grid-cols-[repeat(auto-fit,minmax(158px,1fr))] gap-3 p-0">
                <div className="flex flex-1 gap-3 rounded-lg border border-[#dde0e4] bg-white p-4 flex-col">
                  <div className="text-[#121417]">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" fill="currentColor" viewBox="0 0 256 256">
                      <path d="M128,24A104,104,0,1,0,232,128,104.11,104.11,0,0,0,128,24Zm0,192a88,88,0,1,1,88-88A88.1,88.1,0,0,1,128,216Zm40-68a28,28,0,0,1-28,28h-4v8a8,8,0,0,1-16,0v-8H104a8,8,0,0,1,0-16h36a12,12,0,0,0,0-24H116a28,28,0,0,1,0-56h4V72a8,8,0,0,1,16,0v8h16a8,8,0,0,1,0,16H116a12,12,0,0,0,0,24h24A28,28,0,0,1,168,148Z"></path>
                    </svg>
                  </div>
                  <div className="flex flex-col gap-1">
                    <h2 className="text-[#121417] text-base font-bold leading-tight">Competitive Pricing</h2>
                    <p className="text-[#687482] text-sm font-normal leading-normal">
                      Enjoy premium car rentals at prices that fit your budget. We offer transparent pricing with no hidden fees.
                    </p>
                  </div>
                </div>
                <div className="flex flex-1 gap-3 rounded-lg border border-[#dde0e4] bg-white p-4 flex-col">
                  <div className="text-[#121417]">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" fill="currentColor" viewBox="0 0 256 256">
                      <path d="M240,112H229.2L201.42,49.5A16,16,0,0,0,186.8,40H69.2a16,16,0,0,0-14.62,9.5L26.8,112H16a8,8,0,0,0,0,16h8v80a16,16,0,0,0,16,16H64a16,16,0,0,0,16-16V192h96v16a16,16,0,0,0,16,16h24a16,16,0,0,0,16-16V128h8a8,8,0,0,0,0-16ZM69.2,56H186.8l24.89,56H44.31ZM64,208H40V192H64Zm128,0V192h24v16Zm24-32H40V128H216ZM56,152a8,8,0,0,1,8-8H80a8,8,0,0,1,0,16H64A8,8,0,0,1,56,152Zm112,0a8,8,0,0,1,8-8h16a8,8,0,0,1,0,16H176A8,8,0,0,1,168,152Z"></path>
                    </svg>
                  </div>
                  <div className="flex flex-col gap-1">
                    <h2 className="text-[#121417] text-base font-bold leading-tight">Wide Range of Vehicles</h2>
                    <p className="text-[#687482] text-sm font-normal leading-normal">From compact cars to luxury SUVs, our diverse fleet caters to every need and preference.</p>
                  </div>
                </div>
                <div className="flex flex-1 gap-3 rounded-lg border border-[#dde0e4] bg-white p-4 flex-col">
                  <div className="text-[#121417]">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" fill="currentColor" viewBox="0 0 256 256">
                      <path d="M201.89,54.66A103.43,103.43,0,0,0,128.79,24H128A104,104,0,0,0,24,128v56a24,24,0,0,0,24,24H64a24,24,0,0,0,24-24V144a24,24,0,0,0-24-24H40.36A88.12,88.12,0,0,1,190.54,65.93,87.39,87.39,0,0,1,215.65,120H192a24,24,0,0,0-24,24v40a24,24,0,0,0,24,24h24a24,24,0,0,1-24,24H136a8,8,0,0,0,0,16h56a40,40,0,0,0,40-40V128A103.41,103.41,0,0,0,201.89,54.66ZM64,136a8,8,0,0,1,8,8v40a8,8,0,0,1-8,8H48a8,8,0,0,1-8-8V136Zm128,56a8,8,0,0,1-8-8V144a8,8,0,0,1,8-8h24v56Z"></path>
                    </svg>
                  </div>
                  <div className="flex flex-col gap-1">
                    <h2 className="text-[#121417] text-base font-bold leading-tight">Exceptional Customer Support</h2>
                    <p className="text-[#687482] text-sm font-normal leading-normal">
                      Our dedicated support team is available around the clock to assist you with any questions or concerns.
                    </p>
                  </div>
                </div>
                <div className="flex flex-1 gap-3 rounded-lg border border-[#dde0e4] bg-white p-4 flex-col">
                  <div className="text-[#121417]">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" fill="currentColor" viewBox="0 0 256 256">
                      <path d="M208,32H184V24a8,8,0,0,0-16,0v8H88V24a8,8,0,0,0-16,0v8H48A16,16,0,0,0,32,48V208a16,16,0,0,0,16,16H208a16,16,0,0,0,16-16V48A16,16,0,0,0,208,32ZM72,48v8a8,8,0,0,0,16,0V48h80v8a8,8,0,0,0,16,0V48h24V80H48V48ZM208,208H48V96H208V208Zm-96-88v64a8,8,0,0,1-16,0V132.94l-4.42,2.22a8,8,0,0,1-7.16-14.32l16-8A8,8,0,0,1,112,120Zm59.16,30.45L152,176h16a8,8,0,0,1,0,16H136a8,8,0,0,1-6.4-12.8l28.78-38.37A8,8,0,1,0,145.07,132a8,8,0,1,1-13.85-8A24,24,0,0,1,176,136,23.76,23.76,0,0,1,171.16,150.45Z"></path>
                    </svg>
                  </div>
                  <div className="flex flex-col gap-1">
                    <h2 className="text-[#121417] text-base font-bold leading-tight">Flexible Rental Terms</h2>
                    <p className="text-[#687482] text-sm font-normal leading-normal">
                      Customize your rental period to suit your schedule, with options for daily, weekly, or monthly rentals.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* How It Works Section */}
            <h2 className="text-[#121417] text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 pb-3 pt-5">How It Works</h2>
            <div className="flex flex-col gap-10 px-4 py-10 @container">
              <div className="flex flex-col gap-4">
                <h1 className="text-[#121417] tracking-light text-[32px] font-bold leading-tight @[480px]:text-4xl @[480px]:font-black @[480px]:leading-tight @[480px]:tracking-[-0.033em] max-w-[720px]">
                  Simple Steps to Your Dream Drive
                </h1>
                <p className="text-[#121417] text-base font-normal leading-normal max-w-[720px]">
                  Our rental process is designed for ease and efficiency, ensuring you get on the road quickly and without hassle.
                </p>
              </div>
              <div className="grid grid-cols-[repeat(auto-fit,minmax(158px,1fr))] gap-3 p-0">
                <div className="flex flex-1 gap-3 rounded-lg border border-[#dde0e4] bg-white p-4 flex-col">
                  <div className="text-[#121417]">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" fill="currentColor" viewBox="0 0 256 256">
                      <path d="M229.66,218.34l-50.07-50.06a88.11,88.11,0,1,0-11.31,11.31l50.06,50.07a8,8,0,0,0,11.32-11.32ZM40,112a72,72,0,1,1,72,72A72.08,72.08,0,0,1,40,112Z"></path>
                    </svg>
                  </div>
                  <div className="flex flex-col gap-1">
                    <h2 className="text-[#121417] text-base font-bold leading-tight">Choose Your Car</h2>
                    <p className="text-[#687482] text-sm font-normal leading-normal">
                      Browse our extensive fleet of luxury and standard vehicles to find the perfect match for your needs.
                    </p>
                  </div>
                </div>
                <div className="flex flex-1 gap-3 rounded-lg border border-[#dde0e4] bg-white p-4 flex-col">
                  <div className="text-[#121417]">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" fill="currentColor" viewBox="0 0 256 256">
                      <path d="M208,32H184V24a8,8,0,0,0-16,0v8H88V24a8,8,0,0,0-16,0v8H48A16,16,0,0,0,32,48V208a16,16,0,0,0,16,16H208a16,16,0,0,0,16-16V48A16,16,0,0,0,208,32ZM72,48v8a8,8,0,0,0,16,0V48h80v8a8,8,0,0,0,16,0V48h24V80H48V48ZM208,208H48V96H208V208Zm-96-88v64a8,8,0,0,1-16,0V132.94l-4.42,2.22a8,8,0,0,1-7.16-14.32l16-8A8,8,0,0,1,112,120Zm59.16,30.45L152,176h16a8,8,0,0,1,0,16H136a8,8,0,0,1-6.4-12.8l28.78-38.37A8,8,0,1,0,145.07,132a8,8,0,1,1-13.85-8A24,24,0,0,1,176,136,23.76,23.76,0,0,1,171.16,150.45Z"></path>
                    </svg>
                  </div>
                  <div className="flex flex-col gap-1">
                    <h2 className="text-[#121417] text-base font-bold leading-tight">Select Your Dates</h2>
                    <p className="text-[#687482] text-sm font-normal leading-normal">Specify your rental period and any additional options like insurance or extra drivers.</p>
                  </div>
                </div>
                <div className="flex flex-1 gap-3 rounded-lg border border-[#dde0e4] bg-white p-4 flex-col">
                  <div className="text-[#121417]">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" fill="currentColor" viewBox="0 0 256 256">
                      <path d="M160,16A80.07,80.07,0,0,0,83.91,120.78L26.34,178.34A8,8,0,0,0,24,184v40a8,8,0,0,0,8,8H72a8,8,0,0,0,8-8V208H96a8,8,0,0,0,8-8V184h16a8,8,0,0,0,5.66-2.34l9.56-9.57A80,80,0,1,0,160,16Zm0,144a63.7,63.7,0,0,1-23.65-4.51,8,8,0,0,0-8.84,1.68L116.69,168H96a8,8,0,0,0-8,8v16H72a8,8,0,0,0-8,8v16H40V187.31l58.83-58.82a8,8,0,0,0,1.68-8.84A64,64,0,1,1,160,160Zm32-84a12,12,0,1,1-12-12A12,12,0,0,1,192,76Z"></path>
                    </svg>
                  </div>
                  <div className="flex flex-col gap-1">
                    <h2 className="text-[#121417] text-base font-bold leading-tight">Pick Up and Go</h2>
                    <p className="text-[#687482] text-sm font-normal leading-normal">Collect your keys and drive away in your chosen vehicle, ready to explore.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* FAQ Section */}
            <h2 className="text-[#121417] text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 pb-3 pt-5">Frequently Asked Questions</h2>
            <div className="flex flex-col p-4 gap-3">
              <details className="flex flex-col rounded-xl border border-[#dde0e4] bg-white px-[15px] py-[7px] group" open="">
                <summary className="flex cursor-pointer items-center justify-between gap-6 py-2">
                  <p className="text-[#121417] text-sm font-medium leading-normal">What are the requirements to rent a car?</p>
                  <div className="text-[#121417] group-open:rotate-180">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20px" height="20px" fill="currentColor" viewBox="0 0 256 256">
                      <path d="M213.66,101.66l-80,80a8,8,0,0,1-11.32,0l-80-80A8,8,0,0,1,53.66,90.34L128,164.69l74.34-74.35a8,8,0,0,1,11.32,11.32Z"></path>
                    </svg>
                  </div>
                </summary>
                <p className="text-[#687482] text-sm font-normal leading-normal pb-2">
                  To rent a car, you must be at least 25 years old, possess a valid driver's license, and provide a credit card in your name for the rental deposit. Additional
                  requirements may apply based on your location and vehicle type.
                </p>
              </details>
              <details className="flex flex-col rounded-xl border border-[#dde0e4] bg-white px-[15px] py-[7px] group">
                <summary className="flex cursor-pointer items-center justify-between gap-6 py-2">
                  <p className="text-[#121417] text-sm font-medium leading-normal">What types of insurance are available?</p>
                  <div className="text-[#121417] group-open:rotate-180">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20px" height="20px" fill="currentColor" viewBox="0 0 256 256">
                      <path d="M213.66,101.66l-80,80a8,8,0,0,1-11.32,0l-80-80A8,8,0,0,1,53.66,90.34L128,164.69l74.34-74.35a8,8,0,0,1,11.32,11.32Z"></path>
                    </svg>
                  </div>
                </summary>
                <p className="text-[#687482] text-sm font-normal leading-normal pb-2">
                  We offer various insurance options, including collision damage waiver, liability protection, and personal accident insurance. You can choose the coverage that best suits your needs during the booking process.
                </p>
              </details>
              <details className="flex flex-col rounded-xl border border-[#dde0e4] bg-white px-[15px] py-[7px] group">
                <summary className="flex cursor-pointer items-center justify-between gap-6 py-2">
                  <p className="text-[#121417] text-sm font-medium leading-normal">How can I modify my booking?</p>
                  <div className="text-[#121417] group-open:rotate-180">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20px" height="20px" fill="currentColor" viewBox="0 0 256 256">
                      <path d="M213.66,101.66l-80,80a8,8,0,0,1-11.32,0l-80-80A8,8,0,0,1,53.66,90.34L128,164.69l74.34-74.35a8,8,0,0,1,11.32,11.32Z"></path>
                    </svg>
                  </div>
                </summary>
                <p className="text-[#687482] text-sm font-normal leading-normal pb-2">
                  You can modify your booking online by logging into your account, or you can contact our customer support team for assistance. Modifications are subject to availability and may incur additional charges.
                </p>
              </details>
              <details className="flex flex-col rounded-xl border border-[#dde0e4] bg-white px-[15px] py-[7px] group">
                <summary className="flex cursor-pointer items-center justify-between gap-6 py-2">
                  <p className="text-[#121417] text-sm font-medium leading-normal">What is the vehicle return policy?</p>
                  <div className="text-[#121417] group-open:rotate-180">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20px" height="20px" fill="currentColor" viewBox="0 0 256 256">
                      <path d="M213.66,101.66l-80,80a8,8,0,0,1-11.32,0l-80-80A8,8,0,0,1,53.66,90.34L128,164.69l74.34-74.35a8,8,0,0,1,11.32,11.32Z"></path>
                    </svg>
                  </div>
                </summary>
                <p className="text-[#687482] text-sm font-normal leading-normal pb-2">
                  Vehicles should be returned to the specified location on or before the agreed-upon return date and time. Late returns may be subject to additional fees. Please ensure the vehicle is returned in the same condition it was rented.
                </p>
              </details>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default  Hero ;