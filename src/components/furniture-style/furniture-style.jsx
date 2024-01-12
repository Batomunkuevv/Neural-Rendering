import classNames from 'classnames';
import styleImage from '../../assets/images/furniture-style.jpg';
import lockIcon from '../../assets/images/icons/lock.svg';

export const FurnitureStyle = ({ currentStyle, setStyle, name, type, isAvailable }) => {
    const handleStyleClick = () => {
        setStyle(type);
    }

    return (
        <li onClick={handleStyleClick} className={classNames('furniture-style', { 'is-not-available': !isAvailable }, { 'is-active': currentStyle === type })}>
            <div className="furniture-style__image">
                <img src={styleImage} alt={name} title={name} />
            </div>
            <span className="furniture-style__name">{name}</span>
            {
                !isAvailable && (
                    <div className="furniture-style__lock">
                        <img src={lockIcon} alt="Lock" title='Lock' />
                    </div>
                )
            }
        </li>
    )
}