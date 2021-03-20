/* eslint-disable no-unused-vars */
import { useEffect, useRef, useState } from 'react'
import { ErrorBoundary } from 'react-error-boundary'

const {
  fetch,
  JSON: { stringify: serialize, parse: deserialize },
} = window
const POKEMON_API = 'https://graphql-pokemon2.vercel.app'

/* -------------------------------------------------------------------------- */
/* 유틸리티 함수                                                                 */
/* -------------------------------------------------------------------------- */

// 0 접두사 추가 함수
const readingZeroString = (value, max = 2) => String(value).padStart(max, '0')

// 날짜 포멧 함수
const formatDate = (date) => {
  return `${date.getHours()}:${readingZeroString(
    date.getMinutes()
  )}:${readingZeroString(date.getSeconds())}:${readingZeroString(
    date.getMilliseconds(),
    3
  )}`
}

// 프로미스 거절 함수
const rejectMessage = (message) => Promise.reject(new Error(message))

/* -------------------------------------------------------------------------- */
/* 내보낼 모듈 함수                                                               */
/* -------------------------------------------------------------------------- */

export function fetchPokemon(
  name,
  delay = 1000 /* 지연 처리 시뮬레이션 설정 */
) {
  // 포켓몬 쿼리
  const pokemonQuery = `
    query PokemonInfo($name: String) {
      pokemon(name: $name) {
        id
        number
        name
        image
        attacks {
          special {
            name
            type
            damage
          }
        }
      }
    }
  `

  return fetch(POKEMON_API, {
    method: 'POST',
    headers: {
      'content-type': 'application/json;charset=utf-8',
      delay,
    },
    body: serialize({
      query: pokemonQuery,
      variables: { name: name.toLowerCase() },
    }),
  }).then(async (response) => {
    const { data } = await response.json()
    if (response.ok) {
      const pokemon = data?.pokemon
      if (pokemon) {
        pokemon.fetchedAt = formatDate(new Date())
        return pokemon
      } else {
        return rejectMessage(`"${name}" 이름의 포켓몬은 없습니다. ㅠㅜ`)
      }
    } else {
      // GraphQL 오류 처리
      const errorMessage = data?.errors?.map((e) => e.message).join('\n')
      return rejectMessage(errorMessage)
    }
  })
}

/* -------------------------------------------------------------------------- */

export function PokemonInfoFallback({ name }) {
  const initialName = useRef(name).current

  const fallbackPokemonData = {
    name: initialName,
    number: 'xxx',
    image: '/assets/loading.svg',
    attacks: {
      special: [
        { name: 'Attack 1 Loading...', type: 'Type', damage: 'xxx' },
        { name: 'Attack 2 Loading...', type: 'Type', damage: 'xxx' },
      ],
    },
    fetchedAt: '로딩 중......',
  }

  return <PokemonDataView pokemon={fallbackPokemonData} />
}

/* -------------------------------------------------------------------------- */

export const PokemonDataView = ({ pokemon }) => (
  <div>
    <div className="pokemon-info__img-wrapper">
      <img src={pokemon.image} alt={pokemon.name} />
    </div>
    <section>
      <h2>
        {pokemon.name}
        <sup>{pokemon.number}</sup>
      </h2>
    </section>
    <section>
      <ul>
        {pokemon.attacks.special.map((attack) => (
          <li key={attack.name}>
            <label>{attack.name}</label>:{' '}
            <span>
              {attack.damage} <small>({attack.type})</small>
            </span>
          </li>
        ))}
      </ul>
    </section>
    <small className="pokemon-info__fetch-time">{pokemon.fetchedAt}</small>
  </div>
)
/* -------------------------------------------------------------------------- */

export function PokemonForm({
  pokemonName: externalPokemonName,
  initialPokemonName = externalPokemonName ?? '',
  onSubmit,
}) {
  const [pokemonName, setPokemonName] = useState(initialPokemonName)

  useEffect(() => {
    if (typeof externalPokemonName === 'string') {
      setPokemonName(externalPokemonName)
    }
  }, [externalPokemonName /* pokemonName */])

  const handleChange = (e) => setPokemonName(e.target.value)

  const handleSubmit = (e) => {
    e.preventDefault()
    onSubmit(pokemonName)
  }

  const handleSelect = (newPokemonName) => {
    setPokemonName(newPokemonName)
    onSubmit(newPokemonName)
  }

  return (
    <form onSubmit={handleSubmit} className="pokemon-form">
      <label htmlFor="pokemonName-input">포켓몬 이름</label>
      <small>
        포켓몬 이름 예시){' '}
        <button
          type="button"
          className="invisible-button"
          onClick={() => handleSelect('pikachu')}
        >
          "pikachu"
        </button>
        {', '}
        <button
          className="invisible-button"
          type="button"
          onClick={() => handleSelect('charizard')}
        >
          "charizard"
        </button>
        {', 또는 '}
        <button
          className="invisible-button"
          type="button"
          onClick={() => handleSelect('mew')}
        >
          "mew"
        </button>
      </small>
      <div>
        <input
          className="pokemonName-input"
          id="pokemonName-input"
          name="pokemonName"
          placeholder="예) mew"
          value={pokemonName}
          onChange={handleChange}
        />
        <button type="submit" disabled={!pokemonName.length}>
          전송
        </button>
      </div>
    </form>
  )
}

/* -------------------------------------------------------------------------- */

const ErrorFallback = ({ error, resetErrorBoundary }) => (
  <div role="alert">
    [오류 발생!] <pre style={{ whiteSpace: 'normal' }}>{error.message}</pre>
    <button onClick={resetErrorBoundary}>재 시도</button>
  </div>
)

export const PokemonErrorBoundary = (props) => (
  <ErrorBoundary FallbackComponent={ErrorFallback} {...props} />
)
