import React, { ReactNode } from 'react'

const layout = ({children}:{children: ReactNode}) => {
  return (
    <main>
        Header
      {children}
      Footer
    </main>
  )
}

export default layout
