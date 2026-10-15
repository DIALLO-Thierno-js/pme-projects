import React from 'react'

function Loading() {
  return (
    <div className="flex flex-col gap-3 p-3">
      {/* Conteneur principal du squelette */}
      <div className="flex items-center justify-around h-16 w-full bg-zinc-300 rounded-xl animate-pulse p-4">
        
        {/* Conteneur des sous-éléments */}
        <div className="flex flex-col gap-2 w-full">
          <div className="flex gap-2">
            <div className="h-4 w-1/2 bg-zinc-400 rounded-xl"></div>
            <div className="h-4 w-1/2 bg-zinc-400 rounded-xl"></div>
          </div>
          <div className="h-6 w-1/3 bg-zinc-400 rounded-xl"></div>
        </div>

      </div> 
    </div>
  )
}

export default Loading
