import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import HabitList from './components/HabitList';
import Analytics from './components/Analytics';
import AddHabitForm from './components/AddHabitForm';

const App = () => {
  return (
    <Router>
      <div>
        <h1>Habit Tracker and Analytics</h1>
        <Switch>
          <Route path="/" exact component={HabitList} />
          <Route path="/analytics" component={Analytics} />
          <Route path="/add-habit" component={AddHabitForm} />
        </Switch>
      </div>
    </Router>
  );
};

export default App;