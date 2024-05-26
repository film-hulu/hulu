export default function Tooltip({children}) {
    return ( 
    <div className="absolute z-50 inset-y-0 left-12 hidden items-center group-hover:flex">
      <div className="relative whitespace-nowrap rounded-md bg-gray-900 dark:bg-white dark:text-slate-900 px-4 py-2 text-sm font-semibold drop-shadow-lg text-white">
        <div className="absolute inset-y-0 -left-1 flex items-center">
            <div className="h-2 w-2 rotate-45 dark:bg-white bg-gray-900"></div>
        </div>
        {children}
        </div>
    </div>
    )
}