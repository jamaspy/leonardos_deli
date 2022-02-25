import React from "react"

interface IProps {
  label: string
  clickFn?: () => void
}

const Button = ({ label, clickFn }: IProps) => {
  return (
    <button
      onClick={clickFn}
      className="uppercase flex items-center px-3 py-2 text-black border border-black rounded hover:text-white hover:border-jeans hover:bg-jeans m-auto mt-8 transition duration-300 ease-in-out"
    >
      {label}
    </button>
  )
}

export default Button
