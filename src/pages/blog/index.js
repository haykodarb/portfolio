import fs from 'fs';
import matter from 'gray-matter';
import path from 'path';
import Link from 'next/link';
import styles from './style/blog.module.css';
import Head from '../../components/Head';


function Header() {
    return <header className={styles['header']}>
        <Link href='/'>
            <p className={styles['link']}>Home</p>
        </Link>
    </header>
}


export default function BlogIndex({ posts }) {
    console.log(posts);
    return <div className={styles['container']}>
        <Head title='Blog'/>
        <Header />
        <h1 className={styles['title']}>Blog</h1>
        {posts.map(element => {
            return <div key={element.file}>
                <Link href={`/blog/${element.file}`}>
                    <h4 className={styles['subtitle']}>{element.data.title}</h4>
                </Link>

                <p>{element.data.description}</p>
            </div>
        })}
    </div>;
}

export async function getStaticProps({ params }) {
    const files = fs.readdirSync(('posts'));

    const posts = files.map((value) => {
        const file = fs.readFileSync(path.join('posts/', value), 'utf-8');

        const markdown = matter(file);

        return { data: markdown.data, file: value.replace('.md', '') };
    });

    return {
        props: {
            posts
        },
    };
}
