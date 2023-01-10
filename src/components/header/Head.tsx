import React, { Dispatch, SetStateAction } from 'react';

import { Burger, Header, MediaQuery } from '@mantine/core';

type HeaderProps = {
  opened: boolean;
  setOpened: Dispatch<SetStateAction<boolean>>;
};

const Head = ({ opened, setOpened }: HeaderProps) => {
  return (
    <Header height={{ base: 50, md: 70 }} p="md">
      <div style={{ display: 'flex', alignItems: 'center', height: '100%' }}>
        <MediaQuery largerThan="sm" styles={{ display: 'none' }}>
          <Burger
            opened={opened}
            onClick={() => setOpened((o) => !o)}
            size="sm"
            mr="xl"
          />
        </MediaQuery>
      </div>
    </Header>
  );
};

export default Head;