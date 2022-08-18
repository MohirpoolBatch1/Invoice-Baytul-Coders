import {colors} from './constant'

export default function DefineStatus({status}) {
  const [bgColor, textColor] = colors[status]
  return (
    <div
      className={`${bgColor} ${textColor} w-[6.5rem] rounded-md bg-opacity-5 py-3 text-center 
      text-xs font-bold capitalize`}
    >
      <span
        className={`${bgColor} mr-2 inline-block h-2 w-2 rounded-full`}
      ></span>
      {status}
    </div>
  )
}
