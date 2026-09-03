import { Paragraph, Question, QuestionTip, PeriodOption } from '../types';

export const PASSAGE_TITLE = "Change in business organisations";
export const PASSAGE_SUBTITLE = "You should spend about 20 minutes on Questions 14–26, which are based on Reading Passage 2 below.";

export const GENERAL_TEST_TIP: QuestionTip = {
  type: 'test',
  title: 'Test Tip: Reading Passage 2',
  content: 'Read the title and skim the passage first to understand the overarching theme. This passage uses the metaphor of "winds of change" to describe different historical eras of business and organizational management (agricultural age, industrial age, neo-industrial age, and post-industrial future).'
};

export const MATCHING_TEST_TIP: QuestionTip = {
  type: 'test',
  title: 'Tip strip: Questions 14–18',
  content: '• This information does not appear in the same order as it does in the reading passage.\n• To find where the answers are, look for words with the same or similar meanings as the words in the questions.\n• You may have to read several sentences before you can be sure you have found the appropriate section in the reading passage.'
};

export const PERIOD_MATCHING_TEST_TIP: QuestionTip = {
  type: 'test',
  title: 'Tip strip: Questions 19–23',
  content: '• The "periods" are in the same order as they are in the reading passage.\n• Find the relevant paragraphs, then look for words with the same or similar meanings as the words in the questions.\n• Don\'t leave any questions unanswered. When you have attempted all the questions, go back and guess any remaining answers.'
};

export const SUMMARY_TEST_TIPS: QuestionTip[] = [
  {
    type: 'test',
    title: 'Tip strip: Finding the place in the text',
    content: 'You can see from the summary title that it is about the present time, so look for the answers in the last two paragraphs (F & G). The missing words may not be in the same order as they appear in the reading passage.'
  },
  {
    type: 'test',
    title: 'Tip strip: Grammar and word limit',
    content: 'Don\'t write more than the number of words allowed (ONE WORD ONLY). Look only for words which fit the summary grammatically as well as in meaning. Don\'t change any words. Write them exactly as they appear in the reading passage.'
  }
];

export const LIST_OF_PERIODS: PeriodOption[] = [
  { id: 'A', label: 'A', description: 'The agricultural age' },
  { id: 'B', label: 'B', description: 'The industrial age' },
  { id: 'C', label: 'C', description: 'The neo-industrial age' },
];

