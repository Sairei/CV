import React from 'react';

import { Box, Text } from '@mantine/core';

const NavReseaux = () => {
  return (
    <Box
      sx={(theme) => ({
        borderTop: `1px solid ${theme.colorScheme === 'dark' ? theme.colors.dark[4] : theme.colors.gray[2]
          }`
      })}
    >
      <Text>Christopher CAUET</Text>
    </Box>
  );
};

export default NavReseaux;