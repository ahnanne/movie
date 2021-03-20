import { useState, useEffect } from 'react'

// local storage를 가져온다.
const { localStorage: storage } = window;
// local storage에 저장될 key 이름을 상수로 설정
const EMAIL_STATE_IN_STORAGE = 'email';

export default function GreetingEmail({ initialEmail = 'strawberry9@euid.dev' }) {
  // 제일 처음, 로컬스토리지로부터 혹시 저장되어 있는 이메일 값이 있는지 보기
  const emailFromStorage = storage.getItem(EMAIL_STATE_IN_STORAGE);

  // "지연된 초기화"
  const [email, setEmail] = useState(() => {
    let initState = null;

    if (emailFromStorage !== null) initState = initialEmail;
    else initState = emailFromStorage;

    return initState; // "지연된 초기화"
  });

  // 상태마다 useEffect를 따로 관리할 수 있음.
  // cf.) 상태를 통합적으로 관리하고 싶다면 useReducer
  useEffect(() => { // update될 때마다 실행됨.
    storage.setItem(EMAIL_STATE_IN_STORAGE, email);
  }, [email]);
  /**
   * useEffect의 콜백 함수의 호출을 제어하기 위해 종속성(의존성) 배열(dependencyList [], deps)을 사용한다.
   * deps는 useEffect의 두 번째 인자로 전달해준다.
   * 만약 빈 배열을 전달할 경우, 의존하는 요소가 하나도 없다는 것이므로 componentDidMount처럼 동작한다.
   * (-> 초기 렌더링 직후에만 실행. 즉 1회만 실행.)
   * 
   * deps에 뭐가 들어가야 하는지는 ESLint가 알려주기는 함.
   */

  const handleChange = (e) => setEmail(e.target.value)
  const handleFocus = (e) => e.target.select()

  return (
    <div>
      <form>
        <label htmlFor="email">이메일</label>
        <input
          id="email"
          type="email"
          onChange={handleChange}
          value={email}
          onFocus={handleFocus}
        />
      </form>
      <p>{email ? `입력된 이메일: ${email}` : '이메일을 입력해주세요.'}</p>
    </div>
  )
}
