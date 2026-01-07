import React from 'react'

const BackgroundPattern: React.FC = () => {
  return (
    <div 
      className="absolute inset-0 pointer-events-none animate-drift"
      style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='200' height='200' viewBox='0 0 200 200' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Ctext x='100' y='100' text-anchor='middle' dominant-baseline='middle' fill='%23374151' fill-opacity='0.12' font-family='system-ui, -apple-system, sans-serif' font-weight='700' font-size='26' transform='rotate(-12 100 100)'%3EDREW DEZ%3C/text%3E%3C/svg%3E")`,
        backgroundSize: '160px 80px',
        backgroundRepeat: 'repeat',
        backgroundPosition: '0 0'
      }}
    />
  )
}

export default BackgroundPattern

