import {
  VocabItem,
  AcademicStructure,
  SynonymMatchTask,
  CollocationGapTask,
  DiscourseAnalysisTask,
  SpeedEvidenceTask
} from '../types';

export const VOCABULARY_ITEMS: VocabItem[] = [
  {
    id: 'v1',
    term: 'bring about (change)',
    phonetic: '/brɪŋ əˈbaʊt/',
    partOfSpeech: 'phrasal verb',
    definition: 'To cause something to happen or make something occur.',
    passageQuote: 'The forces that operate to bring about change in organisations can be thought of as winds...',
    paragraphRef: 'A',
    collocations: ['bring about radical change', 'bring about a transformation', 'bring about improvement'],
    synonyms: ['cause', 'induce', 'engender', 'precipitate', 'instigate'],
    ieltsBand: 'Band 7',
    category: 'Academic Verbs',
    writingSpeakingTip: 'High-utility verb for IELTS Task 2 essays when discussing causes of social or technological shifts (e.g., "Technological innovation has brought about profound alterations in workplace culture").'
  },
  {
    id: 'v2',
    term: 'subsistence level',
    phonetic: '/səbˈsɪstəns ˈlevl/',
    partOfSpeech: 'noun phrase',
    definition: 'A bare minimum standard of living that provides only the basic food, clothing, and shelter needed to stay alive.',
    passageQuote: '...people could fairly well predict the cycle of activities required to maintain life, even if that life might be at little more than subsistence level.',
    paragraphRef: 'A',
    collocations: ['subsistence farming', 'live at subsistence level', 'subsistence wages', 'fall below subsistence'],
    synonyms: ['hand-to-mouth existence', 'bare survival', 'minimal livelihood'],
    ieltsBand: 'Band 8',
    category: 'Business & Economics',
    writingSpeakingTip: 'Essential for economic history and global poverty topics in IELTS. Contrast "subsistence economy" with an "affluent or consumer-driven society".'
  },
  {
    id: 'v3',
    term: 'hitherto',
    phonetic: '/ˌhɪðərˈtuː/',
    partOfSpeech: 'adverb (formal)',
    definition: 'Until now or until the particular time in question in the past.',
    passageQuote: '...provided the means of production of hitherto rarely obtainable goods...',
    paragraphRef: 'B',
    collocations: ['hitherto unknown', 'hitherto impossible', 'hitherto neglected'],
    synonyms: ['previously', 'heretofore', 'until that point', 'formerly'],
    ieltsBand: 'Band 9',
    category: 'Formal Collocations',
    writingSpeakingTip: 'A hallmark of Band 9 academic writing. Use it before adjectives or participles: "This breakthrough unlocked hitherto unimagined possibilities."'
  },
  {
    id: 'v4',
    term: 'mechanistic',
    phonetic: '/ˌmekəˈnɪstɪk/',
    partOfSpeech: 'adjective',
    definition: 'Functioning like a machine; characterized by rigid hierarchical procedures, standardized routines, and central control.',
    passageQuote: '...enabling companies to structure their organisations along what Burns and Stalker (1966) described as mechanistic lines...',
    paragraphRef: 'B',
    collocations: ['mechanistic organisation', 'mechanistic approach', 'mechanistic worldview'],
    synonyms: ['rigid', 'bureaucratic', 'formulaic', 'hierarchical'],
    ieltsBand: 'Band 8',
    category: 'Business & Economics',
    writingSpeakingTip: 'In organizational management essays, contrast "mechanistic structure" with "organic, flexible, or decentralized structures".'
  },
  {
    id: 'v5',
    term: 'outstrip',
    phonetic: '/aʊtˈstrɪp/',
    partOfSpeech: 'verb',
    definition: 'To exceed, surpass, or be greater or faster than something else.',
    passageQuote: '...the most disturbing environmental influence on organisations of this time was the demand for products, which outstripped supply.',
    paragraphRef: 'C',
    collocations: ['demand outstrips supply', 'outstrip competitors', 'outstrip expectations'],
    synonyms: ['surpass', 'exceed', 'outdo', 'outpace', 'eclipse'],
    ieltsBand: 'Band 8',
    category: 'Academic Verbs',
    writingSpeakingTip: 'Frequently tested in IELTS Reading and crucial for Task 1 Academic graphs (e.g., "By 2015, renewable energy consumption had outstripped that of coal").'
  },
  {
    id: 'v6',
    term: 'discriminating',
    phonetic: '/dɪˈskrɪmɪneɪtɪŋ/',
    partOfSpeech: 'adjective',
    definition: 'Having or showing refined taste, critical discernment, and good judgment; selective.',
    passageQuote: 'In the neo-industrial age, people became more discriminating in the goods and services they wished to buy...',
    paragraphRef: 'D',
    collocations: ['discriminating consumers', 'discriminating palate', 'discriminating eye'],
    synonyms: ['discerning', 'selective', 'judicious', 'fastidious', 'critical'],
    ieltsBand: 'Band 8',
    category: 'Business & Economics',
    writingSpeakingTip: 'Do not confuse with "discriminatory" (prejudiced). A "discriminating shopper" chooses quality over quantity.'
  },
  {
    id: 'v7',
    term: 'in its own right',
    phonetic: '/ɪn ɪts əʊn raɪt/',
    partOfSpeech: 'idiomatic phrase',
    definition: 'By reason of its own independent qualities, merits, or status rather than in connection with something else.',
    passageQuote: '...whether this merely added value to manufactured products, or whether it was service in its own right.',
    paragraphRef: 'E',
    collocations: ['a discipline in its own right', 'an industry in its own right', 'flourish in its own right'],
    synonyms: ['independently', 'on its own merits', 'as a distinct entity'],
    ieltsBand: 'Band 8',
    category: 'Metaphors & Idioms',
    writingSpeakingTip: 'Adds native-level fluency to IELTS Speaking Part 3 and Writing: "Tourism has emerged as a major sector in its own right."'
  },
  {
    id: 'v8',
    term: 'poised on the eve of',
    phonetic: '/pɔɪzd ɒn ðiː iːv əv/',
    partOfSpeech: 'phrase',
    definition: 'Positioned or ready on the immediate threshold or brink of a momentous occasion or new era.',
    passageQuote: 'Poised on the eve of the next century, we are witnessing a profound transformation in the very nature of our business organisations.',
    paragraphRef: 'F',
    collocations: ['poised on the brink of', 'poised on the threshold', 'poised for growth'],
    synonyms: ['standing on the verge of', 'on the brink of', 'ready on the threshold of'],
    ieltsBand: 'Band 9',
    category: 'Metaphors & Idioms',
    writingSpeakingTip: 'Evocative rhetorical phrase for essay introductions: "Poised on the eve of widespread artificial intelligence adoption, societies must re-evaluate..."'
  },
  {
    id: 'v9',
    term: 'profound transformation',
    phonetic: '/prəˈfaʊnd ˌtrænsfəˈmeɪʃn/',
    partOfSpeech: 'noun collocation',
    definition: 'A deep, radical, and far-reaching change that alters fundamental characteristics.',
    passageQuote: '...we are witnessing a profound transformation in the very nature of our business organisations.',
    paragraphRef: 'F',
    collocations: ['undergo a profound transformation', 'spark a profound transformation'],
    synonyms: ['radical upheaval', 'sea change', 'fundamental restructuring', 'metamorphosis'],
    ieltsBand: 'Band 8',
    category: 'Formal Collocations',
    writingSpeakingTip: 'A Band 8+ replacement for simple phrases like "big change". Use in academic introductions and conclusions.'
  },
  {
    id: 'v10',
    term: 'converge',
    phonetic: '/kənˈvɜːrdʒ/',
    partOfSpeech: 'verb',
    definition: 'To come together from different directions or origins to meet at a single point or produce a combined effect.',
    passageQuote: 'Historic forces have converged to fundamentally reshape the scope, strategies, and structures of large enterprises.',
    paragraphRef: 'F',
    collocations: ['factors converge', 'opinions converge', 'converge on a solution', 'technological convergence'],
    synonyms: ['coalesce', 'intersect', 'unite', 'merge', 'come together'],
    ieltsBand: 'Band 8',
    category: 'Academic Verbs',
    writingSpeakingTip: 'Ideal for analyzing multifaceted causes: "Several socio-economic variables have converged to create this housing shortage."'
  },
  {
    id: 'v11',
    term: 'changed beyond recognition',
    phonetic: '/tʃeɪndʒd bɪˈjɒnd ˌrekəɡˈnɪʃn/',
    partOfSpeech: 'idiomatic collocation',
    definition: 'Altered so drastically that the original state is no longer identifiable.',
    passageQuote: '...present levels of self-employment, commuting and technology use, as well as age and sex gaps, will have changed beyond recognition.',
    paragraphRef: 'F',
    collocations: ['altered beyond recognition', 'transformed beyond recognition'],
    synonyms: ['radically revolutionized', 'completely overhauled', 'rendered unrecognizable'],
    ieltsBand: 'Band 8',
    category: 'Formal Collocations',
    writingSpeakingTip: 'A common idiom in IELTS Writing Task 2 and Speaking Part 3 to emphasize the magnitude of historical or urban development.'
  },
  {
    id: 'v12',
    term: 'fraught with (difficulties)',
    phonetic: '/frɔːt wɪð/',
    partOfSpeech: 'adjective phrase',
    definition: 'Filled with, accompanied by, or laden with problems, risks, or unpleasant elements.',
    passageQuote: 'Forecasting the future is always fraught with difficulties.',
    paragraphRef: 'G',
    collocations: ['fraught with danger', 'fraught with peril', 'fraught with complications', 'fraught with uncertainty'],
    synonyms: ['laden with', 'riddled with', 'replete with problems', 'fraught with risk'],
    ieltsBand: 'Band 8',
    category: 'Formal Collocations',
    writingSpeakingTip: 'Always paired with "with" followed by an undesirable noun: "The venture was fraught with financial pitfalls."'
  },
  {
    id: 'v13',
    term: 'trigger (change)',
    phonetic: '/ˈtrɪɡər/',
    partOfSpeech: 'verb / noun',
    definition: 'To set off, precipitate, or initiate a chain of events or reactions.',
    passageQuote: 'Consequently, it is crucial that organisational managers and decision makers are aware of, and able to analyse the factors which trigger organisational change.',
    paragraphRef: 'G',
    collocations: ['trigger a crisis', 'trigger a reaction', 'serve as a trigger', 'trigger innovation'],
    synonyms: ['prompt', 'initiate', 'spark', 'precipitate', 'set in motion'],
    ieltsBand: 'Band 7',
    category: 'Academic Verbs',
    writingSpeakingTip: 'A versatile cause-and-effect verb. Use instead of repeatedly writing "causes" or "leads to".'
  },
  {
    id: 'v14',
    term: 'meteorological metaphor',
    phonetic: '/ˌmiːtiərəˈlɒdʒɪkl ˈmetəfər/',
    partOfSpeech: 'noun phrase',
    definition: 'A figurative comparison utilizing weather phenomena (summer breezes, howling gales) to explain complex socio-economic concepts.',
    passageQuote: 'To maintain the meteorological metaphor, stronger winds of change blew to bring in the Industrial Revolution...',
    paragraphRef: 'B',
    collocations: ['adopt a metaphor', 'extend a metaphor', 'meteorological conditions'],
    synonyms: ['weather analogy', 'atmospheric imagery', 'climatic comparison'],
    ieltsBand: 'Band 9',
    category: 'Metaphors & Idioms',
    writingSpeakingTip: 'In IELTS Reading, identifying how authors employ sustained metaphors (winds of change) is critical for global comprehension questions.'
  }
];

