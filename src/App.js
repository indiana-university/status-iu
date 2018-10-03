import React from 'react';
import 'rivet-uits/css/rivet.css'
import { Header } from 'rivet-react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { Home, Calendar, Maintenance, Notice, Notices } from './pages'

const App = () => (
  <Router basename={process.env.PUBLIC_URL}>
    <React.Fragment>
      <Header title={"Status.IU"} />
      <Route exact path="/" component={Home} />
      <Route exact path="/notices" component={Notices} />
      <Route path="/notices/:noticeId" component={Notice} />
      <Route path="/calendar" component={Calendar} />
      <Route path="/maintenance" component={Maintenance} />
    </React.Fragment>
  </Router>
)

export default App;
