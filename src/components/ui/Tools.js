import { cn } from '@/lib/utils';
import Link from 'next/link';
import React from 'react'
import Heading from './Heading';
import { slug } from '@/lib/slug';


const toolsData = [
    {
        "id": "general-purpose-painting-hand-gloves",
        "tool_title": "General Purpose Painting Hand Gloves",
        "short_desp": "Standard protective gloves for cleanup, light masking, and handling non-hazardous paint supplies.",
        "description": "<p>These **General Purpose Painting Hand Gloves** are ideal for the daily routine of a painter, offering protection against dirt, minor abrasions, and keeping hands clean during masking, sanding prep, and handling tools. They are suitable for tasks where heavy chemical resistance isn't necessary. Use them for general protection in non-hazardous environments.</p><h3>Primary Applications:</h3><ul><li>Applying painter's tape and masking off areas</li><li>Handling paint cans, rollers, and brushes during setup</li></ul><p>For more aggressive tasks, consider the **Industrial Rubber Solvent Gloves**.</p>",
        "images": [
            "gloves-2.jpg",
            "gloves-3.jpg",
            "gloves-4.jpg",
            "gloves.jpg",
            "hand-gloves-2.jpg",
            "hand-gloves.jpg"
        ],
        "use_cases": [
            "Applying painter's tape and masking off areas",
            "Handling paint cans, rollers, and brushes during setup",
            "Light sanding and surface dusting",
            "Final cleanup of the job site"
        ]
    },
    {
        "id": "industrial-rubber-solvent-gloves",
        "tool_title": "Industrial Rubber Solvent Gloves",
        "short_desp": "Heavy-duty chemical-resistant gloves essential for handling paint strippers, thinners, and industrial coatings.",
        "description": "<p>Our **Industrial Rubber Solvent Gloves** provide critical protection against corrosive chemicals like paint thinners, acetone, and industrial-grade solvents used in stripping and cleaning processes. Their robust construction and extended cuff ensure safety when dealing with hazardous painting prep materials and equipment cleaning. This is your essential barrier for chemical safety.</p><h3>Key Protection Features:</h3><ul><li>Resistance to paint thinners, acetone, and lacquer</li><li>Extended cuff for wrist and forearm protection</li></ul><p>Perfect for tasks like: **Cleaning spray gun parts and equipment with powerful cleaners** (one of the key use cases).</p>",
        "images": [
            "industrial-rubber-gloves-2.jpg",
            "rubber-gloves-2.jpg",
            "rubber-gloves.jpg"
        ],
        "use_cases": [
            "Handling and mixing strong paint chemicals and solvents",
            "Applying paint and lacquer strippers",
            "Cleaning spray gun parts and equipment with powerful cleaners",
            "Protecting against harsh epoxy and resin systems"
        ]
    },
    {
        "id": "pu-coated-finger-coat-precision-gloves",
        "tool_title": "PU-Coated & Finger-Coat Precision Gloves",
        "short_desp": "High-dexterity gloves for precision work, automotive painting, and inspecting fine finishes.",
        "description": "<p>The **Polyurethane (PU) coating** on these **PU-Coated & Finger-Coat Precision Gloves** offers superior grip and tactile sensitivity, crucial for detail work like pinstriping, touch-ups, or handling small components. **Finger coats** are used to prevent fingerprints and contamination on freshly prepared or clear-coated surfaces before curing. The high dexterity supports applications such as: **Automotive body painting and clear coat application**.</p>",
        "images": [
            "finger-coat.jpg",
            "pu-hand-gloves.jpg"
        ],
        "use_cases": [
            "Automotive body painting and clear coat application",
            "Inspecting and handling freshly painted materials without leaving marks",
            "Applying fine detailing and stencil work",
            "Performing precise touch-up tasks"
        ]
    },
    {
        "id": "patty-blades-paint-spreading-tools",
        "tool_title": "Patty Blades & Paint Spreading Tools",
        "short_desp": "Flexible and rigid blades used for applying fillers, spreading putty, and scraping materials in surface preparation.",
        "description": "<p>These **Patty Blades & Paint Spreading Tools** are fundamental in the prep stage of painting. They are used to **apply and smooth body filler or patching compound** over imperfections on walls or metal. They are also useful for scraping loose paint or caulk to ensure a clean, smooth substrate for the new coating.</p><h3>Blade Types and Uses:</h3><ul><li><strong>Flexible blades:</strong> Ideal for feathering and blending spackle/putty.</li><li><strong>Rigid blades:</strong> Excellent for scraping failed materials or mixing thick compounds.</li></ul><p>A must-have for any drywall repair project.</p>",
        "images": [
            "patty blade-4.jpg",
            "patty-balde-8.jpg",
            "patty-blade.jpg"
        ],
        "use_cases": [
            "Applying and feathering spackle/putty on drywall repairs",
            "Scraping failed paint, caulk, or wallpaper residue",
            "Mixing two-part primers or resin-based fillers",
            "Cleaning excess materials from edges and corners"
        ]
    },
    {
        "id": "sandpaper-for-paint-preparation",
        "tool_title": "Sandpaper for Paint Preparation",
        "short_desp": "Abrasives essential for creating tooth (adhesion) and smoothing surfaces before and between paint coats.",
        "description": "<p>Proper **sanding** using this **Sandpaper for Paint Preparation** is the most critical step for achieving a durable, professional finish. Our sandpaper comes in various grits necessary for preparing substrates (coarse) and smoothing primer or clear coats (fine). It ensures optimal **paint adhesion** and eliminates surface defects.</p><h3>Key Sanding Goal:</h3><p>The primary goal is **Roughing up old glossy finishes (keying) for better paint grip**, as listed in the use cases.</p>",
        "images": [
            "sand-papper-2.jpg",
            "sand-papper.jpg"
        ],
        "use_cases": [
            "Wet and dry sanding of automotive primer and clear coats",
            "Roughing up old glossy finishes (keying) for better paint grip",
            "Smoothing patched areas to blend seamlessly with the surrounding surface",
            "Removing runs or sags between clear coat applications"
        ]
    },
    {
        "id": "steel-wool-for-finishing",
        "tool_title": "Steel Wool for Finishing",
        "short_desp": "Fine-grade steel filaments used for specialized finishing techniques on wood and metal coatings.",
        "description": "<p>**Steel Wool for Finishing** is typically used for delicate abrasion where sandpaper is too harsh. It excels at **denibbing** (removing dust nibs or small imperfections) from varnish, lacquer, or clear coats without cutting too deeply, and for light matte finishing. It's perfectly suited for **Gently cleaning and preparing intricate carved woodwork for refinishing**.</p><h3>Recommended Uses:</h3><ul><li>Denibbing varnish and lacquer finishes.</li><li>Achieving a beautiful satin or matte effect.</li></ul>",
        "images": [
            "steel-wool.jpg"
        ],
        "use_cases": [
            "Lightly abrading clear coats or varnish between coats for smoothness",
            "Creating a matte or satin finish on wood stains and sealers",
            "Gently cleaning and preparing intricate carved woodwork for refinishing",
            "Removing minor rust spots before applying a rust-inhibiting primer"
        ]
    },
    {
        "id": "spikes-brush-for-heavy-surface-preparation",
        "tool_title": "Spikes Brush for Heavy Surface Preparation",
        "short_desp": "An aggressive brush used for intensive cleaning and removal of heavy, flaking materials before priming.",
        "description": "<p>The **Spikes Brush for Heavy Surface Preparation** is a heavy-duty tool reserved for surfaces that require aggressive preparation. It is used to quickly remove **flaking, deteriorated paint, heavy rust, or deeply embedded contaminants** from porous or textured substrates like stucco, concrete, or heavily corroded metal before applying the first coat of primer. This tool specializes in **Removing thick, layers of old paint and buildup from concrete or masonry**.</p><h3>Warning:</h3><p>Use with caution on soft or delicate surfaces due to its high abrasive action.</p>",
        "images": [
            "spikes-brush.jpg"
        ],
        "use_cases": [
            "Removing thick, layers of old paint and buildup from concrete or masonry",
            "Preparing badly corroded structural steel before sandblasting or chemical treatment",
            "Aggressively scrubbing exterior surfaces to remove mildew and chalking",
            "Cleaning deep textures for better primer penetration"
        ]
    }
];


