import React, { useState, useEffect } from 'react'

const MouseTracker: React.FC = () => {
  const [points, setPoints] = useState({x: 0, y: 0})

  useEffect(() => {
    const updateMouse = (e: MouseEvent) => {
      // console.log('inner');
      setPoints({x: e.clientX, y: e.clientY})
    }
    document.addEventListener('click', updateMouse)
    
    return () => {
      document.removeEventListener('click', updateMouse)
    }
  }, [])

  return (
  <p>X: {points.x}, Y: {points.y}</p>
  )
}

export default MouseTracker