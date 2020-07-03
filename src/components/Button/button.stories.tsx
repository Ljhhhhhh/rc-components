import React from 'react'
import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'

import Button from './button'

const defaultButton = () => (
  <Button onClick={action('chicked')}>默认Button</Button>
)

const buttonWithSize = () => (
  <>
    <Button size="sm">sm</Button>
    <Button size="lg">lg</Button>
  </>
)

const buttonWithType = () => (
  <>
    <Button btnType="primary">primary Button</Button>
    <Button btnType="danger">danger Button</Button>
    <Button btnType="default">default Button</Button>
    <Button btnType="link" href="http://www.baidu.com">link Button</Button>
  </>
)

storiesOf('Button Component', module)
  .add('默认Button', defaultButton)
  .add('不同尺寸Button', buttonWithSize)
  .add('不同类型Button', buttonWithType)