import React , {memo}from 'react'

const DemoA = ({handleDrilling}) => {
  console.count("Counts A")
  console.log("rendering A");
  
  return (
    <div>
      Demo A
    </div>
  )
}

export default memo(DemoA)
