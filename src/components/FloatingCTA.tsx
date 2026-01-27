import { useState, useEffect } from 'react'
import { scrollToElement } from '../lib/utils'

export default function FloatingCTA() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      // Show after scrolling 300px
      setIsVisible(window.scrollY > 300)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleClick = () => {
    scrollToElement('booking')
  }

  if (!isVisible) return null

  return (
    <div className="fixed bottom-6 left-6 z-40 animate-bounce">
      <div className="bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-xl shadow-2xl p-md max-w-xs">
        <div className="flex items-center gap-sm mb-xs">
          <span className="text-2xl">⚡</span>
          <div>
            <p className="font-bold text-sm">Limited Spots Available</p>
            <p className="text-xs text-blue-100">Only 12 assessments this week</p>
          </div>
        </div>
        <button
          onClick={handleClick}
          className="w-full bg-white text-blue-700 font-bold py-2 px-4 rounded-lg hover:bg-blue-50 transition-colors text-sm"
        >
          Get Assessment - R499 →
        </button>
      </div>
    </div>
  )
}
