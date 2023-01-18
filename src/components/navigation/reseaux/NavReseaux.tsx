import React from 'react';

import { Box } from '@mantine/core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faGitlab, faLinkedinIn, faTwitter } from '@fortawesome/free-brands-svg-icons';

const NavReseaux = () => {
  return (
    <Box
      sx={(theme) => ({
        borderTop: `1px solid ${theme.colorScheme === 'dark' ? theme.colors.dark[4] : theme.colors.gray[2]}`
      })}
    >
      <ul>
        <li>
          <a href="https://github.com/Sairei" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faGithub} />
          </a>
        </li>
        <li>
          <a href="https://gitlab.com/Sairei" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faGitlab} />
          </a>
        </li>
        <li>
          <a href="https://www.linkedin.com/in/christopher-cauet-67507a181/" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faLinkedinIn} />
          </a>
        </li>
        <li>
          <a href="https://twitter.com/Christo_Cauet" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faTwitter} />
          </a>
        </li>
      </ul>
    </Box>
  );
};

export default NavReseaux;