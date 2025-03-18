'use client';
import PageIntro from '@/components/PageIntro';
import Container from '@/components/Container';
import {BlogListing} from '@/components/BlogListing';


const BlogPage = () =>
  {
  return (
      <>
        <PageIntro eyebrow="Blog" title="The latest articles and news">
          <p>
            Stay up-to-date with the latest industry news as our marketing teams
            find new ways to re-purpose old CSS tricks articles.
          </p>
        </PageIntro>
        <Container className="mt-16">

          <div>
            <h2 className={'text-black text-2xl border-b-2 border-opacity-25 border-black'}>Latest
              Posts</h2>
            <BlogListing/>
          </div>
        </Container>
      </>
  );
  };

export default BlogPage;