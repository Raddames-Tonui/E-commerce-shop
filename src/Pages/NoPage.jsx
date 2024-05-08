import React from 'react'

function NoPage() {
  return (
    <div className='flex flex-col justify-center items-center h-screen bg-slate-300'> 
        <h1 className='bold'>404 ERROR</h1>
        
        <div>
            <iframe src="https://giphy.com/embed/VIKa3CjZDCoymNcBY5" width="480" height="360" frameBorder="0" class="giphy-embed" allowFullScreen></iframe><p></p>
        </div>
    </div>
  )
}

export default NoPage