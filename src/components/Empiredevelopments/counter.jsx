'use client'

import { useEffect, useState, useRef } from 'react'

export default function CounterPage({ number }) {
  const [count, setCount] = useState(0)
  const ref = useRef(null)
  const maxCount = number
  const startedRef = useRef(false) // to track if counting has started

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !startedRef.current) {
          startedRef.current = true
          const interval = setInterval(() => {
            setCount((c) => {
              if (c < maxCount) return c + 1
              clearInterval(interval)
              return c
            })
          }, 50)
        }
      },
      { threshold: 0.5 }
    )

    if (ref.current) observer.observe(ref.current)

    return () => {
      if (ref.current) observer.unobserve(ref.current)
    }
  }, [maxCount])

  return (
    <main ref={ref} className="flex items-center justify-center min-h-[100px]">
      <h1 className="tw-text-5xl tw-font-bold tw-text-black">{count}%</h1>
    </main>
  )
}