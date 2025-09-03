import { getGuessStatuses } from './statuses'
import { CONFIG } from '../constants/config'
import * as Hangul from 'hangul-js'

export const shareStatus = (
  guesses: string[],
  lost: boolean,
  solution: string,
  solutionIndex: number
) => {
  navigator.clipboard.writeText(
    CONFIG.language +
      solutionIndex +
      ' ' +
      `${lost ? 'X' : guesses.length}` +
      '/' +
      CONFIG.tries.toString() +
      '\n\n' +
      generateEmojiGrid(guesses, solution) +
      '\n\n' +
      window.location.href.replace(`${window.location.protocol}//`, '')
  )
}

export const generateEmojiGrid = (guesses: string[], solution: string) => {
  return guesses
    .map((guess) => {
      const status = getGuessStatuses(guess, solution)
      const splitGuess = Hangul.disassemble(guess)
      return splitGuess
        .map((_, i) => {
          switch (status[i]) {
            case 'correct':
              return '🟩'
            case 'present':
              return '🟨'
            default:
              return '⬜'
          }
        })
        .join('')
    })
    .join('\n')
}
