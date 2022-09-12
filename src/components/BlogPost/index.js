import { marked } from 'marked';
import Head from '../Head';
import Link from 'next/link';
import styles from './post.module.css';

function Header() {
    return <header className={styles['header']}>
        <div className={styles['headerLinks']}>
            <Link href='/'>
                <a className={styles['link']}>
                    <p>Home</p>
                </a>
            </Link>
            <Link href='/blog/'>
                <a className={styles['link']}>
                    <p>Blog</p>
                </a>
            </Link>
        </div>

    </header>
}

export default function BlogPost({ data, content, }) {

    return <>
        <Head title={data.title} />
        <Header />
        <div className={styles['container']}>
            <h1 className={styles['title']}>
                {data.title}
            </h1>
            <h2 className={styles['subtitle']}>
                {data.description}
            </h2>
            <div className={styles['markdown']} dangerouslySetInnerHTML={{ __html: marked(content) }}>
            </div>
        </div>
    </>;

}
