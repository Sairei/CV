import React, { Dispatch, SetStateAction } from 'react';

import { Burger, Header, MediaQuery } from '@mantine/core';

type HeaderProps = {
  opened: boolean;
  setOpened: Dispatch<SetStateAction<boolean>>;
};

const Head = ({ opened, setOpened }: HeaderProps) => {
  return (
    <MediaQuery largerThan="sm" styles={{ display: 'none' }}>
      <Header height={{ base: 50, md: 70 }} p="md">
        <div style={{ display: 'flex', alignItems: 'center', height: '100%' }}>
          <Burger
            opened={opened}
            onClick={() => setOpened((o) => !o)}
            size="sm"
            mr="xl"
          />
        </div>
      </Header>
    </MediaQuery>
  );
};

export default Head;