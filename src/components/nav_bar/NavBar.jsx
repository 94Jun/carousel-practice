import './nav_bar.css';
import { Link } from 'react-router-dom';

const NavBar = () => {
  return (
      <nav className="nav_wrap">
        <div className="my_container">
        <ul className="nav_list">
          <Link to="/booking"><li>예약하기</li></Link>
          <Link to="/book_status"><li>예약현황</li></Link>
          <Link to="/online"><li>온라인 상담</li></Link>
          <Link to="/info"><li>센터정보</li></Link>
          </ul>
        </div>
      </nav>
  );
}
 
export default NavBar;