export const ACADEMIC_STRUCTURES: AcademicStructure[] = [
  {
    id: 'struct-1',
    title: 'Extended Metaphorical Framing',
    category: 'Rhetorical Framing & Cohesion',
    pattern: 'The [abstract force] can be thought of as [physical metaphor] which are [contrasting manifestations]...',
    passageExample: 'The forces that operate to bring about change in organisations can be thought of as winds which are many and varied - from small summer breezes that merely disturb a few papers, to mighty howling gales which cause devastation...',
    paragraphRef: 'A',
    explanation: 'Academic writers use extended metaphors to make complex abstract dynamics tangible. By pairing polar opposites ("summer breezes" vs "mighty howling gales"), the writer establishes a full spectrum of intensity.',
    ieltsApplication: 'Use this structure in IELTS Task 2 introductions to frame multifaceted phenomena: "The effects of globalisation can be thought of as tidal currents, ranging from gentle swells that enrich trade to torrential surges that engulf traditional customs."',
    templateExercise: {
      scaffold: 'The factors that contribute to [Issue] can be thought of as [Metaphor], spanning from [Minor manifestation] to [Severe manifestation].',
      sampleCompletion: 'The factors that contribute to urban sprawl can be thought of as ripple effects, spanning from modest suburban expansion to uncontained peripheral congestion.'
    }
  },
  {
    id: 'struct-2',
    title: 'Hedging & Epistemic Caution',
    category: 'Academic Caution & Nuance',
    pattern: 'Whether [Hypothesis] is [arguable/questionable]. [Process] is always fraught with [difficulty/uncertainty].',
    passageExample: 'Whether all this will happen is arguable. Forecasting the future is always fraught with difficulties.',
    paragraphRef: 'G',
    explanation: 'Academic authors rarely state absolute claims about the future. Instead, they use hedging ("is arguable", "fraught with difficulties") to protect their credibility while validating opposing viewpoints.',
    ieltsApplication: 'Band 8+ Academic Writing requires balanced hedging. Avoid dogmatic statements like "This will definitely happen". Instead write: "Whether such automation will eliminate human labor is arguable."',
    templateExercise: {
      scaffold: 'Whether [Predicted Outcome] will materialize is [arguable/debatable]; indeed, [Process] remains fraught with [Risk/Challenge].',
      sampleCompletion: 'Whether complete decarbonisation will materialize by 2030 is arguable; indeed, overhauling national grids remains fraught with geopolitical and financial risks.'
    }
  },
  {
    id: 'struct-3',
    title: 'Nominalised Cause-and-Effect with Consequent Results',
    category: 'Information Density & Nominalisation',
    pattern: '[Action/Disruption], causing consequent [Nominalised Outcome] and [Reorganisation]...',
    passageExample: '...mighty howling gales which cause devastation to structures and operations, causing consequent reorientation of purpose and rebuilding.',
    paragraphRef: 'A',
    explanation: 'Notice how instead of writing "and consequently people reorient their purpose", the author nominalises the verb into "consequent reorientation of purpose". Nominalisation creates high academic register and conciseness.',
    ieltsApplication: 'In IELTS Task 1 and Task 2, nominalisations turn simple sentences into Band 8+ academic discourse: "The pandemic closed factories, causing consequent disruption of international supply chains."',
    templateExercise: {
      scaffold: '[Event/Catalyst], bringing about consequent [Noun of action] of [Key element] and [Second outcome].',
      sampleCompletion: 'Rapid economic digitisation disrupted high-street retail, bringing about consequent restructuring of commercial real estate and employment models.'
    }
  },
  {
    id: 'struct-4',
    title: 'Balanced Double Concession (Whether A or Whether B)',
    category: 'Syntactic Variety & Concessive Clauses',
    pattern: '...whether this merely [minimal effect], or whether it was [substantive status] in its own right.',
    passageExample: '...whether this merely added value to manufactured products, or whether it was service in its own right.',
    paragraphRef: 'E',
    explanation: 'The parallel structure "whether this merely [X]... or whether it was [Y] in its own right" demonstrates syntactic sophistication. It enables the writer to encapsulate both subsidiary and primary roles seamlessly.',
    ieltsApplication: 'Perfect for discussion essays where you evaluate differing extents of impact: "Governments must assess whether artificial intelligence merely augments existing workflows, or whether it constitutes an entirely autonomous workforce in its own right."',
    templateExercise: {
      scaffold: 'It remains to be seen whether [Technology/Policy] merely [Modest function], or whether it represents [Transformative role] in its own right.',
      sampleCompletion: 'It remains to be seen whether remote work merely serves as a temporary convenience, or whether it represents a revolutionary organizational paradigm in its own right.'
    }
  },
  {
    id: 'struct-5',
    title: 'Comparative Era Sequencing & Diachronic Analysis',
    category: 'Historical Progression & Contrast',
    pattern: 'In the [Era 1], [Condition prevailed]... As time passed, this [favourable state] began to decline... In the [Era 2], [New paradigm emerged]...',
    passageExample: 'Such a period was the agricultural age... Again, according to Goodman, this lasted for a long time... As time passed, this favourable period began to decline. In the neo-industrial age...',
    paragraphRef: 'B',
    explanation: 'IELTS passages tracking historical evolution use chronological signposts to guide the reader through shifting paradigms. Recognizing these markers is essential for Period-Matching and Summary Completion questions.',
    ieltsApplication: 'In Task 1 Academic trend analysis or Task 2 historical overviews, use this sequencing formula to present shifts across decades cleanly.',
    templateExercise: {
      scaffold: 'During the early stages, [Initial paradigm] dominated; however, as [Catalyst] accelerated, this established model began to decline, yielding to [Successor paradigm].',
      sampleCompletion: 'During the early stages, coal-fired power dominated energy grids; however, as environmental legislation accelerated, this established model began to decline, yielding to modular renewable alternatives.'
    }
  }
];

