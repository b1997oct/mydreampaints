
import {
    Accordion,
    AccordionItem,
    AccordionTrigger,
    AccordionContent,
} from "@/components/base/accordion";

const faqs = [
    {
        "question": "How is My dream paints different from other paint brands?",
        "answer": "My Dream Paints sets itself apart by focusing on genuine customer needs. Our products cover 40% more area per liter compared to other brands, making them highly efficient and cost-effective."
    },
    {
        "question": "What is My Dream Paints Safe Painting Service?",
        "answer": "The My Dream Paints Safe Painting Service connects you with professional painting service providers across India. They will use genuine My Dream Paints products to deliver safe and hygienic home painting and sanitization services. The service also includes a free consultation with our representative to help you select the right products, shades, and textures."
    },
    {
        "question": "How will My dream Paints Safe Painting Service go about painting your home?",
        "answer": "Our representative will first contact you to understand your needs, then visit your home for a site evaluation. Based on the evaluation and your requirements, they will provide a quotation from a service provider. The entire process follows strict safety protocols, including temperature checks and site sanitization, with a supervisor available for quality checks and to oversee the work."
    },
    {
        "question": "What are the features of My dream Paints Safe Painting Service?",
        "answer": "The service includes expert guidance for product and color selection, complete supervision during the project, live progress updates, and guaranteed on-time completion."
    },
    {
        "question": "How My dream Paint Gives Live Update",
        "answer": "My Dream Paints provides live site updates to clients through photos and live video options."
    },
    {
        "question": "After the painting work is over, will My dream Paints Safe Painting Service clean up my house?",
        "answer": "Yes, we perform a post-painting clean-up to ensure your home is left clean, sanitized, and beautifully painted."
    },
    {
        "question": "How can you register for My dream Paints Safe Painting Service?",
        "answer": "You can register by contacting us at +91 9482658028 (available 8:00 am to 8:00 pm, Monday to Sunday), emailing mydreampaintsmgt@gmail.com, or by filling out the form on our website."
    },
    {
        "question": "Which type of paint is best for interior walls in India?",
        "answer": "The best paint depends on your needs. For a short-term or maintenance coat, our Silver, Gold, and Diamond series are a good, budget-friendly option. For stain resistance and easy cleaning, our specialized emulsions are recommended. If you want a rich sheen, high washability, and tough stain resistance, our Luxury Diamond Interior or Exterior emulsion is perfect. All our interior emulsions are available in a wide range of colors."
    },
    {
        "question": "How long does interior paint last on the wall?",
        "answer": "The longevity of interior paint depends on the paint quality, application process, wear and tear, and general maintenance. A good quality emulsion, when applied correctly, should last between five to seven years. My Dream Paints offers a range of interior emulsions with a smooth, washable, and durable finish."
    },
    {
        "question": "Will My dream Paints Safe Painting Service assist me in shifting and covering furniture before painting starts?",
        "answer": "Yes, our team will help you shift your furniture and will cover floors, furniture, doors, windows, and cupboards with masking sheets to protect them from any damage during the painting process."
    }
]

export default function FAQSection() {
    return (
        <div className="theme-container">
            <div className="w-full flex items-center lg:items-start justify-between flex-col lg:flex-row py-36 gap-8 ">
                {/* Title */}
                <h2 className="text-center max-lg:mx-auto max-lg:max-w-[388px] lg:text-start w-full text-[40px] max-w-[388px] leading-[42px] md:text-5xl md:leading-[50px] font-[550] mb-15 lg:mb-16">
                    Frequently Asked Questions
                </h2>

                {/* Accordion */}
                <div className="max-w-[600px]  md:-mt-10 w-full">
                    <Accordion type="single" collapsible>
                        {faqs.map((item, i) => (
                            <AccordionItem key={i} value={`item-${i}`} className="py-6 border-b">
                                <AccordionTrigger className="text-2xl px-6 font-medium">
                                    {item.question}
                                </AccordionTrigger>
                                <AccordionContent className="px-6 text-lg text-gray-600">
                                    {item.answer}
                                </AccordionContent>
                            </AccordionItem>
                        ))}
                    </Accordion>

                </div>
            </div>
        </div>
    );
}
