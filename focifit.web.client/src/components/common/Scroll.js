import React from 'react';
import './scroll.css';

const Scroll = props => {
   return (
      <div
         class="scrollbar"
         id="style-1"
         style={{
            borderLeft: '1px solid rgba(220,220,220, .1)',
            
            borderBottom: '1px solid rgba(220,220,220, .1)'
         }}
      >
         <div class="force-overflow">{props.children}</div>
      </div>
   );
};
export default Scroll;
