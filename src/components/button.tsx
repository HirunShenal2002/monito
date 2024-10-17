import React from 'react';

interface ButtonProps {
    text?: string;
    type?: 'default' | 'iconRight' | 'iconLeft' | 'iconOnly';
    color?: "primary1" | "secondary1" | "primary2" | "secondary2" | "disabled" | "outlined";
    icon?: React.ReactNode;
}

const Button: React.FC<ButtonProps> = ({ text = '', type = 'default', color = 'primary1', icon }) => {
    const getButtonClasses = () => {
        switch (color) {
            case 'primary1':
                return 'bg-btn-primary-1 hover:bg-blue-700 text-white';
            case 'secondary1':
                return 'bg-btn-secondary-2 hover:bg-green-700 text-white';
            case 'primary2':
                return 'bg-btn-primary-2 hover:bg-red-700 text-white';
            case 'secondary2':
                return 'bg-btn-secondary-2 hover:bg-yellow-700 text-white';
            case 'disabled':
                return 'bg-neutral-20 text-neutral-60 cursor-not-allowed';
            case 'outlined':
                return 'border-2 border-btn-primary-1 text-btn-primary-1 hover:bg-blue-500 hover:text-white';
            default:
                return 'bg-blue-500 hover:bg-blue-700 text-white';
        }
    };

    return (
        <button className={`${getButtonClasses()} ${type === 'iconOnly' ? 'p-4' : 'px-4 py-2'} rounded-full flex items-center justify-center gap-2 ${type === 'iconRight' ? 'flex-row' : 'flex-row-reverse '}`}>
            {type !== 'default' && icon}
            {type !== 'iconOnly' && text}
        </button>
    );
};

export default Button;
