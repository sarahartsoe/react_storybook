import React from 'react';
import { Avatar } from 'antd';
import { UserOutlined } from '@ant-design/icons';

export const NbosClientInfoAvatar = () => {
  return (
    <Avatar
      shape="circle"
      size={64}
      style={{
        backgroundColor: '#87d068',
      }}
      icon={<UserOutlined />}
    />
  );
};
