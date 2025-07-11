// Button component

const Button = ({ children, variant = "primary", className = "", ...props }) => {
  const baseClasses = "px-6 py-3 rounded-lg font-medium transition duration-300";
  
  const variants = {
    primary: "bg-primary-dark text-white hover:bg-primary-darker",
    secondary: "bg-secondary-dark text-white hover:bg-secondary-darker",
    outline: "border-2 border-primary-dark text-primary-dark hover:bg-primary-light",
  };

  return (
    <button
      className={`${baseClasses} ${variants[variant]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;