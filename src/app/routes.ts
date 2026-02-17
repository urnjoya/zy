import { createBrowserRouter } from 'react-router';
import { Home } from './pages/Home';
import { CategoryPage } from './pages/CategoryPage';
import { ToolPage } from './pages/ToolPage';
import { LegalPage } from './pages/LegalPage';
import { NotFound } from './pages/NotFound';
import { TextToolsGrouped } from './pages/TextToolsGrouped';
import { ComponentShowcase } from './pages/ComponentShowcase';

export const router = createBrowserRouter([
  {
    path: '/',
    Component: Home,
  },
  {
    path: '/category/:category',
    Component: CategoryPage,
  },
  {
    path: '/tool/:toolId',
    Component: ToolPage,
  },
  {
    path: '/text-tools-suite',
    Component: TextToolsGrouped,
  },
  {
    path: '/design-system',
    Component: ComponentShowcase,
  },
  {
    path: '/privacy',
    Component: LegalPage,
  },
  {
    path: '/terms',
    Component: LegalPage,
  },
  {
    path: '/disclaimer',
    Component: LegalPage,
  },
  {
    path: '/about',
    Component: LegalPage,
  },
  {
    path: '/contact',
    Component: LegalPage,
  },
  {
    path: '*',
    Component: NotFound,
  },
]);