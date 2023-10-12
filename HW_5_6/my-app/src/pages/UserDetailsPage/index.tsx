// Components
import UserDetailsView from '../../components/views/UserDetailsView';
// Types
import { ReactPageEnhanced, LayoutEnum } from '../../types/app';

const UserDetailsPage: ReactPageEnhanced = () => <UserDetailsView />;

UserDetailsPage.displayName = 'UserDetailsPage';

UserDetailsPage.layout = {
  type: LayoutEnum.PrimaryLayout,
};

export default UserDetailsPage;
