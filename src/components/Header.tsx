import { useState, useEffect } from 'react'
import { cn, scrollToElement } from '../lib/utils'

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleNavClick = (id: string) => {
    scrollToElement(id)
    setIsMobileMenuOpen(false)
  }

  return (
    <header
      className={cn(
        'fixed top-0 left-0 right-0 z-[1000] bg-white/95 backdrop-blur-sm transition-all duration-300',
        isScrolled ? 'shadow-sm border-b border-border' : 'border-b border-transparent'
      )}
    >
      <div className="container">
        <div className="flex items-center justify-between py-sm">
          {/* Logo */}
          <div className="flex items-center gap-3 font-bold text-lg text-text-dark">
            <span className="text-2xl">🌍</span>
            <span className="hidden sm:inline">Immigrant Support Network</span>
            <span className="sm:hidden">ISN</span>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            className="flex md:hidden flex-col gap-[5px] p-2 bg-transparent border-none cursor-pointer"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            <span className="w-[25px] h-[3px] bg-text-dark rounded transition-all duration-300" />
            <span className="w-[25px] h-[3px] bg-text-dark rounded transition-all duration-300" />
            <span className="w-[25px] h-[3px] bg-text-dark rounded transition-all duration-300" />
          </button>

          {/* Navigation */}
          <nav
            className={cn(
              'md:flex md:items-center md:gap-md',
              'fixed md:relative top-[73px] md:top-0 left-0 right-0',
              'bg-white md:bg-transparent flex-col md:flex-row',
              'p-md md:p-0 shadow-lg md:shadow-none',
              'transition-all duration-300',
              isMobileMenuOpen
                ? 'translate-y-0 opacity-100 visible'
                : '-translate-y-full md:translate-y-0 opacity-0 md:opacity-100 invisible md:visible'
            )}
          >
            <button
              onClick={() => handleNavClick('services')}
              className="w-full md:w-auto text-left md:text-center bg-transparent border-none text-text-medium text-base cursor-pointer transition-colors duration-200 font-medium hover:text-primary py-2 md:py-0"
            >
              Services
            </button>
            <a
              href="https://www.immigrationai.co.za"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full md:w-auto text-left md:text-center bg-transparent border-none text-text-medium text-base cursor-pointer transition-colors duration-200 font-medium hover:text-primary py-2 md:py-0 flex items-center gap-1"
            >
              <span>🤖 AI Tools</span>
            </a>
            <button
              onClick={() => handleNavClick('how-it-works')}
              className="w-full md:w-auto text-left md:text-center bg-transparent border-none text-text-medium text-base cursor-pointer transition-colors duration-200 font-medium hover:text-primary py-2 md:py-0"
            >
              How It Works
            </button>
            <button
              onClick={() => handleNavClick('booking')}
              className="w-full md:w-auto text-left md:text-center bg-transparent border-none text-text-medium text-base cursor-pointer transition-colors duration-200 font-medium hover:text-primary py-2 md:py-0"
            >
              Contact
            </button>
            <button
              onClick={() => handleNavClick('booking')}
              className="btn btn-primary btn-small w-full md:w-auto mt-2 md:mt-0"
            >
              Book Consultation
            </button>
          </nav>
        </div>
      </div>
    </header>
  )
}
