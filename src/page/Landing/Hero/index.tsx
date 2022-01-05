import React from "react";


import WelcomeImg from "../../../assets/png/welcome.png";
import StarsBack from "../../../assets/png/hero_image_5.png";
// import {StarBox} from "../../../component/StarBox";
// import {PrimaryButton} from "../../../component/PrimaryButton";
import {Link} from "react-router-dom";
import {LinkBox} from "../../../component/LinkBox";

interface Props {
}

const Hero: React.FC<Props> = () => {

    return (
        <div className="hero">
            <div className="hero__main">
                {/*<div className="hero__main__logo">*/}
                {/*<span className="hero__main__logo__logo-title">Pet Puppies</span>*/}
                {/*</div>*/}
                {/*<text className="hero__main__logo-text">*/}
                {/*    10,000 puppies are waiting to get <br/>*/}
                {/*    adopted on Ethereum blockchain*/}
                {/*</text>*/}
                <div className="hero__main__image-group">
                    <div className="hero__main__image-group__rel-group">
                        {/*<img src={Pet_1} className="hero__main__image-group__rel-group__pet-1" alt="pet"/>*/}
                        {/*<img src={Pet_2} className="hero__main__image-group__rel-group__pet-2"alt="pet"/>*/}
                        {/*<img src={Pet_3} className="hero__main__image-group__rel-group__pet-3" alt="pet"/>*/}
                        {/*<img src={Pet_4} className="hero__main__image-group__rel-group__pet-4" alt="pet"/>*/}
                        <img className="hero__main__image-group__rel-group__welcome-img" src={WelcomeImg}
                             alt="welcome-img"/>
                    </div>
                </div>
                <div className="hero__main__start-board">
                    <div className="hero__main__start-board__rel">
                        <div className="hero__main__start-board__rel__content-group">
                            <img className="hero__main__start-board__rel__content-group__back-img" src={StarsBack}
                                 alt="back"/>
                            <div className="hero__main__start-board__rel__content-group__title">
                                <p>Market Place</p>
                            </div>

                            <div className="hero__main__start-board__rel__content-group__box-group">
                                {/*<div className="hero__main__start-board__rel__content-group__box-group__rel">*/}
                                {/*    <StarBox count="14" unit="Days"/>*/}
                                {/*    <StarBox count="23" unit="Hours"/>*/}
                                {/*    <StarBox count="19" unit="Minutes"/>*/}
                                {/*</div>*/}
                                <text>Pet Puppies is an NFT collection series consisting of pet puppies by breed, clothing, faces, and accessories. The founders started this project because they love pets! We wanted to share the same love with the NFT community!</text>

                            </div>

                            <div className="hero__main__start-board__rel__content-group__btn-group" >
                                <div className="hero__main__start-board__rel__content-group__btn-group__rel" >
                                    <Link to="/roadmap" >
                                        <LinkBox linkText="RoadMap"/>
                                    </Link>
                                    <LinkBox linkText="Gallery"/>
                                    <LinkBox linkText="Docs"/>
                                </div>
                                {/*<PrimaryButton title="Mint Now" width={112} isfullColor={true}/>*/}
                            </div>
                        </div>


                    </div>
                </div>
            </div>
            <div className="hero__back-group">
                <div className="hero__back-group__rel">
                    <div className="hero__back-group__rel__back-1"></div>
                    <div className="hero__back-group__rel__back-2"></div>
                    <div className="hero__back-group__rel__back-3"></div>
                    <div className="hero__back-group__rel__back-4"></div>

                </div>
            </div>
        </div>
    );
}

export default Hero;
