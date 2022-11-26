import React, { Component } from 'react';
import "./../Css/main.css"


class ForInvestor extends Component {
    render() {
        return <div
            id='for_investor'
            className="pt-5"
            style={{ marginRight: "5em" }}
        >
            <span className="heading1">For Investor</span>

            <p className="p_text pt-5">
                Custom dashboard for you where we will keep track of all the tokens in your portfolio and monitor for:
                <br />
                <br />
                <ol>
                    <li>Any hack in any smart contracts you are exposed to,  you will be the first one to know.</li>
                    <li>Is circulating supply increasing more than what the founder promised?</li>
                    <li>Is any other VC selling during unlocking and how much?</li>
                    <li>If TVL withdrawal from the platform is leaving more than average withdrawal, we will inform you.</li>
                    <li>If the token is down more than average in the last few months volatility wrt to market, we will inform you.</li>
                </ol>
                <br />
                <br />
                We track another 100 of these risk parameters on the chain and also scan social media
                (twitter, telegram) for any potential information.
            </p>
        </div >
    }
}

export default ForInvestor;