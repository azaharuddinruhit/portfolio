import fs from 'fs/promises';
import { blogs } from './src/data/blogs.js';
import path from 'path';

async function run() {
  try {
    const updatedMeta = [];
    
    for (const b of blogs) {
      try {
        const content = await fs.readFile(path.join('./public/blogs', b.id + '.md'), 'utf-8');
        const wordCount = content.split(/\s+/).length;
        const readTime = Math.ceil(wordCount / 200) || 1;
        
        updatedMeta.push({
          ...b,
          readTime: readTime
        });
      } catch (e) {
        console.warn(`Could not find content for ${b.id}`);
        updatedMeta.push(b);
      }
    }
    
    const metaString = `// This file is auto-generated and serves as the metadata index for the blog.
// Markdown content is located in public/blogs/

export const blogs = ${JSON.stringify(updatedMeta, null, 2)};
`;
    
    await fs.writeFile('./src/data/blogs.js', metaString);
    console.log("Metadata updated with readTime.");
  } catch (err) {
    console.error("Update failed:", err);
    process.exit(1);
  }
}

run();
