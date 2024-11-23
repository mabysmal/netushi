import * as React from "react"

interface SwitchProps extends React.InputHTMLAttributes<HTMLInputElement> {
  checked?: boolean;
  onCheckedChange?: (checked: boolean) => void;
}

const Switch = React.forwardRef<HTMLInputElement, SwitchProps>(
  ({ className = "", checked, onCheckedChange, ...props }, ref) => {
    return (
      <label className="relative inline-flex items-center cursor-pointer">
        <input
          type="checkbox"
          className="sr-only peer"
          ref={ref}
          checked={checked}
          onChange={e => onCheckedChange?.(e.target.checked)}
          {...props}
        />
        <div className={`
          w-11 h-6 bg-gray-200 rounded-full peer 
          peer-checked:after:translate-x-full 
          peer-checked:bg-blue-600
          after:content-[''] 
          after:absolute 
          after:top-[2px] 
          after:left-[2px] 
          after:bg-white 
          after:border-gray-300 
          after:border 
          after:rounded-full 
          after:h-5 
          after:w-5 
          after:transition-all
          ${className}
        `}></div>
      </label>
    )
  }
)
Switch.displayName = "Switch"

export { Switch }