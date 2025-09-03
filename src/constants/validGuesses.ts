import { CONFIG } from './config'

export const VALIDGUESSES = [
  '한국',
  '안녕',
  '감사',
  '우리',
  '나라',
  '만세',
  // 12 Jamo
  '안녕하세요',
  '반갑습니다',
]

if (CONFIG.normalization) {
  VALIDGUESSES.forEach(
    (val, i) => (VALIDGUESSES[i] = val.normalize(CONFIG.normalization))
  )
}
