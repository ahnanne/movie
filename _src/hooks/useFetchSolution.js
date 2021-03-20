import { useState, useEffect } from 'react'

export default function useFetchSolution(id, extra) {
  const [element, setElement] = useState(null)
  const [error, setError] = useState(null)

  useEffect(() => {
    const fetchComp = () => {
      import(`solution/${id}${extra ? `.${extra}` : ''}`)
        .then((Component) => setElement(Component))
        .catch((error) => setError(error))
    }

    fetchComp()
  }, [id, extra])

  return [element, error]
}
