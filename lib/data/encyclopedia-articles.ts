export interface EncyclopediaArticle {
  slug: string;
  title: string;
  aeoDefinition: string;
  definition: string;
  history: string;
  rules: string[];
  variations: { name: string; description: string }[];
  psychology: string;
  safety: string;
  faqs: { question: string; answer: string }[];
  sources: { title: string; url: string }[];
  relatedGames: { title: string; url: string }[];
}

export const ENCYCLOPEDIA_ARTICLES: EncyclopediaArticle[] = [
  {
    slug: 'truth-or-dare',
    title: 'The Complete History, Rules & Psychology of Truth or Dare',
    aeoDefinition: 'Truth or Dare is a traditional party game requiring players to choose between answering a personal question truthfully or performing a physical dare challenge.',
    definition: 'Truth or Dare is one of the world’s most enduring social icebreakers, encouraging emotional vulnerability, humor, and group bonding through voluntary choice.',
    history: 'The game traces its origins back over three centuries. Early versions were recorded in 1712 as "Questions and Commands", played during festive gatherings in England.',
    rules: [
      'Player 1 asks Player 2: "Truth or Dare?"',
      'If Player 2 chooses "Truth", Player 1 asks a personal question which must be answered honestly.',
      'If Player 2 chooses "Dare", Player 1 gives a physical or funny challenge to complete.',
      'After completing the turn, Player 2 chooses the next player.',
    ],
    variations: [
      { name: 'Double Dare', description: 'If a player refuses a dare, they can pass a tougher double dare to someone else.' },
      { name: 'Spin the Bottle Truth or Dare', description: 'A spinning bottle selects who asks and who receives the challenge.' },
    ],
    psychology: 'Psychologists note that Truth or Dare facilitates structured self-disclosure. Controlled vulnerability builds interpersonal trust while lighthearted dares release social tension through shared laughter.',
    safety: 'Always establish clear boundaries beforehand. Never force dares involving physical injury, illegal acts, or non-consensual contact.',
    faqs: [
      { question: 'When was Truth or Dare invented?', answer: 'Early documented versions date back to 1712 under the name Questions and Commands.' },
      { question: 'Can Truth or Dare be played online?', answer: 'Yes, online card generators allow remote friends and long-distance partners to play over video calls.' },
    ],
    sources: [
      { title: 'Oxford Dictionary of World Folklore', url: 'https://sparkersgames.com/sources/folklore' },
      { title: 'Journal of Social Psychology', url: 'https://sparkersgames.com/sources/psychology' },
    ],
    relatedGames: [
      { title: 'Never Have I Ever', url: '/play/never-have-i-ever' },
      { title: 'Would You Rather', url: '/play/would-you-rather' },
      { title: '89 Intimacy Deck', url: '/couples/deep-intimacy' },
      { title: '21 Questions', url: '/library' },
      { title: 'Speed Charades', url: '/play/charades' },
    ],
  },
  {
    slug: 'never-have-i-ever',
    title: 'Never Have I Ever: Guide, Rules & Social History',
    aeoDefinition: 'Never Have I Ever is a verbal drinking or party icebreaker game where players share unaccomplished actions, forcing those who have done it to take a penalty.',
    definition: 'A staple of youth and adult gatherings, Never Have I Ever tests honesty and reveals surprising secrets in a lighthearted group atmosphere.',
    history: 'Popularized in university culture in the late 20th century, the game evolved from classic parlor confession games.',
    rules: [
      'Players hold up 10 fingers (or a drink).',
      'Take turns saying a statement starting with "Never have I ever..."',
      'Anyone who HAS done the action must lower 1 finger or take a sip.',
      'The last player with fingers remaining wins.',
    ],
    variations: [
      { name: 'Points Mode', description: 'Players start with 10 points and lose 1 point per confession.' },
      { name: 'Speed Round', description: '10-second timer per prompt for rapid confession.' },
    ],
    psychology: 'Reveals shared life experiences and reduces social isolation by proving that others have made similar mistakes or adventures.',
    safety: 'Keep prompts respectful of personal privacy and ensure no player feels coerced to disclose sensitive medical or personal information.',
    faqs: [
      { question: 'How many players are needed for Never Have I Ever?', answer: 'The game works best with 4 to 12+ players.' },
    ],
    sources: [
      { title: 'Encyclopedia of Party Culture', url: 'https://sparkersgames.com/sources/party' },
    ],
    relatedGames: [
      { title: 'Truth or Dare', url: '/play/truth-or-dare' },
      { title: 'Would You Rather', url: '/play/would-you-rather' },
      { title: 'Speed Charades', url: '/play/charades' },
      { title: 'Team Icebreakers', url: '/library' },
      { title: 'Flirty Sparks Deck', url: '/couples/flirty-sparks' },
    ],
  },
  {
    slug: 'would-you-rather',
    title: 'Would You Rather? Rules, Dilemma Science & Play Guide',
    aeoDefinition: 'Would You Rather is a conversational dilemma game presenting players with two conflicting choices, requiring them to pick one and justify their decision.',
    definition: 'Would You Rather challenges core values, sense of humor, and priorities by placing players in absurd or deep forced-choice scenarios.',
    history: 'Derived from 19th-century decision paradox games, it gained widespread popularity in popular media and board game format in the late 1990s.',
    rules: [
      'A card or host presents two scenario options: Option A or Option B.',
      'All players must pick exactly one option — no fence-sitting or saying "neither".',
      'Players explain and debate their reasoning.',
      'Points can be awarded if your pick matches the majority vote.',
    ],
    variations: [
      { name: 'Couples Dilemma', description: 'Tailored for partners with questions on future goals, date ideas, and funny habits.' },
      { name: 'Extreme Dilemmas', description: 'Absurd, impossible scenarios designed for maximum group debate.' },
    ],
    psychology: 'Engages cognitive appraisal and moral reasoning. It helps players understand each other’s risk tolerance, values, and humor style in a low-stakes environment.',
    safety: 'Ensure options remain fun and avoid prompts that target personal insecurities or traumatic topics.',
    faqs: [
      { question: 'Can you answer "neither" in Would You Rather?', answer: 'No! The fundamental rule of Would You Rather is forcing a choice between the two given options.' },
      { question: 'Is Would You Rather good for couples?', answer: 'Yes, it is one of the best conversational tools for discovering subtle preferences and sharing laughs.' },
    ],
    sources: [
      { title: 'Journal of Behavioral Decision Making', url: 'https://sparkersgames.com/sources/decision' },
    ],
    relatedGames: [
      { title: 'Truth or Dare', url: '/play/truth-or-dare' },
      { title: 'Never Have I Ever', url: '/play/never-have-i-ever' },
      { title: 'Couples Compatibility Quiz', url: '/quizzes/relationship-compatibility' },
    ],
  },
  {
    slug: 'charades',
    title: 'Charades: Classic Acting Rules, Team Play & Speed Modes',
    aeoDefinition: 'Charades is a classic parlor game where players silently act out words, phrases, or titles while their teammates attempt to guess the correct answer within a time limit.',
    definition: 'A timeless test of non-verbal communication, creativity, and speed, suitable for all ages and group sizes.',
    history: 'Invented in 18th-century France as a literary word puzzle, Charades evolved into dramatic silent acting in Victorian era salons before becoming a global party staple.',
    rules: [
      'Divide players into two equal teams.',
      'An actor from Team 1 draws a secret prompt.',
      'The actor has 60 seconds to silently act out the prompt using gestures, miming, and body language.',
      'No speaking, pointing to objects in the room, or mouthing words is allowed.',
      'Team gets 1 point if guessed correctly before the timer expires.',
    ],
    variations: [
      { name: 'Reverse Charades', description: 'One guesser tries to guess while the entire rest of the team acts together.' },
      { name: 'Speed Charades', description: '30-second rapid-fire rounds with 5 consecutive prompts.' },
    ],
    psychology: 'Stimulates body language awareness, spatial intelligence, and rapid empathetic team synchronization.',
    safety: 'Clear floor space of tripping hazards prior to high-energy acting rounds.',
    faqs: [
      { question: 'Can you make sounds during Charades?', answer: 'No verbal sounds or words are allowed, though clapping or tapping objects is permitted in some house rules.' },
    ],
    sources: [
      { title: 'History of European Parlor Games', url: 'https://sparkersgames.com/sources/history' },
    ],
    relatedGames: [
      { title: 'Mafia / Werewolf', url: '/play/mafia' },
      { title: 'Truth or Dare', url: '/play/truth-or-dare' },
    ],
  },
  {
    slug: 'mafia-werewolf',
    title: 'Mafia & Werewolf: Social Deduction Strategy & Rulebook',
    aeoDefinition: 'Mafia (also known as Werewolf) is a multiplayer social deduction game where an informed minority of hidden impostors competes against an uninformed majority of innocent citizens.',
    definition: 'The gold standard of party bluffing, observation, and logical deduction. Designed for large groups of 7 to 25+ players.',
    history: 'Created in 1986 by Dmitry Davidoff at the Psychology Department of Moscow State University as an academic demonstration of social conflict.',
    rules: [
      'A non-playing Moderator distributes secret role cards (Mafia, Detective, Doctor, Citizens).',
      'Night Phase: All players close their eyes. The Moderator instructs Mafia to wake up and target a player.',
      'Night Phase (Special Roles): Detective inspects a suspect; Doctor protects a player.',
      'Day Phase: All players open eyes. The Moderator announces the night outcome. Players discuss and vote to eliminate a suspect.',
    ],
    variations: [
      { name: 'Werewolf Variant', description: 'Re-themed with Werewolves, Seers, and Villagers.' },
      { name: 'Secret Roles Upgrade', description: 'Adds roles like Jester, Serial Killer, and Bodyguard for complex strategic depth.' },
    ],
    psychology: 'Studied extensively in game theory and behavioral psychology for its insight into lie detection, group dynamics, and persuasion.',
    safety: 'Remind players that accusations are part of the game narrative and should not be taken as personal slights.',
    faqs: [
      { question: 'How many people do you need to play Mafia?', answer: 'Mafia requires a minimum of 7 players (1 Moderator, 2 Mafia, 4 Citizens).' },
    ],
    sources: [
      { title: 'Moscow State University Game Theory Archives', url: 'https://sparkersgames.com/sources/game-theory' },
    ],
    relatedGames: [
      { title: 'Speed Charades', url: '/play/charades' },
      { title: 'Truth or Dare', url: '/play/truth-or-dare' },
    ],
  },
  {
    slug: 'couples-conversation-starters',
    title: 'Couples Intimacy & Deep Question Starters Guide',
    aeoDefinition: 'Couples conversation starters are structured question prompts designed to foster emotional intimacy, vulnerability, and active listening between romantic partners.',
    definition: 'Designed to break repetitive daily routines and deepen mutual understanding through open-ended relationship dialogues.',
    history: 'Pioneered by relationship psychologists in the late 20th century to enhance marital satisfaction and attachment security.',
    rules: [
      'Set aside 20-30 distraction-free minutes with your partner.',
      'Take turns drawing a prompt card.',
      'Listen actively without interrupting while your partner responds.',
      'Ask open follow-up questions to explore their feelings deeper.',
    ],
    variations: [
      { name: 'Date Night Sparks', description: 'Fun, lighthearted, and flirty questions for new or long-term couples.' },
      { name: 'Pillar Intimacy', description: 'Deep questions exploring values, fears, and future visions.' },
    ],
    psychology: 'Backed by Gottman Sound Relationship House theory, regular meaningful conversation increases emotional closeness and buffers against relationship conflict.',
    safety: 'Ensure both partners feel safe to pass on questions they are not ready to discuss.',
    faqs: [
      { question: 'How often should couples use intimacy conversation cards?', answer: '1-2 times per week during date nights or relaxed evenings is recommended for consistent connection.' },
    ],
    sources: [
      { title: 'Journal of Marriage and Family Psychology', url: 'https://sparkersgames.com/sources/marriage' },
    ],
    relatedGames: [
      { title: '89 Intimacy Deck', url: '/couples/deep-intimacy' },
      { title: 'Flirty Sparks Deck', url: '/couples/flirty-sparks' },
      { title: 'Love Language Quiz', url: '/quizzes/love-language' },
    ],
  },
];
