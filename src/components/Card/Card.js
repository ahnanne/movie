import React from 'react';
import styles from './Card.module.scss';

/* -------------------------------------------------------------------------- */

export default function Card({ data }) {
  if (data) {
    return (
      data.map(item => {
        return (
          <li key={item.url} className={styles['card']}>
            <figure>
              <img src={item.medium_cover_image} alt="" />
              <figcaption>
                <span><a href={item.url} target="_blank" rel="noopener noreferrer">
                    {item.title}
                  </a></span>
              </figcaption>
            </figure>
          </li>
        );
      })
    );
  } else {
    return (
      <figure className={styles['noData']}>
        <img src="assets/nodata.png" alt="검색 결과 없음" />
        <figcaption>검색 결과가 없습니다..ㅠ</figcaption>
      </figure>
    )
  }
}