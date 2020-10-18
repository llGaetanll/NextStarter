import { Box, Typography } from "@material-ui/core/";

import Link from '../components/Link'
import Layout from '../src/layout'

import withAuth from "../lib/auth";

const Locked = () => {

  return (
    <Layout>
      <Typography variant="h3">/locked</Typography>
      <Box display="flex" flex={1} alignItems="center" justifyContent="center">
        <Link href="/index" style={{ margin: 10 }}>/index</Link>
        <Link href="/login" style={{ margin: 10 }}>/login</Link>
      </Box>
    </Layout> 
  );
};

export default withAuth(Locked);
