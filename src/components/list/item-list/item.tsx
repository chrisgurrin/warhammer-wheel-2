import React from "react"
import { useDispatch, useSelector } from "react-redux"
import { addFilterItem, removeFilterItem } from "../../../redux/reducers/filter"
import { addInProgressItem, InProgressStore, removeInProgressItem } from "../../../redux/reducers/inProgress"
import clsx from "clsx"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faPaintBrush, faTimes } from "@fortawesome/free-solid-svg-icons"
import { removeItem } from "../../../redux/reducers/items"

type Props = {
    item:string
    selected: boolean
    checked:boolean
}

export const Item:React.FC<Props> = ({item, selected, checked}) => {
    const inProgress = useSelector((state:InProgressStore) => state.inProgress.value)
    const dispatch = useDispatch();

    const onClick = () => {
        dispatch(
            inProgress.includes(item) ? removeInProgressItem(item) : addInProgressItem(item)
        );
    }
    
    return (
        
        <div
            className="group/item flex justify-between px-2 py-1 bg-zinc-700 rounded-sm relative z-90 cursor-pointer"
        >
            <div className="flex gap-2">
                <button  
                    onClick={onClick}
                    className={clsx({'hover:text-zinc-400 text-transparent group-hover/item:text-zinc-500': !selected})}
                >
                    <FontAwesomeIcon 
                        icon={faPaintBrush}              
                    />
                </button>
                {item}
            </div>
            <div className="flex gap-2.5">
                <input 
                    className="accent-theme-1"
                    type="checkbox" 
                    checked={checked}
                    onChange={() => {
                        dispatch(checked ? addFilterItem(item) : removeFilterItem(item))
                    }}/>
                <button onClick={() => dispatch(removeItem(item))}><FontAwesomeIcon icon={faTimes} /></button> 
            </div>
        </div>
    )
}