import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import './foundation/foundation.min.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

export default class Index extends React.Component {
  render() {
    return (
      <div>
        <App />
      </div>
    );
  }
}

ReactDOM.render(<Index />, document.getElementById('root'));
registerServiceWorker();
