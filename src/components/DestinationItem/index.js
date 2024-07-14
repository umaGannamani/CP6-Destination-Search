// Write your code here
import './index.css'
const DestinationItem = props => {
  const {placeDetails} = props
  const {name, imgUrl} = placeDetails
  return (
    <div>
      <li className="place-card">
        <div className="card-container">
          <img src={imgUrl} alt={name} className="place-image" />
          <p>{name}</p>
        </div>
      </li>
    </div>
  )
}
export default DestinationItem
