// class component → function component + React Hooks
import React from 'react'

/* -------------------------------------------------------------------------- */

// class component → funtion component 예시
// Compound Components pattern
// 참고: https://codesandbox.io/s/keompaundeu-keomponeonteu-paeteon-counter-yeje-texul?file=/src/Counter.function.js

export default class Counter extends React.Component {
  // Class(Static) Members 컴포넌트를 등록
  // <Counter.Display></Counter.Display>
  static Display = function CounterDisplay({ children }) {
    return <output>{children}</output>
  }

  // <Counter.Control></Counter.Control>
  static Control = ({ label, step = 1, onUpdate, children }) => {
    // 업데이트 함수
    const updateCount = () => {
      // children을 사용해 조건 처리
      if (children.includes('-')) {
        step = step * -1
      }

      onUpdate(step)
    }

    return (
      <button type="button" onClick={updateCount} aria-label={label}>
        {children}
      </button>
    )
  }

  // 상태
  state = {
    count: 0,
  }

  // 상태 업데이트 함수(메서드)
  setCount = (newCount) => {
    this.setState({
      count: this.state.count + newCount,
    })
  }

  render() {
    // 자식(자손) 컴포넌트에 props 전달 (props 유형 중 함수는 나중에 콜백(callback))
    return (
      <div className="counterApp">
        <Counter.Control
          label="decreament count"
          onUpdate={this.setCount}
          // step={1}
        >
          -
        </Counter.Control>
        <Counter.Display>{this.state.count}</Counter.Display>
        <Counter.Control
          label="increament count"
          onUpdate={this.setCount}
          step={2}
        >
          +
        </Counter.Control>
      </div>
    )
  }
}

// Anonymous → 사용자가 직접 컴포넌트 이름을 부여
Counter.Control.displayName = 'CounterControl'
