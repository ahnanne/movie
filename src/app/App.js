import React, { useState, useEffect } from 'react';
import { ReactComponent as Atom } from '../assets/Atom.svg';
import styles from './App.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import Card from 'components/Card/Card';
import Header from 'Container/Header/Header';
import SearchForm from 'Container/SearchForm/SearchForm';

const initUrl = 'https://yts.mx/api/v2/list_movies.json?limit=50&query_term=';

/* -------------------------------------------------------------------------- */

function App() {
  // API로부터 비동기 요청으로 응답 받을 데이터를 보관할 상태
  const [movieData, setMovieData] = useState([]);
  // 에러 상태
  const [hasError, setHasError] = useState(null);
  // 로딩 상태 관리
  const [isLoading, setIsLoading] = useState(true);
  // input value 관리
  const [keyword, setKeyword] = useState('');
  // get 요청 전송을 위한 검색어 관리
  const [movieUrl, setMovieUrl] = useState(initUrl);

  const handleKeyword = e => {
    setKeyword(e.target.value);
  };

  const handleSearch = e => {
    if (e.target.matches('button') || e.key === 'Enter') {
      if (keyword === '') return;
      setMovieUrl(initUrl + keyword);
      setKeyword('');
      setIsLoading(true);
    } else return;
  };

  // side effect
  // 명령형, 구독(취소), 비동기(네트워크) 데이터 패치, ...
  useEffect(
    () => {
      // 비동기 요청
      fetch(movieUrl)
      .then(response => response.json()) // resolved
      .then(res => {
        setMovieData(res.data.movies);
        setIsLoading(false);
      }) // 필요한 데이터만 디스트럭처링 할당으로 뽑아내어 처리하기
      .catch(
        // rejected
        (error) => {
          setHasError(error);
        }
      );
    }, [movieUrl]
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
    <div className={styles['App']}>
      <Header link="https://ahnanne.github.io/movie/">MY영화관</Header>
      <SearchForm>
        <SearchForm.Input
          id="searchMovie"
          value={keyword}
          onChange={handleKeyword}
          onKeyUp={handleSearch}
        />
        <SearchForm.Button
          onClick={handleSearch}
        />
      </SearchForm>

      <div className="movieArea" lang="ko">
        <ul className={styles['container']}>
          <Card data={movieData} />
        </ul>
      </div>
    </div>
  )
}

export default App