export const SYNONYM_MATCH_TASKS: SynonymMatchTask[] = [
  {
    id: 'syn-1',
    passageWord: 'outstripped',
    paragraphRef: 'C',
    passageContext: '...the demand for products, which outstripped supply.',
    correctSynonym: 'exceeded / surpassed',
    distractors: ['equalled', 'diminished', 'subsidised'],
    ieltsTrapNote: 'IELTS reading questions often test whether you know "outstrip" means to outdo or exceed, rather than to strip down or reduce.'
  },
  {
    id: 'syn-2',
    passageWord: 'discriminating',
    paragraphRef: 'D',
    passageContext: 'In the neo-industrial age, people became more discriminating in the goods and services they wished to buy...',
    correctSynonym: 'selective / discerning',
    distractors: ['prejudiced', 'indifferent', 'reckless'],
    ieltsTrapNote: 'In general English "discriminating" can carry a negative bias connotation, but in academic business texts it strictly means having discerning, quality-sensitive taste.'
  },
  {
    id: 'syn-3',
    passageWord: 'fraught with',
    paragraphRef: 'G',
    passageContext: 'Forecasting the future is always fraught with difficulties.',
    correctSynonym: 'laden with / accompanied by',
    distractors: ['devoid of', 'facilitated by', 'independent of'],
    ieltsTrapNote: 'Test takers often guess "fraught" means "frightened". In fact, "fraught with" means packed or filled with hazards/obstacles.'
  },
  {
    id: 'syn-4',
    passageWord: 'hitherto',
    paragraphRef: 'B',
    passageContext: '...provided the means of production of hitherto rarely obtainable goods...',
    correctSynonym: 'previously / up until then',
    distractors: ['thereafter', 'spontaneously', 'intentionally'],
    ieltsTrapNote: '"Hitherto" indicates past duration leading up to a specific historical transition. Do not confuse it with "henceforth" (from now on).'
  },
  {
    id: 'syn-5',
    passageWord: 'converged',
    paragraphRef: 'F',
    passageContext: 'Historic forces have converged to fundamentally reshape the scope, strategies, and structures...',
    correctSynonym: 'combined / coalesced',
    distractors: ['dispersed', 'conflicted', 'dissolved'],
    ieltsTrapNote: 'When forces "converge", multiple independent historical trends meet at a common juncture to trigger massive collective consequences.'
  },
  {
    id: 'syn-6',
    passageWord: 'subsistence',
    paragraphRef: 'A',
    passageContext: '...even if that life might be at little more than subsistence level.',
    correctSynonym: 'bare survival / hand-to-mouth',
    distractors: ['luxurious abundance', 'commercial prosperity', 'technological comfort'],
    ieltsTrapNote: 'Key economic term indicating zero surplus wealth—just enough grain, food, and energy to avoid starvation.'
  }
];

