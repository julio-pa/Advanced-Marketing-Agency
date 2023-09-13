import { BrowserRouter as Router } from "react-router-dom"
import { Helmet, HelmetProvider } from 'react-helmet-async';
// redux
import store from './store'
import { Provider } from 'react-redux'

import AnimatedRoutes from "./AnimatedRoutes";

function App() {


  return (
    <HelmetProvider>
      <Helmet>
        <title>FrankBlack | Software Agency</title>
        <meta name="description" content="Agencia de software y marketing digital" />
        <meta name="keywords" content="agencia de software, agencia de marketing" />
        <meta name="robots" content="all" />
        <link rel="canonical" href="https://www.frankblack.com/" />
        <meta name="author" content="frankblack" />
        <meta name="publisher" content="frankblack" />
      </Helmet>
      <Provider store={store}>
        <Router>
          <AnimatedRoutes />
        </Router>
      </Provider>
    </HelmetProvider >
  )
}

export default App
