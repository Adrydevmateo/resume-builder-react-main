import HomePage from '@pages/home/Home-Page'
import HeaderComp from '@components/header/Header-Comp'
import { Route } from 'wouter'

function App() {

  return (
    <>
      <HeaderComp />

      <div>
        <Route path='/' component={HomePage} />
      </div>
    </>
  )
}

export default App
