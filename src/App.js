import './App.css';
import MyFooter from './components/Footer';
import MyContent from './components/Content';
import Home from './components/Home';
import Contact from './components/Contact';
import { Layout, Menu } from 'antd';

import { HomeOutlined, RadarChartOutlined, ContactsOutlined } from '@ant-design/icons';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

const { Header, Footer, Content } = Layout;

function App() {
  return (
    <>
      <Router>
        <Layout>
          <Header>
            <Menu theme="dark" mode="horizontal">
                <Menu.Item key="Home" type="primary" icon={<HomeOutlined />}>
                  Home
                  <Link to="/" />
                </Menu.Item>
                <Menu.Item key="Drinks" icon={<RadarChartOutlined />}>
                  Drinks
                  <Link to="/drinks" />
                </Menu.Item>
                <Menu.Item key="Contact" icon={<ContactsOutlined />}>
                  Contact
                  <Link to="/contact" />
                </Menu.Item>
            </Menu>
          </Header>

          <Content>
            <Routes>
              <Route exact path="/" element={<Home />} />
              <Route path="/drinks" element={<MyContent />} />
              <Route path="/contact" element={<Contact />} />
            </Routes>
          </Content>

          <Footer style={{ textAlign: 'center' }}><MyFooter /></Footer> 

        </Layout>  
      </Router>
    </>
  );
}

export default App;