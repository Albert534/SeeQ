import React, { useState } from 'react';
import { Globe, Mail, LockKeyhole, EyeClosed, Eye } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import LanModal from '../LanModal';
import { Link } from 'react-router-dom';
const Login = () => {
	const [isOpen, setOpen] = useState<boolean>(false);

	const { t } = useTranslation();
	const { i18n } = useTranslation();
	const CloseModal = () => {
		setOpen(false);
	};
	const [eyeOpen, setEyeOpen] = useState<boolean>(false);
	return (
		<>
			<div className='flex justify-center items-center'>
				{isOpen && <LanModal setOpen={CloseModal} />}
			</div>

			<div
				className={`${
					i18n.language === 'my' ? 'notos-mm' : 'font-notos'
				} flex justify-center min-h-screen items-center relative mt-4 z-0 ${
					isOpen ? 'bg-black opacity-50' : ''
				}`}
			>
				<div className='border-gray-600 border-[1.5px] px-4 py-36 mb-10 rounded-xl absolute '>
					{/* Language Switcher */}

					<div
						className='absolute right-4 top-4 p-2 border-gray-600 border-[1.5px] rounded-xl cursor-pointer'
						onClick={() => setOpen(true)}
					>
						<Globe size={18} />
					</div>

					<div className='absolute top-20 left-0 right-0 text-center bg-transparent text-2xl'>
						SeeQ
					</div>

					<div className='flex items-center border-gray-600 border-[1.5px] rounded-lg p-2 mb-2 bg-input-bg'>
						<Mail
							size={15}
							className='text-gray-600 mr-2 bg-transparent'
						/>
						<input
							type='text'
							placeholder={t('login.email')}
							className='outline-none text-[10px] w-56 bg-transparent placeholder-gray-500 py-1'
						/>
					</div>
					<div className='flex items-center border-gray-600 border-[1.5px] rounded-lg p-2 mb-2 bg-input-bg'>
						<LockKeyhole
							size={15}
							className='text-gray-600 mr-2 bg-transparent'
						/>
						<input
							type={`${eyeOpen ? 'text' : 'password'}`}
							placeholder={t('login.password')}
							className='outline-none text-[10px] w-56 bg-transparent placeholder-gray-500 py-1'
						/>

						<div
							className='bg-transparent'
							onClick={() => setEyeOpen(!eyeOpen)}
						>
							{eyeOpen ? (
								<Eye
									className='bg-transparent'
									size={15}
								/>
							) : (
								<EyeClosed
									size={15}
									className='bg-transparent'
								/>
							)}
						</div>
					</div>

					<div className='absolute left-0 right-0 text-center bottom-24'>
						<button className='bg-primary-main w-56 py-2 rounded-lg text-xs hover:bg-primary-thick'>
							{t('login.submit', 'Sign Up')}
						</button>
					</div>
					<Link
						to='/signup'
						className='absolute left-0 right-0 text-center bottom-16 text-xs z-10 underline text-input-bg'
					>
						{t('login.no_account')}
					</Link>
				</div>
			</div>
		</>
	);
};

export default Login;
