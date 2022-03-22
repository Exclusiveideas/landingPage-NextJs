import React from 'react';
import { Flex, Box, IconButton } from 'theme-ui';

export default function List({ items, parentStyle, childStyle, isAvailable }) {
  return (
    <Box 
    as="ul" 
    sx={{
      listStyleType: "none",
      margin: 0,
      padding: 0,
      ...parentStyle
    }}>
      {items?.map((item, i) => (
        <Flex 
         classname={isAvailable ?  "open" : "closed"}
         as="li"
         sx={{...childStyle }}
         key={i}
        >
          <IconButton sx={styles.listIcon} aria-label="List Icon">
            {item.icon}
          </IconButton>
          {item.text}
        </Flex>
      ))}
    </Box>
  );
}

const styles = {
  listIcon: {
    width: ['25px', '35px'],
    height: 'auto',
    color: 'primary',
    padding: 0,
    fontSize: [3, 5],
    ml: '-1px',
    flexShrink: 0,
    justifyContent: 'flex-start',
    mt: '2px',
  },
};
