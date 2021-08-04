import React, {memo} from 'react'

function CustomLabelComponent({name}) {
    console.log('in Child Component')
    return (
        <div>
            <p>{name}</p>
        </div>
    )
}
export default memo(CustomLabelComponent);
