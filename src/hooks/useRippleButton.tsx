import React from 'react';

export const useRippleButton = (isRippleEffect: boolean) => {
  if (!isRippleEffect) {
    return;
  }
  const [coords, setCoords] = React.useState({x: -1, y: -1});
  const [isRippling, setIsRippling] = React.useState(false);

  React.useEffect(() => {
    if (coords.x !== -1 && coords.y !== -1) {
      setIsRippling(true);
      setTimeout(() => setIsRippling(false), 300);
    } else setIsRippling(false);
  }, [coords]);

  React.useEffect(() => {
    if (!isRippling) setCoords({x: -1, y: -1});
  }, [isRippling]);

  return {setCoords, coords, isRippling};
};
