export default function Counter({ children, className, ...restProps }) {
  return (
    <div className={`counterApp ${className}`.trim()} {...restProps}>
      {children}
    </div>
  )
}

/* -------------------------------------------------------------------------- */

Counter.Display = function CounterDisplay({ children }) {
  return <output>{children}</output>
}

/* -------------------------------------------------------------------------- */

Counter.Control = function CounterControl({
  label,
  step = 1,
  onUpdate,
  children,
  ...restProps
}) {
  // 업데이트 함수
  const updateCount = () => {
    // children을 사용해 조건 처리
    if (children.includes('-')) {
      step = step * -1
    }
    onUpdate(step)
  }

  return (
    <button
      type="button"
      onClick={updateCount}
      aria-label={label}
      {...restProps}
    >
      {children}
    </button>
  )
}
