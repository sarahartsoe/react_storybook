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
    hairStyle: 'normal',
    faceColor: 'tan',
    earSize: 'small',
    hairColor: 'black',
    hairColorRandom: 'false',
    hatStyle: 'none',
    eyeStyle: 'round',
    glassesStyle: 'none',
    noseStyle: 'round',
    shirtStyle: 'polo',
    shirtColor: 'teal',
  });
  return (
    <Avatar
      style={{ width: '5rem', height: '5rem', float: 'center' }}
      {...config}
    />
  );
};
