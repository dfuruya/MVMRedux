import React from 'react';

const NoItemsLayout = props => 
  <div className="no-items-layout">
    <p>No {props.itemName} here. {props.suggestion}</p>
  </div>

export default NoItemsLayout;