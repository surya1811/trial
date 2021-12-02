

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import Githubs from  './Githubs'
import Details from  './Details'
function App() {
  return (
    <div >
    <Router>
      <Switch>
        <Route path = '/' exact component={Githubs} />
        <Route path='/details' 
          render = {(props) => (
            <Details {...props} />
          )} />
           
      
           <Route path = '/' exact component={Githubs} />
      </Switch>
    </Router>
       
   
    </div>
  );
}

export default App;
