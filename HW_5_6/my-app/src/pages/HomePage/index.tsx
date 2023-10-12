// Components
import HomeView from '../../components/views/HomeView';
// Types
import { ReactPageEnhanced, LayoutEnum } from '../../types/app';

const HomePage: ReactPageEnhanced = () => <HomeView />;

HomePage.displayName = 'HomePage';

HomePage.layout = {
  type: LayoutEnum.PrimaryLayout,
};

export default HomePage;
