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

  useEffect(() => { // update될 때마다 실행됨.
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
