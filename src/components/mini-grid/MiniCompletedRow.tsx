import { getGuessStatuses } from '../../lib/statuses'
import { MiniCell } from './MiniCell'
import * as Hangul from 'hangul-js'

type Props = {
  guess: string
  solution: string
}

export const MiniCompletedRow = ({ guess, solution }: Props) => {
  const statuses = getGuessStatuses(guess, solution)
  const splitGuess = Hangul.disassemble(guess)

  return (
    <div className="flex justify-center mb-1">
      {splitGuess.map((letter, i) => (
        <MiniCell key={i} status={statuses[i]} letter={letter} />
      ))}
    </div>
  )
}
