import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

<script async
    src="https://maps.googleapis.com/maps/api/js?key=AIzaSyBdy4-SVNXM_tlxzDzZu6DFtwiPmFJ54-E&libraries=places&callback=initMap">
</script>
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);



// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
