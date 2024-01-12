import cameraIcon from '../../assets/images/icons/camera.svg';

export const Instruction = ({ setIsShowInstruction }) => {
    const handleCloseClick = () => {
        setIsShowInstruction(false);
    }

    return (
        <div className="instruction">
            <div className="instruction__body">
                <button onClick={handleCloseClick} type="button" className="instruction__close">
                    <svg xmlns="http://www.w3.org/2000/svg" width="21" height="21" viewBox="0 0 21 21" fill="none">
                        <path d="M3.55202 1.086L10.5 8.034L17.412 1.122C17.5647 0.95949 17.7486 0.829489 17.9528 0.73979C18.1569 0.650092 18.3771 0.602544 18.6 0.599998C19.0774 0.599998 19.5353 0.789641 19.8728 1.12721C20.2104 1.46477 20.4 1.92261 20.4 2.4C20.4042 2.62068 20.3633 2.8399 20.2797 3.04419C20.1961 3.24848 20.0717 3.43353 19.914 3.588L12.912 10.5L19.914 17.502C20.2107 17.7922 20.3847 18.1853 20.4 18.6C20.4 19.0774 20.2104 19.5352 19.8728 19.8728C19.5353 20.2104 19.0774 20.4 18.6 20.4C18.3706 20.4095 18.1417 20.3712 17.9279 20.2876C17.7141 20.2039 17.52 20.0767 17.358 19.914L10.5 12.966L3.57002 19.896C3.41793 20.0531 3.23624 20.1785 3.03543 20.265C2.83462 20.3515 2.61866 20.3974 2.40002 20.4C1.92263 20.4 1.4648 20.2104 1.12723 19.8728C0.789667 19.5352 0.600024 19.0774 0.600024 18.6C0.595828 18.3793 0.636772 18.1601 0.720345 17.9558C0.803918 17.7515 0.928357 17.5665 1.08602 17.412L8.08802 10.5L1.08602 3.498C0.789357 3.20776 0.615396 2.81474 0.600024 2.4C0.600024 1.92261 0.789667 1.46477 1.12723 1.12721C1.4648 0.789641 1.92263 0.599998 2.40002 0.599998C2.83202 0.605398 3.24602 0.779998 3.55202 1.086Z" fill="currentColor" />
                    </svg>
                </button>
                <p className="instruction__text">
                    Click camera Icon <span className="instruction__text-icon">
                        <img src={cameraIcon} alt="Camera" title='Camera' />
                    </span> to select view
                </p>
            </div>
        </div>
    )
}