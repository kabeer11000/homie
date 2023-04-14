import React, { lazy, Suspense } from 'react';

const LazyResults = lazy(() => import('./Results'));

const Results = (props: JSX.IntrinsicAttributes & { children?: React.ReactNode; }) => (
  <Suspense fallback={null}>
    <LazyResults {...props} />
  </Suspense>
);

export default Results;
