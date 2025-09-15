import React from 'react'

interface LogoProps {
  size?: number
  className?: string
}

const Logo: React.FC<LogoProps> = ({ size = 32, className = '' }) => {
  return (
    <div 
      className={`inline-flex items-center justify-center bg-gradient-to-br from-gray-700 to-gray-800 border border-gray-600/50 rounded-lg ${className}`}
      style={{ width: size, height: size }}
    >
      <div className="grid grid-cols-2 gap-px text-white font-bold" style={{ fontSize: size * 0.2 }}>
        <div className="flex items-center justify-center">D</div>
        <div className="flex items-center justify-center">R</div>
        <div className="flex items-center justify-center">E</div>
        <div className="flex items-center justify-center">W</div>
      </div>
    </div>
  )
}

export default Logo
