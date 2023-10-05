// Components
import ResourceDetailsView from '../../components/views/ResourceDetailsView';
// Types
import { ReactPageEnhanced, LayoutEnum } from '../../types/app';

const ResourceDetailsPage: ReactPageEnhanced = () => <ResourceDetailsView />;

ResourceDetailsPage.displayName = 'ResourceDetailsPage';

ResourceDetailsPage.layout = {
  type: LayoutEnum.PrimaryLayout,
};

export default ResourceDetailsPage;
