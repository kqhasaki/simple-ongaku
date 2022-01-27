import { BrowserRouter, Routes, Route } from 'react-router-dom'

import HomePage from '@/pages/Home'
import NotFoundPage from '@/pages/Page404'

const routes = [
  { path: '/', element: <HomePage /> },
  { path: '*', element: <NotFoundPage /> },
]

export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        {routes.map(({ path, element }, idx) => (
          <Route path={path} element={element} key={idx} />
        ))}
      </Routes>
    </BrowserRouter>
  )
}
