import {someVar} from './constant'

export default function DefineStatus({status}) {
  const color = someVar[status]

  return (
    <div
      className={`bg-[${color}]/5 w-[6.5rem] rounded-md py-3 text-center text-xs font-bold capitalize
       text-[${color}]`}
    >
      <span
        className={`bg-[${color}] mr-2 inline-block h-2 w-2 rounded-full`}
      ></span>
      {status}
    </div>
  )
}
