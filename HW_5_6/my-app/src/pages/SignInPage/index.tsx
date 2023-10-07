// Components
import SignInView from '../../components/views/SignInView';
// Types
import { ReactPageEnhanced, LayoutEnum } from '../../types/app';

const SignInPage: ReactPageEnhanced = () => <SignInView />;

SignInPage.displayName = 'SignInPage';

SignInPage.layout = {
  type: LayoutEnum.AuthLayout,
};

export default SignInPage;
