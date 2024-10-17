import React from 'react';
import { Layout, Menu } from 'antd';
import { Link } from 'react-router-dom';
import { Pagination } from "antd";
import { Avatar, Badge, Space, } from 'antd';
import { UserOutlined } from '@ant-design/icons';
import { Card } from 'antd';
import { Carousel } from 'antd';

const contentStyle = {
    margin: 0,
    height: '160px',
    color: '#fff',
    lineHeight: '160px',
    textAlign: 'center',
    background: '#364d79',
  };
const { Header, Content } = Layout;

const Administartor = () => {
    const onChange = (currentSlide) => {
        console.log(currentSlide);
      };
    return ( 
        <div className='menusubscribe' id='menusubscribe'>
            <div className='icon-styller'>
            <Space size={24}>
    <Badge count={1}>
      <Avatar shape="square" icon={<UserOutlined />} />
    </Badge>
    <Badge dot>
      <Avatar shape="square" icon={<UserOutlined />} />
    </Badge>
  </Space>
            </div>
            <div className='divelop'>
            <div className='slidercarusel'>
            <Carousel afterChange={onChange}>
      <div>
        <h3 style={contentStyle}>1</h3>
      </div>
      <div>
        <h3 style={contentStyle}>2</h3>
      </div>
      <div>
        <h3 style={contentStyle}>3</h3>
      </div>
      <div>
        <h3 style={contentStyle}>4</h3>
      </div>
    </Carousel>
            </div>
            </div>
            <div className='classsnamefooter'>
            <Card
    title="Basic"
    bordered={false}
    style={{
      width: 300,
    }}
  >
    <p>100+ Level in programing</p>
    <p>Learn in acterative</p>
    <p>30% in subscribe mounth</p>
  </Card>
  <Card
    title="Standart"
    bordered={false}
    style={{
      width: 300,
    }}
  >
    <p>200+ Level in programing</p>
    <p>Learn in acterative</p>
    <p>Speaking in seignior</p>
    <p>10% in subscribe mounth</p>
  </Card>
  <Card
    title="Premium"
    bordered={false}
    style={{
      width: 300,
    }}
  >
    <p>500+ Level in programing</p>
    <p>Learn in acterative</p>
    <p>Speaking in seignior</p>
    <p>Let's find a job</p>
    <p>5% in subscribe mounth</p>
  </Card>
            </div>
            
        <div  className='footeris'>
            <Pagination defaultCurrent={1} total={50} />
        </div>
        </div>
    );
};

export default Administartor;
