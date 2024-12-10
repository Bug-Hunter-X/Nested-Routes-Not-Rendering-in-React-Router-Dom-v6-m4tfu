import { BrowserRouter, Routes, Route, useRoutes } from 'react-router-dom';

function App() {
  let element = useRoutes([
    {path: '/', element: <Home/>},
    {path: '/about', element: <About/>},
    {path: '*', element: <NotFound/>}
  ]);
  return (
    <BrowserRouter>
      {element}
    </BrowserRouter>
  );
}

function Home() { 
  return (
    <div>Home</div>
  );
}

function About() {
  return (
    <div>About</div>
  );
}

function NotFound() {
  return (
    <div>Not Found</div>
  );
}

export default App; 