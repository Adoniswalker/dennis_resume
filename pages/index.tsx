import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import 'tailwindcss/tailwind.css'
import { FiGithub } from 'react-icons/fi';
import { AiOutlineLinkedin } from 'react-icons/ai';
import { Disclosure } from '@headlessui/react';

export default function Home() {
	return (
		<Disclosure as="nav" className="bg-gray-800">
			{({ open }) => (
				<div className={styles.container}>
					<Head>
						<title>Dennis Resume</title>
						<meta name="description" content="Use to showcase my skills" />
						<link rel="icon" href="/favicon.ico" />
					</Head>
					<nav className="flex items-center justify-between flex-wrap bg-white p-6">
						<div className="item-center font-black"><span>DN</span></div>
						<div className="block lg:hidden">
							<Disclosure.Button className="flex items-center px-3 py-2 border rounded border-teal-400  hover:text-white hover:border-white">
								<svg className="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Menu</title><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" /></svg>
							</Disclosure.Button>
						</div>
						<div className="w-full lg:w-auto block">
							<div className="text-sm lg:flex-grow content-center">
								<a href="#" className="block mt-4 lg:inline-block lg:mt-0 hover:text-white hover:bg-black mr-4">Work</a>
								<a href="#" className="block mt-4 lg:inline-block lg:mt-0 hover:text-white hover:bg-black mr-4">Resume</a>
								<a href="#" className="block mt-4 lg:inline-block lg:mt-0 hover:text-white hover:bg-black">Contact</a>
							</div>
						</div>

						<div className="block flex items-center mt-4">
							<a href="https://www.linkedin.com/in/dennis-koech-ngeno/" className="mr-2"><FiGithub /></a>
							<a href="https://github.com/Adoniswalker/"><AiOutlineLinkedin /></a>
						</div>
					</nav>
					<main>
					</main>
					<footer className={styles.footer}>

					</footer>
				</div>
			)}

		</Disclosure>

	)
}
