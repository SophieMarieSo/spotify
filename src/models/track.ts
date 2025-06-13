import { SimplifiedAlbum } from './album';
import { Artist } from './artist';
import { ExternalUrls, Image, Restriction } from './commonType';

export interface Track {
  album?: SimplifiedAlbum;
  artists?: Artist[];
  available_markets?: string[];
  disc_number?: number;
  duration_ms?: number;
  explicit?: boolean;
  external_ids?: {
    isrc: string;
    ean: string;
    ups: string;
  };
  external_urls?: ExternalUrls;
  href?: string;
  id?: string;
  is_playable?: boolean;
  linked_from?: Track;
  restrictions?: Restriction;
  name?: string;
  popularity?: number;
  track_number?: number;
  type?: 'track';
  uri?: string;
  is_local?: boolean;
}

export interface Episode {
  description: string;
  html_description: string;
  duration_ms: string;
  explicit: boolean;
  external_urls: ExternalUrls;
  href: string;
  id: string;
  images: Image[];
  is_externally_hosted: boolean;
  is_playable: boolean;
  languages: string[];
  name: string;
  release_date: string;
  release_date_precision: string;
  resume_point?: {
    fully_played: boolean;
    resume_position_ms: number;
  };
  type: 'episode';
  uri: string;
  restrictions?: Restriction;
  show: {
    available_markets: string[];
    copyrights: {
      text?: string;
      type?: string;
    };
    description: string;
    html_description: string;
    explicit: boolean;
    external_urls: ExternalUrls;
    href: string;
    id: string;
    images: Image[];
    is_externally_hosted: boolean;
    languages: string[];
    media_type: string;
    name: string;
    publisher: string;
    type: 'show';
    uri: string;
    total_episodes: number;
  };
}
