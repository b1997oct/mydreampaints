// pages/tools/[id].js
import Link from 'next/link';
import { getAllToolIds, getToolById, getRelatedTools } from '@/components/ui/Tools';


export async function generateMetadata({ params }) {
    const { id } = params;
    const tool = getToolById(id);

    if (!tool) {
        return {
            title: "Tool Not Found",
            description: "The requested tool could not be found.",
        };
    }

    return {
        title: `${tool.tool_title} | Painting Tools`,
        description: tool.short_desp,
    };
}

export async function generateStaticParams() {
    // getAllToolIds should return an array of objects like:
    // [{ id: 'gen-gloves' }, { id: 'spikes-brush' }, ...]
    const paths = getAllToolIds();

    // We map the array of objects containing 'params' (from Pages Router) 
    // to just the parameter objects required by generateStaticParams.
    return paths.map(tool => ({
        id: tool.params.id,
    }));
}


// --- 3. React Component (Tailwind Layout) ---
export default function ToolDetailPage({ params }) {

    const { id } = params
    const currentTool = getToolById(id);

    // Safety check just in case, though getStaticProps should handle 404
    if (!currentTool) return <div className="p-10 text-center text-xl">Tool not found!</div>;


    const relatedTools = getRelatedTools(currentTool.id);

    const mainImage = currentTool.images[0];


    return (
        <>
            <div className="min-h-screen p-4 md:p-8 lg:px-0 theme-container">

                {/* Main Content Container */}
                <div className="bg-white rounded-lg overflow-hidden">

                    {/* Header Section */}
                    <header className="p-6 md:p-10 border-b border-gray-200">
                        <h1 className="text-4xl font-extrabold text-gray-900 mb-2">
                            {currentTool.tool_title}
                        </h1>
                        <p className="text-xl text-indigo-600 font-medium">
                            {currentTool.short_desp}
                        </p>
                    </header>

                    {/* Main Content Grid */}
                    <section className="p-6 md:p-10 grid grid-cols-1 lg:grid-cols-3 gap-10">

                        {/* 1. Image/Media Section */}
                        <div className="lg:col-span-1">
                            {/* Main Image */}


                            {/* Thumbnail Gallery */}

                            {currentTool.images.slice(0).map((img, index) => (
                                <div key={index} className="aspect-w-1 mb-4 aspect-h-1 rounded-lg overflow-hidden border border-gray-200 border">
                                    <img
                                        src={`/assets/tools/${img}`}
                                        alt={currentTool.tool_title}
                                        className="w-full h-full object-cover"
                                    />
                                </div>
                            ))}

                        </div>

                        {/* 2. Details and Description */}
                        <div className="lg:col-span-2 space-y-8">

                            {/* Description */}
                            <div className="tool-description">
                                <h2 className="text-2xl font-bold text-gray-800 border-b pb-2 mb-4">Product Description</h2>
                                {/* Use dangerouslySetInnerHTML to render the description HTML */}
                                <div className="text-gray-700 leading-relaxed space-y-4 prose max-w-none"
                                    dangerouslySetInnerHTML={{ __html: currentTool.description }}
                                />
                            </div>

                            {/* Use Cases */}
                            <div className="tool-use-cases">
                                <h2 className="text-2xl font-bold text-gray-800 border-b pb-2 mb-4">Common Applications</h2>
                                <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
                                    {currentTool.use_cases.map((useCase, index) => (
                                        <li key={index} className="text-base pl-2">{useCase}</li>
                                    ))}
                                </ul>
                            </div>

                            {/* Call to Action */}
                            <div className="pt-4 flex items-center space-x-4">
                                <Link href="/products" className="text-indigo-600 hover:text-indigo-800 font-medium transition duration-300">
                                    Back to All Tools
                                </Link>
                            </div>

                        </div>
                    </section>
                </div>

                {/* Related Products Section */}
                {relatedTools.length > 0 && (
                    <section className="max-w-7xl mx-auto mt-16 p-6 md:p-10 bg-white shadow-xl rounded-lg">
                        <h2 className="text-3xl font-bold text-gray-900 mb-6 border-b pb-3">Related Painting Tools</h2>

                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                            {relatedTools.map(tool => (
                                <Link
                                    key={tool.id}
                                    href={`/products/${tool.id}`}
                                    className="block border border-gray-200 rounded-lg p-4 transition duration-300 hover:shadow-lg hover:border-indigo-400"
                                >
                                    <div className="flex items-center space-x-4">
                                        <img
                                            src={`/assets/tools/${tool.images[0]}`}
                                            alt={tool.tool_title}
                                            className="w-16 h-16 object-cover rounded-md flex-shrink-0"
                                        />
                                        <div>
                                            <h3 className="text-lg font-semibold text-gray-800">{tool.tool_title}</h3>
                                            <p className="text-sm text-gray-500 mt-1 line-clamp-2">{tool.short_desp}</p>
                                        </div>
                                    </div>
                                </Link>
                            ))}
                        </div>
                    </section>
                )}

            </div>
        </>
    );
}