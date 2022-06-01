import React from 'react';

function Item(props) {
  const { content } = props;
  return (
    <div className="Item">
      { content }
    </div>
  );
}

export default Item;
