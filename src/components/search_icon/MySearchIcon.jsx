import { Link } from 'react-router-dom';
import SearchPage from '../../pages/search/SearchPage';
import SearchIcon from '@mui/icons-material/Search';
import './search_icon.css';

const MySearchIcon = () => {
  return (
    <>
      <Link to="/search"><SearchIcon className="search_open_btn"/></Link>
    </>
  );
}
 
export default MySearchIcon;