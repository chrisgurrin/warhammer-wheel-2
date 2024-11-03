import { Item } from './item';
import clsx from 'clsx';

type Props = {
    items: any[];
};

export const ItemList = ({ items }: Props) => {
    return (
        <div className="rounded-md flex-grow overflow-hidden">
            <div className="h-full flex flex-col gap-0.5 overflow-y-scroll bg-zinc-900 p-0.5">
                {items.map((item) => {
                    return <Item key={item.item} item={item} />;
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
        </div>
    );
};
