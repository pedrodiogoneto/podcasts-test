/* Third party imports */
import { createBrowserRouter } from 'react-router-dom';

/* Local imports */
import PodcastsList, { loader as loaderPodcastList } from './podcasts-list';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <PodcastsList />,
    loader: loaderPodcastList
  }
]);
