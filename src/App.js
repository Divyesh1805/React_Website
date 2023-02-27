import React, { Component } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { Layout, Menu, Button} from 'antd';
import Home from './Home';
import About from './About';
import Contact from './Contact';
import Timer from './Timer';

const { Header, Content, } = Layout;

class App extends Component {
  render() {
    return (
      <Router>
        <Layout className="layout">
          <Header>
            <Menu theme="dark" mode="horizontal">
              <Menu.Item key="1">
                <Link to="/">
                <Button type="dashed">Home</Button>
                </Link>
              </Menu.Item>
              <Menu.Item key="2">
                <Link to="/contact"><Button type="dashed">Contact</Button></Link>
              </Menu.Item>
              <Menu.Item key="3">
                <Link to="/about">About</Link>
              </Menu.Item>
              <Menu.Item key="4">
                <Link to="/timer">Timer</Link>
              </Menu.Item>
            </Menu>
          </Header>
          <Content style={{ padding: '0 50px' }}>
            <div className="site-layout-content">
              <Routes>
                <Route exact path="/" element={<Home />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/about" element={<About />} />
                <Route path="/timer" element={<Timer />} />
              </Routes>
            </div>
          </Content>
        </Layout>
      </Router>
    );
  }
}

export default App;
