import { FaStar, FaStarHalfAlt, FaRegStar } from "react-icons/fa"
import Image from "next/image"
import { customersList } from "@/archived-files/Components/Services/data/data"
import { cn } from "@/lib/utils"

const Rating = ({ value }) => {
    const fullStars = Math.floor(value)
    const halfStar = value % 1 >= 0.5
    const emptyStars = 5 - fullStars - (halfStar ? 1 : 0)

    return (
        <div className="flex items-center gap-1 text-yellow-400">
            {Array(fullStars).fill(0).map((_, i) => <FaStar key={`full-${i}`} />)}
            {halfStar && <FaStarHalfAlt />}
            {Array(emptyStars).fill(0).map((_, i) => <FaRegStar key={`empty-${i}`} />)}
        </div>
    )
}

export function Customers() {
    return (
        <div className="theme-container">
            <div className="flex md:flex-wrap overflow-auto md:overflow-visible justify-between gap-8 md:gap-16 py-10 px-4 md:px-0">
                {customersList.map((customer, idx) => (
                    <div
                        key={idx}
                        className={cn(
                            `relative group rounded-2xl shadow-lg border-t-8 p-6 min-w-[330px] md:w-[350px] flex flex-col items-center transition-all duration-30
    border-blue-400
    hover:-translate-y-2 hover:shadow-2xl
    hover:border-orange-400
    `
                        )}
                    >
                        {/* Floating Avatar */}
                        <div className="absolute -top-10 left-1/2 -translate-x-1/2">
                            <div className="rounded-full border-4 border-blue-400 shadow-lg overflow-hidden w-20 h-20
      bg-gradient-to-br from-blue-300 via-green-300 to-orange-300
      flex items-center justify-center
      group-hover:border-orange-400 transition-all duration-300"
                            >
                                <Image
                                    src={customer.image}
                                    alt={customer.name}
                                    className="object-cover w-full h-full"
                                />
                            </div>
                        </div>

                        {/* Card Content */}
                        <div className="pt-12 pb-6 text-center w-full flex flex-col items-center">
                            <h3 className="text-xl font-bold">
                                {customer.name}
                            </h3>
                            <span className="text-sm text-black/80 mt-1 flex items-center">
                                <span>📍</span>{customer.location}
                            </span>
                            {/* Quotation box */}
                            <div className="mt-4 w-full px-3 py-4 bg-gradient-to-r from-blue-50 via-green-50 to-orange-50 rounded-xl border border-blue-100 text-gray-700 italic shadow-inner">
                                “{customer.description}”
                            </div>
                        </div>

                        {/* Rating */}
                        <div className="mt-2 flex flex-col items-center w-full">
                            <Rating value={customer.rating} />
                            <span className="mt-1 text-xs text-orange-500 font-semibold">
                                {customer.rating}/5
                            </span>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}
