import React from 'react'
import { Flex } from '@/components'
import { globalStyles } from '@/styles'
import Pages from './pages'
import { useScrollToTop } from './hooks'

const App = () => {
  useScrollToTop()
  globalStyles()

  return (
    <Flex>
      <Pages />
    </Flex>
  )
}

export default App
