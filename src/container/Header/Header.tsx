import LogoArea from "components/LogoArea/LogoArea";
import Menu from "../../components/Menu/Menu";

type Props = {}

const Header = (props: Props) => {
    return (
        <header className="header">
            <div className="container">
                <LogoArea/>
                <Menu />
            </div>
        </header>
    )
}

export default Header