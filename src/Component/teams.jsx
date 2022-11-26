import React, { Component } from 'react';
import "./../Css/main.css"

class Teams extends Component {
    render() {
        return <div
            id='Teams'
            // className="row"
            style={{ marginRight: "5em" }}
        >
            <span className="heading1">Teams</span>
            <p
                className="p_text2"
            >
                <br />
                <br />
                <br />

                Dfuse is built by quant firm which runs multiple quant strategies on cex and dex.
                Before which, team spent 7-8 years in equity quant desks in London and SF. During this time,
                they spent a few years working in the risk department of a macro hedge fund in London where
                they were testing strategies on various stress events.
            </p>

            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />

            <div className="row">
                <div className="col-12 text-center">
                    <a
                        href="https://docs.google.com/forms/d/e/1FAIpQLSdBqpPBNRXcj9HKvXwfbzyDIYG_oTPXSlR59flvsKJhgm-xkA/viewform"
                        target="_blank"
                    >
                        <button type="button" className="button-1">Contact Us</button>
                    </a>
                </div>
            </div>
        </div>
    }
}

export default Teams;