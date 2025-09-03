import { CompletedRow } from './CompletedRow'
import { CurrentRow } from './CurrentRow'
import { EmptyRow } from './EmptyRow'
import { CONFIG } from '../../constants/config'

type Props = {
  guesses: string[]
  currentGuess: string
  wordLength: number
  solution: string
}

export const Grid = ({ guesses, currentGuess, wordLength, solution }: Props) => {
  const empties =
    guesses.length < CONFIG.tries - 1
      ? Array.from(Array(CONFIG.tries - 1 - guesses.length))
      : []

  return (
    <div className="pb-6">
      {guesses.map((guess, i) => (
        <CompletedRow key={i} guess={guess} solution={solution} />
      ))}
      {guesses.length < CONFIG.tries && (
        <CurrentRow guess={currentGuess} wordLength={wordLength} />
      )}
      {empties.map((_, i) => (
        <EmptyRow key={i} wordLength={wordLength} />
      ))}
    </div>
  )
}
