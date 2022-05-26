import { BrowserRouter, Route, Routes } from 'react-router-dom';
import App from '../App';

export function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/">
          <Route path=":filter" element={<App />} />
          <Route path="" element={<App />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
