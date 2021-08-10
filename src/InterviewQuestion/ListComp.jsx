import React,{memo} from 'react'

const ListComp = ({cityList}) => {
    return (
        <div>
            <ul>
                {cityList && cityList.map((el,idx)=>{
                    return (
                        <li key={`${el}_${idx}`}>{el}</li>
                    )
                })}
            </ul>
        </div>
    )
}

export default memo(ListComp);
