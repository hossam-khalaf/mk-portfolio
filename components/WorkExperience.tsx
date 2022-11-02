import { motion } from 'framer-motion'
import React from 'react'
import ExpCard from './ExpCard'

type Props = {}

export default function WorkExperience({}: Props) {
	return (
		<motion.div
			initial={{ opacity: 0 }}
			whileInView={{ opacity: 1 }}
			transition={{ duration: 1.5 }}
			className='h-screen flex flex-col md:flex-row relative overflow-hidden justify-evenly items-center max-w-7xl px-10 mx-auto '
		>
			<h3 className='absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl'>
				Experience
			</h3>
			<div className='w-full flex space-x-5 overflow-x-scroll p-10 snap-x snap-mandatory'>
				<ExpCard />
				<ExpCard />
				<ExpCard />
				<ExpCard />
			</div>
		</motion.div>
	)
}
