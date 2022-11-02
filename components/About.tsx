import { motion } from 'framer-motion'
import React from 'react'

type Props = {}

export default function About({}: Props) {
	return (
		<motion.div
			initial={{ opacity: 0 }}
			whileInView={{ opacity: 1 }}
			transition={{ duration: 1.5 }}
			className='h-screen flex flex-col relative text-center md:text-left md:flex-row md:gap-8 mx-auto max-w-7xl px-10 justify-evenly items-center'
		>
			<h3 className='absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl'>
				About me
			</h3>
			<motion.img
				initial={{
					x: -200,
					opacity: 0,
				}}
				whileInView={{ x: 0, opacity: 1 }}
				viewport={{ once: true }}
				transition={{ duration: 1.2 }}
				src='https://avatars.hsoubcdn.com/34f917a836dafe87924c98f2fc3570f1?s=256'
				alt='Hello i am A developer'
				className='mt-[125px] md:mb-0 flex-shrink-0 object-cover w-56 h-56 rounded-full md:rounded-lg md:w-64 md:h-96 '
			/>
			<div className='space-y-10'>
				<h4 className='text-4xl font-semibold'>
					Here is a{' '}
					<span className='underline decoration-[#f7ab0a]/50'>little</span>{' '}
					background
				</h4>
				<p className='text-base md:pr-10'>
					Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quae
					accusamus porro modi ut iste cupiditate doloribus ullam? Dolorum
					explicabo, neque consectetur laboriosam consequuntur, atque, sed
					commodi fugiat temporibus hic deserunt dicta esse quam! Facilis vero
					autem aut nam voluptate corrupti hic blanditiis enim veritatis a.
				</p>
			</div>
		</motion.div>
	)
}
