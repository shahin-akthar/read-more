// Write your code here
import {useState} from 'react'

import {
  DivContainer,
  Heading,
  Hooks,
  Img,
  Button,
  Hooks2,
} from './styledComponents'

const ReadMore = () => {
  const [isShown, showContent] = useState(false)

  const clickMore = () => {
    showContent(prevState => !prevState)
  }

  return (
    <DivContainer>
      <Heading>React Hooks</Heading>
      <Hooks>Hooks are a new addition to React</Hooks>
      <Img
        src="https://assets.ccbp.in/frontend/hooks/react-hooks-img.png"
        alt="react hooks"
      />
      <Hooks2>
        Hooks solve a wide variety of seemingly unconnected problems in React
        that we have encountered over five years of writing and maintaining tens
        of thousands of components.
        {isShown && (
          <span>
            For curious readers we have prepared a detailed RFC. Hooks allows
            you to reuse stateful logic without changing your component
            hierarchy. Hooks work side-by-side with existing code so you can
            adopt them gradually.
          </span>
        )}
      </Hooks2>
      <Button onClick={clickMore}>Read {isShown ? 'Less' : 'More'}</Button>
    </DivContainer>
  )
}

export default ReadMore
