import React, { useMemo, memo } from "react";
import { areEqual } from "react-window";

import { Box, Typography } from "@material-ui/core";

import { FixedSizedList } from "../components/lists";
import Link from "../components/Link";
import Layout from "../src/layout";

import { GET_TODOS } from "../apollo/queries";

const Index = props => {
  const handleScroll = () => {};

  return (
    <Layout>
      <Typography variant="h3">/index</Typography>
      <Box display="flex" flex={1} alignItems="center" justifyContent="center">
        <Link href="/locked" style={{ margin: 10 }}>/locked</Link>
        <Link href="/login" style={{ margin: 10 }}>/login</Link>
      </Box>
    </Layout>
  );
};

      // <FixedSizedList
        // itemCount={5}
        // itemSize={300}
        // onScroll={handleScroll}
        // row={
          // ({ index, style, width }) =>
            // useMemo(() => {
              // return (
                // <div style={style}>
                  // <Typography variant={`h${index + 1}`}>
                    // This is the h{index + 1} tag
                  // </Typography>
                // </div>
              // );
            // }, []) // only reload when data in row changes
        // }
      // />

// export async function getStaticProps() {
//   const client = initApollo();

//   await client.query(GET_TODOS);
// }

export default Index;
