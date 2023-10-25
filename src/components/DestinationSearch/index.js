import {Component} from 'react'

import DestinationItem from '../DestinationItem'

import './index.css'

class DestinationSearch extends Component {
  state = {searchInput: ''}

  onChangeEvent = event => {
    this.setState({searchInput: event.target.value})
  }

  render() {
    const {destinationsList} = this.props

    const {searchInput} = this.state
    const searchResult = destinationsList.filter(each =>
      each.name.toLowerCase().includes(searchInput.toLowerCase()),
    )

    return (
      <div className="container">
        <h1>Destination Search</h1>
        <div className="search-input-container">
          <input
            type="Search"
            className="searchBox"
            placeholder="Search"
            onChange={this.onChangeEvent}
          />
          <img
            src="https://assets.ccbp.in/frontend/react-js/destinations-search-icon-img.png"
            alt="search icon"
            className="search-icon"
          />
        </div>

        <ul className="listOfDetails">
          {searchResult.map(eachName => (
            <DestinationItem key={eachName.id} userDetails={eachName} />
          ))}
        </ul>
      </div>
    )
  }
}

export default DestinationSearch