export const PARAGRAPHS: Paragraph[] = [
  {
    id: 'A',
    text: "The forces that operate to bring about change in organisations can be thought of as winds which are many and varied - from small summer breezes that merely disturb a few papers, to mighty howling gales which cause devastation to structures and operations, causing consequent reorientation of purpose and rebuilding. Sometimes, however, the winds die down to give periods of relative calm, periods of relative organisational stability. Such a period was the agricultural age, which Goodman (1995) maintains prevailed in Europe and western societies as a whole until the early 1700s. During this period, wealth was created in the context of an agriculturally based society influenced mainly by local markets (both customer and labour) and factors outside people's control, such as the weather. During this time, people could fairly well predict the cycle of activities required to maintain life, even if that life might be at little more than subsistence level."
  },
  {
    id: 'B',
    text: "To maintain the meteorological metaphor, stronger winds of change blew to bring in the Industrial Revolution and the industrial age. Again, according to Goodman, this lasted for a long time, until around 1945. It was characterised by a series of inventions and innovations that reduced the number of people needed to work the land and, in turn, provided the means of production of hitherto rarely obtainable goods; for organisations, supplying these in ever increasing numbers became the aim. To a large extent, demand and supply were predictable, enabling companies to structure their organisations along what Burns and Stalker (1966) described as mechanistic lines, that is as systems of strict hierarchical structures and firm means of control."
  },
  {
    id: 'C',
    text: "This situation prevailed for some time, with demand still coming mainly from the domestic market and organisations striving to fill the 'supply gap'. Thus the most disturbing environmental influence on organisations of this time was the demand for products, which outstripped supply. The saying attributed to Henry Ford that 'You can have any colour of car so long as it is black', gives a flavour of the supply-led state of the market. Apart from any technical difficulties of producing different colours of car, Ford did not have to worry about customers' colour preferences: he could sell all that he made. Organisations of this period can be regarded as 'task-oriented', with effort being put into increasing production through more effective and efficient production processes."
  },
  {
    id: 'D',
    text: "As time passed, this favourable period for organisations began to decline. In the neo-industrial age, people became more discriminating in the goods and services they wished to buy and, as technological advancements brought about increased productivity, supply overtook demand. Companies began, increasingly, to look abroad for additional markets."
  },
  {
    id: 'E',
    text: "At the same time, organisations faced more intensive competition from abroad for their own products and services. In the West, this development was accompanied by a shift in focus from manufacturing to service, whether this merely added value to manufactured products, or whether it was service in its own right. In the neo-industrial age of western countries, the emphasis moved towards adding value to goods and services - what Goodman calls the value-oriented time, as contrasted with the task-oriented and products/services-oriented times of the past."
  },
  {
    id: 'F',
    text: "Today, in the post-industrial age, most people agree that organisational life is becoming ever more uncertain, as the pace of change quickens and the future becomes less predictable. Writing in 1999, Nadler and Tushman, two US academics, said: 'Poised on the eve of the next century, we are witnessing a profound transformation in the very nature of our business organisations. Historic forces have converged to fundamentally reshape the scope, strategies, and structures of large enterprises.' At a less general level of analysis, Graeme Leach, Chief Economist at the British Institute of Directors, claimed in the Guardian newspaper (2000) that: 'By 2020, the nine-to-five rat race will be extinct and present levels of self-employment, commuting and technology use, as well as age and sex gaps, will have changed beyond recognition.' According to the article, Leach anticipates that: 'In 20 years time, 20-25 percent of the workforce will be temporary workers and many more will be flexible, ... 25 percent of people will no longer work in a traditional office and ... 50 percent will work from home in some form.' Continuing to use the 'winds of change' metaphor, the expectation is of damaging gale-force winds bringing the need for rebuilding that takes the opportunity to incorporate new ideas and ways of doing things."
  },
  {
    id: 'G',
    text: "Whether all this will happen is arguable. Forecasting the future is always fraught with difficulties. For instance, Mannermann (1998) sees future studies as part art and part science and notes: 'The future is full of surprises, uncertainty, trends and trend breaks, irrationality and rationality, and it is changing and escaping from our hands as time goes by. It is also the result of actions made by innumerable more or less powerful forces.' What seems certain is that the organisational world is changing at a fast rate - even if the direction of change is not always predictable. Consequently, it is crucial that organisational managers and decision makers are aware of, and able to analyse the factors which trigger organisational change."
  }
];

