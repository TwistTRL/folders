import React, { Component, Fragment } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Folders from "./lib";

class App extends Component {
    constructor(props) {
        super(props);

        this.state = { width: 300, height: 400, }
    }

    render() {
        const fluidsFolders = [
            {
                name: "COAG",
                backgroundColor: "#fff5e8",
                component:
                    <>
                        <div className="fluids-table-label-container">
                            <h3>
                                <span className="c-circle">C</span>
                                <span className="coag-label">Coagulation</span>
                            </h3>
                        </div>
                    </>,
                panelLabel: "Nutrition"
            },
            {
                name: "NUTRITION",
                backgroundColor: "#b1cbf1",
                component:
                    <>
                        <h3 className="nu-label">
                            <span className="n-circle">N</span>
                            <span className="coag-label">Nutrition</span>
                        </h3>
                    </>,
                panelLabel: "NO"
            },
            {
                name: "RENAL",
                backgroundColor: "#e6bb14",
                component: <h2> EMPTY </h2>,
                panelLabel: "NO"
            },
        ]
        return (
            <>
                <button type="button">Click Me!</button>
                <div className="wrap" style={{ width: "300px", height: "400px" }}>
                    <Folders
                        width={300}
                        heightString={"400px"}
                        className="fluids-folder"
                        folders={fluidsFolders} />
                </div>
            </>
        )
    }
}

ReactDOM.render(<App />, document.getElementById('root'));



