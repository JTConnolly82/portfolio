import React from 'react';
import Particles from 'react-particles-js';
import all from './logoParticles.json'

const particleVar = all



const ParticleComponent = () => {
  return (
     <div
     style={{
      position: "absolute",
      width: "100%",
      height: '100%',
      zIndex: '1',
    }}
  >
  <Particles params={particleVar} />
</div>
  )
}


export default ParticleComponent;
