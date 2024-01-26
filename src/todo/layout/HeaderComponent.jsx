import { Link } from 'react-router-dom';
import { useAuth } from '../components/AuthContext';

const HeaderComponent = () => {

    const userAuth = useAuth()
    const isAuth = userAuth.isAuth

    return (
        <header className="border-bottom border-light border-5 mb-5 p-2">
        <div className="container">
            <div className="row">
                <nav className="navbar navbar-expand-lg">
                    <a className="navbar-brand ms-2 fs-2 fw-bold text-black" href="http://localhost:3000/login">admin</a>
                    <div className="collapse navbar-collapse">
                        <ul className="navbar-nav">
                            <li className="nav-item fs-5">
                                {isAuth && 
                                    <Link className="nav-link" to="/welcome/admin">Home</Link>
                                }
                                </li>
                            <li className="nav-item fs-5">
                                {isAuth && 
                                    <Link className="nav-link" to="/todos">Todos</Link>
                                }   
                                </li>
                        </ul>
                    </div>
                    <ul className="navbar-nav">
                        <li className="nav-item fs-5">
                            {!isAuth && 
                                <Link className="nav-link" to="/login">Login</Link>
                            }
                            </li>
                        <li className="nav-item fs-5">
                            {isAuth && 
                                <Link className="nav-link" to="/logout" onClick={userAuth.logout}>Logout</Link>
                            }
                            </li>
                    </ul>
                </nav>
            </div>
        </div>
    </header>
    );
};

export default HeaderComponent;