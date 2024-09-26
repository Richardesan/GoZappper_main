
const Divider = ({name}: {name: string}) => {
  return (
    <div>
         <div className="flex gap-2 justify-center items-center text-center mb-6">
        <span className="border-b flex-1 border-borderCol block"></span>
        <span className="text-xs text-lightText font-bold">{name}</span>
        <span className="border-b flex-1 border-borderCol block"></span>
      </div>
    </div>
  )
}

export default Divider