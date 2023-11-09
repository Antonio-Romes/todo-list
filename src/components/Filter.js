import { useState } from "react"; 

export default function Filter({filter, setFilter, setSort}) { 
  
  return ( 
      <div className="filter" >
        <h2>Filtrar:</h2>
        <div className="filter-options">
            <div>
                <p>Status: </p>
                <select value={filter} 
                       onChange={(e) => setFilter(e.target.value)} >
                    <option value="All">Todas</option>
                    <option value="Completed">Completas</option>
                    <option value="InCompleted">InCompletas</option>
                </select>
            </div>
            <div>
                <p>Ordem alfabética:</p>
                <button className="button" onClick={() => setSort("Asc")} >Asc</button>
                <button className="button" onClick={() => setSort("Desc")} >Desc</button>
            </div>
        </div> 
      </div> 
  )
}
