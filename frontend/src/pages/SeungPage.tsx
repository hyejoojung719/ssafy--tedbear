import React from 'react';
import Grid from '@mui/material/Grid';
import styled from 'styled-components';

const Box = styled.div`
  background-color: red;
`;

const picture = [
  {
    title:
      'How to Calm Your Anxiety, From a Neuroscientist | The Way We Work, a TED series',
    id: '6Af6b_wyiwI',
  },
  {
    title: 'The skill of self confidence | Dr. Ivan Joseph | TEDxRyersonU',
    id: 'RLESBHduKBs',
  },
  {
    title: 'The skill of self confidence | Dr. Ivan Joseph | TEDxRyersonU',
    id: 'wL8X31XWZW8',
  },
  {
    title:
      'How to motivate yourself to change your behavior | Tali Sharot | TEDxCambridge',
    id: 'BEBKC7Hqfr0',
  },
  {
    title:
      'How to motivate yourself to change your behavior | Tali Sharot | TEDxCambridge',
    id: 'LDVyOnf0t9M',
  },
  {
    title:
      'How to motivate yourself to change your behavior | Tali Sharot | TEDxCambridge',
    id: 'JH_Pa1hOEVc',
  },
  {
    title:
      'How to motivate yourself to change your behavior | Tali Sharot | TEDxCambridge',
    id: '9XGm_uHit5g',
  },
];

const SeungPage = () => {
  return (
    <div
      style={{
        position: 'relative',
        background: 'red',
        width: '500px',
        height: '50px',
      }}
    >
      <div
        style={{
          position: 'absolute',
          background: 'blue',
          width: '200px',
          height: '50px',
          left: '300px',
        }}
      ></div>
    </div>
  );
};

export default SeungPage;

{
  /* <img
style={{ width: '250px', height: '200px' }}
src={
  'https://i.ytimg.com/vi/' + pic.id + '/maxresdefault.jpg'
}
></img> */
}
