import React from "react"
import SideMenu from "./components/SideMenu/SideMenu"

class App extends React.Component{
  state ={ 
    tela: 'Tela inicial'
  }

  render() {
    return (
      <div className="App">
        <SideMenu />
      </div>
    )
  }
}

export default App;
