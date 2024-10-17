import { Menu } from 'antd';

const Header = () => {
  return (
    <Menu mode="horizontal">
      <Menu.Item key="home">Home</Menu.Item>
      <Menu.Item key="about">About</Menu.Item>
      <Menu.Item key="services">Services</Menu.Item>
      <Menu.Item key="contact">Contact</Menu.Item>
    </Menu>
  );
};

export default Header;
