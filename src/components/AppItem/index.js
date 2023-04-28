import './index.css'

const AppItem = props => {
  const {objDetails} = props
  const {appName, imageUrl} = objDetails
  return (
    <li className="appContainer">
      <img src={imageUrl} alt={appName} className="image" />
      <p className="appItemPara">{appName}</p>
    </li>
  )
}
export default AppItem
