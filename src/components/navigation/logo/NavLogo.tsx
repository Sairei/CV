import React from 'react';

import { Box } from '@mantine/core';

const NavLogo = () => {
  return (
    <Box
      sx={(theme) => ({
        borderBottom: `1px solid ${
          theme.colorScheme === 'dark' ? theme.colors.dark[4] : theme.colors.gray[2]
        }`
      })}
    >

    </Box>
  );
};

export default NavLogo;