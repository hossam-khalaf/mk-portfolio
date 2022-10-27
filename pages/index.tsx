import Head from 'next/head'
import Header from '../components/Header'
import Hero from '../components/Hero'

export default function Home() {
	return (
		<div className='bg-[rgb(36,36,36)] text-white h-screen'>
			<Head>
				<title>
					Mohamed Khalifa | Wordpress Developer | E-Commerce Developer
				</title>
				<meta
					name='description'
					content='Mohamed Khalifa | Wordpress Developer | E-Commerce Developer, passionate about creating web apps to help the world become a better place'
				/>
			</Head>

			<Header />
			{/* Hero */}
			<section id='hero'>
				<Hero />
			</section>
			{/* About */}
			{/* Experience */}
			{/* Skills */}
			{/* Contact */}
		</div>
	)
}
