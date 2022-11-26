import React, { Component } from 'react';
import "./../Css/main.css"


class ForProtocols extends Component {
    render() {
        return <div
            id='for_protocol'
            className="pt-5"
            style={{ marginRight: "5em" }}
        >
            <span className="heading1">For Protocol</span>

            <p className="p_text pt-5">
                Dfuse does stress testing and incentive optimization for protocols.
                We are very more modular, leaner and cheaper as compared to other market players.
                We use years of experience to stress test protocol design and also help
                you optimize protocol incentives for maximum protocol utility:
                <br />
                <br />
                <ol>
                    <li>Dynamic stress testing for protocols to adjust according to market
                        condition. If you are lending protocol like Aave,
                        we help you find optimal LTV, lending and borrow rates dynamically
                        based on risk. For e.g if liquidity of particular coin on chain has
                        gone down 50% we will help you adjust lending rate automatically.
                    </li>
                    <li>For incentive optimization we will find what is the volume you are
                        doing based on 1 dollar of emission. We will use things like looking
                        across other competitors' (cex/dex) pools, your pool volume distribution
                        and help you optimize to achieve max protocol utility using emission and best tokenomics.</li>
                </ol>
            </p>
        </div >
    }
}

export default ForProtocols;