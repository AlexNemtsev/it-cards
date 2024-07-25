import { IncubatorLogoBig } from '@/app/Layout/ui/IncubatorLogo/IncubatorLogoBig';
import { IncubatorLogoSmall } from '@/app/Layout/ui/IncubatorLogo/IncubatorLogoSmall';
import { breakpoints } from '@/app/styles/breakpoints';
import { useMediaQuery } from '@/shared/hooks/useMediaQuery';

export const IncubatorLogo = () => {
  const isTablet = useMediaQuery(`(max-width: ${breakpoints.tablet})`);

  return isTablet ? <IncubatorLogoSmall /> : <IncubatorLogoBig />;
};
