import React from 'react'
import classnames from 'classnames'

interface BaseAlertProps {
  type?: 'success' | 'info' | 'warning' | 'error';
  /** Whether Alert can be closed */
  closable?: boolean;
  /** Content of Alert */
  message: React.ReactNode;
  /** Additional content of Alert */
  description?: React.ReactNode;
  /** Callback when close Alert */
  onClose?: any;
}

const Alert: React.FC<BaseAlertProps> = (props) => {
  const {
    type,
    closable,
    message,
    description,
    onClose,
    ...restProps
  } = props

  const classes = classnames('alert', {
    [`alert-${type}`]: type,
  })

  const [closed, setClosed] = React.useState(false);

  return closed ? null : (
    <div className={classes} {...restProps}>
      <div className="alert-box">
        <span className="alert-message">{message}</span>
        {
          description ? (<span className="alert-content">{description}</span>) : null
        }
      </div>
      <span className="alert-close_btn" onClick={(e) => {setClosed(true); onClose(e)}}>X</span>
    </div>
  )
}

Alert.defaultProps = {
  type: 'info',
  closable: true
}

export default Alert