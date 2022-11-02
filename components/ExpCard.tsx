import React from 'react'
import jsLogo from '../public/javascript-logo-vector-344x390.png'
import { motion } from 'framer-motion'
import Image from 'next/image'
type Props = {}

export default function ExpCard({}: Props) {
	return (
		<article className='flex flex-col rounded-lg items-center justify-center pl-10 space-y-7 flex-shrink-0 w-[300px] md:w-[600px] lg:w-[900] p-10 bg-[#292929] snap-center opacity-40 hover:opacity-100 cursor-pointer transition-opacity duration-200'>
			{/* <motion.img
				initial={{ y: -100, opacity: 0 }}
				transition={{ duration: 1.2 }}
				whileInView={{ y: 1, opacity: 1 }}
				viewport={{ once: true }}
				className='w24 h-24 rounded-full object-center'
				src='https://avatars.hsoubcdn.com/34f917a836dafe87924c98f2fc3570f1?s=256'
				alt='hello'
			/> */}

			<div className='px-0 md:px-10'>
				<h4 className='text-4xl font-light'>Wordpress Developer </h4>
				<p className='font-bold text-2xl mt-1'>Mostaql</p>
				<div className='flex space-x-2 my-2'>
					<Image className='h-10 w-10 rounded-full' src={jsLogo} alt='jsLogo' />
					<Image className='h-10 w-10 rounded-full' src={jsLogo} alt='jsLogo' />
					<Image className='h-10 w-10 rounded-full' src={jsLogo} alt='jsLogo' />
				</div>
				<p className='uppercase py-5 text-gray-300'>Started: ended:</p>
				{/* <ul className='list-disc space-y-4 ml-8 text-lg'>
					<li>
						summary points summary points summary points summary points summary
						points
					</li>
					<li>
						summary points summary points summary points summary points summary
						points
					</li>
					<li>
						summary points summary points summary points summary points summary
						points
					</li>
					<li>
						summary points summary points summary points summary points summary
						points
					</li>
					<li>
						summary points summary points summary points summary points summary
						points
					</li>
				</ul> */}
			</div>
		</article>
	)
}
