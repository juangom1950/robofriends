import React from 'react';

const Scroll = (props) => {
  return (
    // The 1st curly brackets says that I am returning javascript and the 2nd {} shays
    // I am returning and object that contain styles
    <div style={{ overflow: 'scroll', border: '5px solid black', height: '800px'}}>
      {props.children}
    </div>
  );
};

export default Scroll;