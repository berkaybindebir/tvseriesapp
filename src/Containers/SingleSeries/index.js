import React, { Component } from 'react'
import Loader from '../../Components/Loader'

class SingleSeries extends Component {
    state = {
        show: null
    }

    componentDidMount(){
        const { id } = this.props.match.params

        fetch(`http://api.tvmaze.com/shows/${id}?embed=episodes`)
        .then((res) => res.json())
        .then(json => this.setState({ show: json}))
    }



    render(){
        const { show } = this.state


        return(
            <div>
                { show === null && <Loader />}
                {
                    show !== null
                    &&
                    <div>
                    <h3>{show.name}</h3>
                    <p>
                        <img src={show.image.medium} alt={show.name}></img>
                    </p>
                    {/* <p>
                        Premiered - {show.premiered}
                    </p> */}
                    <p>
                        Rating - {show.rating.average}
                    </p>
                    <p>
                        Episodes - {show._embedded.episodes.length}
                    </p>
                </div>
                }
            </div>
        )
    }
}

export default SingleSeries