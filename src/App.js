import { LayoutApp, ContentApp } from './components'
import { Author, Advisor } from './tableData'

function App() {
  return (
    <>
      <LayoutApp>
        <ContentApp author={<Author />} advisor={<Advisor />} />
      </LayoutApp>
    </>
  )
}

export default App
