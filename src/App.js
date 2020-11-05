import { Route } from 'react-router-dom';
import './App.css';
import Header from './components/Header/Header';
import Feed from './components/Feed/Feed';
import Messages from './components/Messages/Messages';

function App(props) {
  return (
    <div className="App">
      <Header />
      <Route path='/Feed' render={() => <Feed state={props.state.feedReducer} dispatch={props.dispatch}/>} />
      <Route path='/Messages' render={() => <Messages /> } />
    </div>
  );
}

export default App;
