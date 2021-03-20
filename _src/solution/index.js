import { useFetchSolution } from 'hooks'

/* -------------------------------------------------------------------------- */

const Solution = ({
  match: {
    params: { id, extra },
  },
}) => {
  const [SolutionComp, error] = useFetchSolution(id, extra)
  const Solution = SolutionComp?.default

  if (error) {
    return <div>완성 파일 로딩 오류 발생: {error.message}</div>
  }

  return Solution ? <Solution /> : <div>완성 파일 로딩 중...</div>
}

export default Solution
