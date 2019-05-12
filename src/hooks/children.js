import React from 'react';

// This hook passes props down to children.
// Be aware it would also pass props to any dom element
// In order to use it correctly, children should be one
// or more React components expecting newProps
export const useEnhanceChildren = (children, newProps) => {
  return React.Children.map(children, child =>
    React.cloneElement(child, newProps)
  );
}
