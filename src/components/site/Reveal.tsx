import { useEffect, useRef, type ElementType, type ReactNode } from "react"

const Reveal = ({ children, delay = 0, className = "", as: Tag = "div" as ElementType }: {
  children: ReactNode,
  delay?: number,
  className?: string,
  as?: ElementType
}) => {
  const ref = useRef<HTMLElement | null>(null)
  useEffect(() => {
    const el = ref.current
    if (!el) return
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach(e => {
          if (e.isIntersecting) {
            setTimeout(() => el.classList.add("reveal-in"), delay)
            io.unobserve(el)
          }
        })
      },
      { threshold: 0.1 }
    )
    io.observe(el)
    return () => io.disconnect()
  }, [delay])
  return (
    <Tag ref={ref as never} className={`reveal ${className}`}>
      {children}
    </Tag>
  )
}

export default Reveal