export function getToolById(id) {
    return toolsData.find(tool => tool.id === id) || null;
}

// Helper function to get related tools (e.g., first 3, excluding the current one)
export function getRelatedTools(currentId) {

    const index = toolsData.findIndex(tool => tool.id === currentId);
    const slicer = index > 3 ? [0, 3] : [3, toolsData.length]
    return toolsData
        .filter(tool => tool.id !== currentId)
        .slice(...slicer);

}

export function getAllToolIds() {
    return toolsData.map(tool => ({ params: { id: tool.id } }));
}

export const Tools = ({ homePage }) => {


    return (
        <div className='theme-container'>
            <Heading>Painting Tools</Heading>

            <div className="flex flex-wrap justify-between gap-6 md:pt-12 py-8 px-4 md:px-0">

                {toolsData.slice(0, homePage ? 6 : toolsData.length).map((tool, index) => {
                    return (
                        <Link
                            href={`/products/${slug(tool.id)}`}
                            key={index}
                            className={`
        bg-white rounded-xl overflow-hidden flex flex-col h-full 
        shadow-[0_15px_30px_rgba(0,0,0,0.08),_0_8px_8px_rgba(0,0,0,0.04)]
        hover:-translate-y-1                 
        group w-full sm:w-[300px] md:w-[350px]
    `}
                        >
                            <div className="p-6">
                                <h3 className={`
            text-2xl font-extrabold tracking-tight group-hover:tracking-wide duration-300
        `}>
                                    {tool.tool_title}
                                </h3>
                            </div>

                            {/* Single Image Section */}
                            <div className="relative h-48 overflow-hidden bg-gray-50 flex justify-center items-center">
                                <img
                                    src={`/assets/tools/${tool.images[0]}`}
                                    alt={tool.tool_title}
                                    className="w-full h-full object-contain group-hover:scale-[1.05] transition duration-500"
                                />
                            </div>

                            {/* Description Section */}
                            <p className="mt-4 text-base text-gray-700 p-6 flex-grow">
                                {tool.short_desp}
                            </p>

                            {/* Action Button/Link */}
                            <div className="p-6 pt-0 flex justify-end mt-auto">
                                <a
                                    className={`
                text-base font-bold text-blue-600
                hover:underline transition duration-300
            `}
                                >
                                    View More &rarr;
                                </a>
                            </div>

                        </Link>
                    );
                })}
            </div>
        </div>
    );
}
