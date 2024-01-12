import classNames from 'classnames';
import apartmentLayout from '../../assets/images/apartment-layout.png';

import { VIEWS } from '../../data/views';

export const ApartmentLayout = ({ view, setView }) => {
    const handleViewClick = (e) => {
        const { target } = e;
        const view = target.dataset.view;

        setView(view);
    }

    return (
        <div className="apartment-layout">
            <div className="apartment-layout__image">
                <img width={788} height={718} src={apartmentLayout} alt="Apartment layout" title='Apartment layout' />
            </div>
            {
                VIEWS.map((viewItem, i) => (
                    <button data-room={viewItem.name} key={i} dangerouslySetInnerHTML={{ __html: viewItem.image }} onClick={handleViewClick} data-view={viewItem.id} type='button' className={classNames('apartment-layout__view', `apartment-layout__view--0${++i}`, { "is-active": viewItem.id === view })}>
                    </button>
                ))
            }
        </div>
    )
}