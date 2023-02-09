import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Divider } from '@mui/material';

export default function Faq() {

    const [data, setData] = React.useState([
        {
            title: "How is My dream paints different from other paint brands?",
            discription: "By dedicating ourselves to satisfying true customer needs, we set ourselves apart from other paint brands. My Dream Paints products are highly Qualified because My Dream Paints covers 40% more area when compare with other painting brands that are covers less area per liter of paint",
            id: 1
        },
        {
            title: "What is My Dream Paints Safe Painting Service?",
            discription: "We at My dream Paints are here to facilitate a professional experience and to that end, have partnered with service providers and painting professionals all over India. The Safe Painting Service connects you with a service provider/painting professional who will help deliver safe and hygienic home painting/sanitization services using genuine and quality My dream Paints products. The service also allows for free consultation with our representative to assist in the selection of paint products, shades, textures, etc.",
            id: 2
        },
        {
            title: "How will My dream Paints Safe Painting Service go about painting your home?",
            discription: "As part of this service, our representative will contact you to understand your painting needs. The associate will visit your premises and do the site evaluation. Based on the site evaluation and your painting/sanitization requirements, the associate will provide the service provider’s quotation for painting your premises. All the processes are carried out while following stringent safety protocols which include temperature checks, site sanitization, enhanced supervision and 10+ safety measures to ensure a safe environment. The Supervisor will also be available to assist the site on regular intervals, or, on need basis to do quality checks and supervise the painting work.",
            id: 3
        },       
        {
            title: "What are the features of My dream Paints Safe Painting Service?",
            array: true,
            discription: [
                { i: "- Get expert guidance for product and shade selection" },
                { i: "- Complete supervision during the execution of site" },
                { i: "- Live Progress update" },
                { i: "- In Time completion" }],

            id: 4
        },
        {
            title: "How My dream Paint Gives Live Update",
            discription : "My dream Paint Provides Live Site update through Photo and Live Video options to clients",
            

            id: 5
        },
        {
            title: "After the painting work is over, will My dream Paints Safe Painting Service be clean up my house?",
            discription: "Yes, we do the post-painting clean up for your home and leave your home clean, sanitized and beautifully painted.",
            id: 6
        },
        {
            title: "How can you register for My dream Paints Safe Painting Service ?",
            discription: "You may contact us at Phone - +91 9482658028, anytime between 08:00 am to 08:00 pm, Monday to Sunday Email - mydreampaintsmgt@gmail.com Or fill up the form on this page.",
            id: 7
        },
        {
            title: "Which type of paint is best for interior walls in India?",
            array: true,
            discription:
                [
                    { i: "- Identify the reason for getting your wall painted. For short term protection or a maintenance coat, you can choose from our Silver, Gold and Diamond series Paints. These serve the purpose and are easy on the pocket." },
                    { i: "- If Stain resistance and easy-to-clean properties are your concern, will do the job." },
                    { i: "- If rich sheen, tough stain resistance and high washability are your priority our Luxury Diamond Interior emulsion or Luxury Diamond Exterior emulsion will be perfect." },
                    { i: "- Rest assured whichever be the product you choose;  Interior Emulsions will be available in a wide range of colours." },
                ],

            id: 8
        },
        {
            title: "How long does interior paint last on the wall?",
            discription: "Several factors decide how long the interior paint will last. These include the quality of interior paint used, the system of application followed, the level of abuse it has been exposed to and also the general upkeep and maintenance of the wall. A good quality emulsion, applied following the correct system should last between five to seven years. My dream Paints offers a range of interior emulsions that have a smooth finish and is easy to wash and maintain.",
            id: 9
        },
        {
            title: "Will My dream Paints Safe Painting Service assist me in shifting and covering furniture before painting starts?",
            discription: "We cover the floor, furniture, doors, windows, cupboards, etc., with masking sheets, before we start painting to prevent any damage during the painting process. Our team also helps you shift the furniture.",
            id: 10
        }
    ])

    return (
        <div className='pb-10 md:pb-20'>
            <div className='mx-2'>
                {data.map((items) => (
                    <div key={items.id}>
                        <Accordion style={{ backgroundColor: "rgb(243, 244, 234)" }}>
                            <AccordionSummary
                                expandIcon={<ExpandMoreIcon />}
                                aria-controls="panel1a-content"
                                id="panel1a-header"
                            >
                                <Typography
                                ><div className='font-bold md:font-normal text-sm sm:text-xl lg:text-2xl'>{items.id}. {" "}{items.title}</div></Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                                <Typography
                                >{items.array ?

                                    items.discription.map((p) => (
                                        <p className='text-justify text-sm lg:text-xl'
                                            key={p.i}>{p.i}</p>
                                    ))


                                    : <p className='text-justify text-sm lg:text-xl'>
                                        {items.discription}
                                    </p>}
                                </Typography>
                            </AccordionDetails>
                        </Accordion>
                        <Divider className='h-1' />
                    </div>

                ))
                }
            </div>
        </div>
    );
}