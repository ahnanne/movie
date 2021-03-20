import { useFetchPractice } from 'hooks'

/* -------------------------------------------------------------------------- */

const Practice = ({
  match: {
    params: { id },
  },
}) => {
  const [PracticeComp, error] = useFetchPractice(id)
  const Practice = PracticeComp?.default

  if (error) {
    return <div>실습 파일 로딩 오류 발생: {error.message}</div>
  }

  return Practice ? <Practice /> : <div>실습 파일 로딩 중...</div>
}

export default Practice
