/*
 * @Author: your name
 * @Date: 2022-04-26 09:25:27
 * @LastEditTime: 2022-04-26 12:55:41
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: /h5-template-ts/src/router.tsx
 */
import React from 'react';
import {
  createBrowserRouter,
  RouterProvider,
  RouteObject,
  Navigate
} from 'react-router-dom';
import { env } from '@/utils';
import { LazyImportComponent } from '@/components/lazy-import-component';

import Layout from '@/layouts';

const Demo = LazyImportComponent(
  () => import(/* webpackChunkName:"demo" */ '@/views/demo')
);

const routes: RouteObject[] = [
  {
    path: '/',
    element: <Navigate to="/demo/1" /> // 重定向
  },
  {
    path: '/demo/:id',
    element: Demo
  }
];
const router = createBrowserRouter(routes, {
  // 根据项目自行更改basename
  basename: env.isProd ? `/gatekeeper/${env.projectName}` : '/'
});

const Router = () => (
  <Layout>
    <RouterProvider router={router} />
  </Layout>
);

export default Router;
