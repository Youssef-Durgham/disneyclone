import { useState } from "react"
export default function Example() {
  const [click, setClick] = useState(false)


  return(
    <>
        <div className="space-y-2">
    <button className=" bg-sky-500/50 text-white outline outline-offset-0 outline-4 outline-blue-500/50 rounded-xl" 
      onClick={()=>setClick(!click)}>
      Change Seasons
    </button>
    {click && (
  
  <ul className="dropdown-menu bg-white/60  text-slate-900 space-y-2 rounded-lg" aria-labelledby="dropdownMenuButton">
  
  <li>
    <a className="dropdown-item" href="#">
      Season 1
    </a>
    <ul className="dropdown-menu dropdown-submenu bg-white/60 space-y-2 rounded-lg">
      <li>
        <a className="dropdown-item" href="#">episode 1</a>
      </li>
      <li>
        <a className="dropdown-item" href="#">episode 2</a>
      </li>
      
      <li>
        <a className="dropdown-item" href="#">episode 3</a>
      </li>
      <li>
        <a className="dropdown-item" href="#">episode 4</a>
      </li>
    </ul>
  </li>

  </ul>
  
    )
  
    }
    
  </div>
        
        
  
  
      </>
  )
}


