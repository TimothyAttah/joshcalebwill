import { lazy, Suspense } from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import { ToastContainer } from 'react-toastify';
import Layout from './components/Layout';
// import Home from './pages/home/Home';
// import Culture from './pages/whoWeAre/modules/culture/Culture';
// import Leaders from './pages/whoWeAre/modules/leaders/Leaders';
// import WhoWeAre from './pages/whoWeAre/WhoWeAre';
// import Contact from './pages/contact/Contact';
// import Sustainability from './pages/sustainability/Sustainability';
// import Environment from './pages/sustainability/environment/Environment';
// import Careers from './pages/careers/Careers';
// import Communities from './pages/sustainability/communities/Communities';
// import Exploration from './pages/whatWeDo/exploration/Exploration';
// import Procurement from './pages/whatWeDo/procurement/Procurement';
// import Haulage from './pages/whatWeDo/haulage/Haulage2';
// import Chemical from './pages/whatWeDo/chemicalSupply/Chemical';
// import Pipeline2 from './pages/whatWeDo/pipeline/Pipeline2';
// import Gas from './pages/whatWeDo/gas/Gas';
// import Health2 from './pages/whatWeDo/health/Health2';
// import Lubricants from './pages/whatWeDo/lubricants/Lubricants';
// import LeaderProfile from './pages/whoWeAre/modules/leaders/LeaderProfile';
// import History from './pages/whoWeAre/modules/history/History';

const Home = lazy(() => import('./pages/home/Home'));
const WhoWeAre = lazy(() => import('./pages/whoWeAre/WhoWeAre'));



const App = () => {
	 const router = createBrowserRouter([
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
					{
						path: '/who-we-are',
						element: (
							<Suspense fallback={<div>Loading...</div>}>
								<WhoWeAre />
							</Suspense>
						),
					},
				],
			},
		]);
	return (
		<>
			{/* <Cookie/> */}
			<RouterProvider router={router} />

			<ToastContainer />
		</>
	);
};

export default App;
