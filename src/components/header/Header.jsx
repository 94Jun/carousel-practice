import './header.css'
import Title from '../title/Title';
import Menu from '../menu/Menu';
import MySearchIcon from '../search_icon/MySearchIcon';
import DensityMediumIcon from '@mui/icons-material/DensityMedium';

const Header = () => {
  return (
    <header className='header_wrap'>
      <div className='my_container h_flex'>
        <Title />
        <div className='h_icon_wrap'>
          <MySearchIcon className='my_search_icon'/>
          <Menu />
        </div>
      </div>
    </header>
  );
}
 
export default Header;