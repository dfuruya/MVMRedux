import React from 'react';

const NoItemsLayout = props => 
  <div className="no-items-layout">
    <p>You don't have any {props.itemName}!</p>
    {props.suggestion}
  </div>

export default NoItemsLayout;