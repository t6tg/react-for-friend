import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import NavBar from './components/NavBar'
import Count from './pages/Count'
import DynamicPage from './pages/DynamicPage'
import Graph from './pages/Graph'
import LoginPage from './pages/LoginPage'
import RegisterPage from './pages/RegisterPage'

function App() {
    return (
        <Router>
            <NavBar />
            <Switch>
                <Route path={'/login'}>
                    <LoginPage />
                </Route>
                <Route path={'/register'}>
                    <RegisterPage />
                </Route>
                <Route path={'/count'}>
                    <Count />
                </Route>
                <Route path={'/graph'}>
                    <Graph />
                </Route>
                <Route path={'/:name'}>
                    <DynamicPage />
                </Route>
            </Switch>
        </Router>
    )
}

export default App
