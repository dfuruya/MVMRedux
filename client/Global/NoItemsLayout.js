const NoItemsLayout = props => 
  <div>
    <p>You have no {props.itemName}!</p>
    {props.suggestion}
  </div>

export default NoItemsLayout;