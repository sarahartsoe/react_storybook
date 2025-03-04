import React from 'react';
import Avatar, { genConfig } from 'react-nice-avatar';

export const NbosClientInfoAvatar = () => {
  const config = genConfig({
    sex: 'man',
    mouthStyle: 'smile',
    shape: 'circle',
    bgColor: 'lightsteelblue',
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
    shirtColor: 'white',
  });
  return <Avatar style={{ width: '5rem', height: '5rem' }} {...config} />;
};
