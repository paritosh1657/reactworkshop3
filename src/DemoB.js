import React, {memo} from 'react'

const DemoB = ({handleDrilling}) => {
  console.count("Counts A")
  console.log("rendering B");
  return (
    <div>
      Demo B
    </div>
  )
}

export default memo(DemoB)
