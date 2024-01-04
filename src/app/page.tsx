import { useQuery } from '@tanstack/react-query';
// import client from '../apis/client';
import Post from '../apis/post';

const IndexPage = () => {
  const { data, isSuccess } = useQuery({
    queryKey: ['posts'],
    queryFn: () => Post.find(),
  });

  return (
    <div>
      <p>Index Page</p>
      {isSuccess &&
        data.data.map((post) => (
          <div key={post.id}>
            <p>{post.title}</p>
            <p>{post.content}</p>
          </div>
        ))}
    </div>
  );
};

export default IndexPage;
