type AuthButtonProps = {
    text: string;
    isDisabled: boolean; 
}

const AuthButton = ({ text, isDisabled }: AuthButtonProps) => {    
    return (
        <button type="submit" disabled={isDisabled} className={
            `
            ${isDisabled 
                ? "bg-slate-400 cursor-not-allowed"
                : "bg-blue-500 text-md cursor-pointer hover:bg-blue-600"
            }
            w-full py-2 font-light text-white rounded
            `
        }>{text}</button>
    )
}

export default AuthButton