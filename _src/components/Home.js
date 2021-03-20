import React from 'react'
import { NavLink } from 'react-router-dom'

/* -------------------------------------------------------------------------- */

const NavItem = ({ item: { id, headline, extra } }) => (
  <li>
    <strong>{headline}</strong>
    <div>
      <NavLink to={`/practice/${id}/`}>실습</NavLink>
      <NavLink to={`/solution/${id}/`}>완성</NavLink>
      {extra?.map(({ key, text, link }) => (
        <NavLink key={key} to={`/solution/${id}/${link}`}>
          {text}
        </NavLink>
      ))}
    </div>
  </li>
)

const Home = ({ tag = 'ul', navList }) => {
  const List = tag
  return (
    <nav>
      <List>
        {navList.map((item) => (
          <NavItem key={item.id} item={item} />
        ))}
      </List>
    </nav>
  )
}

Home.propTypes = {
  navList(props, propName, componentName) {
    const value = props[propName]
    if (!Array.isArray(value)) {
      throw new Error(
        `${componentName} 컴포넌트에 전달된 속성 ${propName}의 데이터 유형은 배열이어야 합니다.`
      )
    }
  },
}

export { Home as default }
