import { useSelector } from "react-redux";
import { FilterStore } from "../../../redux/reducers/filter";
import { Item } from "./item";
import { AddItem } from "./add-item";
import clsx from "clsx";
import { InProgressStore } from "../../../redux/reducers/inProgress";
import { ItemStore } from "../../../redux/reducers/items";

export const ItemList= () => {
    const items = useSelector((state:ItemStore) => state.items.value)
    const filter = useSelector((state:FilterStore) => state.filter.value)
    const inProgress = useSelector((state:InProgressStore) => state.inProgress.value)

    return (
        <div className="flex flex-col flex-grow gap-0.5">
            <div className="flex flex-col flex-grow gap-0.5 overflow-y-scroll bg-zinc-900 p-0.5">
                {items.map((item) => {
                    const selected  = !!inProgress.find(x => x === item)
                    const checked = !filter.find((x) => x === item)
                    return <Item item={item} selected={selected} checked={checked}/>
                })}       
                <div 
                    className={clsx(
                        "w-full h-full flex justify-center items-center py-8",
                        {"hidden": items.length > 0}
                    )}
                >
                    No items.
                </div>
            </div>
            <AddItem />
        </div>
    )
}