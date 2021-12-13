import {Component} from 'react'
import HistoryItem from '../HistoryItem/index'
import './index.css'

class History extends Component {
  state = {searchInput: '', remainingResults: this.props}

  updatingRemainingResults = () => {
    const {initialHistoryList} = this.props
    this.setState({remainingResults: initialHistoryList})
  }

  deleteHistory = id => {
    const {remainingResults} = this.state
    const filteredHistoryData = remainingResults.filter(
      eachItem => eachItem.id !== id,
    )
    this.setState({remainingResults: filteredHistoryData})
    console.log(remainingResults)
  }

  onTyping = event => {
    this.setState({searchInput: event.target.value})
  }

  render() {
    const {initialHistoryList} = this.props
    const {searchInput} = this.state

    const filteredResults = initialHistoryList.filter(eachResult =>
      eachResult.title.toLowerCase().includes(searchInput.toLowerCase()),
    )

    return (
      <div>
        <div className="logo-part">
          <div className="history-logo">
            <img
              src="https://assets.ccbp.in/frontend/react-js/history-website-logo-img.png"
              alt="history logo"
            />
          </div>
          <div className="search-part">
            <img
              src="https://assets.ccbp.in/frontend/react-js/search-img.png"
              alt="search logo"
              className="search-logo"
            />
            <input
              type="search"
              className="search-box"
              onChange={this.onTyping}
            />
          </div>
        </div>
        <div className="history-items-part">
          <ul className="history">
            {filteredResults.map(eachHistory => (
              <HistoryItem
                key={eachHistory.id}
                finalHistoryList={eachHistory}
                deleteHistory={this.deleteHistory}
              />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default History
