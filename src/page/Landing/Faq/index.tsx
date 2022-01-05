import React from "react";


interface Props{

}

const Faq : React.FC<Props> = () => {

    return(
        <div className="faq" >
            <h2 className="faq__title" >FAQ's</h2>
            <div className="faq__content-group" >
                <h3 className="faq__content-group__title" style={{marginTop:0}} >
                    Where does my NFT go after I purchase?
                </h3>
                <text className="faq__content-group__content"   >
                    Your Puppy NFT's will appear in whatever address, or connected wallet you used to purchase. You<br/>
                    can see your transaction history by clicking on your wallet address in the header or view all minted<br/>
                    tokens on Opensea.
                </text>
                <h3 className="faq__content-group__title"   >
                    Can I resell my Puppies?
                </h3>
                <text className="faq__content-group__content"  >
                    Yes! You can list your NFT for sale on OpenSea. Find out more here: How do I list an NFT to sell?
                </text>
                <h3 className="faq__content-group__title" >
                    Are the images stored on IPFS?
                </h3>
                <text className="faq__content-group__content"  >
                    Yes, once all 5000 NFT's have been minted, we will upload all images to IPFS where they will live<br/>
                    until the end of time.
                </text>
                <h3 className="faq__content-group__title"  >
                    What can I do with my Puppies?
                </h3>
                <text className="faq__content-group__content"  >
                    When you purchase an NFT, you own the underlying Satoshible, the Art, completely. You may use the<br/>
                    NFT and it's designated image for personal use. We grant you a worldwide, royalty-free license to use,<br/>
                    copy, and display the purchased Art, along with any extensions that you choose to create or use,<br/>
                    solely for your own personal, non-commercial use. The rights of ownership described above are<br/>
                    bound to the underlying NFT via the smart contract. Any transfer of the NFT token will also transfer<br/>
                    the rights completly to the new owner.
                </text>
            </div>
        </div>
    );
}

export default Faq;
