import { getGuessStatuses } from '../../lib/statuses'
import { Cell } from './Cell'
import * as Hangul from 'hangul-js'

type Props = {
  guess: string
  solution: string
}

export const CompletedRow = ({ guess, solution }: Props) => {
  const statuses = getGuessStatuses(guess, solution)
  const splitGuess = Hangul.disassemble(guess)

  return (
    <div className="flex justify-center mb-1">
      {splitGuess.map((letter, i) => (
        <Cell key={i} value={letter} status={statuses[i]} />
      ))}
    </div>
  )
}
