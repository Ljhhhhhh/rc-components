import { useState, useEffect } from 'react'

const useMousePos = () => {
  const [points, setPoints] = useState({x: 0, y: 0})

  useEffect(() => {
    const updateMouse = (e: MouseEvent) => {
      // console.log('inner');
      setPoints({x: e.clientX, y: e.clientY})
    }
    document.addEventListener('mousemove', updateMouse)
    
    return () => {
      document.removeEventListener('mousemove', updateMouse)
    }
  }, [])

  return points
}

export default useMousePos