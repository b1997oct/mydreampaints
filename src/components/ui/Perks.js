import React from "react"

const features = [
    {
        src: "/assets/pd1.png",
        alt: "pd1",
        title: "900+ COLOURS",
        description:
            "Available in 900+ colours including all rainbow colours and shades.",
        imgClass: "w-16 h-16",
    },
    {
        src: "/assets/pd2.png",
        alt: "pd2",
        title: "WASHABLE DISTEMPER",
        description: "You can easily clean your stains with a wet cloth.",
        imgClass: "w-16 h-16",
    },
    {
        src: "/assets/pd3.png",
        alt: "pd3",
        title: "FINISH",
        description:
            "Formulated to provide beautiful, smooth finish that remains longer and safe to environment.",
        imgClass: "w-14 h-14",
    },
    {
        src: "/assets/pd4.png",
        alt: "pd4",
        title: "AFFORDABLE",
        description:
            "An affordable yet long lasting paint for interior and exterior walls of your house.",
        imgClass: "w-16 h-16",
    },
]



export default function Perks() {

    return (
        <div className='theme-container'>
            <div className="flex flex-wrap justify-between bg-white mt-4 md:py-10">
                {features.map((item, index) => (
                    <div
                        key={index}
                        className={`flex p-2 md:p-0 justify-center flex-col gap-2 items-center md:gap-4 w-1/2 lg:w-auto 
            ${index === 0 ? "md:border-r-0 border-r-[1px] md:border-b-0 border-b-[1px] border-gray-400 text-center" : ""} 
            ${index === 1 ? "md:border-b-0 border-b-[1px] border-gray-400" : ""} 
            ${index === 2 ? "md:border-r-0 border-r-[1px] border-gray-400" : ""}`}
                    >
                        <img src={item.src} alt={item.alt} className={item.imgClass} />
                        <div className="font-bold text-[#211d0b] text-lg md:text-xl text-center">{item.title}</div>
                        <div className="text-center text-lg text-gray-500 md:w-52">{item.description}</div>
                    </div>
                ))}
            </div>
        </div>
    )
}
