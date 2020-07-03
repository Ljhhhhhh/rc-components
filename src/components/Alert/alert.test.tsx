import React from 'react'
import { render } from '@testing-library/react'
import Alert from './index'

describe('test alert components', () => {
  it('render default alert', () => {
    const wrapper = render(<Alert message="hello" />)
    const element = wrapper.getByText('hello')
    expect(element).toBeInTheDocument()
  })

  it('render alert with desc', () => {
    const wrapper = render(<Alert message="hello" description="this is hello" />)
    const message = wrapper.getByText('hello')
    const desc = wrapper.getByText('this is hello')
    expect(message).toBeInTheDocument()
    expect(desc).toBeInTheDocument()
  })
})