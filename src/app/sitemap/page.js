"use client"
import React, { useState, useEffect } from 'react';

// The main App component for the sitemap page
const App = () => {
  const [sitemapLinks, setSitemapLinks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Define the async function to fetch the sitemap
    const fetchSitemap = async () => {
      try {
        // Fetch the sitemap.xml file from the public directory.
        // This assumes the sitemap.xml file is located in the root of your public folder.
        const response = await fetch('/sitemap.xml');
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const xmlText = await response.text();

        // Use the browser's DOMParser to parse the XML string
        const parser = new DOMParser();
        const xmlDoc = parser.parseFromString(xmlText, 'application/xml');

        // Check for XML parsing errors
        if (xmlDoc.getElementsByTagName('parsererror').length > 0) {
          throw new Error('Error parsing XML. Please check the sitemap file format.');
        }

        // Find all <loc> tags using the sitemap namespace and extract the URLs
        const urls = xmlDoc.getElementsByTagName('url');
        const links = [];
        for (let i = 0; i < urls.length; i++) {
          const locTag = urls[i].getElementsByTagNameNS('http://www.sitemaps.org/schemas/sitemap/0.9', 'loc')[0];
          if (locTag) {
            links.push(locTag.textContent);
          }
        }
        
        setSitemapLinks(links);
      } catch (e) {
        console.error('Failed to fetch or parse sitemap:', e);
        setError('Failed to load sitemap. Please check the file path and content.');
      } finally {
        setLoading(false);
      }
    };

    fetchSitemap();
  }, []); // The empty dependency array ensures this effect runs only once on mount

  return (
    <div className="bg-slate-50 flex items-center justify-center p-4">
      <div className="bg-white p-8 rounded-2xl shadow-xl max-w-2xl w-full">
        <h1 className="text-3xl font-bold text-gray-800 text-center mb-6">Mydreampaints Sitemap</h1>
        
        {loading && (
          <div className="flex justify-center items-center h-48 text-gray-500">
            <svg className="animate-spin h-8 w-8 text-indigo-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
            </svg>
            <span className="ml-4">Loading sitemap...</span>
          </div>
        )}

        {error && (
          <div className="text-center text-red-500 font-medium">
            <p>{error}</p>
          </div>
        )}

        {!loading && !error && (
          <ul className="space-y-4">
            {sitemapLinks.length > 0 ? (
              sitemapLinks.map((link, index) => (
                <li key={index} className="bg-gray-100 p-3 rounded-lg hover:bg-gray-200 transition-colors duration-200">
                  <a href={link} className="text-blue-600 font-medium break-all" target="_blank" rel="noopener noreferrer">
                    {link}
                  </a>
                </li>
              ))
            ) : (
              <p className="text-center text-gray-500">No links found in the sitemap.</p>
            )}
          </ul>
        )}

      </div>
    </div>
  );
};

export default App;
