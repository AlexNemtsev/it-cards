import { useMeQuery, useUpdateUserDataMutation } from '@/entities/auth/api/auth';
import { PersonalInformation } from '@/pages/ProfilePage/PersonalInformation';
import { PageContainer } from '@/shared/ui/PageContainer';

export const ProfilePage = () => {
  const [updateUserData] = useUpdateUserDataMutation();
  const { data } = useMeQuery();

  return (
    <PageContainer>
      <PersonalInformation
        avatar={data?.avatar}
        email={data?.email ?? ''}
        name={data?.name ?? ''}
        onSubmit={updateUserData}
      />
    </PageContainer>
  );
};
