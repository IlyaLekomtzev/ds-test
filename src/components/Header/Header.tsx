import { FC } from 'react';
import { Link } from 'react-router-dom';
import { AppRoute } from '../../const';
import './Header.scss';

const Header: FC = () => {
    return (
        <header className="header">
            <Link to={AppRoute.Main} className="header__link">
                <img
                    className="header__logo"
                    src="https://brandpalettes.com/wp-content/uploads/2020/12/spacex-02.png"
                    alt="logo"
                />
            </Link>
        </header>
    );
};

export default Header;