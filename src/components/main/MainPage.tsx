import React, { useState } from 'react';

import { Outlet } from 'react-router';
import { AppShell } from '@mantine/core';

import Navigation from '../navigation/Navigation';
import Head from '../header/Head';

const MainPage = () => {
  const [opened, setOpened] = useState(false);
  return (
    <div className='main_container'>
      <AppShell
        fixed
        classNames={{
          main: "main_body"
        }}
        header={<Head opened={opened} setOpened={setOpened} />}
        navbar={<Navigation opened={opened} />} >

        <Outlet />

      </AppShell>
    </div>
  );
};

export default MainPage;