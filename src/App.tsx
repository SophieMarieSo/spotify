import React from 'react';
import './App.css';
import { Route, Routes } from 'react-router';

// lazy-loading
const AppLayout = React.lazy(() => import('./layout/AppLayout'));
const HomePage = React.lazy(() => import('./pages/HomePage/HomePage'));
const SearchPage = React.lazy(() => import('./pages/SearchPage/SearchPage'));
const SearchKeywordPage = React.lazy(
  () => import('./pages/SearchKeywordPage/SearchKeywordPage')
);
const PlaylistDetailPage = React.lazy(
  () => import('./pages/PlaylistDetailPage/PlaylistDetailPage')
);
const PlaylistPage = React.lazy(
  () => import('./pages/PlaylistPage/PlaylistPage')
);

// 0. 사이드바 (playlist, menu)
// 1. 홈페이지 /
// 2. 서치페이지 /search
// 3. 서치결과페이지 /search/:keyword
// 4. playlist 상세페이지 /playlist/:id
// 5. playlist 페이지 /playlist

function App() {
  return (
    <Routes>
      <Route path='/' element={<AppLayout />}>
        <Route index element={<HomePage />} />
        <Route path='search' element={<SearchPage />} />
        <Route path='search/:keyword' element={<SearchKeywordPage />} />
        <Route path='playlist/:id' element={<PlaylistDetailPage />} />

        {/* mobile ver */}
        {/* <Route path='/playlist' element={<PlaylistPage />} /> */}
      </Route>
    </Routes>
  );
}

export default App;
