import { useState, useEffect } from 'react'

export default function useFetchPractice(id) {
  const [element, setElement] = useState(null)
  const [error, setError] = useState(null)

  useEffect(() => {
    const fetchComp = async () => {
      try {
        const Component = await import(`practice/${id}`)
        setElement(Component)
      } catch (error) {
        setError(error)
      }
    }
    fetchComp()
  }, [id])

  return [element, error]
}
