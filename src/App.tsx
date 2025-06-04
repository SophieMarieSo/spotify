import React, { Suspense } from 'react';
import './App.css';
import { Route, Routes } from 'react-router';
import Loading from './common/components/Loading';
import { styled } from '@mui/material';

// lazy-loading - 필요할 때(실제로 페이지를 볼 때) 페이지를 로드 (초기에 전체 로드❌)
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

const LoadingLayout = styled('div')({
  height: '100vh',
  width: '100vw',
});

function App() {
  return (
    <Suspense
      fallback={
        <LoadingLayout>
          <Loading />
        </LoadingLayout>
      }
    >
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
    </Suspense>
  );
}

export default App;
