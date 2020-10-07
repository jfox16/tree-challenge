import React, { createContext, ReactElement } from 'react';

import { SortableContext } from 'contexts';

type SortableProps = {
  children?: ReactElement | ReactElement[];
}

const Sortable = ({children}: SortableProps) => {

  if (!children) {
    return <></>;
  }

  const debugLabel = (
    <div style={{color: 'grey'}}>
      (Sortable)
    </div>
  );
    
  return (
    <SortableContext.Provider value={true}>
      {debugLabel}
      {children}
    </SortableContext.Provider>
  );
}

export default Sortable;