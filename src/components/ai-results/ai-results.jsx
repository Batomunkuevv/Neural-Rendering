import { useState } from "react";

import { ResultPopup } from "../result-popup/result-popup";

export const AiResults = ({ isShowResultPopup, setIsShowResultPopup, results }) => {
    const [popupImage, setPopupImage] = useState(null);

    const handleResultClick = (e) => {
        const { target } = e;
        const targetIndex = target.dataset.index;

        setPopupImage(`data:image/png;base64,${results[targetIndex]}`);
        setIsShowResultPopup(true);
    }

    return (
        <div className='ai-results'>
            <ul className='ai-results__list'>
                {results.map((result, i) => (
                    <li data-index={i} onClick={handleResultClick} key={i} className='ai-results__item'>
                        <img src={`data:image/png;base64,${result}`} alt="furniture" title='furniture' />
                    </li>
                ))}
            </ul>
            <ResultPopup image={popupImage} isShow={isShowResultPopup} />
        </div>
    )
}