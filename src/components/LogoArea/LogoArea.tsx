import { Link } from 'react-router-dom'
import './LogoAreaa.scss'

type Props = {}

const LogoArea = (props: Props) => {
    return (
        <>
            <div className="logo-area">
                <div className="grid">
                    <div className="logo-wrapper">
                        <Link to="/" className="logo">
                            <img src="/images/header/allure-logo.png" alt="" />
                        </Link>
                    </div>
                </div>
            </div>
        </>
    )
}

export default LogoArea
