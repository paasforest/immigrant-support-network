export default function TrustBanner() {
  const stats = [
    {
      number: '10,000+',
      label: 'Clients Served',
      icon: '👥',
    },
    {
      number: '95%',
      label: 'Success Rate',
      icon: '⭐',
    },
    {
      number: '150+',
      label: 'Countries Covered',
      icon: '🌍',
    },
    {
      number: '24/7',
      label: 'Support Available',
      icon: '🕐',
    },
  ]

  return (
    <section className="py-lg bg-gradient-to-r from-primary to-blue-600">
      <div className="container">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-md">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-3xl mb-xs">{stat.icon}</div>
              <div className="text-3xl md:text-4xl font-bold text-white mb-xs">
                {stat.number}
              </div>
              <div className="text-sm md:text-base text-white/90 font-medium">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

