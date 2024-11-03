import { useSelector } from 'react-redux';
import { ItemList } from './item-list/item-list';
import { TextView } from './text-view';
import { ViewStore } from '../../redux/reducers/view';
import { AddItem } from './item-list/add-item';

type Props = {
    items: string[];
    listItems: { item: string; checked: boolean }[];
};

export const Sidebar = ({ items, listItems }: Props) => {
    const view = useSelector((state: ViewStore) => state.view.value);

    return (
        <div className="text-xs flex gap-2 h-full max-h-full relative">
            <div className="flex flex-col w-[26rem] h-full gap-1">
                {view === 'item' && (
                    <>
                        <ItemList items={listItems} />
                        <AddItem />
                    </>
                )}
                {view === 'text' && <TextView items={items} />}
            </div>
        </div>
    );
};
