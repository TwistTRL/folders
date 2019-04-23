import React, {Component, Fragment} from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Folders from "./lib";

class App extends Component {
    constructor(props) {
        super(props);
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
            <Folders
                width={this.props.width}
                heightString={this.props.heightString}
                className="fluids-folder"
                folders={fluidsFolders} />
        )
    }
}

ReactDOM.render(<App />, document.getElementById('root'));


