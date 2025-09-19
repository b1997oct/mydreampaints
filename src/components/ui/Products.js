import { CheckCircle } from "lucide-react"
import { FaStar, FaStarHalfAlt, FaRegStar } from "react-icons/fa"
import Image from "next/image"
import { productsList } from "@/archived-files/Components/Products/data/data"
import Heading from "./Heading"

const Rating = ({ value }) => {
    const fullStars = Math.floor(value)
    const halfStar = value % 1 >= 0.5
    const emptyStars = 5 - fullStars - (halfStar ? 1 : 0)

    return (
        <div className="flex items-center gap-1 text-yellow-500">
            {Array(fullStars).fill(0).map((_, i) => <FaStar key={`full-${i}`} />)}
            {halfStar && <FaStarHalfAlt />}
            {Array(emptyStars).fill(0).map((_, i) => <FaRegStar key={`empty-${i}`} />)}
        </div>
    )
}

export function Products() {
    return (
        <div className="theme-container">
            <Heading className={"my-12"}>Our Products</Heading>
            <div className="flex flex-wrap justify-between gap-6 py-8 px-4 md:px-0">
                {productsList.map((product, idx) => (
                    <div
                        key={idx}
                        data-aos="fade-in"
                        className="bg-white rounded-2xl 
          drop-shadow-[0_4px_12px_rgba(0,0,0,0.08)] 
          hover:drop-shadow-[0_8px_24px_rgba(0,0,0,0.15)] 
          transition-all duration-300 overflow-hidden flex flex-col w-full sm:w-[300px] md:w-[350px] pt-4"
                    >
                        <div className="w-full h-48 relative">
                            <Image
                                src={product.image}
                                alt={product.name}
                                fill
                                className="object-contain"
                            />
                        </div>
                        <div className="p-5 flex flex-col flex-1 gap-4">
                            <div>
                                <h2 className="text-xl font-bold text-[#211d0b]">
                                    {product.name}
                                </h2>
                                <p className="text-gray-600 mt-2 text-sm leading-relaxed">
                                    {product.description}
                                </p>
                            </div>
                            <div className="flex flex-col gap-2">
                                {product.features?.map((f, i) => (
                                    <div
                                        key={i}
                                        className="flex items-center gap-2 text-gray-700 text-sm"
                                    >
                                        <CheckCircle className="text-green-600 w-5 h-5" />
                                        <span>{f.i}</span>
                                    </div>
                                ))}
                            </div>
                            <div className="mt-auto flex justify-between items-center pt-3 border-t">
                                <Rating value={product.rating} />
                                <span className="text-sm text-gray-500">{product.rating}/5</span>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>

    )
}
