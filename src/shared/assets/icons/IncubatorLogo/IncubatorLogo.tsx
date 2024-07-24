import { breakpoints } from '@/app/styles/breakpoints';
import { IncubatorLogoBig } from '@/shared/assets/icons/IncubatorLogo/IncubatorLogoBig';
import { IncubatorLogoSmall } from '@/shared/assets/icons/IncubatorLogo/IncubatorLogoSmall';
import { useMediaQuery } from '@/shared/hooks/useMediaQuery';

export const IncubatorLogo = () => {
  const isTablet = useMediaQuery(`(max-width: ${breakpoints.tablet})`);

  return isTablet ? <IncubatorLogoSmall /> : <IncubatorLogoBig />;
};
