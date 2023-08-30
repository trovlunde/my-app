import React from 'react';
import './TableCreater.css';


function TableCreater() {
    function helu(){console.log("hi")}
    return(
          <div className="Table">
            <header className='Table-header'>
              <button onClick={() => helu()}>
                Kul knapp
              </button>
              <p>
                Ny header under tidligere
              </p>
            </header>
          </div>
    )
  }
  
  export default TableCreater;