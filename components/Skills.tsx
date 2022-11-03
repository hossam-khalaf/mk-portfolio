import React from 'react'
import { motion } from 'framer-motion'
import Skill from './Skill'

type Props = {}

function Skills({}: Props) {
	return (
		<motion.section
			initial={{ opacity: 0 }}
			whileInView={{ opacity: 1 }}
			transition={{ duration: 1.5 }}
			className='min-h-screen relative flex flex-col xl:flex-row items-center justify-center xl:px-10  max-w-7xl mx-auto'
		>
			<h3 className='absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl'>
				Skills
			</h3>
			<h3 className='absolute top-40 uppercase tracking-[5px] text-gray-500 text-1xl'>
				I work with these Techs
			</h3>

			<div className='grid grid-cols-4 gap-6'>
				<Skill />
				<Skill />
				<Skill />
				<Skill />
				<Skill />
				<Skill />
				<Skill />
				<Skill />
				<Skill />
				<Skill />
			</div>
		</motion.section>
	)
}

export default Skills
