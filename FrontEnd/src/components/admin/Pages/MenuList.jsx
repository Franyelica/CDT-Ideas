import { Menu } from "antd";
import {
    HomeOutlined, SmileOutlined,
    PieChartOutlined, BlockOutlined,
    TeamOutlined
} from "@ant-design/icons";
import { Link } from "react-router-dom";

const MenuList = () => {
    return (
        <Menu mode="inline" className="menu-bar">
            <Link to={"/"} className="content">
                <Menu.Item key="home" icon={<HomeOutlined />} style={{ color: '#293377' }}>
                    Inicio
                </Menu.Item>
            </Link>
            <Link to={"/me"} className="content">
                <Menu.Item key="home" icon={<SmileOutlined style={{ color: '#293377' }} />}>
                    Mi perfil
                </Menu.Item>
            </Link>

            <Link to={"/admin/dashboard"} className="content">
                <Menu.Item key="home" icon={<PieChartOutlined style={{ color: '#293377' }} />}>
                    Panel administrativo
                </Menu.Item>
            </Link>

            <Link to={"/admin/patents"} className="content">
                <Menu.Item key="home" icon={<BlockOutlined style={{ color: '#293377' }} />}>
                    Patentes
                </Menu.Item>
            </Link>

            <Link to={"/admin/users"} className="content">
                <Menu.Item key="home" icon={<TeamOutlined style={{ color: '#293377' }} />}>
                    Usuarios
                </Menu.Item>
            </Link>
        </Menu >
    );
};
export default MenuList;