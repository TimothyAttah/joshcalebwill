import { lazy, Suspense } from 'react';
import { Route, Routes, createBrowserRouter } from 'react-router-dom';
import Layout from './Layout';

const Home = lazy(() => import('../pages/home/Home'));


export const router = createBrowserRouter([
	{
		path: '/',
		element: <Layout />,
		children: [
			{
				path: '/',
				element: (
					<Suspense fallback={<div>Loading...</div>}>
						<Home />
					</Suspense>
				),
			},
		],
	},
]);
