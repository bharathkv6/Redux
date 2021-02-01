import React from 'react';
import Header from './components/Header/Header';
import Button from './components/Button/Button';
import './App.css';
import { connect } from 'react-redux';
import { addCounter } from './store/actions/add';
import { subtractCounter } from './store/actions/subtract';
import { incrementCounter } from './store/actions/increment';
import { decrementCounter } from './store/actions/decrement';
import { storeResult } from './store/actions/storeResult';
import { deleteStoredResult } from './store/actions/deleteStoredResult';


/*
function App() {

  const [count, setCount] = useState(0)

  const buttonClickHandler = (type) => {
    switch (type) {
      case "inc": setCount(count + 1);
        break;
      case "dec": setCount(count - 1);
        break;
      case "add": setCount(count + 5);
        break;
      case "sub": setCount(count - 5);
        break;
    }
  }

  return (
    <div className="App">
      <Header count={count} />
      <div className="buttonsContainer">
        <Button title={"Increment"} handler={buttonClickHandler.bind(this, "inc")} />
        <Button title={"Decrement"} handler={buttonClickHandler.bind(this, "dec")} />
        <Button title={"Add 5"} handler={buttonClickHandler.bind(this, "add")} />
        <Button title={"Subtract 5"} handler={buttonClickHandler.bind(this, "sub")} />
      </div>
    </div>
  );
}
*/

class App extends React.Component {

  // buttonClickHandler = (type) => {
  //   switch (type) {
  //     case "inc": this.setState(prevState => ({ count: prevState.count + 1 }));
  //       break;
  //     case "dec": this.setState(prevState => ({ count: prevState.count - 1 }));
  //       break;
  //     case "add": this.setState(prevState => ({ count: prevState.count + 5 }));
  //       break;
  //     case "sub": this.setState(prevState => ({ count: prevState.count - 5 }));
  //       break;
  //   }
  // }
  render() {
    return (
      <div className="App">
        <Header count={this.props.count} />
        <div className="buttonsContainer">
          <Button title={"Increment"} handler={this.props.onIncrementCounter} />
          <Button title={"Decrement"} handler={this.props.onDecrementCounter} />
          <Button title={"Add 5"} handler={this.props.onAddCounter} />
          <Button title={"Subtract 5"} handler={this.props.onSubtractCounter} />
        </div>
        <button onClick={() => this.props.onStoreResult(this.props.count)}>Store Result</button>
        <div>
          <ul>
            {this.props.results && this.props.results.map((storedResult, index) => (
              <li onClick={this.props.onDeleteStoredResult.bind(this, storedResult.id)} key={index}>{storedResult.value}</li>
            ))}
          </ul>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  count: state.counterReducer.counter,
  results: state.resultReducer.results,
});

const mapDispatchToProps = dispatch => ({
  onIncrementCounter: () => dispatch(incrementCounter()),
  onDecrementCounter: () => dispatch(decrementCounter()),
  onAddCounter: () => dispatch(addCounter(5)),
  onSubtractCounter: () => dispatch(subtractCounter(5)),
  onStoreResult: (count) => dispatch(storeResult(count)),
  onDeleteStoredResult: (resultElId) => dispatch(deleteStoredResult(resultElId)),
})

export default connect(mapStateToProps, mapDispatchToProps)(App);
