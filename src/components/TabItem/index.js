import './index.css'

const TabItem = props => {
  const {objDetails, onClickChangeActiveTabId, isActive} = props
  const {tabId, displayText} = objDetails

  const onClickTab = () => {
    onClickChangeActiveTabId(tabId)
  }

  const className = isActive ? 'button activeBtn' : 'button'

  return (
    <li className="buttonContainer">
      <button className={className} type="button" onClick={onClickTab}>
        {displayText}
      </button>
    </li>
  )
}
export default TabItem
