import React, { useEffect, useRef } from 'react'
import { getSegAngle, redraw, spin } from './js/wheel';
import { useDispatch, useSelector } from 'react-redux';
import { ItemStore } from '../../redux/reducers/items';
import { SelectedItemStore, setSelectedItem } from '../../redux/reducers/selectedItem';
import { FilterStore } from '../../redux/reducers/filter';
import { addInProgressItem } from '../../redux/reducers/inProgress';
import { ThemeStore } from '../../redux/reducers/theme';

type Props = {
    items?:string[]
}

export const Wheel:React.FC<Props> = () => {
    const radius = 300;
    const wheelRef = useRef<HTMLCanvasElement|null>(null);

    const items = useSelector((state:ItemStore) => state.items.value);
    const filter = useSelector((state:FilterStore) => state.filter.value);
    const selectedItem = useSelector((state:SelectedItemStore) => state.selectedItem.value);
    const theme = useSelector((state:ThemeStore) => state.theme.value);

    const dispatch = useDispatch();

    const filterItems = (items:string[], filter:string[]) => {
        return items.filter(value => !filter.includes(value));
    }

    const btnSpin_OnClick = async() => {
        const ctx =  wheelRef.current?.getContext('2d');
        if(!ctx) return
        
        const pick = await spin(
            filterItems(items, filter),
            radius,
            theme,
            ctx
        );
        if(pick) {
            dispatch(setSelectedItem(pick.name));
            dispatch(addInProgressItem(pick.name))
        }
    }

    useEffect(() => {
        const ctx =  wheelRef.current?.getContext('2d');
        if(!ctx) return

        let segAngle = 0;
        const filtered = filterItems(items, filter)

        if(selectedItem !== 'No item'){
            let i = filtered.findIndex((x) => x === selectedItem)
            i = i === -1 ? filtered.length : i;
            segAngle = (filtered.length - i) * getSegAngle(filtered)
        }

        redraw(filtered, radius, segAngle, theme, ctx)
    },[wheelRef, items, selectedItem, filter, theme])

    return (
        <div className="flex flex-col items-center gap-8">
            <canvas id="canvas" ref={wheelRef} width={(radius * 2) + 80} height={radius * 2}></canvas>
            <div className="flex flex-col gap-4 items-center">
                <button className="bg-zinc-700/50 rounded-lg px-8 py-3 hover:outline outline-1 outline-theme-1 w-32" onClick={btnSpin_OnClick}>Spin</button>
                <div className="flex flex-col gap-0.5 text-center items-center">
                    <i className="text-zinc-400">Current item</i>
                    <hr className='border-zinc-400 w-48 block shrink-0'/>
                    {selectedItem}         
                </div>
            </div>
        </div>
    )
}