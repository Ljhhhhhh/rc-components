import React, { useContext } from 'react'
import classnames from 'classnames'
import { TabContext } from './tab'

export interface TabItemProps {
  label: string | React.ReactElement;
  index?: number;
  disabled?: boolean;
  className?: string;
  style?: React.CSSProperties;
  children: string | React.ReactElement;
}

const TabItem: React.FC<TabItemProps> = (props) => {
  const {
    index,
    label,
    disabled,
    className,
    style
  } = props
  const context = useContext(TabContext)
  const cnames = classnames('tab-item', className, {
    'tab-card': context.mode === 'card',
    'tab-line': context.mode !== 'card',
    'is-disabled': disabled,
    'is-active': context.index === index
  })
  const handleClick = () => {
    if (context.onSelect && !disabled && typeof index === 'number') {
      context.onSelect(index)
    }
  }

  const titleCnames = classnames('tab-item_title')

  return (
    <div className={cnames} style={style}>
      <div className={titleCnames} onClick={handleClick}>
        { typeof label === 'string' ? label : label}
      </div>
    </div>
  )
}

TabItem.defaultProps = {
  disabled: false
}

TabItem.displayName = 'TabItem'

export default TabItem