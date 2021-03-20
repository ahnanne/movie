import { useState } from 'react'

/* -------------------------------------------------------------------------- */

const Username = ({ name, onChangeName }) => (
  <div className="container">
    <label htmlFor="username">사용자 이름</label>
    <input type="text" id="username" onChange={onChangeName} value={name} />
  </div>
)

/* -------------------------------------------------------------------------- */

// 상태 끌어올리기 실습
const PreferredFramework = () => {
  const [framework, setFramework] = useState('')

  return (
    <div className="container">
      <label htmlFor="preferredFramework">프레임워크 이름</label>
      <input
        type="text"
        id="preferredFramework"
        onChange={(e) => setFramework(e.target.value)}
        value={framework}
      />
    </div>
  )
}

/* -------------------------------------------------------------------------- */

// 아래 주석을 지우고 실습을 진행합니다.
// const Display = ({ name, framework }) => {
//   return (
//     <p>
//       <strong>{`${name}님!`}</strong> 좋아하는 프레임워크는
//       <strong>{framework}</strong>군요?!
//     </p>
//   )
// }

// 아래 컴포넌트를 제거한 후, 위에 주석 처리된 Display 컴포넌트로 실습을 진행합니다.
const Display = ({ name }) => {
  return (
    <p>
      <strong>{`${name}님!`}</strong> 어떤 것을 좋아하세요?
    </p>
  )
}

/* -------------------------------------------------------------------------- */

export default function WhichFrameworkDoULike() {
  const [username, setUsername] = useState('야무9')

  return (
    <>
      <Username
        name={username}
        onChangeName={(e) => setUsername(e.target.value)}
      />
      <PreferredFramework />
      <Display name={username} />
    </>
  )
}
