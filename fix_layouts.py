import sys
import re

files = [
    r"d:\Project-Sparker-ChatGPT\app\[locale]\about\page.tsx",
    r"d:\Project-Sparker-ChatGPT\app\[locale]\blog\[slug]\page.tsx",
    r"d:\Project-Sparker-ChatGPT\app\[locale]\blog\page.tsx",
    r"d:\Project-Sparker-ChatGPT\app\[locale]\cards\page.tsx",
    r"d:\Project-Sparker-ChatGPT\app\[locale]\contact\page.tsx",
    r"d:\Project-Sparker-ChatGPT\app\[locale]\couples\[deckId]\page.tsx",
    r"d:\Project-Sparker-ChatGPT\app\[locale]\couples\page.tsx",
    r"d:\Project-Sparker-ChatGPT\app\[locale]\educational\[deckId]\page.tsx",
    r"d:\Project-Sparker-ChatGPT\app\[locale]\educational\page.tsx",
    r"d:\Project-Sparker-ChatGPT\app\[locale]\encyclopedia\[slug]\page.tsx",
    r"d:\Project-Sparker-ChatGPT\app\[locale]\encyclopedia\page.tsx",
    r"d:\Project-Sparker-ChatGPT\app\[locale]\generators\couple-name\page.tsx",
    r"d:\Project-Sparker-ChatGPT\app\[locale]\generators\wheel-spinner\page.tsx",
    r"d:\Project-Sparker-ChatGPT\app\[locale]\library\page.tsx",
    r"d:\Project-Sparker-ChatGPT\app\[locale]\play\[gameId]\page.tsx",
    r"d:\Project-Sparker-ChatGPT\app\[locale]\play\page.tsx",
    r"d:\Project-Sparker-ChatGPT\app\[locale]\privacy\page.tsx",
    r"d:\Project-Sparker-ChatGPT\app\[locale]\quizzes\love-language\page.tsx",
    r"d:\Project-Sparker-ChatGPT\app\[locale]\quizzes\page.tsx",
    r"d:\Project-Sparker-ChatGPT\app\[locale]\terms\page.tsx",
    r"d:\Project-Sparker-ChatGPT\app\[locale]\truth-or-dare-questions\page.tsx"
]

for file_path in files:
    try:
        with open(file_path, 'r', encoding='utf-8') as f:
            lines = f.readlines()
        
        div_idx = -1
        main_idx = -1
        main_end_idx = -1
        div_end_idx = -1
        
        for i, line in enumerate(lines):
            if '<div className="flex flex-col min-h-screen">' in line and div_idx == -1:
                div_idx = i
                lines[i] = line.replace('<div className="flex flex-col min-h-screen">', '<>')
            
            if '<main' in line and main_idx == -1 and div_idx != -1:
                main_idx = i
                lines[i] = re.sub(r'<main[^>]*>', '', line)
                
        # Traverse backwards to find the matching </main> and </div>
        for i in range(len(lines)-1, -1, -1):
            if '</div>' in lines[i] and div_end_idx == -1:
                div_end_idx = i
                lines[i] = lines[i].replace('</div>', '</>', 1)
            elif '</main>' in lines[i] and main_end_idx == -1 and div_end_idx != -1:
                main_end_idx = i
                lines[i] = lines[i].replace('</main>', '', 1)
                
        with open(file_path, 'w', encoding='utf-8') as f:
            f.writelines(lines)
            
        print(f"Fixed {file_path}")
    except Exception as e:
        print(f"Error {file_path}: {e}")
