import './title.css'
import { Link } from 'react-router-dom';
const Title = () => {
  return (
      <Link to="/"><h1 className="title">InnerMind</h1></Link>
  );
}
 
export default Title;