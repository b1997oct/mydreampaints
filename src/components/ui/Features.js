import Image from "next/image"
import roller from "../../assets/paint-roller.gif"
import tree from "../../assets/tree.gif"
import shield from "../../assets/shield.gif"
import timer from "../../assets/timer.gif"
import armchair from '../../assets/armchair.gif'
import Heading from "./Heading"

const featuresList = [
    {
        id: 1,
        title: "Expert Color Consultancy",
        description:
            "Our experts help choose color palettes that suit your preference. Get free color previews before getting actual painting!",
        image: roller,
        color: "from-pink-400 to-red-500",
    },
    {
        id: 2,
        title: "Hygienic and Dust Free Process",
        description:
            "We use high tech machines to ensure a dust-free and safe home makeover.",
        image: tree,
        color: "from-green-400 to-emerald-500",
    },
    {
        id: 3,
        title: "Procare & Safety",
        description:
            "Your Safety is our first priority. Our team and applicators are vaccinated and ensure hygienic service delivery. Our core focus is on green technology. We make and sell paints that are not only technologically advanced but also environment friendly.",
        image: shield,
        color: "from-teal-400 to-cyan-500",
        isCenter: true,
    },
    {
        id: 4,
        title: "Supervision & On Time Completion",
        description:
            "We work on your schedule, supervise and plan execution to make sure that we complete on-time.",
        image: timer,
        color: "from-indigo-400 to-blue-500",
    },
    {
        id: 5,
        title: "Protection of Furniture",
        description: "We secure and shift all your goods carefully.",
        image: armchair,
        color: "from-teal-400 to-emerald-500",
    },
]

export const Features = () => {
    
    return (
        <section className="w-full bg-gradient-to-b from-white to-gray-50 py-12 md:pt-20">
            <div className="theme-container px-4 lg:px-0">
                <div className="text-center mb-16">
                    <h6 className="uppercase text-pink-500 font-semibold tracking-widest">
                        Features
                    </h6>
                    <Heading>
                        Why Choose Us
                    </Heading>
                </div>

                <div className="grid gap-10 lg:grid-cols-3">
                    {/* LEFT COLUMN */}
                    <div className="grid md:grid-cols-2 lg:flex flex-col gap-10">
                        {featuresList
                            .filter((f) => [1, 2].includes(f.id))
                            .map((feature) => (
                                <div
                                    key={feature.id}
                                    className="group relative bg-white/70 rounded-2xl p-8 shadow-xl border border-transparent transition-all hover:-translate-y-1 hover:shadow-2xl"
                                >
                                    {/* Glow Accent */}
                                    <div className={`absolute -top-3 -left-3 w-16 h-16 rounded-full blur-xl opacity-30 ${feature.color}`}></div>
                                    <div className="flex justify-center mb-6">
                                        <div className={`bg-gradient-to-r ${feature.color} p-[3px] rounded-full`}>
                                            <div className="bg-white rounded-full p-4 shadow-lg">
                                                <Image
                                                    src={feature.image}
                                                    alt={feature.title}
                                                    className="w-14 h-14 object-contain"
                                                />
                                            </div>
                                        </div>
                                    </div>
                                    <h3 className="text-xl font-extrabold text-gray-900 mb-3 text-center tracking-tight group-hover:text-orange-600 transition-colors duration-300">
                                        {feature.title}
                                    </h3>
                                    <p className="text-gray-700 text-base leading-relaxed text-center font-medium group-hover:text-blue-500 transition-colors duration-300">
                                        {feature.description}
                                    </p>
                                </div>
                            ))}
                    </div>

                    {/* CENTER FEATURE */}
                    <div className="flex items-center justify-center">
                        <div className="relative bg-white rounded-3xl shadow-2xl border-0 p-12 w-full max-w-md flex flex-col items-center text-center overflow-visible">
                            {/* Ambient blurred gradient glow */}
                            <div className="absolute  md:-top-10 md:-left-10 w-48 h-48 bg-gradient-to-br from-blue-300 via-green-200 to-orange-200 rounded-full blur-2xl opacity-40 z-0"></div>
                            <div className="absolute md:-bottom-10 md:-right-10 w-40 h-40 bg-gradient-to-tr from-orange-200 via-blue-100 to-green-100 rounded-full blur-2xl opacity-30 z-0"></div>

                            {/* Main content */}
                            <div className="relative z-10 flex flex-col items-center">
                                <div className="mb-6">
                                    <div className="bg-gradient-to-r from-blue-400 via-green-400 to-orange-400 p-[4px] rounded-full">
                                        <div className="bg-white rounded-full p-3 shadow-lg">
                                            <Image
                                                src={featuresList[2].image}
                                                alt={featuresList[2].title}
                                                className="w-14 h-14 object-contain"
                                            />
                                        </div>
                                    </div>
                                </div>
                                <h3 className="text-3xl font-extrabold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-blue-500 via-green-500 to-orange-500">
                                    {featuresList[2].title}
                                </h3>
                                <p className="text-gray-700 text-lg leading-relaxed font-medium">
                                    {featuresList[2].description}
                                </p>
                                <button className="mt-8 bg-gradient-to-r from-blue-500 via-green-400 to-orange-400 text-white px-8 py-3 rounded-xl shadow-lg hover:scale-105 hover:shadow-2xl transition-all text-lg font-bold">
                                    Contact Us
                                </button>
                            </div>
                        </div>
                    </div>

                    {/* RIGHT COLUMN */}
                    <div className="grid md:grid-cols-2 lg:flex flex-col gap-10">
                        {featuresList
                            .filter((f) => [4, 5].includes(f.id))
                            .map((feature) => (
                                <div
                                    key={feature.id}
                                    className="group relative bg-white/70 rounded-2xl p-8 shadow-xl border border-transparent transition-all hover:-translate-y-1 hover:shadow-2xl"
                                >
                                    {/* Glow Accent */}
                                    <div className={`absolute -bottom-3 -right-3 w-16 h-16 rounded-full blur-xl opacity-30 ${feature.color}`}></div>
                                    <div className="flex justify-center mb-6">
                                        <div className={`bg-gradient-to-r ${feature.color} p-[3px] rounded-full`}>
                                            <div className="bg-white rounded-full p-4 shadow-lg">
                                                <Image
                                                    src={feature.image}
                                                    alt={feature.title}
                                                    className="w-14 h-14 object-contain"
                                                />
                                            </div>
                                        </div>
                                    </div>
                                    <h3 className="text-xl font-extrabold text-gray-900 mb-3 text-center tracking-tight group-hover:text-orange-600 transition-colors duration-300">
                                        {feature.title}
                                    </h3>
                                    <p className="text-gray-700 text-base leading-relaxed text-center font-medium group-hover:text-blue-500 transition-colors duration-300">
                                        {feature.description}
                                    </p>
                                </div>
                            ))}
                    </div>
                </div>
            </div>
        </section>
    )
}
