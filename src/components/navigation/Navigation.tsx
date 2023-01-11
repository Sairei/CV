import React, { Dispatch, SetStateAction } from 'react';

import { Burger, MediaQuery, Navbar } from '@mantine/core';

import NavReseaux from './reseaux/NavReseaux';
import NavContent from './content/NavContent';
import NavLogo from './logo/NavLogo';

type NavigationProps = {
  opened: boolean;
  setOpened: Dispatch<SetStateAction<boolean>>;
};

const Navigation = ({ opened, setOpened }: NavigationProps) => {
  return (
    <Navbar py="sm" px="md" width={{ sm: 200, lg: 300 }}
      hiddenBreakpoint="sm" hidden={!opened}
    >
      <Navbar.Section>
        <MediaQuery largerThan="sm" styles={{ display: 'none' }}>
          <Burger
            opened={opened}
            onClick={() => setOpened((o) => !o)}
            size="sm"
            mr="xl"
          />
        </MediaQuery>

        <NavLogo />
      </Navbar.Section>

      <Navbar.Section grow>
        <NavContent />
      </Navbar.Section>

      <Navbar.Section>
        <NavReseaux />
      </Navbar.Section>
    </Navbar>
  );
};

export default Navigation;