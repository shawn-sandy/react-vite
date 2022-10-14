import React, { useState } from 'react'
import './App.css'

// import {Button} from '@fpkit/fp-button'
import {Badge, FP, Dropdown, Card, Button, Kit, Box } from '@fpkit/fp'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <header className="App-header">
        <p>Hello Vite + React!</p>
        <p>
          <button type="button" onClick={() => setCount((count) => count + 1)}>
            count is: {count}
          </button>
        </p>
        <p>
          Edit <code>App.tsx</code> and save to test HMR updates.
        </p>
        <p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
          {' | '}
          <a
            className="App-link"
            href="https://vitejs.dev/guide/features.html"
            target="_blank"
            rel="noopener noreferrer"
          >
            Vite Doc </a>
        </p>
        <Button type="button" onClick={() => setCount((count) => count + 1)}>Increment Count</Button>

        <p>
        <FP as='h3'>FP KIt <Badge elm="span" role="note">Beta</Badge></FP>
        </p>

        <p>
        <Kit as='h3'>FP KIt <Badge elm="span" role="note">Kit Beta</Badge></Kit>
        </p>

        <p>
        <Box as='h3'>FP KIt <Badge elm="span" role="note">Beta</Badge></Box>
        </p>
        <Card elm="aside">
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam iusto suscipit ea vitae, accusamus ipsum. Nobis nihil deserunt enim debitis laboriosam suscipit, eius impedit dicta ex animi. Quos, voluptatum assumenda?</p>
        </Card>
        <Dropdown summary='Dropdown' title='' styl={{backgroundColor: "black", textAlign: "left"}}>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rerum unde ex eos cum magnam. Et veniam laudantium commodi similique, temporibus beatae porro. Eum, recusandae. Minus voluptatum quisquam consequatur voluptate est! <Badge role='note'>Beta</Badge>
          </p>
          </Dropdown>
          <p>
          <Card>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laudantium quibusdam quo dignissimos, error incidunt tempore facere illo dolore dicta eius dolorum nesciunt, facilis obcaecati. Placeat sunt dolor eveniet explicabo minima.
          </Card>
          </p> 
      </header>
    </div>
  )
}

export default App
