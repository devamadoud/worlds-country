import React from 'react';

const Logique = () => {
    const [revele, setRevele] = React.useState(false);
   
   function toggle() {
       setRevele(!revele);
   }
   return {
       revele,
       toggle
   }
};

export default Logique;