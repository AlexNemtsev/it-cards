import { breakpoints } from '@/app/styles/breakpoints';
import { useMediaQuery } from '@/shared/hooks/useMediaQuery';

import { IncubatorLogoBig } from './IncubatorLogoBig';
import { IncubatorLogoSmall } from './IncubatorLogoSmall';

export const IncubatorLogo = () => {
  const isTablet = useMediaQuery(`(max-width: ${breakpoints.tablet})`);

  return isTablet ? <IncubatorLogoSmall /> : <IncubatorLogoBig />;
};
