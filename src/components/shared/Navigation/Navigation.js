import * as React from 'react';
import Box from '@mui/material/Box';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';

export default function CenteredTabs() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
  // <Box sx={{ width: '100%', bgcolor: 'background.paper' }}></Box>
    <Box sx={{ width: '100%', bgcolor: 'background.paper' }}>
      <Tabs value={value} onChange={handleChange} centered>
        <Tab label="Food" />
        <Tab label="Medacine" />
        <Tab label="Travel" />
        <Tab label="Electronic" />
        <Tab label="Garments" />
      </Tabs>
    </Box>
  );
}