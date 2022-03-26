import React, { Component } from 'react';
import "./../Css/main.css"


class HomeScreen extends Component {
    render() {
        return <div
            className='home-bg'
        >
            <div className="row align-middle " style={{ margin: "5em" }}>
                <div className='col-md-1 col-sm-none '></div>
                <div className="col-md-4 col-sm-12 p-sm-2 ">
                    <br />
                    <br />

                    <span className="heading1">Hi! We're dFuse</span>
                    <p>
                        <br />
                        <span className="heading2" >An Interchain Yield Farming Protocol built on Juno.</span>
                        <br />
                        <br />
                        <span className="p_text">
                            dFuse is the simplest way to make money on your IBC assets.dFuse allows you to deploy your
                            ATOM and other tokens into vaults that earn yield through multiple strategies across the various
                            IBC protocols. dFuse takes care of all the hard parts like protecting against Impermanent loss,
                            maintaining a healthy collateral ratio, auto compounding and rebalancing your portfolio across
                            multiple opportunites in multiple chains.We dFuse the risks and stress of DeFi investing.
                        </span>
                    </p>
                    <br />
                    <br />
                    <a
                        href="/howItWorks"
                    >
                        <button type="button" class="button-1">More About Us</button>
                    </a>
                </div>
                <div
                    // className='col-md-7 image_block'
                    className='col-md-7 col-sm-12 text-center'
                    style={{
                        justifyContent: "center",
                        alignItems: "center"
                    }}
                >
                    <img
                        src={require('../Assets/astronaut-PNG.png')}
                        className="align-middle astro_image"
                        alt="dFuse"
                        align="middle"

                    />
                </div>
            </div>
        </div>


    }
}

export default HomeScreen;