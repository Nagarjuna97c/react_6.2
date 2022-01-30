import {Component} from 'react'
import './index.css'

class Destination extends Component {
  render() {
    const {item} = this.props
    return (
      <li className="image-container">
        <img className="image" src={item.imgUrl} alt={item.name} />
        <p className="para">{item.name}</p>
      </li>
    )
  }
}

export default Destination
