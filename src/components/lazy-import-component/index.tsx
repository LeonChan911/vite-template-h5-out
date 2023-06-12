import Spinner from '@/components/spinner';
import React, { Suspense, lazy } from 'react';

export const LazyImportComponent = (props: any) => {
  return (
    <Suspense fallback={<Spinner />}>
      {React.createElement(lazy(props))}
    </Suspense>
  );
};
