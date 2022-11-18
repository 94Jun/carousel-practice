import './App.css';
import './font.css';
import HomePage from './pages/home/HomePage';
import { Routes, Route } from 'react-router-dom';
import SearchPage from './pages/search/SearchPage';
import './media.css'
import BookingPage from './pages/booking/BookingPage';
import BookStatusPage from './pages/book_status/BookStatusPage';
import OnlinePage from './pages/online/OnlinePage';
import InfoPage from './pages/info/InfoPage';

function App() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<HomePage />}></Route>
        <Route path='/search' element={<SearchPage />}></Route>
        <Route path='/booking' element={<BookingPage/>}></Route>
        <Route path='/book_status' element={<BookStatusPage />}></Route>
        <Route path='/online' element={<OnlinePage />}></Route>
        <Route path='/info' element={<InfoPage/>}></Route>
      </Routes>
    </div>
  );
}

export default App;
