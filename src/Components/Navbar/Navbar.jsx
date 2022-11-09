import React from 'react';

import { AtlassianIcon, AtlassianLogo } from '@atlaskit/logo';


import {
  AppSwitcher,
  AtlassianNavigation,
  PrimaryButton,
  PrimaryDropdownButton,
  ProductHome,
} from '@atlaskit/atlassian-navigation';

const AtlassianProductHome = () => (
  <ProductHome icon={AtlassianIcon} logo={AtlassianLogo} />
);

const DefaultAppSwitcher = (props) => <AppSwitcher tooltip="Switch to..." onClick={() => props.clicked()} />;


const Navbar = (props) => (
  <AtlassianNavigation
    label="site"
    primaryItems={[
      <PrimaryButton>Your work</PrimaryButton>,
      <PrimaryDropdownButton>Issues</PrimaryDropdownButton>,
      <PrimaryDropdownButton>Projects</PrimaryDropdownButton>,
      <PrimaryButton>Repositories</PrimaryButton>,
    ]}
    renderAppSwitcher={() => <DefaultAppSwitcher clicked = {props.onClicked} />}
    renderProductHome={AtlassianProductHome}
  />
);

export default Navbar;