import React from "react";


const Loader = () => {
    return(

        <div className="jumbo-back">

          <div className="jumbotron jumbo"></div>
        <div class="loader">
        <div class="preloader">
            <div class="spinner-layer pl-green">
                <div class="circle-clipper left">
                    <div class="circle"></div>
                </div>
                <div class="circle-clipper right">
                    <div class="circle"></div>
                </div>
            </div>
        </div>
        <p>Please wait...</p>
    </div>
    </div>

    )
}

export default Loader;