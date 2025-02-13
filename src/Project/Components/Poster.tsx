import React from 'react'

const Poster:React.FC = () => {
  return (
    <div>
       <div className="web hidden md:block">
       <img src="/assets/webposter.png" alt="Numerology Diagram" className=" w-full h-auto object-cover" onContextMenu={(e) => e.preventDefault()}
        draggable="false" />
       </div>
       <div className="mobile block md:hidden">
       <img src="/assets/mobileposter.png" alt="Numerology Diagram" className="w-full h-auto object-cover" onContextMenu={(e) => e.preventDefault()}
        draggable="false" />
       </div>
    </div>
  )
}

export default Poster
