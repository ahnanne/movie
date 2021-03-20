import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
  NavLink,
} from 'react-router-dom'
import Home from 'components/Home'
import Practice from 'practice'
import Solution from 'solution'
import HooksFlow from 'hooks-flow'

/* -------------------------------------------------------------------------- */

const navList = [
  {
    id: '01',
    headline: '컴포넌트 상태',
    extra: [
      { key: 'extra-1.1', text: '추가 1', link: 'extra1' },
      { key: 'extra-1.2', text: '추가 2', link: 'extra2' },
    ],
  },
  {
    id: '02',
    headline: '사이드 이펙트',
    extra: [
      { key: 'extra-2.1', text: '추가 1', link: 'extra1' },
      { key: 'extra-2.2', text: '추가 2', link: 'extra2' },
      { key: 'extra-2.3', text: '추가 3', link: 'extra3' },
      { key: 'extra-2.4', text: '추가 4', link: 'extra4' },
    ],
  },
  {
    id: '03',
    headline: '상태 끌어올리기',
    extra: [{ key: 'extra-3.1', text: '추가', link: 'extra' }],
  },
  {
    id: '04',
    headline: 'DOM 접근/조작',
  },
]

/* -------------------------------------------------------------------------- */

const App = () => (
  <Router>
    <img src="/assets/react-hooks.webp" height={200} alt="" />
    <h1>
      <NavLink to="/" style={{ fontSize: 'inherit' }}>
        React 훅(Hooks) <span className="a11yHidden">홈 페이지로 이동</span>
      </NavLink>
    </h1>
    <Switch>
      <Route
        path="/"
        exact
        render={() => <Home tag="ol" navList={navList} />}
      />
      <Route path="/practice/:id/:extra?" component={Practice} />
      <Route path="/solution/:id/:extra?" component={Solution} />
      <Route path="/hooks-flow" component={HooksFlow} />
      <Redirect to="/" />
    </Switch>
  </Router>
)

export { App as default }
