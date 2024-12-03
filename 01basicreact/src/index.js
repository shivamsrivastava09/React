import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import Code from './Shivam';

const reactElement = React.createElement(
  'a',
  {href: 'http://google.com',target:'_blank'},
  'Click me to visit google'
)

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <>
      <App/><br></br>
      {reactElement}
      <Code/>
    </>
);

