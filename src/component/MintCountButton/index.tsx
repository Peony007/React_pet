import React, {useState} from "react";

import "./styles.scss";
import MinusImg from "../../assets/svg/minus.svg";
import PlusImg from "../../assets/svg/plus.svg";


interface Props{

}

export const MintCountButton : React.FC<Props> = () => {

    const [count, setCount] = useState<number>(0);
    const funSetCount = (count: number) => {
        if (count >= 20){
            setCount(20);
        }
        else if (count < 0){
            setCount(0);
        }else {
            setCount(count);
        }
    }

    return(
        <div className="mint-count" >
            <div className="mint-count__img-group" onClick={() => funSetCount(count - 1)}>
                <img className="mint-count__img-group__img" src={MinusImg} alt="minus" />
            </div>
            <div className="mint-count__count-group"  >
                <p>{count}</p>
            </div>
            <div className="mint-count__img-group" onClick={() => funSetCount(count + 1)}>
                <img className="mint-count__img-group__img" src={PlusImg} alt="plus" />
            </div>
        </div>
    );
}



