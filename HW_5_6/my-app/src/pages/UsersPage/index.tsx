// Components
import UsersView from '../../components/views/UsersView';
// Types
import { ReactPageEnhanced, LayoutEnum } from '../../types/app';

const UsersPage: ReactPageEnhanced = () => <UsersView />;

UsersPage.displayName = 'UsersPage';

UsersPage.layout = {
  type: LayoutEnum.PrimaryLayout,
};

export default UsersPage;