export const COLLOCATION_GAP_TASKS: CollocationGapTask[] = [
  {
    id: 'gap-1',
    sentence: 'The fierce gale-force winds caused catastrophic __________ to traditional institutional structures.',
    missingWord: 'devastation',
    options: ['devastation', 'distraction', 'divergence', 'deliberation'],
    passageRef: 'A',
    collocationRule: 'Collocates with "cause": cause devastation to structures/communities.',
    explanation: 'Paragraph A describes winds which "cause devastation to structures and operations, causing consequent reorientation of purpose".'
  },
  {
    id: 'gap-2',
    sentence: 'During the Industrial Revolution, consumer demand consistently __________ the volume of available supply.',
    missingWord: 'outstripped',
    options: ['outstripped', 'outperformed', 'outnumbered', 'outlived'],
    passageRef: 'C',
    collocationRule: '"Demand outstrips supply" is a fixed macroeconomic collocation.',
    explanation: 'Paragraph C specifies: "the demand for products, which outstripped supply."'
  },
  {
    id: 'gap-3',
    sentence: 'Modern organisations are poised on the eve of the century, witnessing a __________ transformation in operational structure.',
    missingWord: 'profound',
    options: ['profound', 'profuse', 'prolonged', 'prohibitive'],
    passageRef: 'F',
    collocationRule: 'Pair "transformation" with "profound" to denote deep, structural change.',
    explanation: 'Paragraph F quotes Nadler and Tushman: "we are witnessing a profound transformation in the very nature of our business organisations."'
  },
  {
    id: 'gap-4',
    sentence: 'Economists caution that anticipating future employment demographics is always __________ with difficulties.',
    missingWord: 'fraught',
    options: ['fraught', 'freighted', 'fused', 'fortified'],
    passageRef: 'G',
    collocationRule: 'The adjective "fraught" obligatorily takes the preposition "with" and a negative noun like difficulties or dangers.',
    explanation: 'Paragraph G emphasizes: "Forecasting the future is always fraught with difficulties."'
  },
  {
    id: 'gap-5',
    sentence: 'Organisations must pinpoint the internal and external catalysts that __________ organizational adaptation.',
    missingWord: 'trigger',
    options: ['trigger', 'traverse', 'terminate', 'transcribe'],
    passageRef: 'G',
    collocationRule: '"Trigger change / trigger a reaction" is the academic standard for initiating processes.',
    explanation: 'Paragraph G concludes: "...crucial that organisational managers... are aware of, and able to analyse the factors which trigger organisational change."'
  },
  {
    id: 'gap-6',
    sentence: 'Henry Ford operated in a __________ market where customers had virtually no bargaining power over specifications.',
    missingWord: 'supply-led',
    options: ['supply-led', 'demand-driven', 'customer-centric', 'value-oriented'],
    passageRef: 'C',
    collocationRule: 'A "supply-led state of the market" means producers sell whatever they manufacture.',
    explanation: 'Paragraph C states: "gives a flavour of the supply-led state of the market... Ford did not have to worry about customers\' colour preferences: he could sell all that he made."'
  }
];

