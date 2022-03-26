import React, { Component } from 'react';
import "./../Css/main.css"


class About extends Component {
    render() {
        return <div className="componenet_bg">
            <div
                id='HowItWorks'
                className="row"
                style={{ margin: "5em" }}
            >
                <div className='col-1 col-sm-none'>
                </div>
                <div className="col-md-11 col-sm-11 p-5">
                    <span className="heading1">How it works</span>
                    <p className="p_text">
                        dFuse will maintain one vault per asset. Each vault has multiple strategies such as Staking,
                        Lending and investing in LP pools. Our team will manage reinvesting profits, capital allocation
                        and rebalancing of capital the strategies based on our market analysis.
                        <br />
                        <br />
                        We will begin with a vault for ATOM, and deploy more as we develop strategies for other assets.
                        <br />
                        <br />
                        When you deposit your ATOM into a vault, you will be issued dfATOM tokens that indicate your
                        ownership of the vault.
                        <br />
                        <br />
                        dFuse charges 2% fees annually to manage gas, salaries and other costs. This 2% is deducted
                        from the vault on each harvest by minting new dfATOM tokens.

                    </p>
                </div>
            </div>
        </div>;
    }
}

export default About;