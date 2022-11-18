import './search_page.css'
import Header from "../../components/header/Header";
import SearchIcon from '@mui/icons-material/Search';
import NavBar from '../../components/nav_bar/NavBar';


const SearchPage = () => {
  return (
    <>
      <Header />
      <NavBar/>
      <form className="search_form">
        <div className='search_wrap'>
          <input type="text" placeholder='검색어를 입력하세요.' className='search_input'/>
          <SearchIcon />
        </div>
      </form>
    </>
    );
}
 
export default SearchPage;