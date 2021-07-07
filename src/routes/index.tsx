import { Switch } from 'react-router-dom';
import DashboardLayout from 'src/layouts/DashboardLayout';
import MainLayout from 'src/layouts/MainLayout';
import Dashboard from 'src/pages/Dashboard';
import Login from 'src/pages/Login';
import RouterWithLayout from './RouterWithLayout';
import NotFound from 'src/pages/NotFound';
import Turmas from 'src/pages/Turmas';
import Settings from 'src/pages/Settings';
import Home from 'src/pages/Home';
import RouterNames from './names';

const Routes = () => {
  return (
    <Switch>
      <RouterWithLayout
        layout={MainLayout}
        path={RouterNames.LOGIN}
        component={Login}
        exact
      />
      <RouterWithLayout
        layout={DashboardLayout}
        path={RouterNames.HOME}
        component={Home}
        exact
        isPrivate
      />
      <RouterWithLayout
        layout={DashboardLayout}
        path={RouterNames.DASHBOARD}
        component={Dashboard}
        isPrivate
      />
      <RouterWithLayout
        layout={DashboardLayout}
        path={RouterNames.TURMAS}
        component={Turmas}
        exact
        isPrivate
      />
      <RouterWithLayout
        layout={DashboardLayout}
        path={RouterNames.SETTINGS}
        component={Settings}
        exact
        isPrivate
      />
      <RouterWithLayout
        layout={MainLayout}
        path={RouterNames.NOT_FOUND}
        component={NotFound}
      />
    </Switch>
  );
};

export default Routes;
