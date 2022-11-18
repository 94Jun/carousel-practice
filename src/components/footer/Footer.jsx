import './footer.css';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="my_container">
        <div className='f_title'>
          <p>InnerMind</p>
          <p className="p_number">000-0000-0000</p>
        </div>
        <ul className='f_list'>
          <Link to=''><li>서비스문의</li></Link>
          <Link to=''><li>이용약관</li></Link>
          <Link to=''><li>개인정보 취급방침</li></Link>
          <Link to=''><li>고객센터</li></Link>
        </ul>
        <ul className='f_copyright'>
          <li>주소 Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste eos veritatis in dicta illo! Repudiandae, autem! Repellendus dolorum eum expedita! Et ea perferendis, reiciendis sed odio minima vitae unde laborum.</li>
        </ul>
      </div>
    </footer>
  );
}
 
export default Footer;