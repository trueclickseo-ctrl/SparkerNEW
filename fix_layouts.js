const fs = require('fs');
const path = require('path');

const files = [
    String.raw`d:\Project-Sparker-ChatGPT\app\[locale]\about\page.tsx`,
    String.raw`d:\Project-Sparker-ChatGPT\app\[locale]\blog\[slug]\page.tsx`,
    String.raw`d:\Project-Sparker-ChatGPT\app\[locale]\blog\page.tsx`,
    String.raw`d:\Project-Sparker-ChatGPT\app\[locale]\cards\page.tsx`,
    String.raw`d:\Project-Sparker-ChatGPT\app\[locale]\contact\page.tsx`,
    String.raw`d:\Project-Sparker-ChatGPT\app\[locale]\couples\[deckId]\page.tsx`,
    String.raw`d:\Project-Sparker-ChatGPT\app\[locale]\couples\page.tsx`,
    String.raw`d:\Project-Sparker-ChatGPT\app\[locale]\educational\[deckId]\page.tsx`,
    String.raw`d:\Project-Sparker-ChatGPT\app\[locale]\educational\page.tsx`,
    String.raw`d:\Project-Sparker-ChatGPT\app\[locale]\encyclopedia\[slug]\page.tsx`,
    String.raw`d:\Project-Sparker-ChatGPT\app\[locale]\encyclopedia\page.tsx`,
    String.raw`d:\Project-Sparker-ChatGPT\app\[locale]\generators\couple-name\page.tsx`,
    String.raw`d:\Project-Sparker-ChatGPT\app\[locale]\generators\wheel-spinner\page.tsx`,
    String.raw`d:\Project-Sparker-ChatGPT\app\[locale]\library\page.tsx`,
    String.raw`d:\Project-Sparker-ChatGPT\app\[locale]\play\[gameId]\page.tsx`,
    String.raw`d:\Project-Sparker-ChatGPT\app\[locale]\play\page.tsx`,
    String.raw`d:\Project-Sparker-ChatGPT\app\[locale]\privacy\page.tsx`,
    String.raw`d:\Project-Sparker-ChatGPT\app\[locale]\quizzes\love-language\page.tsx`,
    String.raw`d:\Project-Sparker-ChatGPT\app\[locale]\quizzes\page.tsx`,
    String.raw`d:\Project-Sparker-ChatGPT\app\[locale]\terms\page.tsx`,
    String.raw`d:\Project-Sparker-ChatGPT\app\[locale]\truth-or-dare-questions\page.tsx`
];

for (const filePath of files) {
    try {
        let content = fs.readFileSync(filePath, 'utf-8');
        let lines = content.split(/\r?\n/);

        let divIdx = -1;
        let mainIdx = -1;
        let mainEndIdx = -1;
        let divEndIdx = -1;

        for (let i = 0; i < lines.length; i++) {
            if (lines[i].includes('<div className="flex flex-col min-h-screen">') && divIdx === -1) {
                divIdx = i;
                lines[i] = lines[i].replace('<div className="flex flex-col min-h-screen">', '<>');
            }

            if (lines[i].includes('<main') && mainIdx === -1 && divIdx !== -1) {
                mainIdx = i;
                lines[i] = lines[i].replace(/<main[^>]*>/, '');
            }
        }

        for (let i = lines.length - 1; i >= 0; i--) {
            if (lines[i].includes('</div>') && divEndIdx === -1) {
                divEndIdx = i;
                lines[i] = lines[i].replace('</div>', '</>');
            } else if (lines[i].includes('</main>') && mainEndIdx === -1 && divEndIdx !== -1) {
                mainEndIdx = i;
                lines[i] = lines[i].replace('</main>', '');
            }
        }

        fs.writeFileSync(filePath, lines.join('\n'), 'utf-8');
        console.log(`Fixed ${filePath}`);
    } catch (e) {
        console.error(`Error ${filePath}: ${e}`);
    }
}
