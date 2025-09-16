"use client"

export default function ContactForm() {
    return (
        <div className="w-full max-w-xl rounded-lg bg-gray-100 px-4 md:px-12 py-12">

            <h2 className="text-2xl font-semibold text-orange-600 text-center pb-8">
                CONNECT WITH MY DREAM PAINTS
            </h2>
            <div className="grid gap-4 w-full max-w-xl py-4">

                <div className="grid gap-2">
                    <label>Your Name</label>
                    <input placeholder="Your Name" />
                </div>

                <div className="grid gap-2">
                <label>Your Mobile</label>
                <input placeholder="Your Mobile" />
                </div>
                {/* <input placeholder="Email" /> */}

                <div className="grid gap-2">
                <label>Note</label>
                <textarea placeholder="Message" />
                </div>

                <button className="bg-orange-600 py-3 text-white mt-4">SEND</button>
            </div>
        </div>
    )
}
