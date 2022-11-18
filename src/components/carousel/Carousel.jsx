import './carousel.css';
import Crop169OutlinedIcon from '@mui/icons-material/Crop169Outlined';
import StopIcon from '@mui/icons-material/Stop';
import { useState, useEffect, useRef } from "react";
import { renderMatches } from 'react-router-dom';

const Carousel = () => {
  const carouselRef = useRef(null);
  const interval = useRef(null);
  const btnRef = useRef([]);
  const imgList = [0, 1, 2, 3, 4, 5, 6, 7];
  const [imgNumber, setImgNumber] = useState(0);
  const chnageImgNumber = () => { 
    if (imgNumber === imgList.length - 1) {
      setImgNumber(0)
    } else { 
      setImgNumber(prev => prev + 1);
    }
  }
  const slideImg = () => { 
    if (imgNumber === 0) {
      carouselRef.current.style.transition = 'none';
    } else { 
      carouselRef.current.style.transition = '500ms';
    }
    carouselRef.current.style.transform = `translateX(-${imgNumber}00%)`
  }
  const changeBtnColor = () => { 
    imgList.map((el) => { 
      btnRef.current[el].classList.remove('btn_active');
    })
    btnRef.current[imgNumber].classList.add('btn_active');
  }
  useEffect(() => {
    interval.current = setInterval(chnageImgNumber, 5000)
    console.log(imgNumber)
    slideImg();
    changeBtnColor();
    return () => { 
      clearInterval(interval.current)
    }
  }, [imgNumber])
  return (
      <section className="my_carousel">
        <div className="my_container">
          <div className="img_wrap">
            <div className="crs_img" ref={carouselRef}>
            {
              imgList.map((el) => { 
                return <img key={el} src={`/img/img${el}.jpg`}/>
              })
            }
            </div>
          </div>
          <div className="crs_btn">
            {
              imgList.map((el,idx) => { 
                return <StopIcon key={el} id={`display_btn${idx}`}
                  className="crs_display_btn" ref={(x)=>btnRef.current[el]=x} fontSize="small" />
              })
            }
          </div>
        </div>

      </section>
  );
}
 
export default Carousel;