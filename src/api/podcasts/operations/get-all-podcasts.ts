import request from '../../fetcher';
import { Podcast } from '../types';

function mapper(result: any): Podcast[] {
  return (
    result?.feed?.entry?.map((item: any) => ({
      id: item?.id?.attributes?.['im:id'],
      artist: item?.['im:artist']?.label,
      description: item?.summary.label,
      image: item?.['im:image']?.[2].label || item?.['im:image']?.[1].label || item?.['im:image']?.[0].label,
      title: item?.title.label
    })) ?? []
  );
}

export async function getAllPodcasts(options?: RequestInit): Promise<Podcast[]> {
    const result = await request(
      'https://itunes.apple.com/us/rss/toppodcasts/limit=100/genre=1310/json',
      {
        ...options
      }
    );

    return mapper(result);
}
