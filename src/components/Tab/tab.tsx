import React, { useState, createContext } from 'react'
import classnames from 'classnames'
import {TabItemProps} from './tabItem'

type mode = 'line' | 'card'
type selectCallback = (selectIndex: number) => void

export interface TabProps {
  defaultIndex?: number
  className?: string
  mode?: mode
  style?: React.CSSProperties
  onSelect: selectCallback
}

interface ITabContext {
  index: number;
  mode: mode;
  onSelect?: selectCallback;
}

export const TabContext = createContext<ITabContext>({ index: 0, mode: 'card' })

const Tab: React.FC<TabProps> = (props) => {
  const {
    defaultIndex,
    className,
    mode,
    style,
    onSelect,
    children
  } = props
  const [ currentActive, setActive] = useState(defaultIndex)
  const cnames = classnames('tab', className)
  const handleClick = (index: number) => {
    setActive(index)
    if (onSelect) {
      onSelect(index)
    }
  }
  const passedContext: ITabContext = {
    index: currentActive ? currentActive: 0,
    onSelect: handleClick,
    mode: mode || 'card'
  }

  const renderChild = () => {
    return React.Children.map(children, (child, index) => {
      const childElement = child as React.FunctionComponentElement<TabItemProps>
      const { displayName } = childElement.type || {}
      if (displayName === 'TabItem') {
        return React.cloneElement(childElement, {
          index
        })
      } else {
        console.error('Warning: Tab has a child which is not a TabItem component')
      }
    })
  }

  const renderContent = () => {
    return React.Children.map(children, (child, index) => {
      const childElement = child as React.FunctionComponentElement<TabItemProps>
      if (index === passedContext.index) {
        return (
          <div className="tab-content">
            {childElement.props.children}
          </div>
        )
      }
    })
  }

  return (
    <div className={cnames} style={style}>
      <TabContext.Provider value={passedContext} >
        <div className="tab-items">
          {renderChild()}
        </div>
        {renderContent()}
      </TabContext.Provider>
    </div>
  )
}

Tab.defaultProps = {
  defaultIndex: 0,
  mode: 'card',
}

export default Tab