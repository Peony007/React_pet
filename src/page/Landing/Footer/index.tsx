import React from "react";


interface Props{

}

const Footer : React.FC<Props> = () => {

    return(
        <div className="footer" >
            <div className="footer__logo-container" >
                <p className="footer__logo-container__img" >Pet Puppies</p>
            </div>
            <div className="footer__mobile-divider" ></div>
            <div className="footer__tag-group">
                <h3 className="footer__tag-group__content"   >Terms & Condition</h3>
                <h3 className="footer__tag-group__content"  >Privacy Policy</h3>
                <h3 className="footer__tag-group__content" style={{marginRight:0}} >FAQ's</h3>
            </div>
        </div>
    );
}

export default Footer;
