import React, { useState, useEffect, useRef, useContext } from 'react'
import {ThemeContext} from '../App'

const LikeButton: React.FC = () => {
  const [obj, setObj ] = useState({ like: 0, on: true})
  const likeRef = useRef(0)
  const theme = useContext(ThemeContext)

  // console.log(theme)

  const style = {
    background: theme.background,
    color: theme.color
  }

  useEffect(() => {
    //  console.log('useEffect')
     
  })

  return (
  <>
  <button style={style} onClick={() => {setObj({ like: obj.like + 1, on: obj.on }); ; likeRef.current++ } } >
    {obj.like}👍
  </button>
  <button onClick={() => setObj({ like: obj.like, on: !obj.on })} >
    {obj.on ? 'ON' : 'OFF'}👍
  </button>
  </>
  )
}

export default LikeButton