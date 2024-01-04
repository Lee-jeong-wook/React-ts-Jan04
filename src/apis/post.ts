import DataClient, { DataDecorator } from './data';

@DataDecorator('/post')
export default class Post extends DataClient {
  id: number;
  title: string;
  content: string;
}

@DataDecorator('/comment')
export class Comment extends DataClient {
  id: number;
  postId: number;
  content: string;
}
