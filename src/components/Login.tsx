import React from 'react';
import { Globe, Mail, LockKeyhole, User } from 'lucide-react';

const Login = () => {
	return (
		<div className='font-notos flex justify-center min-h-screen items-center relative mt-4'>
			<div className='border-gray-600 border-[1.5px] px-4 py-36 mb-10 rounded-xl absolute'>
				<div className='absolute right-4 top-4 p-2 border-gray-600 border-[1.5px] rounded-xl cursor-pointer'>
					<Globe size={18} />
				</div>

				<div className='absolute top-20 left-0 right-0 text-center bg-transparent text-2xl'>
					SeeQ
				</div>
				{/* Input Field and Mail Icon */}
				<div className='flex items-center border-gray-600 border-[1.5px] rounded-lg p-2 mb-2 bg-input-bg'>
					<User
						size={15}
						className='text-gray-600 mr-2 bg-transparent'
					/>
					<input
						type='text'
						placeholder='Enter Your Username'
						className='outline-none text-[10px] w-56 bg-transparent placeholder-white'
					/>
				</div>
				<div className='flex items-center border-gray-600 border-[1.5px] rounded-lg p-2 mb-2 bg-input-bg'>
					<Mail
						size={15}
						className='text-gray-600 mr-2 bg-transparent'
					/>
					<input
						type='password'
						placeholder='Enter Your Email'
						className='outline-none text-[10px] w-56 bg-transparent placeholder-white'
					/>
				</div>
				<div className='flex items-center border-gray-600 border-[1.5px] rounded-lg p-2 mb-2 bg-input-bg '>
					<LockKeyhole
						size={15}
						className='text-gray-600 mr-2 bg-transparent'
					/>
					<input
						type='password'
						placeholder='Enter Your Password'
						className='outline-none text-[10px] w-56 bg-transparent placeholder-white'
					/>
				</div>
				<div className='flex items-center border-gray-600 border-[1.5px] rounded-lg p-2 mb-2 bg-input-bg '>
					<LockKeyhole
						size={15}
						className='text-gray-600 mr-2 bg-transparent'
					/>
					<input
						type='password'
						placeholder='Confirm Your Password'
						className='outline-none text-[10px] w-60 bg-transparent placeholder-white'
					/>
				</div>
				<div className='absolute left-0 right-0 text-center bottom-24 '>
					<button className='bg-primary-main w-56 py-2 rounded-lg text-xs hover:bg-primary-thick'>
						Sign Up
					</button>
				</div>
				<a
					href='#'
					className='absolute left-0 right-0 text-center bottom-16 text-xs z-10 underline text-input-bg'
				>
					Already have an account
				</a>
			</div>
		</div>
	);
};

export default Login;
