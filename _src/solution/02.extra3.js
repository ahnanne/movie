import { useState, useEffect } from 'react'

const { localStorage: storage } = window;
const EMAIL_STATE_IN_STORAGE = 'email';

/* ----------------------- Custom Hook ----------------------------------- */
/**
 * 로컬스토리지를 관리하는 커스텀 훅을 만들어보자.
 * (custom hook은 내부에서 built-in hook을 사용함.)
 * const [state, setState] = useLocalStorage(key, initialValue);
 */

function useLocalStorage(key, initialValue) {
  const[state, setState] = useState(() => {
    /**
     * 로컬스토리지의 key값에 이미 저장된 값이 있나요?
     * 있으면 그걸 상태로 관리할게요.
     * 없으면 두 번째 인자로 전달 받는 초기값으로 관리할게요.
     */
    const stateInStorage = storage.getItem(key);

    if (stateInStorage) {
      return stateInStorage; // lazy initialization
    } else {
      return initialValue;
    }
  });
  
  // side effect
  useEffect(() => {
    storage.setItem(key, state);
  }, [key, state]);

  return [state, setState];
}


export default function GreetingEmail({ initialEmail = 'strawberry9@euid.dev' }) {
  const [email, setEmail] = useLocalStorage(EMAIL_STATE_IN_STORAGE, initialEmail);
  // 우리가 만든 커스텀 훅 useLocalStorage는 배열을 반환하므로,
  // 배열의 요소인 email, setEmail을 변수로서 사용하려면
  // 배열 디스트럭처링 할당으로 받아와야 한다.

  const handleChange = (e) => setEmail(e.target.value)
  const handleFocus = (e) => e.target.select()

  console.log(email);

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
