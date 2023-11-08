// styles
import './Navigation.scss';

// icons
import menu_icon from '../../assets/icons/menu-icon.svg';
import search_icon from '../../assets/icons/search-icon.svg';
import logo_icon from '../../assets/icons/logo-icon.svg';
import location_icon from '../../assets/icons/location-icon.svg';
import bag_icon from '../../assets/icons/bag-icon.svg';
import user_icon from '../../assets/icons/user-icon.svg';

function Navigation() {
  return (
    <nav className='nav'>
      <div className='flex-wrapper'>
        <a href='#'>
          <img src={menu_icon} alt='menu icon' className='nav-menu-icon' />
        </a>
        <a href='#'>
          <img src={location_icon} alt='location icon' className='nav-location-icon' />
        </a>
        <a href='#'>
          <div className='nav-phone-num'>8 800 500 88 99</div>
        </a>
      </div>
      <a href='#'>
        <img src={logo_icon} alt='logo icon' className='nav-logo' />
      </a>
      <div className='flex-wrapper'>
        <a href='#'>
          <img src={bag_icon} alt='bag icon' className='nav-bag-icon' />
        </a>
        <a href='#'>
          <img src={search_icon} alt='search icon' className='nav-search-icon' />
        </a>
        <a href='#'>
          <img src={user_icon} alt='user icon' className='nav-user-icon' />
        </a>
      </div>
    </nav>
  );
}

export default Navigation;
