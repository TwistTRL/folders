import React, { Component, Fragment } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Folders from "./lib";

class App extends Component {
    constructor(props) {
        super(props);
        this.state = { width: 300, height: 400, }
    }

    handleSubmit = (e) => {
        if (e) e.preventDefault();
        const width = this.width.value;
        let height = this.height.value
        this.setState({
            width: Number(width),
            height: Number(height)
        })
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
                <form onSubmit={this.handleSubmit}>
                    <input placeholder="width" type="text" ref={(element) => { this.width = element }} />
                    <input placeholder="height" type="text" ref={(element) => { this.height = element }} />
                    <button>Submit!</button>
                </form>
                <div className="wrap" style={{ width: this.state.width + "px", height: this.state.height + "px" }}>
                    <Folders
                        width={this.state.width}
                        heightString={this.state.height + "px"}
                        className="fluids-folder"
                        folders={fluidsFolders} />
                </div>
            </>
        )
    }
}

ReactDOM.render(<App />, document.getElementById('root'));



