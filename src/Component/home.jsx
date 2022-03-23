import React, { Component } from 'react';
import Navbar from './navbar';
import About from './about';
import Strategies from './strategies';
import Risk_Parity from './risk_Parity';
import Tokenomics from './tokenomics';
import Teams from './teams';
import "./../Css/main.css"


class HomeScreen extends Component {
    render() {
        return <div className=''>
            <div className="row " style={{
                backgroundImage: `url("/web-Banner.jpeg")`,
                backgroundRepeat: 'no-repeat',
                // width: '100%'
                backgroundSize: 'cover',
                height: '120vh',
            }}>
                <Navbar />
                <div className='col-1'></div>
                <div className="col-md-4 col-sm-5 p-5 pt-0 text-white">
                    <h2>Hi! We're <br /> dFuse</h2>
                    <p
                        // className="text-justify"
                        style={{
                            margin: '0 0 13px',
                            // color: 'black',
                            display: 'inline-block',
                            fontSize: '14px',
                            fontWeight: '400',
                            lineHeight: '1.7em',
                            textAlign: 'justify'
                        }}
                    >
                        <br />
                        <h5>An Interchain Yield Farming Protocol built on Juno.</h5>
                        <br />
                        dFuse is the simplest way to make money on your IBC assets.dFuse allows you to deploy your
                        ATOM and other tokens into vaults that earn yield through multiple strategies across the various
                        IBC protocols.dFuse takes care of all the hard parts like protecting against Impermanent loss,
                        maintaining a healthy collateral ratio, auto compounding and rebalancing your portfolio across
                        multiple opportunites in multiple chains.We dFuse the risks and stress of DeFi investing.
                    </p>
                    <a
                        href="#HowItWorks"
                    >
                        <button type="button" class="btn btn-danger">More About Us</button>
                    </a>
                </div>
                <div
                    // className='col-md-7 image_block'
                    className='col-md-7 '
                >
                    {/* <img
                        // src="https://www.larvalabs.com/public/images/mattjohn-homepage-2x.png"
                        // src="https://thumbs.dreamstime.com/z/soccer-stuff-182425593.jpg"
                        // src={require('../Assets/dFuse_bomb.jpeg')}
                        // width='800'
                        // height='600'
                        width="1000"
                        height="300"
                        // height='auto'
                        alt="dFuse"
                        style={{
                            maxWidth: "100%",
                            height: "85%"
                        }}
                    /> */}
                </div>
            </div>

            <About />

            <Strategies />

            <Risk_Parity />

            <Tokenomics />

            <Teams />
        </div >;
    }
}

export default HomeScreen;