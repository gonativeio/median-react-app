import urljoin from 'url-join';

const root = '/';

const images = (path: string) => `/images/${path}`;

const app = (...sections: string[]) => `/${urljoin(...sections)}`;

const urls = {
  app,
  images,
  root,
};

export default urls;
