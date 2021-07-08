/**
 *
 * App
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 */

import { Helmet } from 'react-helmet-async';
import { Switch, Route, BrowserRouter } from 'react-router-dom';

import { GlobalStyle } from '../styles/global-styles';
import 'react-perfect-scrollbar/dist/css/styles.css';
import 'react-month-picker/css/month-picker.css';

import { NotFoundPage } from './pages/NotFoundPage/Loadable';
import { useTranslation } from 'react-i18next';
import {
  FormatPage,
  InstructionPage,
  StudioPage,
  VirtualPage,
  GalleryListPage,
  GalleryItemPage,
  FinalPage
} from './pages';
import { Loader } from 'app/components/Loader';
import { AppState } from 'redux/store';
import { useSelector } from 'react-redux';
import { useEffect } from 'react';
import { useAlert } from 'react-alert';
import { SideMenu } from 'app/components/SideMenu';

export function App() {
  const { i18n } = useTranslation();
  const { loading, error } = useSelector<AppState, AppState['common']>(
    ({ common }) => common
  );
  const alert = useAlert();

  useEffect(() => {
    if (loading || !error) return;

    alert.error(error);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [loading, error]);

  return (
    <BrowserRouter>
      <Helmet
        titleTemplate="%s - Macallan - Create Your Own"
        defaultTitle="Macallan - Create Your Own"
        htmlAttributes={{ lang: i18n.language }}
      >
        <meta name="description" content="A React SPA application" />
      </Helmet>
      <SideMenu />
      <Loader isLoading={loading}>
        <Switch>
          <Route
            exact
            path={process.env.PUBLIC_URL + '/'}
            component={VirtualPage}
          />
          <Route
            exact
            path={process.env.PUBLIC_URL + '/artwork/format'}
            component={FormatPage}
          />
          <Route
            exact
            path={process.env.PUBLIC_URL + '/artwork/instruction'}
            component={InstructionPage}
          />
          <Route
            exact
            path={process.env.PUBLIC_URL + '/artwork/studio'}
            component={StudioPage}
          />
          <Route
            exact
            path={process.env.PUBLIC_URL + '/artwork/final'}
            component={FinalPage}
          />
          <Route
            exact
            path={process.env.PUBLIC_URL + '/gallery'}
            component={GalleryListPage}
          />
          <Route
            exact
            path={process.env.PUBLIC_URL + '/gallery/:id'}
            component={GalleryItemPage}
          />
          <Route component={NotFoundPage} />
        </Switch>
      </Loader>
      <GlobalStyle />
    </BrowserRouter>
  );
}
