import React from 'react'
// import logo from './logo.svg';
import Hello from './components/Hello'
import LikeButton from './components/LikeButton'
import MouseTracker from './components/MouseTracker'
import useMousePos from './hooks/useMousePos'
import useUrlLoader from './hooks/useUrlLoader'
import Button from './components/Button'
import Alert from './components/Alert'
import Menu from './components/Menu/menu'
import MenuItem from './components/Menu/menuItem'
import SubMenu from './components/Menu/subMenu'
import Tab from './components/Tab/tab'
import TabItem from './components/Tab/tabItem'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import Icon from './components/Icon'

interface IShowResult {
  message: string
  status: string
}

interface IThemeProps {
  [key: string]: { color: string; background: string }
}

const themes: IThemeProps = {
  light: {
    color: '#000',
    background: '#eee',
  },
  dark: {
    color: '#fff',
    background: '#333',
  },
}

// const label: React.FC = () => {
//   return (
    
//   )
// }

export const ThemeContext = React.createContext(themes.light)

const App: React.FC = () => {
  const pos = useMousePos()
  const [data, loading] = useUrlLoader(
    'https://dog.ceo/api/breeds/image/random'
  )
  const dogResult = data as IShowResult

  return (
    <div className="App">
      <ThemeContext.Provider value={themes.dark}>
        <Alert message="hello" />
        <Alert message="hello alert" description="this is alert description" />
        <Alert type="success" message="hello alert" />
        <Alert type="warning" message="hello alert" onClose={(e: any) => console.log(e)} />
        <Alert type="error" message="hello alert" description="this is alert error description" />
        <Button disabled>hello</Button>
        <Button onClick={(e) => {e.preventDefault(); alert('click it')}} btnType="primary" size="lg">primary btn</Button>
        <Button btnType="danger" size="lg">primary btn</Button>
        <Button btnType="link" href="http://www.baidu.com" >primary btn</Button>
        <h1>this is h1</h1>
        <h2>this is h2</h2>
        <h3>this is h3</h3>
        <hr />
        <Menu onSelect={(index) => {console.log(index)}} defaultIndex="0">
          <MenuItem>菜单1</MenuItem>
          <SubMenu title="dropdown">
            <MenuItem>子菜单1</MenuItem>
            <MenuItem>子菜单2</MenuItem>
          </SubMenu>
          <MenuItem>菜单2</MenuItem>
          <MenuItem>菜单3</MenuItem>
        </Menu>
        <Tab onSelect={(e) => {console.log(e)} } mode="line">
          <TabItem label={<div>TAB1</div>}>
            tab1 content
          </TabItem>
          <TabItem label="tab2" disabled>
            Tab2 Content
          </TabItem>
          <TabItem label="3tab3">
            3Tab Content
          </TabItem>
        </Tab>
        <Tab onSelect={(e) => {console.log(e)}} >
          <TabItem label="tab1">
            tab1 content
          </TabItem>
          <TabItem label="tab2">
            tab2 content
          </TabItem>
          <TabItem label="tab3">
            tab3 content
          </TabItem>
        </Tab>
        {/* <Icon icon="city" size="lg" theme="danger" /> */}
        <code>
          const a = b
        </code>
        <Hello />
        <LikeButton />
        <MouseTracker />
        <p>
          X: {pos.x}, Y: {pos.y}
        </p>
        {loading ? (
          <p>小狗加载中</p>
        ) : (
          <img src={dogResult && dogResult.message} alt="" />
        )}
      </ThemeContext.Provider>
    </div>
  )
}

export default App
