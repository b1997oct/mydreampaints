import Heading from "./Heading"

const stepsList = [
  {
    id: 1,
    image: "/assets/i1.png",
    title: "On Time Completion",
    discription:
      "My dream paint promise you the completion of project in time if in case any emergency iterruptions occurs then we'll info you before but most of the time our projects complete in time.",
  },
  {
    id: 2,
    image: "/assets/i2.png",
    title: "Expert Color Consultancy",
    discription:
      "Mydream Paints Safe Painting Service offers a curated selection of our favourite safe painting colours for you to choose from. Our expert will help you finalize the colours.",
  },
  {
    id: 3,
    image: "/assets/i4.png",
    title: "Professionally Trained Painters",
    discription:
      "We use a well-established execution process with a robust project managment framework to ensure a high quality, on time execution of your home interior design!",
  },
  {
    id: 4,
    image: "/assets/i3.png",
    title: "On Time Completion",
    discription:
      "My dream paint promise you the completion of project in time if in case any emergency iterruptions occurs then we'll info you before but most of the time our projects complete in time",
  },
  {
    id: 5,
    image: "/assets/i5.png",
    title: "After all paiting complete",
    discription:
      "Once the site is ready, we do a post-painting clean-up & home disinfection service and will give you a walkthrough of how to take care of your walls.",
  },
]


export const Steps = () => {
    return (
        <div className="w-full py-12 md:pt-20 bg-gradient-to-b bg-sky-50 to-white">

            <Heading className={"mb-12"}>
                Our Approach 
            </Heading>
            <div className="theme-container px-4 lg:px-0">

                <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
                    {stepsList.map((step) => (
                        <div className="group transition-all duration-300 hover:-translate-y-1 p-[2px] rounded-2xl  bg-gradient-to-r from-blue-400 via-green-400 to-orange-400">
                            <div className="relative h-full bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl ">
                                <div className="flex justify-center">
                                    <div className="relative flex items-center justify-center">
                                        {/* Decorative ring */}
                                        <div className="absolute w-24 h-24 rounded-full bg-gradient-to-br from-blue-200 via-green-200 to-orange-200 opacity-30 blur-md -z-10"></div>
                                        <div className="w-20 h-20 rounded-full bg-gradient-to-r from-blue-400 via-green-300 to-orange-300 flex items-center justify-center shadow-md group-hover:scale-110 transition-transform duration-300 border-4 border-white">
                                            <img
                                                src={step.image}
                                                alt={step.title}
                                                className="w-12 h-12 object-contain"
                                            />
                                        </div>
                                    </div>
                                </div>
                                <h3 className="text-xl font-semibold text-blue-700 text-center mt-6 tracking-tight group-hover:text-orange-600 transition-colors duration-300">
                                    {step.title}
                                </h3>
                                <p className="text-gray-600 text-sm text-center mt-3 leading-relaxed font-medium group-hover:text-green-600 transition-colors duration-300">
                                    {step.discription}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}
