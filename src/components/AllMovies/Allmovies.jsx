import React, { memo } from 'react'
import AllmovieItem from './AllmovieItem'

const Allmovies = ({data}) => {
  
  return (
    <div>
      <h2>Movies</h2>
      <div className="flex gap-2 justify-center flex-wrap container">
        {
          data?.results?.map((movie)=> (
            <AllmovieItem key={movie.id} {...movie}/>
          ))
        }
      </div>
    </div>
  )
}
export default memo(Allmovies) 