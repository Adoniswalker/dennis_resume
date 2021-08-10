import Head from 'next/head'
import styles from '../styles/Home.module.css'
import 'tailwindcss/tailwind.css'
import { FiGithub } from 'react-icons/fi';
import { AiOutlineLinkedin } from 'react-icons/ai';
import { Disclosure } from '@headlessui/react';
import { FaTimes } from 'react-icons/fa';
import { FcMenu } from 'react-icons/fc';

const navigation = [
	{ name: "Work", href: "#", current: true },
	{ name: "Resume", href: "#", current: false },
	{ name: "Contact", href: "#", current: false },
]

function classNames(...classes: string[]) {
	return classes.filter(Boolean).join(' ')
}

export default function Home() {
	return (
		<>
			<Disclosure as="nav" className="bg-gray-800">
				{({ open }) => (
					<>
						<div className={styles.container}>
							<Head>
								<title>Dennis Resume</title>
								<meta name="description" content="Use to showcase my skills" />
								<link rel="icon" href="/favicon.ico" />
							</Head>
							<nav className="flex items-center justify-between flex-wrap bg-white p-3">
								<div className="item-center font-black"><span>DN</span></div>
								<div className="block lg:hidden">
									<Disclosure.Button className="flex items-center px-3 py-2 border rounded border-teal-400  hover:text-white hover:border-white">
										<span className="sr-only">Open main menu</span>
										{open ? (
											<FaTimes className="block h-6 w-6" aria-hidden="true" />
										) : (
											<FcMenu className="block h-6 w-6" aria-hidden="true" />
										)}
									</Disclosure.Button>
								</div>
								<div className="hidden sm:block">
									<div className="flex space-x-4 text-sm content-center">
										{navigation.map((item) => (
											<a
												key={item.name}
												href={item.href}
												className={classNames(
													item.current ? 'bg-gray-900 text-white' : 'text-black hover:bg-gray-700 hover:text-white',
													'px-3 py-2 rounded-md text-sm font-medium'
												)}
												aria-current={item.current ? 'page' : undefined}
											>
												{item.name}
											</a>
										))}
									</div>
								</div>
								<div className="block flex items-center">
									<a href="https://www.linkedin.com/in/dennis-koech-ngeno/" className="mr-2"><FiGithub /></a>
									<a href="https://github.com/Adoniswalker/"><AiOutlineLinkedin /></a>
								</div>
							</nav>

						</div>
						<Disclosure.Panel className="sm:hidden">
							<div className="px-2 pt-2 pb-3 space-y-1">
								{navigation.map((item) => (
									<a
										key={item.name}
										href={item.href}
										className={classNames(
											item.current ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white',
											'block px-3 py-2 rounded-md text-base font-medium'
										)}
										aria-current={item.current ? 'page' : undefined}
									>
										{item.name}
									</a>
								))}
							</div>
						</Disclosure.Panel>
					</>
				)}

			</Disclosure>
			<main>
			</main>
			<footer className={styles.footer}>

			</footer></>

	)
}
