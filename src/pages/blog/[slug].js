import fs from 'fs';
import matter from 'gray-matter';
import path from 'path'
import BlogPost from '../../components/BlogPost';

export default function BlogPage({ data, content, }) {
    return <BlogPost data={data} content={content}/>;
}

export async function getStaticProps({ params }) {
    const file = fs.readFileSync(path.join('posts/', params.slug.concat('.md')), 'utf-8');
    const markdown = matter(file);

    return {
        props: {
            data: markdown.data,
            content: markdown.content,
        },
    };
}

export async function getStaticPaths() {
    const paths = [];

    try {
        let files = fs.readdirSync(path.join('posts'));

        files.forEach((value) => {
            let fileName = value.replace('.md', '');
            const blogPath = '/blog';

            let fullPath = blogPath.concat('/', fileName);

            paths.push(fullPath);
        })
    } catch (error) {
        console.error(error);
    }

    return {
        paths,
        fallback: false,
    };
}
