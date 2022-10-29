import React from 'react'
import { motion } from 'framer-motion'
type Props = {}

function BackgroundCircles({}: Props) {
	return (
		<motion.div
			initial={{
				opacity: 0,
			}}
			animate={{
				scale: [1, 2, 3, 4, 1],
				opacity: [0.1, 0.2, 0.4, 0.8, 0.1, 1],
			}}
			transition={{ duration: 2.5 }}
			className='relative flex justify-center items-center'
		>
			<div className='absolute border border-[#333333] rounded-full md:h-[200px] md:w-[200px] h-[100px] w-[100px] mt-52 animate-ping' />
			<div className='absolute border border-[#333333] rounded-full md:h-[300px] md:w-[300px] h-[200px] w-[200px] mt-52 animate-ping' />
			<div className='absolute border border-[#333333] rounded-full md:h-[500px] md:w-[500px] h-[250px] w-[250px] mt-52 animate-ping' />
			{/* <div className='absolute border border-[#edc020] rounded-full md:h-[650px] md:w-[650px] h-[600px] w-[600px] mt-52 opacity-5 animate-pulse' />
			<div className='absolute border border-[#edc020] rounded-full md:h-[800px] md:w-[800px] h-[700px] w-[700px] mt-52 opacity-5 animate-pulse' /> */}
		</motion.div>
	)
}

export default BackgroundCircles
