import { lazy } from 'react';

export const setLazyRoute = (componentName: string) =>
  lazy(() =>
    import(`../pages/${componentName}/`).then(module => ({
      default: module[componentName],
    }))
  );
