import React from "react";
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';

function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer>
      <div>
        <Stack alignItems="center" spacing={2} >
          <Pagination count={1} />
        </Stack>
      </div>
      <p>Copyright ⓒ {year}</p>
    </footer>
  );
}

export default Footer;
