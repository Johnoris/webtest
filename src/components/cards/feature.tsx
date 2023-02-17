import { FEATURE_SELECTED } from "assets/icons";
import IFeature from "interface/components/cards/feature";
import { useState } from "react";

const Feature = (props: IFeature) => {
    const [ isSelected, setIsSelected ] = useState<boolean>(props?.isSelected || false)
    return(
        <div onClick={() => setIsSelected(!isSelected)} className={ isSelected ? "selected feature": "feature" }>
            <div className="feature__img">
                {props.img}
            </div>
            <div className="feature__content">
                <h4>{props.title}</h4>
                <p>{props.text}</p>
            </div>
            { isSelected && <FEATURE_SELECTED/> }
        </div>
    )
}
export default Feature;