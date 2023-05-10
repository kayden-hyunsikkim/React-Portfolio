import React from "react";

const styles  = {
    paragraph: { 
        color: 'white'
    }
}


export default function Home() {
  return (
    <div>
      <div style={styles.paragraph}>
      <div >
            <p>The Future Developer & Designer</p>  
            <p>I Am Hyunsik Kim a.k.a <span className="engname">“Kayden”</span></p>          
       </div>
    </div>
    </div>
  );
}