import { Item } from './item';
import clsx from 'clsx';

type Props = {
    items: any[];
};

export const ItemList = ({ items }: Props) => {
    return (
        <div className="flex flex-col flex-grow gap-0.5 overflow-y-scroll bg-zinc-900 p-0.5">
            {items.map((item) => {
                return <Item item={item} />;
            })}
            <div
                className={clsx(
                    'w-full h-full flex justify-center items-center',
                    {
                        hidden: items.length > 0,
                    },
                )}
            >
                No items.
            </div>
        </div>
    );
};
