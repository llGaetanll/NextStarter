import { Box, Typography } from "@material-ui/core/";

import Link from '../components/Link'
import Layout from '../src/layout'

const Login = () => {

  return (
    <Layout>
      <Typography variant="h3">/login</Typography>
      <Box display="flex" flex={1} alignItems="center" justifyContent="center">
        <Link href="/index" style={{ margin: 10 }}>/index</Link>
        <Link href="/locked" style={{ margin: 10 }}>/locked</Link>
      </Box>
    </Layout> 
  );
};

export default Login;