export const QUESTIONS: Question[] = [
  // Section 1: Questions 14-18 (Matching Information: Paragraphs A-G)
  {
    id: 14,
    section: 'matching',
    prompt: "some specific predictions about businesses and working practices",
    correctAnswers: ["F"],
    displayAnswer: "F",
    paragraphRef: 'F',
    quote: "Leach anticipates that: 'In 20 years time, 20-25 percent of the workforce will be temporary workers and many more will be flexible, ... 25 percent of people will no longer work in a traditional office and ... 50 percent will work from home in some form.'",
    explanation: "PARAGRAPH F gives predictions of the numbers of temporary and home-based workers likely to be seen in 20 years time.",
    tips: [
      {
        id: 'study-14',
        type: 'study',
        title: 'Study Tip: Question 14',
        content: "The question has 'predictions', so find a paragraph which contains more than one of these (look at Paragraph F: 'Leach anticipates that: In 20 years time, 20-25 percent... 25 percent... 50 percent...')."
      }
    ]
  },
  {
    id: 15,
    section: 'matching',
    prompt: "reference to the way company employees were usually managed",
    correctAnswers: ["B"],
    displayAnswer: "B",
    paragraphRef: 'B',
    quote: "... enabling companies to structure their organisations along what Burns and Stalker (1966) described as mechanistic lines, that is as systems of strict hierarchical structures and firm means of control.",
    explanation: "PARAGRAPH B explains that in the industrial age companies structured their organisations along mechanistic lines, i.e. 'systems of strict hierarchical structures and firm means of control.'",
    tips: []
  },
  {
    id: 16,
    section: 'matching',
    prompt: "a warning for business leaders",
    correctAnswers: ["G"],
    displayAnswer: "G",
    paragraphRef: 'G',
    quote: "Consequently, it is crucial that organisational managers and decision makers are aware of, and able to analyse the factors which trigger organisational change.",
    explanation: "PARAGRAPH G warns business leaders that the pace of change is fast and that they need to be aware of and to analyse factors which cause change in their world.",
    tips: [
      {
        id: 'study-16',
        type: 'study',
        title: 'Study Tip: Question 16',
        content: "The word 'warning' does not appear in the reading passage, so you have to look for the same idea expressed in an indirect way. Find references to future developments which might have negative consequences or necessitate crucial analysis."
      }
    ]
  },
  {
    id: 17,
    section: 'matching',
    prompt: "the description of an era notable for the relative absence of change",
    correctAnswers: ["A"],
    displayAnswer: "A",
    paragraphRef: 'A',
    quote: "Sometimes, however, the winds die down to give periods of relative calm, periods of relative organisational stability. Such a period was the agricultural age...",
    explanation: "PARAGRAPH A describes the agricultural age which was one of 'relative organisational stability.'",
    tips: []
  },
  {
    id: 18,
    section: 'matching',
    prompt: "a reason why customer satisfaction was not a high priority",
    correctAnswers: ["C"],
    displayAnswer: "C",
    paragraphRef: 'C',
    quote: "Apart from any technical difficulties of producing different colours of car, Ford did not have to worry about customers' colour preferences: he could sell all that he made.",
    explanation: "PARAGRAPH C shows that in the later part of the industrial age, demand for products was high, outstripping supply: this meant that customers were pleased to obtain goods and could not be too demanding about the particular features of the product.",
    tips: [
      {
        id: 'study-18',
        type: 'study',
        title: 'Study Tip: Question 18',
        content: "To find the answer, look for a phrase with a meaning similar to 'not a high priority', or any references to customers' needs (e.g. Ford did not have to worry about customers' colour preferences)."
      }
    ]
  },

  // Section 2: Questions 19-23 (Matching Characteristics to Periods: A, B or C)
  {
    id: 19,
    section: 'period-matching',
    prompt: "a surplus of goods.",
    correctAnswers: ["C", "c", "the neo-industrial age", "neo-industrial age", "D", "d"],
    displayAnswer: "C (The neo-industrial age)",
    paragraphRef: 'D',
    quote: "In the neo-industrial age, people became more discriminating in the goods and services they wished to buy and, as technological advancements brought about increased productivity, supply overtook demand.",
    explanation: "PARAGRAPH D explains that: 'In the neo-industrial age ... as technological advancements brought about increased productivity, supply overtook demand.' Therefore, characteristic 19 matches Period C: The neo-industrial age.",
    tips: [
      {
        id: 'study-19',
        type: 'study',
        title: 'Study Tip: Question 19',
        content: "In which age were companies producing more things than they could easily sell? (Supply overtook demand)."
      }
    ]
  },
  {
    id: 20,
    section: 'period-matching',
    prompt: "an emphasis on production quantity.",
    correctAnswers: ["B", "b", "the industrial age", "industrial age", "C", "c"],
    displayAnswer: "B (The industrial age)",
    paragraphRef: 'C',
    quote: "Organisations of this period can be regarded as 'task-oriented', with effort being put into increasing production through more effective and efficient production processes.",
    explanation: "PARAGRAPH C notes that in the industrial age, organisations were: ''task-oriented', with effort being put into increasing production through more effective and efficient production processes.' Therefore, characteristic 20 matches Period B: The industrial age.",
    tips: []
  },
  {
    id: 21,
    section: 'period-matching',
    prompt: "the proximity of consumers to workplaces.",
    correctAnswers: ["A", "a", "the agricultural age", "agricultural age"],
    displayAnswer: "A (The agricultural age)",
    paragraphRef: 'A',
    quote: "During this period, wealth was created in the context of an agriculturally based society influenced mainly by local markets (both customer and labour)...",
    explanation: "PARAGRAPH A describes the agricultural period as being one where both customer and labour markets were local (meaning close proximity of consumers to workplaces). Therefore, characteristic 21 matches Period A: The agricultural age.",
    tips: [
      {
        id: 'study-21',
        type: 'study',
        title: 'Study Tip: Question 21',
        content: "Look for a word which has a meaning connected to 'proximity' (such as 'local markets')."
      }
    ]
  },
  {
    id: 22,
    section: 'period-matching',
    prompt: "a focus on the quality of goods.",
    correctAnswers: ["C", "c", "the neo-industrial age", "neo-industrial age", "D", "d"],
    displayAnswer: "C (The neo-industrial age)",
    paragraphRef: 'D',
    quote: "In the neo-industrial age, people became more discriminating in the goods and services they wished to buy and... the emphasis moved towards adding value to goods and services - what Goodman calls the value-oriented time...",
    explanation: "PARAGRAPH D and E say that in the neo-industrial age, people became more discriminating in the goods and services they wished to buy, and the emphasis moved towards adding value to goods and services. Therefore, characteristic 22 matches Period C: The neo-industrial age.",
    tips: []
  },
  {
    id: 23,
    section: 'period-matching',
    prompt: "new products and new ways of working.",
    correctAnswers: ["B", "b", "the industrial age", "industrial age"],
    displayAnswer: "B (The industrial age)",
    paragraphRef: 'B',
    quote: "It was characterised by a series of inventions and innovations that reduced the number of people needed to work the land and, in turn, provided the means of production of hitherto rarely obtainable goods...",
    explanation: "PARAGRAPH B says that the industrial age 'was characterised by a series of inventions and innovations that reduced the number of people needed to work the land and, in turn, provided the means of production of hitherto rarely obtainable goods'. Therefore, characteristic 23 matches Period B: The industrial age.",
    tips: [
      {
        id: 'study-23',
        type: 'study',
        title: 'Study Tip: Question 23',
        content: "Look for words with a meaning similar to 'new products' (such as 'inventions and innovations')."
      }
    ]
  },

  // Section 3: Questions 24-26 (Summary Completion: Businesses in the 21st century)
  {
    id: 24,
    section: 'summary',
    prompt: "One leading economist suggested that by 2020, up to a quarter of employees would be [ 24 ], and half of all employees would be based in the [ 25 ].",
    preText: "One leading economist suggested that by 2020, up to a quarter of employees would be",
    postText: ", and",
    correctAnswers: ["temporary"],
    displayAnswer: "temporary",
    paragraphRef: 'F',
    quote: "In 20 years time, 20-25 percent of the workforce will be temporary workers...",
    explanation: "PARAGRAPH F: Leach anticipates that: 'In 20 years time, 20-25 percent of the workforce will be temporary workers'. Writing in 2000, 20 years time is 2020, and 'up to a quarter' is 20-25 percent. The exact single word from the text is 'temporary'.",
    tips: [
      {
        id: 'study-24',
        type: 'study',
        title: 'Study Tip: Question 24',
        content: "There is more than one reference to 2020, and one of them is indirect (you have to identify the year from what is written: 2000 in Guardian + 'in 20 years time' = 2020)."
      }
    ]
  },
  {
    id: 25,
    section: 'summary',
    prompt: "and half of all employees would be based in the [ 25 ].",
    preText: "and half of all employees would be based in the",
    postText: ". Although predictions can be wrong,",
    correctAnswers: ["home"],
    displayAnswer: "home",
    paragraphRef: 'F',
    quote: "... 50 percent will work from home in some form.",
    explanation: "PARAGRAPH F states that '... 50 percent will work from home in some form.' 'Half of all employees' matches '50 percent', and with 'based in the', the required noun from the passage is 'home'.",
    tips: [
      {
        id: 'study-25',
        type: 'study',
        title: 'Study Tip: Question 25',
        content: "There is an article (the) in front of the space, so the answer is a noun."
      }
    ]
  },
  {
    id: 26,
    section: 'summary',
    prompt: "business leaders need to understand the [ 26 ] that will be influential.",
    preText: "and business leaders need to understand the",
    postText: "that will be influential.",
    correctAnswers: ["factors"],
    displayAnswer: "factors",
    paragraphRef: 'G',
    quote: "... it is crucial that organisational managers and decision makers are aware of, and able to analyse the factors which trigger organisational change.",
    explanation: "PARAGRAPH G concludes that 'it is crucial that organisational managers and decision makers are aware of, and able to analyse the factors which trigger organisational change.' 'Business leaders' corresponds to 'organisational managers and decision makers', and 'understand' corresponds to 'be aware of and analyse', so the single word is 'factors'.",
    tips: [
      {
        id: 'study-26',
        type: 'study',
        title: 'Study Tip: Question 26',
        content: "To find where the answer is, look for a phrase which has a similar meaning to 'business leaders' (such as 'organisational managers and decision makers')."
      }
    ]
  }
];

export function calculateBandScore(score: number): string {
  if (score === 13) return "9.0";
  if (score === 12) return "8.5";
  if (score === 11) return "8.0";
  if (score === 10) return "7.5";
  if (score === 9) return "7.0";
  if (score === 8) return "6.5";
  if (score === 7) return "6.0";
  if (score === 6) return "5.5";
  if (score === 5) return "5.0";
  if (score === 4) return "4.5";
  if (score >= 2) return "4.0";
  return "3.5";
}
