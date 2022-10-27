import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Home() {
	return (
		<div className={styles.container}>
			<Head>
				<title>
					Mohamed Khalifa | Wordpress Developer | E-Commerce Developer
				</title>
				<meta
					name='description'
					content='Mohamed Khalifa | Wordpress Developer | E-Commerce Developer, passionate about creating web apps to help the world become a better place'
				/>
			</Head>
			<h1 className='text-red-500 text-3xl'>
				Let&apos;s build a GREAT portfolio
			</h1>
		</div>
	)
}
