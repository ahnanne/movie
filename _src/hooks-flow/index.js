import { useState, useEffect } from 'react'

/* -------------------------------------------------------------------------- */

const COLORS = {
  red: '#a42929',
  orange: '#ce7120',
  yellowgreen: '#a3ce20',
  green: '#29a46b',
  blue: '#2929a4',
  purple: '#441d82',
  pink: '#821d55',
  cyan: '#298da4',
  gray: '#a9a9a9',
  darkgray: '#323232',
  black: '#0b0b0c',
  white: '#f6f6f7',
}

const getColor = (name) => COLORS[name] ?? '#101010'

/* -------------------------------------------------------------------------- */

const Counter = () => {
  console.log(
    '%c— — — — — — — — — — — — — — — — — — — — — — — — — — — — — ',
    `color: ${getColor('black')}`
  )

  console.log(
    '%c   자식 컴포넌트 → 렌더링: 시작',
    `color: ${getColor('purple')}`
  )

  // 컴폰너트 상태
  const [count, setCount] = useState(
    // 지연된 초기화 (lazy initializer)
    () => {
      console.log(
        '%c   자식 컴포넌트 → 지연된 초기화: useState(() => 0)',
        `color: ${getColor('pink')}`
      )
      return 0
    }
  )

  // 사이드 이펙트, 의존성 관리 ✘
  useEffect(() => {
    console.log(
      '%c   자식 컴포넌트 → 이펙트: useEffect(() => {})',
      `color: ${getColor('darkgray')}`
    )
    // 클린업
    return () => {
      console.log(
        '%c   자식 컴포넌트 → 이펙트 클린업: useEffect(() => {})',
        `color: ${getColor('gray')}`
      )
    }
  })

  // 사이드 이펙트, 의존성 관리 []
  useEffect(() => {
    console.log(
      '%c   자식 컴포넌트 → 이펙트: useEffect(() => {}, [])',
      `color: ${getColor('darkgray')}`
    )
    // 클린업
    return () => {
      console.log(
        '%c   자식 컴포넌트 → 이펙트 클린업: useEffect(() => {}, [])',
        `color: ${getColor('gray')}`
      )
    }
  }, [])

  // 사이드 이펙트, 의존성 관리 [count]
  useEffect(() => {
    console.log(
      '%c   자식 컴포넌트 → 이펙트: useEffect(() => {}, [count])',
      `color: ${getColor('darkgray')}`
    )
    // 클린업
    return () => {
      console.log(
        '%c   자식 컴포넌트 → 이펙트 클린업: useEffect(() => {}, [count])',
        `color: ${getColor('gray')}`
      )
    }
  }, [count])

  // 렌더링 종료
  const renderElement = (
    <button
      type="button"
      onClick={() => setCount((prevCount) => prevCount + 1)}
      style={{
        background: '#000',
        color: '#fff',
        padding: '10px 15px',
        borderRadius: 4,
        border: 0,
        fontWeight: 'bold',
      }}
    >
      {count}
    </button>
  )

  console.log('%c   자식 컴포넌트 → 렌더링: 끝', `color: ${getColor('purple')}`)
  console.log(
    '%c——————————————————————————————————————————————————————————',
    `color: ${getColor('black')}`
  )

  return renderElement
}

/* -------------------------------------------------------------------------- */

export default function HooksFlow() {
  console.log(
    '%c— — — — — — — — — — — — — — — — — — — — — — — — — — — — — ',
    `color: ${getColor('red')}`
  )
  // 렌더링 시작
  console.log('%c부모 컴포넌트 → 렌더링: 시작', `color: ${getColor('blue')}`)

  // 컴폰너트 상태
  const [showChild, setShowChild] = useState(() => {
    // 지연된 초기화 (lazy initializer)
    console.log(
      '%c부모 컴포넌트 → 지연된 초기화: useState(() => false)',
      `color: ${getColor('cyan')}`
    )
    return false
  })

  // 사이드 이펙트, 의존성 관리 ✘
  useEffect(() => {
    console.log(
      '%c부모 컴포넌트 → 이펙트: useEffect(() => {})',
      `color: ${getColor('orange')}`
    )
    // 클린업
    return () => {
      console.log(
        '%c부모 컴포넌트 → 이펙트 클린업: useEffect(() => {})',
        `color: ${getColor('yellowgreen')}`
      )
    }
  })

  // 사이드 이펙트, 의존성 관리 []
  useEffect(() => {
    console.log(
      '%c부모 컴포넌트 → 이펙트: useEffect(() => {}, [])',
      `color: ${getColor('orange')}`
    )
    // 클린업
    return () => {
      console.log(
        '%c부모 컴포넌트 → 이펙트 클린업: useEffect(() => {}, [])',
        `color: ${getColor('yellowgreen')}`
      )
    }
  }, [])

  // 사이드 이펙트, 의존성 관리 [showChild]
  useEffect(() => {
    console.log(
      '%c부모 컴포넌트 → 이펙트: useEffect(() => {}, [showChild])',
      `color: ${getColor('orange')}`
    )
    // 클린업
    return () => {
      console.log(
        '%c부모 컴포넌트 → 이펙트 클린업: useEffect(() => {}, [showChild])',
        `color: ${getColor('yellowgreen')}`
      )
    }
  }, [showChild])

  // 렌더링 종료
  const renderElement = (
    <>
      <label>
        <input
          type="checkbox"
          checked={showChild}
          onChange={(e) => setShowChild(e.target.checked)}
        />{' '}
        하위(자식) 컴포넌트 <b>{showChild ? '감춤' : '표시'}</b>
      </label>
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          height: 50,
          width: 50,
          margin: 20,
          border: '6px solid #1a1a1a',
          borderRadius: 6,
          padding: 5,
        }}
      >
        {showChild ? <Counter /> : null}
      </div>
    </>
  )

  console.log('%c부모 컴포넌트 → 렌더링: 끝', `color: ${getColor('blue')}`)
  console.log(
    '%c——————————————————————————————————————————————————————————',
    `color: ${getColor('red')}`
  )

  return renderElement
}
