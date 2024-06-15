import { useDispatch, useSelector } from "react-redux";
import { ItemList } from "./item-list/item-list"
import { TextView } from "./text-view"
import { setView, ViewStore } from "../../redux/reducers/view";
import { Toggle } from "../toggle/toggle";
import { ItemListToolbar } from "./item-list/item-list-toolbar";

export const List = () => {
    const view = useSelector((state:ViewStore) => state.view.value)
    const dispatch = useDispatch();

    return (
        <div className="text-xs flex flex-col gap-1 px-1 h-full max-h-full w-[26rem]">        
            <div className="flex gap-1 justify-between items-end">
                <Toggle label="Raw text" onChange={() => dispatch(setView(view === 'item' ? 'text' : 'item'))}/>
                <ItemListToolbar />
            </div> 
            { view === 'item' && 
                <div className="flex h-full pb-8 pt-1">
                    <ItemList />
                </div>
            }
            { view === 'text' &&
                <div className="flex h-full pt-1">
                    <TextView />
                </div> }
        </div>
    )
}