export const DISCOURSE_ANALYSIS_TASKS: DiscourseAnalysisTask[] = [
  {
    id: 'disc-1',
    connector: 'To maintain the meteorological metaphor...',
    sentenceContext: 'To maintain the meteorological metaphor, stronger winds of change blew to bring in the Industrial Revolution...',
    paragraphRef: 'B',
    functionType: 'Sequence & Historical Transition',
    options: ['Sequence & Historical Transition', 'Concession & Counter-argument', 'Exemplification', 'Cause & Effect'],
    explanation: 'The author explicitly preserves the thematic wind imagery to bridge the transition between the agricultural age (Paragraph A) and the Industrial Revolution (Paragraph B).'
  },
  {
    id: 'disc-2',
    connector: 'Thus...',
    sentenceContext: 'Thus the most disturbing environmental influence on organisations of this time was the demand for products, which outstripped supply.',
    paragraphRef: 'C',
    functionType: 'Cause & Effect',
    options: ['Cause & Effect', 'Concession & Counter-argument', 'Hedging & Evaluation', 'Sequence & Historical Transition'],
    explanation: '"Thus" acts as a logical illative conjunction demonstrating that because organisations were striving to fill the supply gap, demand became the dominant pressure.'
  },
  {
    id: 'disc-3',
    connector: 'Whether all this will happen is arguable.',
    sentenceContext: 'Whether all this will happen is arguable. Forecasting the future is always fraught with difficulties.',
    paragraphRef: 'G',
    functionType: 'Hedging & Evaluation',
    options: ['Hedging & Evaluation', 'Cause & Effect', 'Exemplification', 'Sequence & Historical Transition'],
    explanation: 'This sentence introduces epistemic distance. After presenting Graeme Leach\'s radical predictions in Paragraph F, the author steps back to critically assess their probability.'
  },
  {
    id: 'disc-4',
    connector: 'For instance...',
    sentenceContext: 'For instance, Mannermann (1998) sees future studies as part art and part science and notes...',
    paragraphRef: 'G',
    functionType: 'Exemplification',
    options: ['Exemplification', 'Cause & Effect', 'Concession & Counter-argument', 'Hedging & Evaluation'],
    explanation: '"For instance" introduces a concrete expert citation (Mannermann) to illustrate the claim that forecasting the future is fraught with difficulties.'
  },
  {
    id: 'disc-5',
    connector: '...even if that life might be at little more than subsistence level.',
    sentenceContext: 'During this time, people could fairly well predict the cycle of activities required to maintain life, even if that life might be at little more than subsistence level.',
    paragraphRef: 'A',
    functionType: 'Concession & Counter-argument',
    options: ['Concession & Counter-argument', 'Sequence & Historical Transition', 'Cause & Effect', 'Exemplification'],
    explanation: '"Even if" introduces a concession: while predictability was high, the quality of existence was meager, qualifying the earlier positive assessment of stability.'
  }
];

