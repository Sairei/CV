import React from 'react';

import { Navbar } from '@mantine/core';

type NavigationProps = {
  opened: boolean;
};

const Navigation = ({ opened }: NavigationProps) => {
  return (
    <Navbar p="md" hiddenBreakpoint="sm" hidden={!opened} width={{ sm: 200, lg: 300 }}>
      
    </Navbar>
  );
};

export default Navigation;