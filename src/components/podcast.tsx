/* Local imports */
import Card from './card';
import { Podcast as PodcastType } from '../api/podcasts';

interface PodcastProps {
  podcast: PodcastType;
}

const Podcast: React.FC<PodcastProps> = ({ podcast }) => {
  const { title, artist, image } = podcast || {};

  return (
    <Card className="relative flex-col flex-1 items-center mt-10 text-center">
      <img src={image} className="w-2/3 aspect-square rounded-full shadow-xl -mt-10" alt={title} />
      <h5 className="uppercase break-words line-clamp-2">{title}</h5>
      <p className="text-sm text-gray-500">Author: {artist}</p>
    </Card>
  );
};

export default Podcast;
