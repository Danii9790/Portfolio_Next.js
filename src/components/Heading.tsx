import React from 'react'
interface propsType {
    tittle:string;
}
const Heading:React.FC<propsType> = ({tittle}) => {
  return (
    <div className="text-center text-4xl pb-8">
      <p className=""></p>
    </div>
  )
}

export default Heading
