import fs from 'fs';
import matter from 'gray-matter';
import path from 'path';
import Link from 'next/link';
import styles from './style/blog.module.css';
import Head from '../../components/Head';


function Header() {
    return <header className={styles['header']}>
        <Link href='/'>
            <a className={styles['link']}>
                <p>Home</p>
            </a>
        </Link>
    </header>
}


export default function BlogIndex({ posts }) {

    return <>
        <Head title='Blog' />
        <Header />
        <div className={styles['container']}>
            <h1 className={styles['title']}>Blog</h1>
            {posts.map(element => {
                return <div key={element.file}>
                    <Link href={`/blog/${element.file}`}>
                        <a className={styles['subtitle']}>
                            <h4 style={{marginBottom: 0}} >{element.data.title}</h4>
                        </a>
                    </Link>

                    <p>{element.data.description}</p>
                </div>
            })}
        </div>
    </>;
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
