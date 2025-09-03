import { CONFIG } from './config'

export const WORDS = [
  '한국',
  '안녕',
  '축연',
  '청춘',
  '날짜',
  '만남',
  // 12 Jamo
  '음악감상',
  '건강검진',
  '바나나우유',
  '울긋불긋',
  '알록달록',
  '알콩달콩',
  '싱숭생숭',
  '색동저고리',
  '옥신각신',
]

if (CONFIG.normalization) {
  WORDS.forEach((val, i) => (WORDS[i] = val.normalize(CONFIG.normalization)))
}

function shuffle(array: any[]) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    ;[array[i], array[j]] = [array[j], array[i]]
  }
}

if (CONFIG.shuffle) {
  shuffle(WORDS)
}
