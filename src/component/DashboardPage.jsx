import React from 'react';
import { Grid, styled } from '@mui/material';

const Skeleton = styled('div')(({ theme, height, width }) => ({
  backgroundColor: theme.palette.action.hover,
  borderRadius: theme.shape.borderRadius,
  height: height || 50,
  width: width || '100%',
  content: '" "',
}));

function DashboardPage() {
  return (
    <Grid container spacing={2}>
      <Grid item xs={12} sm={6}>
        <Skeleton height={14} />
      </Grid>
      <Grid item xs={12} sm={6}>
        <Skeleton height={14} />
      </Grid>

      <Grid item xs={12} sm={4}>
        <Skeleton height={100} />
      </Grid>
      <Grid item xs={12} sm={8}>
        <Skeleton height={100} />
      </Grid>

      <Grid item xs={12}>
        <Skeleton height={150} />
      </Grid>

      <Grid item xs={12} sm={3}>
        <Skeleton height={100} />
      </Grid>
      <Grid item xs={12} sm={3}>
        <Skeleton height={100} />
      </Grid>
      <Grid item xs={12} sm={3}>
        <Skeleton height={100} />
      </Grid>
      <Grid item xs={12} sm={3}>
        <Skeleton height={100} />
      </Grid>
    </Grid>
  );
}

export default DashboardPage;
