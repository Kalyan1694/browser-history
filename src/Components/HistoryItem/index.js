import './index.css'

const HistoryItem = props => {
  const {finalHistoryList, deleteHistory} = props
  const {id, timeAccessed, logoUrl, title, domainUrl} = finalHistoryList
  const onDelete = () => {
    deleteHistory(id)
  }

  return (
    <li className="history-items">
      <div className="item">
        <p>{timeAccessed}</p>
        <div className="history-container">
          <div className="image-container">
            <img className="img" src={`${logoUrl}`} alt="logo url" />
          </div>
          <p>
            {title} {domainUrl}
          </p>
        </div>
      </div>
      <div>
        <img
          src="https://assets.ccbp.in/frontend/react-js/delete-img.png"
          alt="delete img"
          onClick={onDelete}
        />
      </div>
    </li>
  )
}

export default HistoryItem
