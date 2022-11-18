import { useRef } from 'react';
import Title from '../title/Title';
import './menu.css';
import DensityMediumIcon from '@mui/icons-material/DensityMedium';
import CloseIcon from '@mui/icons-material/Close';

const Menu = () => {
  const menuRef = useRef(null)
  const onClickMenu = () => { 
    menuRef.current.classList.add('translate');
  }
  const onClickClose = () => { 
    menuRef.current.classList.remove('translate');
  }
  
  return (
    <>
      <DensityMediumIcon onClick={onClickMenu} className='m_open_btn'/>
      <div className="menu_wrap" ref={menuRef}>
        <div className='m_title_wrap'>
          <div className='my_container'>
            <Title />
            <CloseIcon className='m_close_btn' onClick={onClickClose} />
          </div>
        </div>
      </div>
    </>
  );
}
 
export default Menu;