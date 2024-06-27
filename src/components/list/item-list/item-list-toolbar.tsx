import clsx from 'clsx';
import { useDispatch, useSelector } from 'react-redux';
import { FilterStore, setFilter } from '../../../redux/reducers/filter';
import { ItemStore } from '../../../redux/reducers/items';
import { setView, ViewStore } from '../../../redux/reducers/view';
import { Toggle } from '../../toggle/toggle';

export const ItemListToolbar = () => {
    const items = useSelector((state: ItemStore) => state.items.value);
    const filter = useSelector((state: FilterStore) => state.filter);
    const view = useSelector((state: ViewStore) => state.view.value);
    const dispatch = useDispatch();

    return (
        <div className="flex w-full">
            <Toggle
                label="Raw text"
                onChange={() =>
                    dispatch(setView(view === 'item' ? 'text' : 'item'))
                }
            />
            <div
                className={clsx(
                    'flex items-end justify-end gap-2 select-none w-full',
                    { invisible: view !== 'item' },
                )}
            >
                {`${items.length - filter.items.length}/${items.length}`}

                <span className="flex gap-1 items-center">
                    <button
                        className="hover:outline outline-2 outline-secondary bg-zinc-700/50 rounded px-2 py-1"
                        onClick={() => dispatch(setFilter([]))}
                    >
                        Select all
                    </button>
                    <button
                        className="hover:outline outline-2 outline-secondary bg-zinc-700/50 rounded px-2 py-1"
                        onClick={() => dispatch(setFilter(items))}
                    >
                        Deselect all
                    </button>
                </span>
            </div>
        </div>
    );
};
