import React, { Suspense } from "react";
import { configure, addDecorator, addParameters } from '@storybook/react';
import "../src/styles/index.scss"

const wrapperStyle: React.CSSProperties = {
  padding: '20px 40px'
}

const storyWrapper = (stroyFn: any) => (
  <div style={wrapperStyle}>
    <h3>组件演示</h3>
    {stroyFn()}
  </div>
)

addDecorator(storyWrapper)