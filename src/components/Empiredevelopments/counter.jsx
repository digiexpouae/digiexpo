'use client'

import { useEffect, useState, useRef } from 'react'

export default function CounterPage({ number }) {
  const [count, setCount] = useState(0)
  const [visible, setVisible] = useState(false)
  const ref = useRef(null)
  const maxCount = number

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setVisible(entry.isIntersecting),
      { threshold: 0.5 } // trigger when half visible
    )
    if (ref.current) observer.observe(ref.current)
    return () => {
      if (ref.current) observer.unobserve(ref.current)
    }
  }, [])

  useEffect(() => {
    if (!visible) return

    const interval = setInterval(() => {
      setCount((c) => {
        if (c < maxCount) return c + 1
        clearInterval(interval)
        return c
      })
    }, 50)

    return () => clearInterval(interval)
  }, [visible, maxCount])

  return (
    <main
      ref={ref}
      className="flex items-center justify-center min-h-[100px]"
    >
      <h1 className="tw-text-5xl tw-font-bold tw-text-black" >
        {count}%
      </h1>
    </main>
  )
}
