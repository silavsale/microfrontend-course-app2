import React from 'react';
// import ReactDOM from 'react-dom';
import { createRoot } from 'react-dom/client';


// Mount function to start up the app
const mount = (el) => {
    const root = createRoot( el);
    root.render(<div>Hi there!</div>);

};

// If we are in development and in isolation, call mount immediately
if (process.env.NODE_ENV === 'development') {
  const devRoot = document.querySelector('#_marketing-dev-root');
  console.log('devRoot', devRoot);
  if (devRoot) {
    mount(devRoot);
  }
}

// We are running through container
// and we should export the mount function
export { mount };
