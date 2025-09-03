import { WORDS } from '../constants/wordlist'
import { VALIDGUESSES } from '../constants/validGuesses'
import { CONFIG } from '../constants/config'
import * as Hangul from 'hangul-js'

export const isWordInWordList = (word: string) => {
  return WORDS.includes(word) || VALIDGUESSES.includes(word)
}

export const isWinningWord = (word: string, solution: string) => {
  return solution === word
}

export const getWordOfDay = (wordLength: number) => {
  // January 1, 2022 Game Epoch
  const epochMs = new Date(CONFIG.startDate).valueOf()
  const now = Date.now()
  const msInDay = 86400000
  const index = Math.floor((now - epochMs) / msInDay)
  const nextday = (index + 1) * msInDay + epochMs
  const validWords = WORDS.filter(
    (word) => Hangul.disassemble(word).length === wordLength
  )

  return {
    solution: validWords[index % validWords.length],
    solutionIndex: index,
    tomorrow: nextday,
  }
}
