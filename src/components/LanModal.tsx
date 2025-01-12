import React, { FunctionComponent } from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { X } from 'lucide-react';

interface LanModalProps {
	setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const LanModal: FunctionComponent<LanModalProps> = ({ setOpen }) => {
	const { i18n, t } = useTranslation();
	//Animations
	const modalVarient = {
		hidden: { opacity: 0, y: -50 },
		visible: { opacity: 1, y: 0 },
		exit: {
			opacity: 0,
			y: -50,
		},
	};

	//Animations
	const transition = {
		transition: {
			duration: 1.0,
			ease: 'easeInOut',
			delay: 0.2,
		},
	};

	//Localization
	const LanSelector = (lan: string) => {
		console.log(lan);
		i18n.changeLanguage(lan);
	};

	const CloseModal = () => {
		setOpen(false);
	};

	return (
		<>
			<motion.div
				className={`py-8 px-10 bg-gray-600 w-auto h-44 fixed  top-0 z-50 rounded-md ${
					i18n.language === 'my' ? 'notos-mm' : 'font-notos'
				}`}
				variants={modalVarient}
				initial='hidden'
				animate='visible'
				exit='exit'
				transition={transition}
			>
				<X
					className='absolute right-0 top-0 bg-transparent cursor-pointer'
					size={20}
					onClick={CloseModal}
				/>

				<div className='mb-20 bg-transparent'>
					{t('lanSelector')}
					<div className='bg-gray-600 flex flex-col mt-6 text-xs'>
						<label className='bg-transparent'>
							<input
								type='radio'
								name='language'
								value='my'
								checked={i18n.language === 'my'}
								className='mr-2'
								onClick={() => LanSelector('my')}
							/>
							Myanmar / Burmese 🇲🇲
						</label>
						<label className='bg-transparent mt-6 text-xs'>
							<input
								type='radio'
								name='language'
								value='en'
								checked={i18n.language === 'en'}
								className='mr-2'
								onClick={() => LanSelector('en')}
							/>
							English 🇬🇧
						</label>
					</div>
				</div>
			</motion.div>
		</>
	);
};

export default LanModal;
