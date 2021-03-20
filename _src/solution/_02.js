import { useState, useEffect } from 'react'
const { localStorage: storage } = window;

const EMAIL_STATE_IN_STORAGE = 'email';

export default function GreetingEmail({ initialEmail = '' }) {
  // 컴포넌트 상태를 localStorage에서 가져옵니다.
  const emailStateInStorage = storage.getItem(EMAIL_STATE_IN_STORAGE);
  console.log(emailStateInStorage);
  // localStorage에 해당 값이 없을 경우, initialEmail 값으로 초기화 합니다.

  // useState에 함수를 전달함으로써 "지연된 초기화"
  const [email, setEmail] = useState(() => {
    let returnValue = null;

    if (emailStateInStorage) {
      returnValue = emailStateInStorage;
    } else {
      returnValue = initialEmail;
    }

    return returnValue; // "지연된 초기화"
  });

  // React.useEffect() 훅을 사용합니다.
  // 사이드 이펙트 콜백 함수의 localStorage에 `email`을 설정합니다.
  useEffect(() => { // useEffect의 콜백 함수는 마운트된 이후에 실행됨.
    storage.setItem(EMAIL_STATE_IN_STORAGE, email);
  });

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
