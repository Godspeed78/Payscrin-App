import React, { Component } from "react"
import { PushSpinner, GooSpinner, RotateSpinner, SphereSpinner, ClapSpinner, MetroSpinner } from "react-spinners-kit";


class Spinner extends Component {
  state = {}

  render() {
    return (
      <div className="jumbo-back">
        <div className="container sp" style={{marginTop:"40px"}}>
          <div className="jumbotron jumbo">
              <div 
              className="spinno"
              
              >
            <MetroSpinner
              size={80}
              color={"#123abc"}
              loading={this.state.loading}
              
            />
            </div>
           
          </div>
        </div>
      </div>
    )
  }
}

export default Spinner
