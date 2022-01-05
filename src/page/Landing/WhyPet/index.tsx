import React from "react";

import BrandImg from "../../../assets/png/variant.png";
import BrandBackImg from "../../../assets/svg/why_brand_back.svg";
import BtnBrand from "../../../assets/svg/why_brand.svg";
import {PrimaryButton} from "../../../component/PrimaryButton";
import {useMediaQuery} from "react-responsive";
import {MintCountButton} from "../../../component/MintCountButton";

interface Props{

}

const WhyPet:  React.FC<Props> = () => {

    const isMobile = useMediaQuery({ query: '(max-width: 576px)' });

    return(
        <div className="why-pet" >
            <div className="why-pet__brand" >
                <img className="why-pet__brand__img" src={BrandImg} alt="brand" />
                <img className="why-pet__brand__back" src={BrandBackImg} alt="brand" />
            </div>
            <div className="why-pet__content-group" >
                <h2 className="why-pet__content-group__title" >Why you should pet Puppies?</h2>
                <text className="why-pet__content-group__content" >
                    10000 algorithmly generated crypto collective NFTs that <br/>
                    been generated<br/>
                    using hand illustrated attributes, spread over 20 breeds.
                </text>
                <text className="why-pet__content-group__content" style={{marginTop:8}} >
                    Each one unique all ranging in rarity.
                </text>

                <div className="why-pet__mobile-img-group" >
                    <div className="why-pet__mobile-img-group__rel-group" >
                        <img className="why-pet__mobile-img-group__rel-group__img" src={BrandImg} alt="brand" />
                        <img className="why-pet__mobile-img-group__rel-group__back" src={BrandBackImg} alt="brand-back" />
                    </div>
                </div>

                <div className="why-pet__content-group__btn-group" >
                    <MintCountButton />
                    <div style={{marginRight: isMobile ? 0 : 40, marginBottom: isMobile? 16 : 0}} ></div>
                    <PrimaryButton title="Mint Now" width={isMobile? 216: 112} isfullColor={true}/>
                    <div style={{marginRight: isMobile ? 0 : 40, marginBottom: isMobile? 16 : 0}} ></div>
                    <PrimaryButton title="View on Opensea" width={216} isfullColor={false} image={BtnBrand}/>
                </div>
            </div>
        </div>
    )
}

export default WhyPet;
