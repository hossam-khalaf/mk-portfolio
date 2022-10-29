import Head from 'next/head'
import About from '../components/About'
import Header from '../components/Header'
import Hero from '../components/Hero'

export default function Home() {
	return (
		<div className='bg-[rgb(36,36,36)] text-white h-screen snap-y snap-mandatory overflow-scroll z-0'>
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
			<section id='hero' className='snap-start'>
				<Hero />
			</section>
			{/* About */}
			<section id='about' className='snap-center'>
				<About />
			</section>
			{/* Experience */}
			{/* Skills */}
			{/* Contact */}
		</div>
	)
}
