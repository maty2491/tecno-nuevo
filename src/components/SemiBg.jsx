import React from 'react'

const SemiBg = () => {
    return (
        <div className='circle-background'>
        <svg xmlns="http://www.w3.org/2000/svg" version="1.1" xmlns:xlink="http://www.w3.org/1999/xlink" xmlns:svgjs="http://svgjs.dev/svgjs" viewBox="0 0 800 800"><defs><radialGradient id="cccircular-grad" r="50%" cx="50%" cy="50%">

       
          <stop offset="100%" stop-color="#f6f6f6" stop-opacity="0"></stop>
        </radialGradient></defs>
        <g fill="url(#cccircular-grad)">
           
            <circle r="801" cx="0" cy="400"></circle>
            <circle r="667.5" cx="0" cy="400"></circle>
            <circle r="534" cx="0" cy="400"></circle>
            <circle r="400.5" cx="0" cy="400"></circle>
            <circle r="267" cx="0" cy="400"></circle> 
            <circle r="167" cx="0" cy="400"></circle>
            <circle r="67" cx="0" cy="400"></circle>
            </g></svg>
             </div>
    )
}

export default SemiBg