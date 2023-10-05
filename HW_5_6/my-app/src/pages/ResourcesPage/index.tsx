// Components
import ResourcesView from '../../components/views/ResourcesView';
// Types
import { ReactPageEnhanced, LayoutEnum } from '../../types/app';

const ResourcesPage: ReactPageEnhanced = () => <ResourcesView />;

ResourcesPage.displayName = 'ResourcesPage';

ResourcesPage.layout = {
  type: LayoutEnum.PrimaryLayout,
};

export default ResourcesPage;
