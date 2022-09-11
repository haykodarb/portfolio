import { marked } from 'marked';
import Head from '../Head';
import Link from 'next/link';
import styles from './post.module.css';

function Header() {
    return <header className={styles['header']}>
        <div className={styles['headerLinks']}>
            <Link href='/'>
                <p className={styles['link']}>Home</p>
            </Link>
            <Link href='/blog/'>
                <p className={styles['link']}>Blog</p>
            </Link>
        </div>

    </header>
}

export default function BlogPost({ data, content, }) {

    return <>
        <Head/>
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
