import { useEffect, useRef, useState } from 'react'

interface UseIntersectionObserverOptions {
  threshold?: number
  rootMargin?: string
  triggerOnce?: boolean
}

export const useIntersectionObserver = (options: UseIntersectionObserverOptions = {}) => {
  const { threshold = 0.1, rootMargin = '0px', triggerOnce = true } = options
  const [isVisible, setIsVisible] = useState(false)
  const elementRef = useRef<HTMLElement>(null)
  const hasInitializedRef = useRef(false)

  useEffect(() => {
    const element = elementRef.current
    if (!element || hasInitializedRef.current) return

    hasInitializedRef.current = true
    let observer: IntersectionObserver | null = null
    let hasTriggered = false

    const handleIntersection = ([entry]: IntersectionObserverEntry[]) => {
      if (entry.isIntersecting && !hasTriggered) {
        hasTriggered = true
        // Small delay to ensure initial hidden state is rendered first
        setTimeout(() => {
          setIsVisible(true)
        }, 100)
        if (triggerOnce) {
          observer?.unobserve(element)
        }
      } else if (!triggerOnce && !entry.isIntersecting) {
        setIsVisible(false)
        hasTriggered = false
      }
    }

    // Small delay to ensure initial hidden state is rendered before checking intersection
    const timeoutId = setTimeout(() => {
      observer = new IntersectionObserver(handleIntersection, {
        threshold,
        rootMargin,
      })

      observer.observe(element)
    }, 100)

    return () => {
      clearTimeout(timeoutId)
      if (observer && element) {
        observer.unobserve(element)
      }
      hasInitializedRef.current = false
    }
  }, [threshold, rootMargin, triggerOnce])

  return { elementRef, isVisible }
}

