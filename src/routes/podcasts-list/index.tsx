/* React imports */
import React from 'react';

/* Third party imports */
import { Await, LoaderFunction, defer, useLoaderData } from 'react-router-dom';

/* Local imports */
import List from './list';
import Navbar from '../../components/navbar';
import { Podcast as PodcastType, getAllPodcasts } from '../../api/podcasts';

const PodcastList: React.FC = () => {
  const { podcasts } = useLoaderData() as { podcasts: PodcastType[] };

  return (
    <>
      <Navbar>
        <React.Suspense fallback={<Navbar.Loader />}>
          <Await resolve={podcasts} errorElement={<p>Error loading podcasts!</p>}>
            <Navbar.Loaded />
          </Await>
        </React.Suspense>
      </Navbar>
      <React.Suspense fallback={null}>
        <Await resolve={podcasts} errorElement={<p>Error loading podcasts!</p>}>
          {(podcasts: PodcastType[]) => <List podcasts={podcasts} />}
        </Await>
      </React.Suspense>
    </>
  );
};

export const loader: LoaderFunction = async ({ request }) => {
  return defer({ podcasts: getAllPodcasts({ method: 'GET', signal: request.signal }) });
};

export default PodcastList;
