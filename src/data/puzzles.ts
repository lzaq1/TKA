import { PuzzlePack } from '../types';

/**
 * PUZZLE_PACKS Configuration
 * 
 * To add a new pack:
 * 1. Add a new object to the PUZZLE_PACKS array.
 * 2. Set id, title, description, icon ('functions', 'category', 'psychology'), color, and imageUrl.
 * 3. Add questions to the 'questions' array.
 * 
 * To add a new question:
 * 1. Add a new object to the 'questions' array.
 * 2. Set type: 'multiple-choice' or 'visual-pattern'.
 * 3. For 'visual-pattern', provide an 'imageUrl'.
 * 4. Set 'questionText', 'options' (array of strings), 'correctAnswerIndex' (0-based), and 'explanation'.
 */
export const PUZZLE_PACKS: PuzzlePack[] = [
  {
    id: 'enchanted-logic',
    title: 'Enchanted Logic',
    description: 'Riddles from the Elder Woods',
    icon: 'functions',
    color: 'indigo',
    imageUrl: 'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&q=80&w=800',
    challengesCount: 12,
    progress: 0,
    questions: [
      {
        id: 'q1',
        type: 'multiple-choice',
        questionText: 'In the Kingdom of Truth, a dragon guards two doors. One leads to gold, one to doom. If the dragon always lies, and says "The left door is gold", which door should you pick?',
        options: ['The Left Door', 'The Right Door', 'Neither', 'Ask the dragon again'],
        correctAnswerIndex: 1,
        explanation: 'Since the dragon always lies, the statement "The left door is gold" is false. Therefore, the right door must be the one with gold.'
      },
      {
        id: 'q2',
        type: 'multiple-choice',
        questionText: 'A wizard has 3 magic potions. Potion A is twice as strong as B. Potion C is 5 drops more than B. If the total strength is 25, how strong is Potion B?',
        options: ['5', '10', '15', '20'],
        correctAnswerIndex: 0,
        explanation: 'Let B = x. Then A = 2x and C = x + 5. 2x + x + (x + 5) = 25 => 4x = 20 => x = 5.'
      }
    ]
  },
  {
    id: 'mystic-patterns',
    title: 'Mystic Patterns',
    description: 'Ancient Runes & Sequences',
    icon: 'category',
    color: 'amber',
    imageUrl: 'https://images.unsplash.com/photo-1502134249126-9f3755a50d78?auto=format&fit=crop&q=80&w=800',
    challengesCount: 8,
    progress: 0,
    questions: [
      {
        id: 'v1',
        type: 'visual-pattern',
        questionText: 'The ancient rune follows a specific rotation. What is the final position of the star?',
        imageUrl: 'https://picsum.photos/seed/magic-rune/400/400',
        options: ['North-East', 'South-West', 'North-West', 'South-East'],
        correctAnswerIndex: 2,
        explanation: 'The star moves counter-clockwise by 90 degrees in each step of the sequence.'
      }
    ]
  },
  {
    id: 'fairy-riddles',
    title: 'Fairy Riddles',
    description: 'Whispers from the Pixies',
    icon: 'psychology',
    color: 'rose',
    imageUrl: 'https://images.unsplash.com/photo-1534447677768-be436bb09401?auto=format&fit=crop&q=80&w=800',
    challengesCount: 15,
    isLocked: true,
    requiredLevel: 5,
    questions: []
  }
];

