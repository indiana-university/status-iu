import React from 'react';
import 'rivet-uits/css/rivet.css'
import { Header, HeaderMenu, HeaderNavigation } from 'rivet-react'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import { Home, Calendar, Maintenance, Notice, Notices } from './pages'

const App = () => (
  <Router basename={process.env.PUBLIC_URL}>
    <React.Fragment>
      <Header title="Status.IU">
        <HeaderNavigation>
          <HeaderMenu label="Information">
            <Link to="/notices/28">CAS and iuware have no end dates</Link>
            <Link to="/notices/62">New Test Notice Title Update</Link>
            <Link to="/notices/46055">Two Step for ALL</Link>
          </HeaderMenu>
          <Link to="/maintenance">Maintenance</Link>
          <Link to="/calendar">Calender</Link>
        </HeaderNavigation>

      </Header>
      <main id="main-content">
        <Route exact path="/" component={Home} />
        <Route exact path="/notices" component={Notices} />
        <Route path="/notices/:noticeId" component={Notice} />
        <Route path="/calendar" component={Calendar} />
        <Route path="/maintenance" component={Maintenance} />
      </main>
    </React.Fragment>
  </Router>
)

export default App;
