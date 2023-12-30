import './App.scss';

import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { useState, createContext, lazy, Suspense } from 'react';

// import Home from './pages/home/HomePage';
// import ProductsPage from './pages/products/ProductsPage';
// import SingleProductPage from './pages/singleProduct/SingleProductPage';
// import Page404 from './pages/Page404/Page404';

import Loading from './components/loading/Loading';

const Home = lazy(() => import('./pages/home/HomePage'))
const ProductsPage = lazy(() => import('./pages/products/ProductsPage'))
const SingleProductPage = lazy(() => import('./pages/singleProduct/SingleProductPage'))
const Page404 = lazy(() => import('./pages/Page404/Page404'))


export const ProductContext = createContext();

function App() {
    const [products] = useState([
        {
            "id": 1,
            "img": "https://s3-alpha-sig.figma.com/img/b8a2/cd1c/51ba743751d995fdce4bd5d988619433?Expires=1704672000&Signature=A9sW-7z5g2lfuLaoVNOQo3W35Vb0NF2zeta9zOriNsI-FdOKQehfp9TWLeg9wmqQPxz5dXi61vDb1-hLyirIHebAhkSrdd2YJ6bZnOBZwFXiEpWAJbDqUlSTY~eoIf7RC3xzqHjNrCGSCnnuSOxpF8OUxWnnBrpSDxpmnsmBksoPYN~Ew-M4247VeRXEq8K5hdHQmBu50aa4gWgtZryn2h3XYPx4vzCrl0LDuasVrxspSxkREjdzHJjkkjK9X~D4WnTLt8vOgM1kVoaRSQYfqZJSO9kTkZouHThkrdB5k3HnPElhbJ0YjcQxRbPs52b70Rb2ApnJKQQlI2MsCBktlw__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
            "title": "One Coffee 1 kg",
            "country": "brazil",
            "price": "5.99",
            "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
        },
        {
            "id": 2,
            "img": "https://s3-alpha-sig.figma.com/img/fab6/a1ff/d821960801d00e7476bcc3d424ae62de?Expires=1704672000&Signature=bWX8EYcZYcSyhsYo1on1WVyAi4ZJlFWYKKcP0gtLUPhTK4jnYzw3z-wv9k-bFum8Nkm5Ewh4qGUAGGtgMprxryjBLV~VQZYK1piIHbLmaBrYUEGC05ZnwiAI9w7~3EU~Wqb76tBmc8iiMFNyjgj3-uHOFrdQ3SQi2xndi0LxocFEBJWcoM3LfhS1hbXw8bwzh-rQxx6o5bB5Vv2ysJckia4pG1f7s9aU0jRizKd0Dukq~spDsUMCgXizQweiM0e5ittrUfH712DFT7zehFDO1BglBmfWkXuweAbva-d~BVLS9NDb9F1F8fNOPjr7rzgOiQtzOaO86clrdNjVC~PiAw__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
            "title": "Two Coffee 1 kg",
            "country": "kenya",
            "price": "10.99",
            "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
        },
        {
            "id": 3,
            "img": "https://s3-alpha-sig.figma.com/img/16dd/4342/f1a24fa2774035900f1c542555bd50d2?Expires=1704672000&Signature=UKLPHGeZS2XZlY60VvlfDsAwDIxOxrM~3wwUpMixYRfSjkVEwGhofwNVlvQ2n~BhBiv9PC3MAI9vN~M8zpWZsW45sSM2fK-Q7lRU1tihJr8jfkrqW8DwpJ28C2MvmhW5RDocaWcriPhNseYnSHFqQf5np22lipzEN8XUI38eaChXvoAIFDgzCRwDdxMb-YnWJ7cEuvSNKzrfZAfarbryc49ZlAFTmbUHE6ZnxR4wKnlQOxM5hxh7HZRByH86yE33m6-2ypXfr7iQO0AmYm5nZfZOtJPqMpFdVUueRebFeXkGZp2OCoS5CP4fEiEXQCDJKbgv788UCf0IA-~6KcjvqA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
            "title": "One Coffee 1 kg",
            "country": "columbia",
            "price": "15.99",
            "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
        },
        {
            "id": 4,
            "img": "https://s3-alpha-sig.figma.com/img/16dd/4342/f1a24fa2774035900f1c542555bd50d2?Expires=1704672000&Signature=UKLPHGeZS2XZlY60VvlfDsAwDIxOxrM~3wwUpMixYRfSjkVEwGhofwNVlvQ2n~BhBiv9PC3MAI9vN~M8zpWZsW45sSM2fK-Q7lRU1tihJr8jfkrqW8DwpJ28C2MvmhW5RDocaWcriPhNseYnSHFqQf5np22lipzEN8XUI38eaChXvoAIFDgzCRwDdxMb-YnWJ7cEuvSNKzrfZAfarbryc49ZlAFTmbUHE6ZnxR4wKnlQOxM5hxh7HZRByH86yE33m6-2ypXfr7iQO0AmYm5nZfZOtJPqMpFdVUueRebFeXkGZp2OCoS5CP4fEiEXQCDJKbgv788UCf0IA-~6KcjvqA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
            "title": "Three Coffee 1 kg",
            "country": "columbia",
            "price": "15.99",
            "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
        },
        {
            "id": 5,
            "img": "https://s3-alpha-sig.figma.com/img/fab6/a1ff/d821960801d00e7476bcc3d424ae62de?Expires=1704672000&Signature=bWX8EYcZYcSyhsYo1on1WVyAi4ZJlFWYKKcP0gtLUPhTK4jnYzw3z-wv9k-bFum8Nkm5Ewh4qGUAGGtgMprxryjBLV~VQZYK1piIHbLmaBrYUEGC05ZnwiAI9w7~3EU~Wqb76tBmc8iiMFNyjgj3-uHOFrdQ3SQi2xndi0LxocFEBJWcoM3LfhS1hbXw8bwzh-rQxx6o5bB5Vv2ysJckia4pG1f7s9aU0jRizKd0Dukq~spDsUMCgXizQweiM0e5ittrUfH712DFT7zehFDO1BglBmfWkXuweAbva-d~BVLS9NDb9F1F8fNOPjr7rzgOiQtzOaO86clrdNjVC~PiAw__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
            "title": "Three Coffee 1 kg",
            "country": "kenya",
            "price": "10.99",
            "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
        },
        {
            "id": 6,
            "img": "https://s3-alpha-sig.figma.com/img/16dd/4342/f1a24fa2774035900f1c542555bd50d2?Expires=1704672000&Signature=UKLPHGeZS2XZlY60VvlfDsAwDIxOxrM~3wwUpMixYRfSjkVEwGhofwNVlvQ2n~BhBiv9PC3MAI9vN~M8zpWZsW45sSM2fK-Q7lRU1tihJr8jfkrqW8DwpJ28C2MvmhW5RDocaWcriPhNseYnSHFqQf5np22lipzEN8XUI38eaChXvoAIFDgzCRwDdxMb-YnWJ7cEuvSNKzrfZAfarbryc49ZlAFTmbUHE6ZnxR4wKnlQOxM5hxh7HZRByH86yE33m6-2ypXfr7iQO0AmYm5nZfZOtJPqMpFdVUueRebFeXkGZp2OCoS5CP4fEiEXQCDJKbgv788UCf0IA-~6KcjvqA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
            "title": "AROMISTICO Coffee 1 kg",
            "country": "columbia",
            "price": "15.99",
            "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
        }
    ])

    const [bestProducts] = useState([
        {
            "id": 1,
            "img": "https://s3-alpha-sig.figma.com/img/b8a2/cd1c/51ba743751d995fdce4bd5d988619433?Expires=1704672000&Signature=A9sW-7z5g2lfuLaoVNOQo3W35Vb0NF2zeta9zOriNsI-FdOKQehfp9TWLeg9wmqQPxz5dXi61vDb1-hLyirIHebAhkSrdd2YJ6bZnOBZwFXiEpWAJbDqUlSTY~eoIf7RC3xzqHjNrCGSCnnuSOxpF8OUxWnnBrpSDxpmnsmBksoPYN~Ew-M4247VeRXEq8K5hdHQmBu50aa4gWgtZryn2h3XYPx4vzCrl0LDuasVrxspSxkREjdzHJjkkjK9X~D4WnTLt8vOgM1kVoaRSQYfqZJSO9kTkZouHThkrdB5k3HnPElhbJ0YjcQxRbPs52b70Rb2ApnJKQQlI2MsCBktlw__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
            "title": "Solimo Coffee Beans 2 kg",
            "country": "brazil",
            "price": "5.99",
            "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
        },
        {
            "id": 2,
            "img": "https://s3-alpha-sig.figma.com/img/fab6/a1ff/d821960801d00e7476bcc3d424ae62de?Expires=1704672000&Signature=bWX8EYcZYcSyhsYo1on1WVyAi4ZJlFWYKKcP0gtLUPhTK4jnYzw3z-wv9k-bFum8Nkm5Ewh4qGUAGGtgMprxryjBLV~VQZYK1piIHbLmaBrYUEGC05ZnwiAI9w7~3EU~Wqb76tBmc8iiMFNyjgj3-uHOFrdQ3SQi2xndi0LxocFEBJWcoM3LfhS1hbXw8bwzh-rQxx6o5bB5Vv2ysJckia4pG1f7s9aU0jRizKd0Dukq~spDsUMCgXizQweiM0e5ittrUfH712DFT7zehFDO1BglBmfWkXuweAbva-d~BVLS9NDb9F1F8fNOPjr7rzgOiQtzOaO86clrdNjVC~PiAw__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
            "title": "AROMISTICO Coffee 1 kg",
            "country": "kenya",
            "price": "10.99",
            "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
        },
        {
            "id": 3,
            "img": "https://s3-alpha-sig.figma.com/img/16dd/4342/f1a24fa2774035900f1c542555bd50d2?Expires=1704672000&Signature=UKLPHGeZS2XZlY60VvlfDsAwDIxOxrM~3wwUpMixYRfSjkVEwGhofwNVlvQ2n~BhBiv9PC3MAI9vN~M8zpWZsW45sSM2fK-Q7lRU1tihJr8jfkrqW8DwpJ28C2MvmhW5RDocaWcriPhNseYnSHFqQf5np22lipzEN8XUI38eaChXvoAIFDgzCRwDdxMb-YnWJ7cEuvSNKzrfZAfarbryc49ZlAFTmbUHE6ZnxR4wKnlQOxM5hxh7HZRByH86yE33m6-2ypXfr7iQO0AmYm5nZfZOtJPqMpFdVUueRebFeXkGZp2OCoS5CP4fEiEXQCDJKbgv788UCf0IA-~6KcjvqA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
            "title": "Presto Coffee Beans 1 kg",
            "country": "columbia",
            "price": "15.99",
            "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
        },
    ])

    return (
        <BrowserRouter >
            <div className="App">
                <ProductContext.Provider value={{ products, bestProducts }}>
                    <Routes>
                        <Route path='/' element={<Suspense fallback={<Loading />}><Home /></Suspense>} />
                        <Route path='/products' element={<Suspense fallback={<Loading />}><ProductsPage /></Suspense>} />
                        <Route path='/products/:country' element={<Suspense fallback={<Loading />}><ProductsPage /></Suspense>} />
                        <Route path={`/product/:productId`} element={<Suspense fallback={<Loading />}><SingleProductPage /></Suspense>} />
                        <Route path={`*`} element={<Suspense fallback={<Loading />}><Page404 /></Suspense>} />
                    </Routes>
                </ProductContext.Provider>
            </div>
        </BrowserRouter>
    );
}

export default App;
