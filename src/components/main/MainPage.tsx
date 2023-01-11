import React, { useState } from 'react';

import { Outlet } from 'react-router';
import { AppShell } from '@mantine/core';

import Navigation from '../navigation/Navigation';
import Head from '../header/Head';

const MainPage = () => {
  const [opened, setOpened] = useState(false);
  return (
    <AppShell
      fixed layout='alt'
      navbarOffsetBreakpoint="sm"
      asideOffsetBreakpoint="sm"
      classNames={{
        main: "main_body"
      }}
      header={<Head opened={opened} setOpened={setOpened} />}
      navbar={<Navigation opened={opened} setOpened={setOpened} />} >

      <Outlet />

    </AppShell>
  );
};

export default MainPage;