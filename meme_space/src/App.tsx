import { LandingPage } from './pages/landing';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Layout } from './components/Layout';

export const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<LandingPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};
