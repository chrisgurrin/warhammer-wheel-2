import clsx from "clsx"
import { useDispatch, useSelector } from "react-redux"
import { FilterStore, setFilter } from "../../../redux/reducers/filter"
import { ItemStore } from "../../../redux/reducers/items"
import { ViewStore } from "../../../redux/reducers/view"

export const ItemListToolbar = () => {
    const items = useSelector((state:ItemStore) => state.items.value)
    const filter = useSelector((state:FilterStore) => state.filter.value)
    const view = useSelector((state:ViewStore) => state.view.value)
    const dispatch = useDispatch();
    
    return (
        <div   
            className={clsx(
                "flex items-end justify-end gap-2",
                {"invisible": view !== 'item'}
            )}
        >
            {`${items.length - filter.length}/${items.length}`}

            <span className="flex gap-1 items-center">
                <button className="hover:outline outline-1 outline-theme-1 bg-zinc-700/50 rounded px-2 py-1" onClick={() => dispatch(setFilter([]))}>Select all</button>
                <button className="hover:outline outline-1 outline-theme-1 bg-zinc-700/50 rounded px-2 py-1" onClick={() => dispatch(setFilter(items))}>Deselect all</button>
            </span>
        </div>
    )
}