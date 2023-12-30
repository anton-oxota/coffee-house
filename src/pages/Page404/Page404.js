import './page404.scss'
import { Link } from 'react-router-dom'

function Page404() {
    return (
        <>
            <section className='page-404'>
                <div className="container">
                    <div className="page-404__wrapper">
                        <div className="page-404__title">404</div>
                        <div className="page-404__subtitle">Page not found</div>
                        <Link className='page-404__link' to='/'>Go home</Link>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Page404