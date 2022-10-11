// Write your code here
const DestinationItem = props => {
  const {itemDetails} = props

  const {imgUrl, name, id} = itemDetails
  return (
    <li>
      <img src={imgUrl} alt={name} />
      <p>{name}</p>
    </li>
  )
}
export default DestinationItem
