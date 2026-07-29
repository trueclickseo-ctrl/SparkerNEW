import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const API_KEY = '6e3c1440e2bd49e6a8394ebd8eb8a89c';
const HOST = 'sparkersgames.com';
const KEY_LOCATION = `https://${HOST}/${API_KEY}.txt`;
const SITEMAP_PATH = path.join(__dirname, 'sitemap.xml');

async function main() {
  try {
    if (!fs.existsSync(SITEMAP_PATH)) {
      console.error(`❌ sitemap.xml not found at ${SITEMAP_PATH}. Make sure to build the project first.`);
      process.exit(1);
    }

    const sitemapContent = fs.readFileSync(SITEMAP_PATH, 'utf-8');
    const urlRegex = /<loc>(https:\/\/sparkersgames\.com\/[^<]+)<\/loc>/g;
    const urlList = [];
    let match;
    while ((match = urlRegex.exec(sitemapContent)) !== null) {
      urlList.push(match[1]);
    }

    if (urlList.length === 0) {
      console.error('❌ No URLs found in sitemap.xml.');
      process.exit(1);
    }

    console.log(`🔍 Found ${urlList.length} URLs in sitemap.xml. Submitting to IndexNow...`);

    const payload = {
      host: HOST,
      key: API_KEY,
      keyLocation: KEY_LOCATION,
      urlList: urlList
    };

    console.log('Sending request to api.indexnow.org...');
    const response = await fetch('https://api.indexnow.org/IndexNow', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json; charset=utf-8'
      },
      body: JSON.stringify(payload)
    });

    if (response.ok) {
      console.log(`✅ Success! Response status: ${response.status} ${response.statusText}`);
    } else {
      const responseText = await response.text();
      console.error(`❌ IndexNow API failed with status ${response.status}: ${responseText}`);
    }

  } catch (error) {
    console.error('❌ Error submitting to IndexNow:', error);
    process.exit(1);
  }
}

main();
