import { Cell } from './Cell'
import * as Hangul from 'hangul-js';


type Props = {
  guess: string
  wordLength: number
}

export const CurrentRow = ({ guess, wordLength }: Props) => {
  const splitGuess = Hangul.disassemble(guess)
  const emptyCells = Array.from(Array(wordLength - splitGuess.length))

  return (
    <div className="flex justify-center mb-1">
      {splitGuess.map((letter, i) => (
        <Cell key={i} value={letter} />
      ))}
      {emptyCells.map((_, i) => (
        <Cell key={i} />
      ))}
    </div>
  )
}
