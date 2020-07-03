import React from 'react'

interface IHelloProps {
  msg?: string
}

const Hello: React.FC<IHelloProps> = (props) => {
  return <h2>{props.msg}</h2>
}

Hello.defaultProps = {
  msg: 'Hello World'
}

export default Hello
