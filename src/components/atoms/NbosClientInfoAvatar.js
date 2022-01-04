import React from 'react';
// import { Avatar } from 'antd';
// import { UserOutlined } from '@ant-design/icons';
import Avatar, { genConfig } from 'react-nice-avatar';

export const NbosClientInfoAvatar = () => {
  const config = genConfig({
    sex: 'man',
    mouthStyle: 'smile',
    shape: 'circle',
    bgColor: 'pink',
  });
  return (
    <Avatar
      style={{ width: '5rem', height: '5rem', float: 'center' }}
      {...config}
    />
  );
};
