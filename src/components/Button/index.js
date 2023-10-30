import React from 'react'

import { Buttons } from './styles'

function Button({ children, ...props }) {
  return <Buttons {...props}>{children}</Buttons>
}

export default Button
