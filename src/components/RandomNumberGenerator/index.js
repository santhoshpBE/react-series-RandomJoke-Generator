import './index.css'
import {Component} from 'react'

class RandomNumberGenerator extends Component {
  state = {randomNumber:0}
  generateRandomNum =()=>
  {
    let randomNumberOut = Math.floor(Math.random() * 101);
    this.setState({randomNumber:randomNumberOut})
  }
  render() {
    const {randomNumber} = this.state
    return (
      <div className="bg-container">
        <div className="card-container">
          <h1 className="card-heading">
            Random Number <br />
          </h1>
          <p className="card-para">
            Generate a random number in the range of 0 to 100
          </p>
          <button onClick = {this.generateRandomNum} className="card-button">Generate</button>
          <p className="card-para1">{randomNumber}</p>
        </div>
      </div>
    )
  }
}
export default RandomNumberGenerator
