import React from 'react';
import ReactDOM from 'react-dom/client';
import AppRouter from './config/routes';


const render = (Component: () => JSX.Element) => {
  const node = ReactDOM.createRoot(document.getElementById("react-root")!);
  node.render(<Component />);
}

document.addEventListener("DOMContentLoaded", () => {
  render(AppRouter) 
})

if (module.hot) {
  module.hot.accept('./config/routes', () => {
    const NextApp = require('./config/routes').default;
    render(NextApp);
  });
}