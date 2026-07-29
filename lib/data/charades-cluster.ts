import { ProgrammaticGameData } from './programmatic-seo-games';

export const CHARADES_CLUSTER_GAMES: ProgrammaticGameData[] = [
  // 1. Pillar Hub: /charades/
  {
    id: 'charades',
    path: '/charades/',
    title: 'Charades Ultimate Party Hub',
    description: 'The definitive center for online Charades acting lists, printable cards, and random gesture generator widgets. Start acting free.',
    category: 'Action & Acting',
    badge: 'Pillar Hub 🎭',
    players: '4-30 players',
    duration: '30-90 mins',
    difficulty: 'Medium',
    prompts: [
      'Act out: A penguin trying to walk on ice wearing high heels.',
      'Act out: An astronaut realizing their helmet is leaking air.',
      'Act out: Trying to eat hot soup while riding a roller coaster.',
      'Act out: A high-fashion model catwalk strut in slow motion.',
      'Act out: Opening a birthday gift to find a live angry spider.',
      'Act out: Trying to escape a swarm of invisible bees silently.',
      'Act out: Playing double bass in a heavy metal rock band.',
      'Act out: A chef burning their tongue tasting sauce.',
    ],
    rules: [
      'Divide the group into two teams and select the first actor.',
      'The actor draws a prompt and must act it out silently within 60 seconds.',
      'If the team guesses correctly, they score 1 point. Switch teams and repeat.',
    ],
    faqs: [
      { question: 'What is the goal of Charades?', answer: 'The goal is to guess the secret word or phrase through silent physical gestures within the time limit.' }
    ],
    children: ['charades-movie', 'charades-disney', 'charades-pixar', 'charades-marvel', 'charades-christmas', 'charades-halloween', 'charades-birthday', 'charades-kids', 'charades-adults', 'charades-couples', 'charades-friends', 'charades-office', 'charades-classroom', 'charades-church', 'charades-team-building', 'charades-animals', 'charades-sports', 'charades-music', 'charades-tv-shows', 'charades-anime', 'charades-emoji', 'charades-one-word', 'charades-easy', 'charades-hard', 'charades-impossible', 'charades-printable', 'charades-pdf', 'charades-generator', 'charades-cards', 'charades-examples', 'charades-categories', 'charades-tips', 'charades-strategy', 'charades-faq', 'charades-rules', 'charades-how-to-play', 'charades-history'],
    siblings: ['truth-or-dare', 'never-have-i-ever', 'would-you-rather'],
  },

  // 2. Rules: /charades/rules/
  {
    id: 'charades-rules',
    path: '/charades/rules/',
    title: 'Official Charades Rulebook',
    description: 'The complete set of rules, hand gestures, and scoring regulations for playing Charades at home, office, or school.',
    category: 'Guides & Rules',
    badge: 'Official Guide 📜',
    players: '4-30 players',
    duration: '15 mins',
    difficulty: 'Easy',
    prompts: [
      'Gesture: Hold up fingers to indicate the number of words.',
      'Gesture: Tug on your earlobe to indicate "sounds like".',
      'Gesture: Move hands apart to indicate "longer word version".',
    ],
    rules: [
      'Set a time limit per turn (standard is 60 or 90 seconds).',
      'No speaking, lip-syncing, or pointing at physical items in the room is allowed.',
      'Establish basic hand signals for movie titles, books, or quotes before starting.',
    ],
    faqs: [
      { question: 'Can you point at objects in Charades?', answer: 'Generally no. You must rely purely on physical acting and gestures rather than pointing at real items.' }
    ],
    parentSlug: 'charades',
  },

  // 3. How to Play: /charades/how-to-play/
  {
    id: 'charades-how-to-play',
    path: '/charades/how-to-play/',
    title: 'How to Play Charades: Beginner Tutorial',
    description: 'Step-by-step tutorial on setup, standard gesture dictionaries, and quick-start methods for Charades beginners.',
    category: 'Guides & Rules',
    badge: 'Quick Start 💡',
    players: '3-20 players',
    duration: '10 mins',
    difficulty: 'Easy',
    prompts: [
      'Concept: Act out a famous book title.',
      'Concept: Act out a famous quote or phrase.',
      'Concept: Act out a simple household action.',
    ],
    rules: [
      'Prepare cards with secret words, actions, or titles.',
      'Let players draw cards in turn and convey them using gestures only.',
      'Keep it fun and help beginners with simple hand signs.',
    ],
    faqs: [
      { question: 'What are basic signals for Charades?', answer: 'Holding up fingers for word counts, rubbing hands for a movie, or putting palms together for a book.' }
    ],
    parentSlug: 'charades',
  },

  // 4. History: /charades/history/
  {
    id: 'charades-history',
    path: '/charades/history/',
    title: 'The Historical Origins of Charades',
    description: 'Explore the history of Charades, from its roots as an 18th-century French riddle game to its modern parlor format.',
    category: 'Guides & Rules',
    badge: 'History 🏛️',
    players: '2-10 players',
    duration: '20 mins',
    difficulty: 'Easy',
    prompts: [
      'Fact: Act like an 18th-century French aristocrat.',
      'Fact: Act out a riddle from the Victorian era.',
    ],
    rules: [
      'Read through the history of parlor riddles.',
      'Try playing historical variations with full costume acting.',
    ],
    faqs: [
      { question: 'Where did Charades originate?', answer: 'It originated in France in the 18th century, transitioning into a popular Victorian parlor game in England.' }
    ],
    parentSlug: 'charades',
  },

  // 5. Pixar: /charades/pixar/
  {
    id: 'charades-pixar',
    path: '/charades/pixar/',
    title: 'Pixar Movie Charades',
    description: 'Challenge your friends with Pixar acting prompts, including Toy Story, Finding Nemo, Monsters Inc., and Coco.',
    category: 'Action & Acting',
    badge: 'Pixar Special 🎈',
    players: '4-20 players',
    duration: '20-40 mins',
    difficulty: 'Easy',
    prompts: [
      'Pixar: Toy Story (Woody pulling his string)',
      'Pixar: Finding Nemo (Swimming with a tiny fin)',
      'Pixar: Monsters Inc. (Sully practicing a scary roar)',
      'Pixar: Coco (Strumming a guitar like Miguel)',
      'Pixar: Up (Floating holding invisible balloons)',
    ],
    rules: [
      'Actor draws a Pixar-themed character or movie prompt.',
      'Convey the animation masterpiece silently within 60 seconds.',
    ],
    faqs: [
      { question: 'Are Pixar prompts family safe?', answer: 'Yes, this list is perfect for children, teens, and families of all ages.' }
    ],
    parentSlug: 'charades',
  },

  // 6. Marvel: /charades/marvel/
  {
    id: 'charades-marvel',
    path: '/charades/marvel/',
    title: 'Marvel Superhero Charades',
    description: 'Assemble your superhero team to act out Thor, Iron Man, Spider-Man, Hulk, and key Marvel Cinematic Universe moments.',
    category: 'Action & Acting',
    badge: 'Marvel MCU ⚡',
    players: '4-15 players',
    duration: '20-40 mins',
    difficulty: 'Easy',
    prompts: [
      'Marvel: Iron Man (Shooting hand repulsors)',
      'Marvel: Thor (Catching Mjolnir from the sky)',
      'Marvel: Captain America (Throwing a shield)',
      'Marvel: Hulk (Smashing the floor in anger)',
      'Marvel: Spider-Man (Crawl on walls and shoot webs)',
    ],
    rules: [
      'Actor acts out a Marvel character or MCU movie scene without words.',
      'Team members guess the hero or movie title to win points.',
    ],
    faqs: [
      { question: 'Can I use sound effects for super powers?', answer: 'No, all superhero powers must be acted out silently.' }
    ],
    parentSlug: 'charades',
  },

  // 7. Christmas: /charades/christmas/
  {
    id: 'charades-christmas',
    path: '/charades/christmas/',
    title: 'Holiday Christmas Charades',
    description: 'Cozy and festive Christmas acting prompts, featuring Santa Claus, wrapping gifts, snowmen, and holiday songs.',
    category: 'Action & Acting',
    badge: 'Festive Vibe 🎄',
    players: '4-30 players',
    duration: '30-60 mins',
    difficulty: 'Easy',
    prompts: [
      'Holiday: Santa Claus climbing down a chimney.',
      'Holiday: Unwrapping a Christmas gift with excitement.',
      'Holiday: Building a snowman in the yard.',
      'Holiday: Hanging ornaments on a tall Christmas tree.',
      'Holiday: Drinking hot cocoa beside a fireplace.',
    ],
    rules: [
      'Gather friends and family around the fireplace.',
      'Draw cards loaded with holiday tasks, decorations, or carols, and act them out.',
    ],
    faqs: [
      { question: 'Is Christmas Charades good for family gatherings?', answer: 'Yes, it is one of the most popular winter holiday group icebreakers.' }
    ],
    parentSlug: 'charades',
  },

  // 8. Birthday: /charades/birthday/
  {
    id: 'charades-birthday',
    path: '/charades/birthday/',
    title: 'Birthday Party Charades',
    description: 'Celebrate birthdays with funny acting prompts, from blowing out candles to popping party balloons.',
    category: 'Action & Acting',
    badge: 'Birthday Fun 🎂',
    players: '4-20 players',
    duration: '20-50 mins',
    difficulty: 'Easy',
    prompts: [
      'Birthday: Blowing out candles on a birthday cake.',
      'Birthday: Popping party balloons with a pin.',
      'Birthday: Opening a gift to find a puppy.',
      'Birthday: Eating a giant slice of cake with your hands.',
    ],
    rules: [
      'Great warmups for kids and adults birthday celebrations.',
      'Alternate actors and guess the birthday activities silently.',
    ],
    faqs: [
      { question: 'How do you score Birthday Charades?', answer: 'Teams rotate and score 1 point per correct guess within 60 seconds.' }
    ],
    parentSlug: 'charades',
  },

  // 9. Kids: /charades/kids/
  {
    id: 'charades-kids',
    path: '/charades/kids/',
    title: 'Charades for Kids: Super Simple Prompts',
    description: 'Easy, child-friendly acting prompts featuring simple actions, familiar animals, and daily tasks. 100% wholesome.',
    category: 'Action & Acting',
    badge: 'Kids Special 🧸',
    players: '3-15 players',
    duration: '15-30 mins',
    difficulty: 'Easy',
    prompts: [
      'Action: Brushing your teeth.',
      'Animal: A frog hopping around.',
      'Action: Riding a bicycle up a steep hill.',
      'Action: Flying a kite on a windy day.',
      'Action: Eating a melting ice cream cone.',
    ],
    rules: [
      'Keep rules relaxed for children.',
      'Help kids act out simple prompts, allowing minor sounds if necessary to keep it fun.',
    ],
    faqs: [
      { question: 'What age is Kids Charades for?', answer: 'It is best suited for kids aged 5-12, utilizing simple actions and animals.' }
    ],
    parentSlug: 'charades',
  },

  // 10. Adults: /charades/adults/
  {
    id: 'charades-adults',
    path: '/charades/adults/',
    title: 'Charades for Adults: Late Night Edition',
    description: 'More complex, clever, and hilarious acting prompts suitable for adult game nights and dinner parties.',
    category: 'Action & Acting',
    badge: 'Adults 18+ 🔞',
    players: '4-20 players',
    duration: '30-60 mins',
    difficulty: 'Medium',
    prompts: [
      'Prompt: Trying to pay taxes online while the internet goes down.',
      'Prompt: Acting like a hangover parent on a Saturday morning.',
      'Prompt: Buying coffee in a rush and forgetting your wallet.',
      'Prompt: Attending an extremely boring Zoom call with camera on.',
    ],
    rules: [
      'Divide into teams, grab a beverage of choice, and act out complex adult scenarios silently.',
    ],
    faqs: [
      { question: 'Are these prompts safe for family events?', answer: 'These are PG-13/Adult themed social situations, best suited for adult hangouts.' }
    ],
    parentSlug: 'charades',
  },

  // 11. Couples: /charades/couples/
  {
    id: 'charades-couples',
    path: '/charades/couples/',
    title: 'Date Night Couples Charades',
    description: 'Flirty, romantic, and funny charades prompts to bring couples closer and spark laughter on date night.',
    category: 'Action & Acting',
    badge: 'Date Night 💕',
    players: '2 players',
    duration: '15-40 mins',
    difficulty: 'Easy',
    prompts: [
      'Romantic: Proposing on one knee with a ring.',
      'Romantic: Feeding your partner strawberries.',
      'Romantic: Slow dancing under the moonlight.',
      'Romantic: Writing a love letter with a feather pen.',
    ],
    rules: [
      'Play together, alternate acting out sweet, romantic, or funny scenarios for each other.',
    ],
    faqs: [
      { question: 'How do you play Charades with 2 people?', answer: 'One partner acts and the other guesses, tracking the time it takes to solve each prompt.' }
    ],
    parentSlug: 'charades',
  },

  // 12. Friends: /charades/friends/
  {
    id: 'charades-friends',
    path: '/charades/friends/',
    title: 'Friends Hangout Charades',
    description: 'Hilarious, fast-paced prompts designed for friend group get-togethers, dorm parties, and weekend retreats.',
    category: 'Action & Acting',
    badge: 'Group Vibe 👥',
    players: '4-25 players',
    duration: '30-60 mins',
    difficulty: 'Medium',
    prompts: [
      'Friends: Sneaking out of a room without waking anyone.',
      'Friends: Trying to tell a secret while laughing hysterically.',
      'Friends: Acting like you are at a crowded rock concert.',
      'Friends: Getting stuck in a heavy downpour without an umbrella.',
    ],
    rules: [
      'Set up teams of friends, start a timer, and guess the hilarious situational cards.',
    ],
    faqs: [
      { question: 'Can we play in large groups?', answer: 'Yes! Charades works exceptionally well with larger groups of 10+ people.' }
    ],
    parentSlug: 'charades',
  },

  // 13. Office: /charades/office/
  {
    id: 'charades-office',
    path: '/charades/office/',
    title: 'Office Friendly Charades',
    description: 'Workplace-safe, corporate-friendly prompts themed around office life, coffee breaks, and business meetings.',
    category: 'Action & Acting',
    badge: 'Office Safe 💼',
    players: '4-50 players',
    duration: '15-30 mins',
    difficulty: 'Easy',
    prompts: [
      'Office: Typing frantically on a keyboard to hit a deadline.',
      'Office: Running late to a meeting with hot coffee in hand.',
      'Office: The office copy machine jam alert.',
      'Office: Trying to mute yourself on a video call.',
    ],
    rules: [
      'A great team warmup activity. Keep all gestures professional and office-safe.',
    ],
    faqs: [
      { question: 'Is this game remote-friendly?', answer: 'Yes, players can act out prompts in front of their webcams during Zoom calls.' }
    ],
    parentSlug: 'charades',
  },

  // 14. Classroom: /charades/classroom/
  {
    id: 'charades-classroom',
    path: '/charades/classroom/',
    title: 'Educational Classroom Charades',
    description: 'Fun and educational prompts for school classrooms, helping students learn vocabulary, historical events, and science.',
    category: 'Action & Acting',
    badge: 'School Special 🏫',
    players: '5-40 players',
    duration: '10-25 mins',
    difficulty: 'Easy',
    prompts: [
      'Classroom: Writing on a chalkboard.',
      'Classroom: A scientist mixing chemicals in a test tube.',
      'Classroom: Reading a heavy dictionary book.',
      'Classroom: Raising your hand to ask a question.',
    ],
    rules: [
      'Teachers divide students into teams. Use prompts as creative vocabulary exercises.',
    ],
    faqs: [
      { question: 'What subjects are best for Classroom Charades?', answer: 'Science, history, literature, and vocabulary words adapt beautifully to acting.' }
    ],
    parentSlug: 'charades',
  },

  // 15. Church: /charades/church/
  {
    id: 'charades-church',
    path: '/charades/church/',
    title: 'Church & Youth Group Charades',
    description: 'Wholesome, family-safe, and Bible-themed acting prompts for church gatherings, youth groups, and Sunday school.',
    category: 'Action & Acting',
    badge: 'Wholesome Vibe ⛪',
    players: '4-30 players',
    duration: '20-45 mins',
    difficulty: 'Easy',
    prompts: [
      'Bible: Noah building the ark.',
      'Bible: David facing Goliath with a sling.',
      'Bible: Moses parting the Red Sea.',
      'Church: Singing in the Sunday choir.',
    ],
    rules: [
      'Bible or community-themed prompts are drawn and acted out silently for church social gatherings.',
    ],
    faqs: [
      { question: 'Are these bible prompts accurate?', answer: 'Yes, they cover well-known historical stories from scripture suitable for Sunday school.' }
    ],
    parentSlug: 'charades',
  },

  // 16. Team Building: /charades/team-building/
  {
    id: 'charades-team-building',
    path: '/charades/team-building/',
    title: 'Team Building Charades',
    description: 'Increase collaboration, breaks silos, and build trust among team members with coordinated group acting exercises.',
    category: 'Action & Acting',
    badge: 'Team Building 🤝',
    players: '6-40 players',
    duration: '20-40 mins',
    difficulty: 'Medium',
    prompts: [
      'Team: Passing an imaginary ball down a long line.',
      'Team: Rowers coordinate in a dragon boat race.',
      'Team: Building a house together piece by piece.',
    ],
    rules: [
      'Focus on coordinated actions where multiple team members must act out a prompt together.',
    ],
    faqs: [
      { question: 'How does team building charades help?', answer: 'It fosters non-verbal communication, builds trust, and breaks corporate ice.' }
    ],
    parentSlug: 'charades',
  },

  // 17. Animals: /charades/animals/
  {
    id: 'charades-animals',
    path: '/charades/animals/',
    title: 'Animal Kingdom Charades',
    description: 'Hop, crawl, fly, and slither! Fun and simple animal-themed prompts perfect for kids, school classes, and families.',
    category: 'Action & Acting',
    badge: 'Animals 🦁',
    players: '3-15 players',
    duration: '15-30 mins',
    difficulty: 'Easy',
    prompts: [
      'Animal: A monkey peeling and eating a banana.',
      'Animal: A kangaroo hopping with a baby in its pouch.',
      'Animal: An elephant spraying water with its trunk.',
      'Animal: A snake slithering across the floor.',
      'Animal: A lion shaking its mane and roaring silently.',
    ],
    rules: [
      'Actor must act out the animal silently. Flapping wings, crawls, or claws are fully allowed.',
    ],
    faqs: [
      { question: 'Can you make animal sounds?', answer: 'No, all monkey noises or lion roars must be silent.' }
    ],
    parentSlug: 'charades',
  },

  // 18. Sports: /charades/sports/
  {
    id: 'charades-sports',
    path: '/charades/sports/',
    title: 'Sports & Athlete Charades',
    description: 'Act out legendary sports, athletic moves, and competitive games. From swimming to golf swings.',
    category: 'Action & Acting',
    badge: 'Sports ⚽',
    players: '4-20 players',
    duration: '20-40 mins',
    difficulty: 'Easy',
    prompts: [
      'Sport: Swimming the butterfly stroke.',
      'Sport: Lining up and taking a golf putt.',
      'Sport: Bowling a strike and celebrating.',
      'Sport: Rock climbing up a steep mountain wall.',
      'Sport: Pitching a baseball and catcher catching it.',
    ],
    rules: [
      'Convey the sport or specific athletic achievement without words or equipment.',
    ],
    faqs: [
      { question: 'What sports are easiest to guess?', answer: 'Baseball swings, basketball shooting, and swimming are generally easy for beginners.' }
    ],
    parentSlug: 'charades',
  },

  // 19. Music: /charades/music/
  {
    id: 'charades-music',
    path: '/charades/music/',
    title: 'Music & Instrument Charades',
    description: 'Pluck, strum, and drum! Act out famous music instruments, dance moves, or rock stars.',
    category: 'Action & Acting',
    badge: 'Music 🎸',
    players: '4-20 players',
    duration: '20-40 mins',
    difficulty: 'Easy',
    prompts: [
      'Music: Playing a drum set with wild energy.',
      'Music: Strumming an electric guitar and headbanging.',
      'Music: Directing an orchestra as the conductor.',
      'Music: Playing the flute or saxophone.',
      'Music: Singing opera into a microphone.',
    ],
    rules: [
      'Actor mimics the action of playing the musical instrument or iconic dance style silently.',
    ],
    faqs: [
      { question: 'Can we act out song titles?', answer: 'Yes! Song titles like "Single Ladies" or "Thriller" are classic additions.' }
    ],
    parentSlug: 'charades',
  },

  // 20. TV Shows: /charades/tv-shows/
  {
    id: 'charades-tv-shows',
    path: '/charades/tv-shows/',
    title: 'Popular TV Show Charades',
    description: 'Act out popular television series, sitcoms, and streaming shows. Perfect for netflix binge-watchers.',
    category: 'Action & Acting',
    badge: 'TV Shows 📺',
    players: '4-20 players',
    duration: '25-50 mins',
    difficulty: 'Medium',
    prompts: [
      'TV: Stranger Things (Demogorgon face hands)',
      'TV: Friends (Sitting on a couch drinking coffee)',
      'TV: Squid Game (Red light green light statue pose)',
      'TV: The Office (Looking directly into the camera)',
    ],
    rules: [
      'Draw the TV show card and convey the iconic scene, character, or title without words.',
    ],
    faqs: [
      { question: 'Do players need Netflix to play TV Charades?', answer: 'They just need to be familiar with popular pop culture and TV titles.' }
    ],
    parentSlug: 'charades',
  },

  // 21. Anime: /charades/anime/
  {
    id: 'charades-anime',
    path: '/charades/anime/',
    title: 'Anime & Manga Charades',
    description: 'Unleash your inner hero with anime-themed acting prompts. From Dragon Ball charging to Naruto running.',
    category: 'Action & Acting',
    badge: 'Anime Special 🍥',
    players: '3-15 players',
    duration: '20-40 mins',
    difficulty: 'Medium',
    prompts: [
      'Anime: Naruto (Running with arms behind your back)',
      'Anime: Dragon Ball Z (Charging up a Kamehameha)',
      'Anime: One Piece (Stretching like Luffy)',
      'Anime: Sailor Moon (Posing and casting moon spell)',
    ],
    rules: [
      'Act out your favorite anime characters, epic power-ups, or symbols without talking.',
    ],
    faqs: [
      { question: 'Are these anime prompts recognizable?', answer: 'Yes, they feature widely recognized mainstream shonen and classics.' }
    ],
    parentSlug: 'charades',
  },

  // 22. Emoji: /charades/emoji/
  {
    id: 'charades-emoji',
    path: '/charades/emoji/',
    title: 'Emoji & Reaction Charades',
    description: 'Act out famous emojis and chat expressions using only your face and hands. Fast-paced facial warmups.',
    category: 'Action & Acting',
    badge: 'Facial Play 😀',
    players: '3-20 players',
    duration: '10-25 mins',
    difficulty: 'Easy',
    prompts: [
      'Emoji: Crying laughing face.',
      'Emoji: Thinking face with chin hand.',
      'Emoji: Mind blown explosion face.',
      'Emoji: Shushing face with finger on lips.',
    ],
    rules: [
      'Mimic the face, mood, or symbol of standard phone emojis. Rely heavily on facial expressions.',
    ],
    faqs: [
      { question: 'Is body movement allowed in Emoji Charades?', answer: 'Yes, but the focus remains on head, eye, and facial acting.' }
    ],
    parentSlug: 'charades',
  },

  // 23. One Word: /charades/one-word/
  {
    id: 'charades-one-word',
    path: '/charades/one-word/',
    title: 'One-Word Action Charades',
    description: 'Fast-paced acting cards where the secret prompts are simple, singular verbs. Great vocabulary builders.',
    category: 'Action & Acting',
    badge: 'One Word ⚡',
    players: '4-30 players',
    duration: '15-30 mins',
    difficulty: 'Easy',
    prompts: [
      'Verb: Sneeze.',
      'Verb: Jump.',
      'Verb: Swim.',
      'Verb: Paint.',
      'Verb: Sleep.',
      'Verb: Drive.',
    ],
    rules: [
      'Actor receives a single verb. Guessers try to say the exact action word within the time limit.',
    ],
    faqs: [
      { question: 'What is the benefit of One-Word Charades?', answer: 'It is highly dynamic, easy to pick up, and suitable for classroom vocabulary drills.' }
    ],
    parentSlug: 'charades',
  },

  // 24. Easy: /charades/easy/
  {
    id: 'charades-easy',
    path: '/charades/easy/',
    title: 'Easy Charades Prompts',
    description: 'Super simple, high-visibility prompts designed for absolute beginners, children, or quick game runs.',
    category: 'Action & Acting',
    badge: 'Beginner Safe 🎈',
    players: '3-30 players',
    duration: '15-40 mins',
    difficulty: 'Easy',
    prompts: [
      'Easy: Eating a slice of delicious pizza.',
      'Easy: Playing the piano.',
      'Easy: Flying like a bird.',
      'Easy: Washing your hands with soap.',
    ],
    rules: [
      'Standard silent acting rules. Ideal for a stress-free party icebreaker warmup.',
    ],
    faqs: [
      { question: 'Are these good for party icebreakers?', answer: 'Yes, they require zero preparation and keep the energy light.' }
    ],
    parentSlug: 'charades',
  },

  // 25. Hard: /charades/hard/
  {
    id: 'charades-hard',
    path: '/charades/hard/',
    title: 'Hard Charades Prompts',
    description: 'Abstract nouns, complex actions, and historical figures to test the skills of experienced charades players.',
    category: 'Action & Acting',
    badge: 'Pro Level 🔥',
    players: '4-20 players',
    duration: '30-60 mins',
    difficulty: 'Hard',
    prompts: [
      'Hard: Trying to remember a dream that is fading.',
      'Hard: The concept of "Time Travel".',
      'Hard: Designing a website in HTML manually.',
      'Hard: Climbing a greasy ladder.',
    ],
    rules: [
      'Perfect for experienced players. Establish custom gesture systems before starting.',
    ],
    faqs: [
      { question: 'What makes a prompt hard in Charades?', answer: 'Abstract concepts, feelings, and multi-step complex stories are much harder to convey than physical items.' }
    ],
    parentSlug: 'charades',
  },

  // 26. Impossible: /charades/impossible/
  {
    id: 'charades-impossible',
    path: '/charades/impossible/',
    title: 'Impossible Charades Challenges',
    description: 'Mind-bendingly difficult, abstract, and philosophical acting cards for ultimate veterans.',
    category: 'Action & Acting',
    badge: 'Expert Only 💀',
    players: '4-15 players',
    duration: '30-60 mins',
    difficulty: 'Hard',
    prompts: [
      'Impossible: The concept of "Existential Dread".',
      'Impossible: Solving a Rubik’s cube in the dark.',
      'Impossible: The sound of silence.',
      'Impossible: Parallel universes colliding.',
    ],
    rules: [
      'Draw cards featuring abstract nouns or complex philosophy and try to communicate them silently.',
    ],
    faqs: [
      { question: 'How do you guess impossible prompts?', answer: 'Rely heavily on splitting the word into syllables or spelling it out using gestures.' }
    ],
    parentSlug: 'charades',
  },

  // 27. Printable: /charades/printable/
  {
    id: 'charades-printable',
    path: '/charades/printable/',
    title: 'Printable Charades Cards',
    description: 'Printable cards templates. Download sheets, cut out card items, and play offline instantly.',
    category: 'Guides & Rules',
    badge: 'Printable Decks 📄',
    players: '3-30 players',
    duration: '10 mins',
    difficulty: 'Easy',
    prompts: [
      'Print: Animal Pack Cards.',
      'Print: Movies Pack Cards.',
      'Print: Pop Culture Pack.',
    ],
    rules: [
      'Select your print page layout, download as PDF, and cut cards with scissors.',
    ],
    faqs: [
      { question: 'Do I need to sign up to print cards?', answer: 'No, all printable layouts are 100% free with no registration required.' }
    ],
    parentSlug: 'charades',
  },

  // 28. PDF: /charades/pdf/
  {
    id: 'charades-pdf',
    path: '/charades/pdf/',
    title: 'Free Charades PDF Sheets',
    description: 'High-quality PDF sheets containing 200+ clean acting prompts ready for digital download.',
    category: 'Guides & Rules',
    badge: 'PDF Sheets 📥',
    players: '4-30 players',
    duration: '10 mins',
    difficulty: 'Easy',
    prompts: [
      'PDF: Complete Party Starter Pack.',
      'PDF: Kids Action Vocabulary Sheet.',
    ],
    rules: [
      'Download the PDF file to your device or print it directly for immediate game sessions.',
    ],
    faqs: [
      { question: 'Can I download the PDF on a phone?', answer: 'Yes, it downloads as a mobile-friendly standard document.' }
    ],
    parentSlug: 'charades',
  },

  // 29. Generator: /charades/generator/
  {
    id: 'charades-generator',
    path: '/charades/generator/',
    title: 'Interactive Charades Word Generator',
    description: 'An online word generator tool. Click to spin and receive random silent acting prompts.',
    category: 'Guides & Rules',
    badge: 'Web App ⚡',
    players: '2-30 players',
    duration: '15-45 mins',
    difficulty: 'Easy',
    prompts: [
      'Generator: Get a random animal prompt.',
      'Generator: Get a random movie action card.',
    ],
    rules: [
      'Launch the digital wheel spinner, click roll, and act out the generated prompt.',
    ],
    faqs: [
      { question: 'Is the generator truly random?', answer: 'Yes, it draws dynamically from a database of over 500+ entries.' }
    ],
    parentSlug: 'charades',
  },

  // 30. Cards: /charades/cards/
  {
    id: 'charades-cards',
    path: '/charades/cards/',
    title: 'Charades Card Deck Interface',
    description: 'Digital flashcards player optimized for mobile screens. Swipe cards to play Charades anywhere without paper.',
    category: 'Guides & Rules',
    badge: 'Digital Cards 🃏',
    players: '3-25 players',
    duration: '15-45 mins',
    difficulty: 'Easy',
    prompts: [
      'Card: Walking on hot sand.',
      'Card: Operating a heavy crane.',
    ],
    rules: [
      'Tap the card deck screen to draw cards, swipe left or right to log pass or success.',
    ],
    faqs: [
      { question: 'Does the card deck save my score?', answer: 'Score metrics are tracked during the current active session in the browser.' }
    ],
    parentSlug: 'charades',
  },

  // 31. Examples: /charades/examples/
  {
    id: 'charades-examples',
    path: '/charades/examples/',
    title: '50+ Charades Examples & Gestures',
    description: 'Rundown of standard gestures, action examples, and clues to master non-verbal communication.',
    category: 'Guides & Rules',
    badge: 'Clues & Cheats 📖',
    players: '2-10 players',
    duration: '15 mins',
    difficulty: 'Easy',
    prompts: [
      'Example: Holding up one finger indicates "First Word".',
      'Example: Pulling a line represents "A Movie Title".',
    ],
    rules: [
      'Review these example gestures before your game starts to sync with your team.',
    ],
    faqs: [
      { question: 'Why are gesture examples important?', answer: 'They establish a shared sign language, lowering guess times significantly.' }
    ],
    parentSlug: 'charades',
  },

  // 32. Categories: /charades/categories/
  {
    id: 'charades-categories',
    path: '/charades/categories/',
    title: 'Top Charades Categories & Packs',
    description: 'Compare categories and themes. Pick the best cards deck for your specific group gathering.',
    category: 'Guides & Rules',
    badge: 'Category Index 🗂️',
    players: '4-30 players',
    duration: '20 mins',
    difficulty: 'Easy',
    prompts: [
      'Category: Movies, Actions, Animals, TV Shows, Christmas, and Pop Culture.',
    ],
    rules: [
      'Browse through all categories, pick your target deck, and click play to begin acting.',
    ],
    faqs: [
      { question: 'Which category is best for mixed age groups?', answer: 'The "Animals" and "Easy Actions" categories are perfect for multi-generation groups.' }
    ],
    parentSlug: 'charades',
  },

  // 33. Tips: /charades/tips/
  {
    id: 'charades-tips',
    path: '/charades/tips/',
    title: '15 Charades Strategy Tips to Win',
    description: 'Expert tips on non-verbal signaling, breaking words down, and guessing faster under time pressure.',
    category: 'Guides & Rules',
    badge: 'Strategy Tips 💡',
    players: '3-15 players',
    duration: '15 mins',
    difficulty: 'Easy',
    prompts: [
      'Strategy: Syllable chop (Chop your forearm to indicate word syllables).',
      'Strategy: Direct comparison (Point to something similar in color or shape).',
    ],
    rules: [
      'Apply these tips during team play to increase your guessing efficiency.',
    ],
    faqs: [
      { question: 'What is the syllable chop gesture?', answer: 'You hit your forearm with your opposite hand. Two chops indicate a two-syllable word.' }
    ],
    parentSlug: 'charades',
  },

  // 34. Strategy: /charades/strategy/
  {
    id: 'charades-strategy',
    path: '/charades/strategy/',
    title: 'Charades Team Strategy Guide',
    description: 'Master team signaling, word syllable breakdowns, and group communication strategies for competitive play.',
    category: 'Guides & Rules',
    badge: 'Advanced Guide 🧠',
    players: '4-20 players',
    duration: '20 mins',
    difficulty: 'Medium',
    prompts: [
      'Strategy: Keep gestures simple and focused on big shapes first.',
    ],
    rules: [
      'Analyze the strategy patterns and try them out with your team during practice rounds.',
    ],
    faqs: [
      { question: 'How do you practice team strategy in Charades?', answer: 'Establish core signals for "Yes", "No", and "Close" before starting the competitive timer.' }
    ],
    parentSlug: 'charades',
  },

  // 35. FAQ: /charades/faq/
  {
    id: 'charades-faq',
    path: '/charades/faq/',
    title: 'Charades FAQ: Questions & Answers',
    description: 'Browse the complete index of frequently asked questions regarding rules, hand gestures, and player penalties.',
    category: 'Guides & Rules',
    badge: 'FAQ Hub ❓',
    players: '2-30 players',
    duration: '15 mins',
    difficulty: 'Easy',
    prompts: [
      'Q: Can you write in the air? A: Generally, writing letters is considered cheating.',
    ],
    rules: [
      'Review official guidelines to settle disputes during competitive game nights.',
    ],
    faqs: [
      { question: 'Can you use spelling gestures?', answer: 'Yes, spelling letters out on your arm is usually fully allowed in difficult modes.' }
    ],
    parentSlug: 'charades',
  },

  // 36. Movie: /charades/movie/
  {
    id: 'charades-movie',
    path: '/charades/movie/',
    title: 'Movie Charades: 100+ Film Prompts',
    description: 'Act out Hollywood blockbusters, cult classics, and animated favorites. The ultimate cinema-themed charades deck.',
    category: 'Action & Acting',
    badge: 'Cinema 🎬',
    players: '4-20 players',
    duration: '30-60 mins',
    difficulty: 'Medium',
    prompts: [
      'Movie: Titanic — The "King of the World" bow pose on a ship deck.',
      'Movie: Jurassic Park — Running and screaming from an invisible T-Rex.',
      'Movie: Jaws — Swimming frantically and being dragged underwater.',
      'Movie: Spider-Man — Shooting webs from your wrists and swinging.',
      'Movie: Home Alone — Screaming with hands pressed on your cheeks.',
      'Movie: The Matrix — Slowly dodging bullets in mid-air slow motion.',
      'Movie: Harry Potter — Casting a spell with an invisible wand.',
      'Movie: The Lion King — Holding up a baby cub triumphantly at sunrise.',
    ],
    rules: [
      'Draw a movie prompt card and act out the film title or iconic scene silently.',
      'Team members race to guess the exact movie name within 60 seconds.',
      'Award 1 point per correct guess and rotate the actor clockwise.',
    ],
    faqs: [
      { question: 'Can I act out a character instead of the movie title?', answer: 'Yes! Acting out the main character is a valid strategy — as long as your team can identify the film from it.' },
      { question: 'What are the easiest movie prompts?', answer: 'Titanic, Spider-Man, and Home Alone are consistently the easiest to guess because of their iconic visual scenes.' },
    ],
    parentSlug: 'charades',
    siblings: ['charades-disney', 'charades-halloween', 'charades-tv-shows', 'charades-anime'],
  },

  // 37. Disney: /charades/disney/
  {
    id: 'charades-disney',
    path: '/charades/disney/',
    title: 'Disney Charades: 100% Family Safe',
    description: 'Wholesome Disney character and movie acting prompts for kids, families, and Disney fans of every generation.',
    category: 'Action & Acting',
    badge: 'Family Safe 🏰',
    players: '3-15 players',
    duration: '20-40 mins',
    difficulty: 'Easy',
    prompts: [
      'Character: Mickey Mouse — Laughing enthusiastically with oversized ears.',
      'Character: Elsa — Dramatically casting ice spells across the room.',
      'Character: Aladdin — Rubbing a magic lamp and climbing onto a flying carpet.',
      'Character: Ariel — Brushing her hair with a fork and sighing dreamily.',
      'Character: Winnie the Pooh — Sticking one hand deep into a honey jar.',
      'Character: Peter Pan — Flying and sword-fighting Captain Hook.',
      'Character: Simba — Roaring proudly while standing on Pride Rock.',
      'Character: Buzz Lightyear — Saluting and flying "to infinity and beyond!"',
    ],
    rules: [
      'Keep the rules relaxed and family-friendly.',
      'Actor silently acts out the Disney character, movie scene, or song action.',
      'Family members guess within 60 seconds to score a point.',
    ],
    faqs: [
      { question: 'Is Disney Charades good for mixed ages?', answer: 'Yes — Disney\'s characters span generations, making it ideal for grandparents, parents, and children playing together.' },
      { question: 'Can we include Pixar movies in this deck?', answer: 'Absolutely! Toy Story, Finding Nemo, and Coco are all fair game and well-known.' },
    ],
    parentSlug: 'charades',
    siblings: ['charades-movie', 'charades-pixar', 'charades-kids', 'charades-halloween'],
  },

  // 38. Halloween: /charades/halloween/
  {
    id: 'charades-halloween',
    path: '/charades/halloween/',
    title: 'Halloween Charades: Spooky Acting Prompts',
    description: 'Spooky, funny, and seasonal acting prompts featuring monsters, witches, ghosts, candy bags, and haunted house scenarios.',
    category: 'Action & Acting',
    badge: 'Spooky 🎃',
    players: '4-20 players',
    duration: '25-50 mins',
    difficulty: 'Easy',
    prompts: [
      'Prompt: Carving a grinning jack-o-lantern with a knife.',
      'Prompt: A mummy slowly unwrapping itself from ancient bandages.',
      'Prompt: Dracula dramatically awakening from his coffin at midnight.',
      'Prompt: A witch stirring a huge cauldron of bubbling green potion.',
      'Prompt: A zombie shuffling forward, arms extended, moaning silently.',
      'Prompt: Trick-or-treating — ringing doorbells and holding out a candy bucket.',
      'Prompt: Walking through a dark haunted house and being suddenly startled.',
      'Prompt: Flying on a magical broomstick through a full moon sky.',
    ],
    rules: [
      'Draw spooky prompt cards and convey the Halloween monster or seasonal action silently.',
      'Guess within the time limit — the team with the most correct guesses wins.',
      'Best played in dim lighting with Halloween decorations for added atmosphere!',
    ],
    faqs: [
      { question: 'When is Halloween Charades best played?', answer: 'It is perfect for October gatherings, Halloween house parties, and school fall festivals.' },
      { question: 'Is this deck suitable for young children?', answer: 'Yes, all prompts are fun and spooky rather than scary — no gore or horror content.' },
    ],
    parentSlug: 'charades',
    siblings: ['charades-christmas', 'charades-birthday', 'charades-movie', 'charades-disney'],
  },
];
