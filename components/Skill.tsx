import React from 'react'
import { motion } from 'framer-motion'
import jsLogo from '../public/javascript-logo-vector-344x390.png'
import Image from 'next/image'

type Props = {
	directionLeft?: boolean
}

function Skill({ directionLeft }: Props) {
	return (
		<motion.div
			initial={{
				x: directionLeft ? -200 : 200,
				opacity: 0,
			}}
			whileInView={{ opacity: 1, x: 0 }}
			transition={{ duration: 1 }}
		>
			<Image
				src={jsLogo}
				alt='skill'
				className='h-20 w-20 rounded-full border border-gray-500 object-cover  transition duration-300 ease-in-out cursor-pointer'
			/>
		</motion.div>
	)
}

export default Skill
