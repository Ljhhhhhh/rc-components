import React from 'react'
import { CSSTransition } from 'react-transition-group'
import { CSSTransitionProps } from 'react-transition-group/CSSTransition'

type AnimationName = 'zoom-in-top' | 'zoom-in-left' | 'zoom-in-bottom' | 'zoom-in-right'

type TransitionProps =  CSSTransitionProps & {
  timeout: number
  animation?: AnimationName;
  wrapper? : boolean;
  classNames?: string;
}

const Transition: React.FC<TransitionProps> = (props) => {
  const {
    children,
    classNames,
    animation,
    wrapper,
    timeout,
    ...restProps
  } = props
  return (
    <CSSTransition
      timeout={timeout}
      classNames = { classNames ? classNames : animation}
      {...restProps}
    >
      {wrapper ? <div>{children}</div> : children}
    </CSSTransition>
  )
}
Transition.defaultProps = {
  timeout: 300,
  appear: true,
}

export default Transition