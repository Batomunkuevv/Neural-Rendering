import gear from '../../assets/images/icons/gear.svg';

export const Placeholder = () => {
    return (
        <div className='placeholder'>
            <div className='placeholder__icon'>
                <img src={gear} alt="Gear" title='Gear' />
            </div>
            <h1 className='placeholder__title'>The mobile version of the site is under development</h1>
            <p className='placeholder__text'>Please, open it on your computer</p>
        </div>
    )
}