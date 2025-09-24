const fs = require('fs');
const path = require('path');

const IMAGE_FOLDER = './';
const OUTPUT_FILE = 'image_list_sync.txt'; 
const imageExtensions = ['.jpg', '.jpeg', '.png', '.gif', '.bmp', '.svg', '.webp'];

try {
    // 1. Read the directory synchronously
    const files = fs.readdirSync(IMAGE_FOLDER);

    // 2. Filter the files
    const imageFiles = files.filter(file => {
        const ext = path.extname(file).toLowerCase();
        return imageExtensions.includes(ext);
    });

    // 3. Format the content
    const fileContent = imageFiles.join('\n');

    // 4. Write the content to the file synchronously
    fs.writeFileSync(OUTPUT_FILE, fileContent, 'utf8');

    console.log(`✅ Success! Found ${imageFiles.length} images.`);
    console.log(`List saved synchronously to '${OUTPUT_FILE}'.`);

} catch (err) {
    console.error(`❌ An error occurred: ${err.message}`);
}