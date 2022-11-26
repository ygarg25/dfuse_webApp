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
                    Dfuse does stress testing, incentive optimization and risk management.
                    Think of us like your personal risk analyst for crypto but modular,
                    leaner and cheaper. We use years of experience to stress test,
                    risk management and yield farming to help you prepare for outlier events
                    which happen in crypto.
                    <br />
                    <br />
                    <span className="heading3" >We dFuse the risks and stress of crypto investor, protocols and yield farmers.</span>
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