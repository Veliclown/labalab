import React, { useState } from 'react';
import { Layout, Button } from 'antd';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import ThemeSwitch from './components/ThemeSwitch';
import AuthModal from './components/AuthModal';
import NewPage from './components/Administartor';
import Page1 from './components/Page1';
import Page2 from './components/Page2';

const { Header, Content } = Layout;

const App = () => {
    const [modalVisible, setModalVisible] = useState(false);
    const [darkTheme, setDarkTheme] = useState(false);
    const [selectedItems, setSelectedItems] = useState([false, false, false]); 
    const location = useLocation(); 

    const toggleTheme = (checked) => {
        document.body.style.backgroundColor = checked ? '#333' : '#fff';
        document.body.style.color = checked ? '#fff' : '#000';
        const menuSubscribeElement = document.getElementById('menusubscribe');
    if (menuSubscribeElement) {
        menuSubscribeElement.style.color = checked ?  '#000' : '#fff';
        menuSubscribeElement.style.backgroundColor = checked ? '#000' : '#fff';
    }
        setDarkTheme(checked);
    };

    return (
        <Layout>
            <Header className='header'>

                <Button onClick={() => setModalVisible(true)}>Авторизация</Button>
                <Button onClick={() => window.open('/new-page', '_blank')}>Открыть новую страницу</Button>
                <ThemeSwitch onChange={toggleTheme} />
            </Header>

           
            {location.pathname !== '/new-page' && (
                <Content style={{ padding: '20px' }}>
                    <Page1 selectedItems={selectedItems} setSelectedItems={setSelectedItems} />
                    <Page2 />
                </Content>
            )}

            <AuthModal visible={modalVisible} onClose={() => setModalVisible(false)} />
            <Routes>
                <Route path="/new-page" element={<NewPage />} />
            </Routes>
        </Layout>
    );
};

const AppWrapper = () => {
    return (
        <Router>
            <App />
        </Router>
    );
};

export default AppWrapper;
