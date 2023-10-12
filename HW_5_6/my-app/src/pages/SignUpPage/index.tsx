// Components
import SignUpView from '../../components/views/SignUpView';
// Types
import { ReactPageEnhanced, LayoutEnum } from '../../types/app';

const SignUpPage: ReactPageEnhanced = () => <SignUpView />;

SignUpPage.displayName = 'SignUpPage';

SignUpPage.layout = {
  type: LayoutEnum.AuthLayout,
};

export default SignUpPage;
