import blogs from '@/app/blog/blogs.json';
import Link from 'next/link';


export const BlogListing = (props) =>
  {
  const {site} = props;
  return (
      <div>
        {site && site === 'single-page' ? <h2
            className={'text-black text-2xl border-b border-opacity-25 border-black'}>More
          articles:</h2> : null}
        <ul className={'text-black ml-2'}>
          {blogs.map((blog) => (
              <li key={blog.id}
                  className={'py-2 border-b border-opacity-25 border-black'}>
                <Link href={`/blog/${blog.id}`}
                      className={`text-gray-900 ${site !== 'single-page'
                          ? ' text-xl'
                          : 'text-sm'}`}>{blog.title}</Link>
                <br/>
                <i className={'text-xs'}>Published: {blog.date}</i>
              </li>
          ))}
        </ul>
      </div>

  );
  };
