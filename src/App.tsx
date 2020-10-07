import React from 'react';

import Tree from 'components/Tree';
import Sortable from 'components/Sortable';
import Collapsible from 'components/Collapsible';
import { Node } from 'types';

const data = [
  {
    text: "Movies",
    children: [
      {
        text: "Horror",
        children: [
          {
            text: "Halloween"
          },
          {
            text: "Alien"
          }
        ]
      },
      {
        text: "Action",
        children: [
          {
            text: "Stone Cold"
          },
          {
            text: "Commando"
          }
        ]
      }
    ]
  },
  {
    text: "Books",
    children: [
      {
        text: "Children of time"
      }
    ]
  }
];



function App() {
  return (
    <div className="App">
      <Tree data={data} />

      <Sortable>
        <Tree data={data} />
      </Sortable>

      <Collapsible>
        <Tree data={data} />
        <Tree data={data} />
      </Collapsible>

      <Sortable>
        <Collapsible>
          <div>
            <div>
              <div>
                <div>
                  <Tree data={data} />
                </div>
              </div>
            </div>
          </div>
        </Collapsible>
      </Sortable>
    </div>
  );
}

export default App;
