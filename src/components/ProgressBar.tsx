import { useState, useEffect } from 'react'

export default function ProgressBar() {
  const [spotsRemaining, setSpotsRemaining] = useState(12)
  const totalSpots = 12

  useEffect(() => {
    // Simulate spots being taken (for demo purposes)
    // In production, this would connect to your backend
    const interval = setInterval(() => {
      setSpotsRemaining((prev) => {
        if (prev > 3) {
          return prev - Math.floor(Math.random() * 2)
        }
        return prev
      })
    }, 30000) // Update every 30 seconds

    return () => clearInterval(interval)
  }, [])

  const percentageUsed = ((totalSpots - spotsRemaining) / totalSpots) * 100
  const percentageRemaining = (spotsRemaining / totalSpots) * 100

  return (
    <div className="bg-white border-2 border-blue-500 rounded-xl p-lg shadow-lg">
      <div className="flex items-center justify-between mb-sm">
        <h3 className="text-lg font-bold text-text-dark">This Week's Assessment Spots</h3>
        <span className="text-2xl font-bold text-primary">{spotsRemaining}</span>
      </div>
      
      <div className="relative h-6 bg-gray-200 rounded-full overflow-hidden mb-sm">
        {/* Used spots */}
        <div
          className="absolute left-0 top-0 h-full bg-gradient-to-r from-red-500 to-orange-500 transition-all duration-500"
          style={{ width: `${percentageUsed}%` }}
        />
        {/* Remaining spots */}
        <div
          className="absolute right-0 top-0 h-full bg-gradient-to-r from-green-500 to-blue-500 transition-all duration-500"
          style={{ width: `${percentageRemaining}%` }}
        />
      </div>

      <div className="flex items-center justify-between text-sm">
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 bg-red-500 rounded-full"></div>
          <span className="text-text-medium">{totalSpots - spotsRemaining} Taken</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 bg-green-500 rounded-full"></div>
          <span className="text-text-medium font-bold text-green-700">
            {spotsRemaining} Available
          </span>
        </div>
      </div>

      {spotsRemaining <= 5 && (
        <div className="mt-sm p-sm bg-red-100 border border-red-400 rounded-lg">
          <p className="text-sm font-bold text-red-800 text-center">
            ⚠️ Only {spotsRemaining} spots left! Book now to secure your assessment.
          </p>
        </div>
      )}
    </div>
  )
}
