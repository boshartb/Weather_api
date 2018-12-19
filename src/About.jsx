import React from "react";
import { getPoem, getWeather } from "./Services"

class Home extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            shakeObj: null,
            shakeObj2: null
        };
    }

    // componentDidMount() {
    //     getPoem()
    //         .then(e => e.json())
    //         .then(e => {
    //             this.setState({ shakeObj: e });
    //         })
    //         .catch(e => console.log("ERR::", e));

    // }

    componentDidMount() {
        getWeather()
            .then(e => e.json())
            .then(e => {
                this.setState({ shakeObj: e });
            })
            .catch(e => console.log("ERR::", e));

    }

    handleClick = () => {
        getWeather("")
            .then(e => e.json())
            .then(e => console.table(e))
            //   .then(e => {
            //       console.log("I am in")
            //     this.setState({ shakeObj2: e });
            //   })
            .catch(e => console.log("ERR::", e))
    }

    render() {
        return (
            <div>
                <div className="poems">
                    Hello
                 {this.state.shakeObj === null ? (
                        <p>Loading</p>
                    ) : (
                            <div>
                                <p>{this.state.shakeObj.poem}</p>
                                <p>
                                    Markov:{this.state.shakeObj.markov}
                                    <span> Lines::{this.state.shakeObj.lines}</span>
                                </p>
                            </div>
                        )}
                </div>

                <div className="weather">
                    {this.state.shakeObj === null ? (
                        <p>Loading</p>
                    ) : (
                            <div>
                                <p>{this.state.shakeObj.poem}</p>
                                <p>{this.state.shakeObj.weather}
                                    Markov:{this.state.shakeObj.markov}
                                    <span> Lines::{this.state.shakeObj.lines}</span>
                                </p>
                            </div>
                        )}
                </div>

                <button onClick={e => {
                    e.preventDefault();
                    this.handleClick()
                }}>Click me!!</button>
                <h2>{this.state.shakeObj2 === null ? null : this.state.shakeObj2.lines}</h2>
            </div>
        );
    }
}

export default Home;
