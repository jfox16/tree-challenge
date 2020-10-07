import React, { createContext, ReactElement } from 'react';

import { CollapsibleContext } from 'contexts';

type CollapsibleProps = {
  children?: ReactElement | ReactElement[];
}

const Collapsible = ({children}: CollapsibleProps) => {

  if (!children) {
    return <></>;
  }

  const debugLabel = (
    <div style={{color: 'grey'}}>
      (Collapsible)
    </div>
  );
    
  return (
    <CollapsibleContext.Provider value={true}>
      {debugLabel}
      {children}
    </CollapsibleContext.Provider>
  );
}

export default Collapsible;