import React from 'react'
import { Link } from 'react-router-dom'


const SeriesListItem = ({ series }) => (
    <li>
        <Link 
        to={`/series/${series.show.id}`}
        style={{color: 'white', textDecoration: 'none'}}
        >
        {series.show.name}
        </Link>
    </li> 
)
const SeriesList = (props) => {
    return(
        <div>
            <ul className="Series-list">
                {props.list.map(series => (
                    <SeriesListItem series={series} key={series.show.id} />
                ))}
            </ul>
        </div>
    ) 
}

export default SeriesList