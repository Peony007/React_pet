import React, {useState} from "react";

import {TabPet} from "../../../component/TabPet";
import MenuImg from "../../../assets/png/menu.png";
import LogoImg from "../../../assets/png/logo.png";
import DiscordImg from "../../../assets/svg/discord.svg";
import TwitterImg from "../../../assets/svg/twitter_2.svg";
import {PrimaryButton} from "../../../component/PrimaryButton";
import {Tab} from "../../../component/Tab";

interface Props {
}

const Header: React.FC<Props> = () => {

    const [isShowMenu, setShowMenu] = useState(false);
    const [isTwitterHover, setTwitterHover] = useState(false);
    const [isDiscordHover, setDiscordHover] = useState(false);

    return (
        <>
            <div className="header">
                <div className="header__relative">
                    <div className="header__connect-logo">
                        <img className="header__connect-logo__img" src={LogoImg} alt="logo-img"/>
                    </div>

                    <div className="header__content">
                        <TabPet title="Mint Pet Puppies"/>
                        <Tab>Collection</Tab>
                        <a href="#roadmap" >
                            <Tab>Roadmap</Tab>
                        </a>
                        <Tab>My Puppies</Tab>
                    </div>

                    <div className="header__connect-wallet">
                        <PrimaryButton title="Connect Wallet" width={160} isfullColor={false}/>
                        <div className="header__connect-wallet__social-parent"
                             onMouseEnter={() => setTwitterHover(true)} onMouseLeave={() => setTwitterHover(false)}>
                            <a href="https://twitter.com/PetPuppiesNFTs" target="_blank" rel="noreferrer">
                                <img src={TwitterImg} height={isTwitterHover ? 60 : 56}
                                     width={isTwitterHover ? 60 : 56} alt="twitter-img" />
                            </a>
                        </div>
                        <div className="header__connect-wallet__social-parent"
                             onMouseEnter={() => setDiscordHover(true)} onMouseLeave={() => setDiscordHover(false)}>
                            <a href='https://discord.gg/petpuppies' target='_blank' rel='noreferrer'>
                                <img src={DiscordImg} height={isDiscordHover ? 60 : 56}
                                     width={isDiscordHover ? 60 : 56} alt="discord-img" />
                            </a>
                        </div>
                    </div>
                </div>
            </div>

            <div className="header__mobile-parent">

                <div className="header__mobile-parent__header-group">
                    {/*<h2 className="header__mobile-parent__header-group__title">Pet Puppies</h2>*/}
                    <div className="header__mobile-parent__header-group__menu">
                        <img className="header__mobile-parent__header-group__menu__logo" src={LogoImg} width={40}
                             height={36} alt="logo-img"/>
                    </div>
                    <div className="header__mobile-parent__header-group__menu"
                         onClick={() => setShowMenu(!isShowMenu)}
                    >
                        <img className="header__mobile-parent__header-group__menu__img" src={MenuImg} alt="menu-img"/>
                    </div>
                </div>

                <div className="header__mobile-parent__header-group__tab-group"
                     style={{height: isShowMenu ? "100vh" : 0, overflow: 'hidden'}}>

                    {/*<div className="header__mobile-parent__header-group__tab-group__items"*/}
                    {/*     style={{fontFamily: "RainKiss"}}>*/}
                    {/*    Why <span style={{color: "#FF494F"}}>Pet Puppies</span> ?*/}
                    {/*</div>*/}
                    <div style={{paddingTop: 40}}></div>
                    <div className="header__mobile-parent__header-group__tab-group__items"  onClick={() =>  setShowMenu(false)}>Mint Pet Puppies</div>
                    <div className="header__mobile-parent__header-group__tab-group__items"  onClick={() =>  setShowMenu(false)}>Collection</div>
                    <div className="header__mobile-parent__header-group__tab-group__items"  onClick={() =>  setShowMenu(false)}>Roadmap</div>
                    {/*<div className="header__mobile-parent__header-group__tab-group__items"  onClick={() =>  setShowMenu(false)}>FAQ's</div>*/}
                    <div className="header__mobile-parent__header-group__tab-group__items"  onClick={() =>  setShowMenu(false)}>My Puppies</div>
                    <div className="header__mobile-parent__header-group__tab-group__divider"></div>

                    <a href="https://twitter.com/PetPuppiesNFTs" target="_blank" rel="noreferrer">
                        <div className="header__mobile-parent__header-group__tab-group__items"
                             onClick={() => setShowMenu(false)}>
                            Twitter
                        </div>
                    </a>
                    <a href='https://discord.gg/petpuppies' target='_blank' rel='noreferrer'>
                        <div className="header__mobile-parent__header-group__tab-group__items"
                             onClick={() => setShowMenu(false)}>Discord
                        </div>
                    </a>

                    <div className="header__mobile-parent__header-group__tab-group__items" onClick={() =>  setShowMenu(false)}
                          >Connect Wallet
                    </div>
                </div>
            </div>
        </>

    );
};

export default Header;
