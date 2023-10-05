// Packages
import { FC, ReactNode, memo } from 'react';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
// Components
import Header from '../../common/Header';
import Footer from '../../common/Footer';
// Types
import { ReactPageEnhanced } from '../../../types/app';

interface Props {
  children: ReactNode;
}

const PrimaryLayoutComponent: FC<Props> = memo(({ children }) => (
  <Box>
    <Header />

    <Container>{children}</Container>

    <Footer />
  </Box>
));

PrimaryLayoutComponent.displayName = 'PrimaryLayoutComponent';

const PrimaryLayout = (Page: ReactPageEnhanced): JSX.Element => (
  <PrimaryLayoutComponent>{<Page />}</PrimaryLayoutComponent>
);

export default PrimaryLayout;
