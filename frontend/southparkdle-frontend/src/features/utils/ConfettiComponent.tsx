import React, { useEffect, useState } from 'react';
import Confetti from 'react-confetti';
import useWindowSize from 'react-use/lib/useWindowSize';

const ConfettiComponent: React.FC<{ run: boolean }> = ({ run }) => {
  const { width, height } = useWindowSize();

  return (
    <Confetti
      width={width}
      height={height}
      run={run}
      recycle={false}
      numberOfPieces={500}
    />
  );
};

export default ConfettiComponent;