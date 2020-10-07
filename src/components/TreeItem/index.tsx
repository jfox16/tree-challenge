import React, { useContext, useState } from 'react';

import { CollapsibleContext } from 'contexts';
import { Node } from 'types';

import { BiChevronDown, BiChevronUp } from 'react-icons/bi';

const indentSpacing = 24;


type TreeItemProps = {
  node: Node;
}

const getTextStyle = (collapsible: Boolean | undefined) => {
  return {
    cursor: (collapsible) ? 'pointer' : '',
  };
};



const TreeItem = ({ node }: TreeItemProps) => {

  const collapsible = useContext(CollapsibleContext);
  const [ collapsed, setCollapsed ] = useState((collapsible) ? true : false);

  const handleClick = () => {
    if (collapsible) {
      setCollapsed(!collapsed);
    }
  }

  let collapsibleArrow = <></>;

  if (collapsible && node.children && node.children.length > 0) {
    collapsibleArrow = (
      <div style={{display: 'inline', position: 'relative', bottom: -2, left: -3}}>
        {(collapsed) ? <BiChevronDown /> : <BiChevronUp />}
      </div>
    );
  }

  return (
    <div style={{paddingLeft: indentSpacing}}>

      <div onClick={handleClick} style={getTextStyle(collapsible)}>
        {node.text} {collapsibleArrow}
      </div>

      {!collapsed && node.children && node.children.length > 0 &&
        node.children.map((child) => (
          <TreeItem node={child} />
        ))
      }
    </div>
  );
}

export default TreeItem;