import { useState, useEffect } from 'react';
import { ReactComponent as Atom } from '../assets/Atom.svg';
import styles from './App.module.scss';

const { REACT_APP_NEWS_KEY: API_KEY } = process.env;

/* -------------------------------------------------------------------------- */

function App() {
  // API로부터 비동기 요청으로 응답 받을 데이터를 보관할 상태
  const [news, setNews] = useState([]);
  // 에러 상태
  const [hasError, setHasError] = useState(null);
  // 로딩 상태 관리
  const [isLoading, setIsLoading] = useState(true);

  // side effect
  // 명령형, 구독(취소), 비동기(네트워크) 데이터 패치, ...
  useEffect(
    () => {
      // 비동기 요청
      fetch(
        `https://newsapi.org/v2/top-headlines?country=kr&category=technology&apiKey=${API_KEY}`
      )
      .then(response => response.json()) // resolved
      .then(res => {
        console.log(res);
        setNews(res.articles);
        setIsLoading(false);
      }) // 필요한 데이터만 디스트럭처링 할당으로 뽑아내어 처리하기
      .catch(
        // rejected
        (error) => {
          setHasError(error);
        }
      );
    }, [] // 마운트(=최초 렌더링) 때만 실행 -> 딱 1회만 실행!
  );
  // useEffect는 함수를 반환하는데, 이를 clean up 함수라고 함.
  // "뒷처리 함수" 🙂 -> 메모리 낭비를 방지하기 위한!
  // ex) remove event listener

  if (isLoading) {
    return <Atom />
  }

  if (hasError) { // 에러가 발생한 상황에서 렌더링
    return <div role="alert">{hasError.message}</div>
  }

  // 정상적으로 요청이 처리되어 응답이 온 경우 렌더링
  return (
    <div className="App">
      <h1 className={styles['h1']}>Economic News</h1>
      <div className="newsArea" lang="ko">
        <ul className={styles['container']}>
          { // to render list, use map()
            // each child in list MUST have their own unique key
            news.map(item => {
              return (
                <li key={item.url} className={styles['card']}>
                  <figure>
                    <img src={item.urlToImage} alt="" />
                    <figcaption>
                      <span><a href={item.url}>{item.title}</a></span>
                    </figcaption>
                  </figure>
                </li>
              )
            })
          }
        </ul>
      </div>
    </div>
  )
}

export default App
