import debounce from "debounce"
import { useDispatch, useSelector } from "react-redux"
import { ItemStore, setItems } from "../../redux/reducers/items";

export const TextView = () => {
    const items = useSelector((state:ItemStore) => state.items.value)
    const dispatch = useDispatch();

    const onTextChange = (text:string) => 
        dispatch(setItems(text.trim().split(`\n`).filter(x => x !== "")))

    return (
        <textarea
            className="w-full h-full bg-zinc-900 pl-1"
            defaultValue={items.join(`\n`)} 
            onInput={debounce((e) => onTextChange(e.target.value), 200)}>
        </textarea>
    )
}