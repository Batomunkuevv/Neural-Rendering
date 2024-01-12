import classNames from 'classnames';
import placeholder from '../../assets/images/placeholder.png';
import downloadIcon from '../../assets/images/icons/download.svg';

export const ResultPopup = ({ image, isShow }) => {
    return (
        <div className={classNames('result-popup', { 'is-hidden': isShow === false })}>
            <div className='result-popup__image'>
                <img src={image === null ? placeholder : image} alt="Furniture" title="Furniture" />
            </div>
            <a href={image} download="neural-rendering-result" className="result-popup__download">
                <img src={downloadIcon} alt="Download" title='Download' />
            </a>
        </div>
    )
}