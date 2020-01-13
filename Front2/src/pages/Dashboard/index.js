
import React from 'react';
import 'antd/dist/antd.css';
import { Layout, Menu, Breadcrumb, Icon } from 'antd';

const { Header, Content, Footer, Sider } = Layout;
const { SubMenu } = Menu;

class SiderDemo extends React.Component {
  state = {
    collapsed: false,
  };

  onCollapse = collapsed => {
    console.log(collapsed);
    this.setState({ collapsed });
  };

  render() {
    return (
      <Layout style={{ minHeight: '100vh' }}>
        <Sider collapsible collapsed={this.state.collapsed} onCollapse={this.onCollapse} theme='light'>
          <div className="logo" />
          <Menu theme="light" defaultSelectedKeys={['1']} mode="inline">
            <Menu.Item key="1">
              <Icon type="home" />
              <span>Dashboard</span>
            </Menu.Item>
            <Menu.Item key="2">
              <Icon type="coffee" />
              <span>Ingredientes</span>
            </Menu.Item>
            <SubMenu
              key="sub1"
              title={
                <span>
                  <Icon type="container" />
                  <span>Estoque</span>
                </span>
              }
            >
              <Menu.Item key="3">Visualizar</Menu.Item>
              <Menu.Item key="4">Valores</Menu.Item>
            </SubMenu>
          </Menu>
        </Sider>
        <Layout>
          <Content style={{ margin: '0 16px' }}>
            <Breadcrumb style={{ margin: '16px 0' }}>
              <Breadcrumb.Item>User</Breadcrumb.Item>
              <Breadcrumb.Item>Bill</Breadcrumb.Item>
            </Breadcrumb>
            <div style={{ padding: 24, background: '#fff', minHeight: 360 }}>Bill is a cat.</div>
          </Content>
          <Footer style={{ textAlign: 'center' }}>LowStore Design ©2020 Copied by Gustavo Caldeira</Footer>
        </Layout>
      </Layout>
    );
  }
}

export default SiderDemo;