export const SPEED_EVIDENCE_TASKS: SpeedEvidenceTask[] = [
  {
    id: 'speed-1',
    prompt: 'Where does the author describe consumers becoming more selective and demanding higher quality?',
    correctParagraph: 'D',
    keyEvidenceQuote: 'In the neo-industrial age, people became more discriminating in the goods and services they wished to buy and, as technological advancements brought about increased productivity, supply overtook demand.',
    scanningClue: 'Scan for synonyms of "selective" -> "discriminating" and "wished to buy".'
  },
  {
    id: 'speed-2',
    prompt: 'Where is an automobile pioneer quoted to demonstrate a market where manufacturers sold whatever they produced?',
    correctParagraph: 'C',
    keyEvidenceQuote: 'The saying attributed to Henry Ford that \'You can have any colour of car so long as it is black\', gives a flavour of the supply-led state of the market.',
    scanningClue: 'Scan for the capitalised proper noun "Henry Ford" or quotation marks.'
  },
  {
    id: 'speed-3',
    prompt: 'Where does an economist forecast that up to half of employees will work remotely from home?',
    correctParagraph: 'F',
    keyEvidenceQuote: '...25 percent of people will no longer work in a traditional office and ... 50 percent will work from home in some form.',
    scanningClue: 'Scan for numerical percentage figures like "50 percent" and the keyword "home".'
  },
  {
    id: 'speed-4',
    prompt: 'Where does a researcher define future studies as blending both artistic intuition and scientific methodology?',
    correctParagraph: 'G',
    keyEvidenceQuote: 'Mannermann (1998) sees future studies as part art and part science and notes...',
    scanningClue: 'Scan for citation with year "(1998)" and paired words "art" / "science".'
  },
  {
    id: 'speed-5',
    prompt: 'Where are organizations described as operating along mechanistic systems of rigid hierarchy?',
    correctParagraph: 'B',
    keyEvidenceQuote: '...structure their organisations along what Burns and Stalker (1966) described as mechanistic lines, that is as systems of strict hierarchical structures and firm means of control.',
    scanningClue: 'Scan for the specialized theoretical term "mechanistic" or citation "Burns and Stalker".'
  }
];

