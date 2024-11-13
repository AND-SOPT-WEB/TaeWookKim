import { Global, ThemeProvider} from '@emotion/react';
import Home from './Home'
import global from './styles/global'
import {Theme} from './styles/theme'

function App() {

  return (
    <>
      <ThemeProvider theme={Theme}>
        <Global styles={global} />
        <Home />
      </ThemeProvider>
    </>
  )
}

export default App;
