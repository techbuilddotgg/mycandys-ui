'use client';
import Tabs from '@/components/ui/Tabs';
import SignInForm from '@/components/page/auth/SignInForm';
import SignUpForm from '@/components/page/auth/SignUpForm';
import { useQueryParams } from '@/hooks/useQueryParams';

enum TabOptions {
  SIGN_IN = 'sign-in',
  SIGN_UP = 'sign-up',
}

export default function Login() {
  const { urlQuery, updateQueryParams } = useQueryParams();
  const activeTab = urlQuery.tab || TabOptions.SIGN_IN;

  const handleChangeTab = (tab: string) => {
    updateQueryParams({ tab });
  };

  return (
    <div className={'my-10 w-[500px]'}>
      <Tabs tabsArray={Object.values(TabOptions)} activeTab={activeTab} setActiveTab={handleChangeTab} />
      {
        {
          [TabOptions.SIGN_IN]: <SignInForm />,
          [TabOptions.SIGN_UP]: <SignUpForm />,
        }[activeTab]
      }
    </div>
  );
}
