import React, { Component } from 'react';
import "./../Css/main.css"


class CoverContent extends Component {
    render() {
        return <div>
            <br />
            <br />

            <span className="heading1">Hi! We're dFuse</span>
            <p>
                <br />
                <span className="heading2" >Personal risk analyst for all thing crypto.</span>
                <br />
                <br />
                <span className="p_text">
                    Dfuse is your personal risk analyst for crypto, offering stress testing,
                    incentive optimization, and risk management. With years of experience in the industry,
                    we use our expertise in stress testing, yield farming,
                    and risk management to help you prepare for outlier events and optimize your portfolio.
                    Our modular, lean, and cost-effective approach sets us apart from traditional
                    risk analysts, making us the perfect partner for your crypto investments.
                    Trust us to help you navigate the volatile world of crypto and maximize your rewards.
                    <br />
                    <br />
                    <span className="heading3" >Let Dfuse take care of the risks so you can focus on
                        your building and investment strategy</span>
                </span>
            </p>
            <br />
            <br />
            <div className="row">
                <div className="col-6">
                    <a
                        href="#for_investor"
                    >
                        <button type="button" className="button-1">Investor</button>
                    </a>
                </div>
                <div className="col-6 text-right" style={{ alignItems: "right" }}>
                    <a
                        href="#for_protocol"
                    >
                        <button type="button" className="button-1">Protocol</button>
                    </a>
                </div>
            </div>
        </div>
    }
}

export default CoverContent;