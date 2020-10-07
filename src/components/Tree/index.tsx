import React, { ReactElement, useContext } from 'react';

import TreeItem from 'components/TreeItem';
import { SortableContext } from 'contexts';
import { Node } from 'types';

type TreeProps = {
  data: Node[];
}

// Returns a deep copy of nodes and their children.
const copyNodes = (nodes: Node[]) => {
  const copiedNodes:Node[] = [];

  nodes.forEach((node) => {
    copiedNodes.push(Object.assign({}, node));

    if (node.children && node.children.length > 0) {
      node.children = copyNodes(node.children);
    }
  });

  return copiedNodes;
}

// Performs a deep sort of nodes by node.text in ascending order.
const sortNodes = (nodes: Node[]) => {
  if (nodes) {
    nodes.sort((a, b) => {
      const aText = a.text;
      const bText = b.text;
  
      if (aText < bText) {
          return -1;
      }
      if (aText > bText) {
          return 1;
      }
      else {
          return 0;
      }
    });

    nodes.forEach((node) => {
      if (node.children && node.children.length > 1) {
        sortNodes(node.children);
      }
    })
  }
}



const Tree = ({ data }: TreeProps) => {

  const sortable = useContext(SortableContext);
  const nodes = copyNodes(data);

  if (sortable) {
    sortNodes(nodes);
  }

  return (
    <div style={{paddingTop: 16, paddingBottom: 16}}>
      {nodes.map((node) => (
        <TreeItem node={node} />
      ))}
    </div>
  );
}

export default Tree;