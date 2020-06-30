import React, { useMemo, memo } from "react";
import { areEqual } from "react-window";

import { Box, Typography } from "@material-ui/core";

import { FixedSizedList } from "../components/lists";
import Layout from "../src/layout";

import withAuth from "../lib/auth";
import { GET_TODOS } from "../apollo/queries";

const Index = props => {
  const handleScroll = () => {};

  return (
    <Layout>
      {/* <FixedSizedList
        itemCount={5}
        itemSize={300}
        onScroll={handleScroll}
        row={
          ({ index, style, width }) =>
            useMemo(() => {
              return (
                <div style={style}>
                  <Typography variant={`h${index + 1}`}>
                    This is the h{index + 1} tag
                  </Typography>
                </div>
              );
            }, []) // only reload when data in row changes
        }
      /> */}
    </Layout>
  );
};

// export async function getStaticProps() {
//   const client = initApollo();

//   await client.query(GET_TODOS);
// }

export default Index;
