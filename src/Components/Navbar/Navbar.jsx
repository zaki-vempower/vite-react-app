import React from 'react';

import { AtlassianIcon, AtlassianLogo } from '@atlaskit/logo';


import {
  AppSwitcher,
  AtlassianNavigation,
  PrimaryButton,
  PrimaryDropdownButton,
  ProductHome,
  SignIn
} from '@atlaskit/atlassian-navigation';
import { globalDispatch, globalState } from '../store';
import { handleDrawer } from '../store/actions';

const AtlassianProductHome = () => (
  <ProductHome icon={AtlassianIcon} logo={AtlassianLogo} />
);

const getuserState = () => globalState()['userReducer']?.drawerHandle ?? false

const DefaultSignIn = ({handleDialog}) => <SignIn href="#" tooltip="Sign in" onClick={handleDialog} />;

const DefaultAppSwitcher = () => <AppSwitcher tooltip="Switch to..." onClick={() => globalDispatch(handleDrawer(!getuserState()))} />;


const Navbar = (props) => (
  <AtlassianNavigation
    label="site"
    primaryItems={[
      <PrimaryButton>Your work</PrimaryButton>,
      <PrimaryDropdownButton>Issues</PrimaryDropdownButton>,
      <PrimaryDropdownButton>Projects</PrimaryDropdownButton>,
      <PrimaryButton>Repositories</PrimaryButton>,
    ]}
    renderAppSwitcher={DefaultAppSwitcher}
    renderSignIn={() => <DefaultSignIn handleDialog={props.handleDialog} />}
    renderProductHome={AtlassianProductHome}
  />
);

export default Navbar;