import React, { Component } from 'react'
import SeriesList from '../../Components/SeriesList'
import Loader from '../../Components/Loader'

import 'whatwg-fetch'


class Series extends Component {
  state = {
    series: [],
    seriesName: '',
    isFetching: false
  }

  onSeriesInputChange = e => {
    this.setState({
      seriesName: e.target.value,
      isFetching: true
    })

    fetch(`http://api.tvmaze.com/search/shows?q=${e.target.value}`)
      .then((res) => res.json())
      .then(json => this.setState({ series: json, isFetching: false}))
  }

    render() {
        const { series, seriesName, isFetching } = this.state;
        return (
          <div>
            <div>
              <input
                value={seriesName} 
                type='text' 
                onChange={this.onSeriesInputChange} />
            </div>
              { 
                !isFetching && series.length === 0 && seriesName.trim() === ''
                &&
                <p>Please Enter Series Name Into The Input</p>
              }
              { 
                !isFetching && series.length === 0 && seriesName.trim() !== ''
                &&
                <p>No TV Series Have Been Found With This Name</p>
              }
              {
                isFetching && <Loader />
              }
              {
                !isFetching && <SeriesList list={this.state.series} />
              }               
            <SeriesList list={this.state.series} />
          </div>
        )
    }
}

export default Series