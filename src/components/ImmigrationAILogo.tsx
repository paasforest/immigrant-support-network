interface ImmigrationAILogoProps {
  size?: 'small' | 'medium' | 'large'
  showBadge?: boolean
  showSubtitle?: boolean
  icon?: 'globe' | 'lightbulb' | 'passport' | 'airplane'
}

export default function ImmigrationAILogo({
  size = 'large',
  showBadge = true,
  showSubtitle = true,
  icon = 'globe',
}: ImmigrationAILogoProps) {
  const sizes = {
    small: {
      logo: 'w-8 h-8',
      padding: 'p-2',
      text: 'text-xl',
      subtitle: 'text-xs',
      icon: 'w-4 h-4',
    },
    medium: {
      logo: 'w-10 h-10',
      padding: 'p-3',
      text: 'text-2xl',
      subtitle: 'text-sm',
      icon: 'w-5 h-5',
    },
    large: {
      logo: 'w-12 h-12',
      padding: 'p-4',
      text: 'text-3xl md:text-4xl',
      subtitle: 'text-sm',
      icon: 'w-6 h-6',
    },
  }

  const currentSize = sizes[size]

  // Icon SVG Paths
  const icons = {
    globe: (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
      />
    ),
    lightbulb: (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
      />
    ),
    passport: (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
      />
    ),
    airplane: (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"
      />
    ),
  }

  return (
    <div className="flex justify-center items-center gap-3">
      <div className="relative">
        {/* Logo Background Circle with Glow */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-400 to-purple-600 rounded-2xl blur-xl opacity-50 animate-pulse"></div>

        {/* Logo Icon */}
        <div
          className={`relative bg-gradient-to-br from-blue-500 to-purple-600 ${currentSize.padding} rounded-2xl shadow-2xl`}
        >
          <svg
            className={`${currentSize.icon} md:${currentSize.logo} text-white`}
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            {icons[icon]}
          </svg>
        </div>
      </div>

      {/* Logo Text */}
      <div className="text-left">
        <h3 className={`${currentSize.text} font-bold text-white flex items-center gap-2`}>
          Immigration AI
          {showBadge && (
            <span className="inline-block px-2 py-0.5 bg-green-500 text-white text-xs font-bold rounded">
              NEW
            </span>
          )}
        </h3>
        {showSubtitle && (
          <p className={`${currentSize.subtitle} text-blue-200`}>
            AI-Powered Document Generation
          </p>
        )}
      </div>
    </div>
  )
}
