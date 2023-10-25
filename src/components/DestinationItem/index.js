import './index.css'

const DestinationItem = props => {
  const {userDetails} = props
  const {name, imgUrl} = userDetails
  return (
    <li className="small-container">
      <img src={imgUrl} className="img-size" alt={name} />
      <p>{name}</p>
    </li>
  )
}

export default DestinationItem
