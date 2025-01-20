// Login.tsx
import { handleValidationError } from '../../utils/error';
import { useNavigate } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import { Globe, Mail, LockKeyhole, EyeClosed, Eye } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import LanModal from '../LanModal';
import { Link } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../state/hooks';
import { loginUser } from '../../state/slices/loginSlice';

const Login = () => {
	const [submit, setSubmit] = useState<boolean>(false);
	const navigate = useNavigate();
	const errorMessage = useAppSelector((state) => state.login.error);
	const [errorMssg, setErrorMssg] = useState<string | null>(null);
	const [errorEmail, setErrorEmail] = useState<string | null>(null);
	const dispatch = useAppDispatch();
	const [isOpen, setOpen] = useState<boolean>(false);
	const { t } = useTranslation();
	const { i18n } = useTranslation();
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState<string>('');

	const CloseModal = () => {
		setOpen(false);
	};

	const handleSubmit = async (e: React.FormEvent) => {
		e.preventDefault();
		if (errorEmail || errorMssg) {
			return;
		}
		// Prevent default form submission behavior
		const loginData = { email, password };
		setSubmit(true);

		await dispatch(loginUser({ loginData, t, navigate }));
	};

	//Error Handler
	useEffect(() => {
		const error = handleValidationError(password, t);
		if (submit) {
			if (password) {
				if (error) {
					setErrorMssg(error);
				} else {
					setErrorMssg(null);
				}
			}
		}
	}, [password, t, submit]);

	useEffect(() => {
		if (submit) {
			if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
				setErrorEmail(t('login_error.no_email'));
				return;
			} else {
				setErrorEmail('');
			}
		}
	}, [email, t, submit]);

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
					<form onSubmit={handleSubmit}>
						<div
							className={`flex items-center ${
								errorEmail && submit ? 'border-red-500' : 'border-gray-600'
							} border-[1.5px] rounded-lg p-2 mb-2 bg-input-bg`}
						>
							<Mail
								size={15}
								className='text-gray-600 mr-2 mt-0 bg-transparent'
							/>
							<input
								type='text'
								name='email'
								value={email}
								onChange={(e) => {
									setEmail(e.target.value);
								}}
								required
								placeholder={t('login.email')}
								className='outline-none text-[10px] w-56 bg-transparent placeholder-gray-500 py-1'
							/>
						</div>
						{submit && <p className='text-red-500 text-[10px]'>{errorEmail}</p>}
						<div
							className={`flex items-center ${
								errorMssg && submit ? 'border-red-500' : 'border-gray-600'
							} border-[1.5px] rounded-lg p-2 mt-3 bg-input-bg`}
						>
							<LockKeyhole
								size={15}
								className='text-gray-600 mr-2 bg-transparent'
							/>
							<input
								type={`${eyeOpen ? 'text' : 'password'}`}
								name='password'
								value={password}
								onChange={(e) => {
									setPassword(e.target.value);
								}}
								required
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
						<Link
							to=''
							className='absolute right-5 text-[10px] mt-2 underline text-input-bg hover:text-white'
						>
							{t('forget_password')}
						</Link>
						{submit && <p className='text-red-500 text-[10px]'>{errorMssg}</p>}{' '}
						{submit && (
							<p className='text-red-500 text-[10px] mt-10 text-center'>
								{errorMessage}
							</p>
						)}
						<div className='absolute left-0 right-0 text-center bottom-20 '>
							<button
								className='bg-primary-main w-56 py-2 rounded-lg text-xs hover:bg-primary-thick'
								type='submit'
							>
								{t('login.submit')}
							</button>
						</div>
						<Link
							to='/signup'
							className='absolute left-0 right-0 text-center bottom-14 text-xs z-10 underline text-input-bg hover:text-white'
						>
							{t('login.no_account')}
						</Link>
					</form>
				</div>
			</div>
		</>
	);
};

export default Login;
