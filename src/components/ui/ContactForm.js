"use client"

export default function ContactForm() {
    return (
        <div className="w-full max-w-xl mx-auto rounded-xl shadow-lg bg-white px-6 md:px-12 py-12">
            <h2 className="text-3xl font-bold text-gray-900 text-center pb-8">
                Connect with My Dream Paints
            </h2>
            <div className="grid gap-6 w-full">
                {/* Your Name */}
                <div className="grid gap-2">
                    <label htmlFor="name" className="text-sm font-medium text-gray-700">
                        Your Name
                    </label>
                    <input
                        id="name"
                        type="text"
                        placeholder="Jane Doe"
                        className="w-full rounded-md border border-gray-300 bg-gray-50 px-4 py-2 text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                </div>

                {/* Your Mobile */}
                <div className="grid gap-2">
                    <label htmlFor="mobile" className="text-sm font-medium text-gray-700">
                        Your Mobile
                    </label>
                    <input
                        id="mobile"
                        type="tel"
                        placeholder="+91 98765 43210"
                        className="w-full rounded-md border border-gray-300 bg-gray-50 px-4 py-2 text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                </div>

                {/* Note/Message */}
                <div className="grid gap-2">
                    <label htmlFor="message" className="text-sm font-medium text-gray-700">
                        Message
                    </label>
                    <textarea
                        id="message"
                        rows="4"
                        placeholder="How can we help you?"
                        className="w-full rounded-md border border-gray-300 bg-gray-50 px-4 py-2 text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none"
                    />
                </div>

                {/* Submit Button */}
                <button className="w-full rounded-md bg-blue-600 px-4 py-3 text-lg font-semibold text-white transition-colors duration-300 hover:bg-blue-700 focus:outline-none focus:ring-4 focus:ring-blue-300">
                    Send Message
                </button>
            </div>
        </div>
    );
}