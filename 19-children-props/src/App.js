import './App.css'
import Wrapper from "./component/Wrapper";

function App() {
  return (
            <div className="App">
              <Wrapper color="lightblue">
                <h2>Text inside of the wrapper</h2>
                  <button>Click me!</button>
              </Wrapper>
            </div>
          )
}

export default App
