// Write your code here
import {Component} from 'react'

import './index.css'

class FruitsCounter extends Component {
  state = {mangoesCount: 0, bananasCount: 0}
  eatBanana = () => {
    this.setState(prevState => ({bananasCount: prevState.bananasCount + 1}))
  }
  eatMango = () => {
    this.setState(prevState => ({mangoesCount: prevState.mangoesCount + 1}))
  }
  render() {
    const {mangoesCount, bananasCount} = this.state

    return (
      <div>
        <h1>
          Bob ate
          <span>{mangoesCount}</span> mangoes
          <span>{bananasCount}</span> bananas
        </h1>
        <div className="main-container">
          <div className="mango-container">
            <img
              src="https://assets.ccbp.in/frontend/react-js/mango-img.png"
              alt="mango"
            />
            <button className="button-style" onClick={this.eatMango}>
              Eat Mango
            </button>
          </div>
          <div className="mango-container">
            <img
              src="https://assets.ccbp.in/frontend/react-js/banana-img.png"
              alt="banana"
            />
            <button className="button-style" onClick={this.eatBanana}>
              Eat Banana
            </button>
          </div>
        </div>
      </div>
    )
  }
}

export default FruitsCounter
