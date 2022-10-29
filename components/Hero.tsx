import React from 'react'
import { useTypewriter, Cursor } from 'react-simple-typewriter'
import BackgroundCircles from './BackgroundCircles'
import Image from 'next/image'
import profilePic from '../public/mohamed-khalifa-web-dev2.png'
import Link from 'next/link'

type Props = {}

export default function Hero({}: Props) {
	const [text, count] = useTypewriter({
		words: [
			'Hi, My Name Is Mohamed Khalifa',
			'I build Cool APPS',
			'<WordPress,E-Commerce />',
		],
		loop: false,
		delaySpeed: 2000,
	})
	return (
		<div className='h-screen flex flex-col space-y-8 items-center justify-center text-center overflow-hidden'>
			<BackgroundCircles />
			<Image
				src={profilePic}
				alt='Mohamed Khalifa'
				className='relative rounded-full h-32 w-32 mx-auto'
			/>
			<div className='z-20'>
				<h2 className='text-sm uppercase text-gray-500 pb-2 tracking-[7px] md:tracking-[10px]'>
					{' '}
					WordPress Developer
				</h2>
				<h1 className='text-3xl md:text-5xl px-10 font-semibold'>
					<span className='mr-2'>{text}</span>
					<Cursor cursorColor='#edc020' />
				</h1>
				<div className='pt-5'>
					<Link href='#about'>
						<button className='heoBtn'>About</button>
					</Link>
					<Link href='#projects'>
						<button className='heoBtn'>Projects</button>
					</Link>
					<Link href='#skills'>
						<button className='heoBtn'>Skills</button>
					</Link>
					<Link href='#experience'>
						<button className='heoBtn'>Experience</button>
					</Link>
				</div>
			</div>
		</div>
	)
}
