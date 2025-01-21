import React, { useEffect, useState } from 'react';
import { Globe, Mail, LockKeyhole, User } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import LanModal from '../LanModal';
import { Link, useNavigate } from 'react-router-dom';
import { handleValidationError } from '../../utils/error';
import { useAppDispatch } from '../../state/hooks';
import { SignUpForm } from '../../state/slices/signupSlice';
import { useAppSelector } from '../../state/hooks';
const SignUp = () => {
	const [isOpen, setOpen] = useState<boolean>(false);

	const [username, setusername] = useState<string>('');
	const [email, setEmail] = useState<string>('');
	const [password, setPassword] = useState<string>('');
	const [confirmPassword, setConfirmPassword] = useState<string>('');

	const { t } = useTranslation();
	const { i18n } = useTranslation();
	const [errorMsg, setErrorMsg] = useState<string | null>('');
	const [errorEmail, setErrorEmail] = useState<string | null>('');
	const [errorUsername, setErrorUsername] = useState<string | null>('');
	const [errorConfirm, setErrorConfirm] = useState<string | null>('');
	const [signupError, setSignUpError] = useState<string | null>('');
	const [submit, setSubmit] = useState<boolean>(false);
	const dispatch = useAppDispatch();
	const navigate = useNavigate();
	const errorMessage = useAppSelector((state) => state.signup.error);
	const handleSignUp = async (e: React.FormEvent) => {
		e.preventDefault();

		// If any error exists, do not submit the form
		if (errorUsername || errorMsg) {
			setSubmit(true);
			return;
		}

		const signUpData = { username, email, password };
		console.log(signUpData);

		await dispatch(SignUpForm({ signUpData, t, navigate }));
	};

	const CloseModal = () => {
		setOpen(false);
	};

	//Error Handler
	useEffect(() => {
		if (username) {
			const error = handleValidationError(username, t);
			setErrorUsername(error);
		}
		if (!email) {
			setErrorEmail(t('login_error.no_email'));
		}
		if (email) {
			setErrorEmail('');
		}
		if (password) {
			const error = handleValidationError(password, t);
			setErrorMsg(error);
		}
		if (password !== confirmPassword) {
			setErrorConfirm(t('signup_error.password_unmatch'));
		}
		if (password === confirmPassword) {
			setErrorConfirm('');
		}
		if (errorMessage === t('signup_error.email_existed')) {
			setErrorEmail(t('signup_error.email_existed'));
		}
		if (errorMessage === t('server_error')) {
			setSignUpError(t('server_error'));
		}
	}, [password, t, email, username, errorMessage]);

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

					{/* Input Fields */}
					<form onSubmit={handleSignUp}>
						<div
							className={`flex items-center ${
								errorUsername && submit ? 'border-red-500' : 'border-gray-600'
							} border-[1.5px] rounded-lg p-2 mb-2 bg-input-bg`}
						>
							<User
								size={15}
								className='text-gray-600 mr-2 bg-transparent'
							/>
							<input
								type='text'
								required
								name='username'
								onChange={(e) => setusername(e.target.value)}
								value={username}
								placeholder={t('signup.username')}
								className='outline-none text-[10px] w-56 bg-transparent placeholder-gray-500 py-1'
							/>
						</div>
						{submit && <p className='error-message mb-1'>{errorUsername}</p>}
						<div
							className={`flex items-center ${
								errorEmail && submit ? 'border-red-500' : 'border-gray-600'
							} border-[1.5px] rounded-lg p-2 mb-2 bg-input-bg`}
						>
							<Mail
								size={15}
								className='text-gray-600 mr-2 bg-transparent'
							/>
							<input
								type='email'
								required
								name='email'
								onChange={(e) => setEmail(e.target.value)}
								value={email}
								placeholder={t('signup.email')}
								className='outline-none text-[10px] w-56 bg-transparent placeholder-gray-500 py-1'
							/>
						</div>
						{submit && <p className='error-message mb-1'>{errorEmail}</p>}
						{submit && <p className='error-message mb-1'>{errorMessage}</p>}
						<div
							className={`flex items-center ${
								errorMsg && submit ? 'border-red-500' : 'border-gray-600'
							} border-[1.5px] rounded-lg p-2 mb-2 bg-input-bg`}
						>
							<LockKeyhole
								size={15}
								className='text-gray-600 mr-2 bg-transparent'
							/>
							<input
								type='password'
								required
								name='password'
								onChange={(e) => setPassword(e.target.value)}
								placeholder={t('signup.password')}
								value={password}
								className='outline-none text-[10px] w-56 bg-transparent placeholder-gray-500 py-1'
							/>
						</div>
						{submit && <p className='error-message mb-1'>{errorMsg}</p>}
						<div
							className={`flex items-center ${
								errorConfirm && submit ? 'border-red-500' : 'border-gray-600'
							} border-[1.5px] rounded-lg p-2 mb-2 bg-input-bg`}
						>
							<LockKeyhole
								size={15}
								className='text-gray-600 mr-2 bg-transparent'
							/>
							<input
								type='password'
								name='confirmpassword'
								value={confirmPassword}
								onChange={(e) => setConfirmPassword(e.target.value)}
								placeholder={t('signup.confirm_password')}
								className='outline-none text-[10px] w-60 bg-transparent placeholder-gray-500 py-1'
							/>
						</div>
						{submit && <p className='error-message'>{errorConfirm}</p>}
						{submit && <p className='error-message'>{signupError}</p>}
						<div className='absolute left-0 right-0 text-center bottom-24'>
							<button
								type='submit'
								className='bg-primary-main w-56 py-2 rounded-lg text-xs hover:bg-primary-thick'
							>
								{t('signup.submit', 'Sign Up')}
							</button>
						</div>
					</form>
					<Link
						to='/login'
						className='absolute left-0 right-0 text-center bottom-16 text-xs z-10 underline text-input-bg'
					>
						{t('signup.already_account')}
					</Link>
				</div>
			</div>
		</>
	);
};

export default SignUp;
