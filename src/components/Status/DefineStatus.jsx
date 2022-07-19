import {statusColors} from './constant'

export default function DefineStatus({status}) {
  const color = statusColors[status]

  return (
    <div
      className={`bg-[${color}]  w-[6.5rem] rounded-md bg-opacity-5 py-3 text-center text-xs font-bold capitalize
       text-[${color}]`}
    >
      <span
        className={`bg-[${color}] mr-2 inline-block h-2 w-2 rounded-full`}
      ></span>
      {status}
    </div>
  )
}
