import { useLogout } from '@/entities/auth/api/hooks';
import { LogOutIcon } from '@/shared/assets/icons/LogOutIcon';
import { Button } from '@/shared/ui/Button';

export const LogoutButton = () => {
  const [logout] = useLogout();

  return (
    <Button onClick={logout} variant="secondary">
      <LogOutIcon />
      Logout
    </Button>
  );
};
