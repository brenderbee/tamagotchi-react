import React from 'react';
import Error404 from './Error404';
import ActionBar from './ActionBar';
import Neutral from './Neutral';
import StatusBar from './StatusBar';
import { Switch, Route } from 'react-router-dom';

function App() {

  return (
    <div className="container">
      <StatusBar />
      <Switch>
        <Route exact path='/' component={Neutral}/>} />
        <Route component={Error404} />
      </Switch>
      <ActionBar />
      <style jsx global>
        {`
          body {
            font-family: 'Helvetica', sans-serif;
            font-size: 1rem;
          }

          button {
            text-transform: uppercase;
            font-size: 1rem;
            padding: 1rem;
            color: white;
            border-radius: 10px;
            font-weight: 300;
            background: #8500ff;
            border: none
          }

          .container {
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            margin-top: 10rem;
          }
        `}
      </style>
    </div>
  );

}



export default App;
