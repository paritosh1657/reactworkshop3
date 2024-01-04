import React, {memo} from 'react'

const DemoC = ({handleDrilling}) => {
  console.count("Counts C")
  console.log("rendering C");
  return (
    <div>
      Demo C
    </div>
  )
}

export default memo(DemoC)