export const PARAPHRASE_MASTERY_PAIRS = [
  {
    id: 'p1',
    original: 'supply overtook demand',
    paraphrase: 'production exceeded market consumption requirements',
    context: 'Paragraph D: In the neo-industrial age...',
    questionType: 'Sentence Completion / Summary'
  },
  {
    id: 'p2',
    original: 'demand outstripped supply',
    paraphrase: 'consumer desire for goods surpassed manufacturing capacity',
    context: 'Paragraph C: Fill the supply gap...',
    questionType: 'Period Matching (Questions 19–23)'
  },
  {
    id: 'p3',
    original: 'the nine-to-five rat race will be extinct',
    paraphrase: 'standard fixed working hours will no longer exist',
    context: 'Paragraph F: Leach anticipates...',
    questionType: 'Matching Information (Question 14)'
  },
  {
    id: 'p4',
    original: 'systems of strict hierarchical structures and firm means of control',
    paraphrase: 'the way company employees were usually managed',
    context: 'Paragraph B: Burns and Stalker...',
    questionType: 'Matching Information (Question 15)'
  },
  {
    id: 'p5',
    original: 'adding value to goods and services',
    paraphrase: 'organisations began to focus more on value',
    context: 'Paragraph E: Goodman calls the value-oriented time...',
    questionType: 'Summary Completion (Question 25)'
  }
];
