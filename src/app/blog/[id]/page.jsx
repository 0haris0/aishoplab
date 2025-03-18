import blogs from '@/app/blog/blogs.json';
import Container from '@/components/Container';
import {BlogListing} from '@/components/BlogListing';


export default function BlogDetailPage({params})
  {
  const {id} = params;

  // Find the blog with the matching ID
  const blog = blogs.find((blog) => blog.id === id);

  if (!blog) {
    return <div>Blog not found.</div>;
  }

  return (
      <Container className={'mt-24 sm:mt-32 lg:mt-40'}>
        <div className={'inline-flex gap-4 align-top columns-3'}>

          <div className={'w-3/5 '}>

            <h1 className={'text-black text-3xl'}>{blog.title}</h1>
            <p className={'text-black text-xs'}>Published on: {blog.date}</p>
            <div className={'mt-2 text-black text-md'}>{blog.content}</div>
          </div>
          <div className={'w-2/5'}>
            <BlogListing site={'single-page'}/>
          </div>
        </div>
      </Container>
  );
  }