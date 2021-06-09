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

import { HomePage } from './pages/HomePage/Loadable';
import { NotFoundPage } from './pages/NotFoundPage/Loadable';
import { useTranslation } from 'react-i18next';
import { FormatPage, InstructionPage, StudioPage } from './pages';
import { Loader } from 'app/components/Loader';
import { AppState } from 'redux/store';
import { useSelector } from 'react-redux';

export function App() {
  const { i18n } = useTranslation();
  const { loading } = useSelector<AppState, AppState['common']>(
    ({ common }) => common
  );
  return (
    <BrowserRouter>
      <Helmet
        titleTemplate="%s - Macallan - Create Your Own"
        defaultTitle="Macallan - Create Your Own"
        htmlAttributes={{ lang: i18n.language }}
      >
        <meta name="description" content="A React SPA application" />
      </Helmet>

      <Loader isLoading={loading}>
        <Switch>
          <Route
            exact
            path={process.env.PUBLIC_URL + '/'}
            component={HomePage}
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
          <Route component={NotFoundPage} />
        </Switch>
      </Loader>
      <GlobalStyle />
    </BrowserRouter>
  );
}
