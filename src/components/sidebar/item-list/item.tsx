import React, { useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
    addFilterItem,
    removeFilterItem,
} from '../../../redux/reducers/filter';
import {
    addInProgressItem,
    InProgressStore,
    removeInProgressItem,
} from '../../../redux/reducers/inProgress';
import clsx from 'clsx';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faCheck,
    faPause,
    faScrewdriverWrench,
    faTrash,
} from '@fortawesome/free-solid-svg-icons';
import { removeItem } from '../../../redux/reducers/items';
import {
    addCompletedItem,
    CompletedStore,
    removeCompletedItem,
} from '../../../redux/reducers/completed';

type Props = {
    item: { item: string; checked: boolean };
};

export const Item: React.FC<Props> = ({ item }) => {
    const completed = useSelector(
        (state: CompletedStore) => state.completed.value,
    );
    const inProgress = useSelector(
        (state: InProgressStore) => state.inProgress.value,
    );
    const dispatch = useDispatch();

    const status = useMemo(() => {
        return inProgress.includes(item.item)
            ? 'inProgress'
            : completed.includes(item.item)
              ? 'completed'
              : '';
    }, [completed, inProgress, item]);

    const onClick = () => {
        if (inProgress.includes(item.item)) {
            dispatch(removeInProgressItem(item.item));
            dispatch(addCompletedItem(item.item));
        } else if (completed.includes(item.item)) {
            dispatch(removeCompletedItem(item.item));
        } else {
            dispatch(addInProgressItem(item.item));
        }
    };

    return (
        <div
            className={clsx(
                'group/item flex justify-between px-2 py-1 rounded-sm relative z-90 cursor-pointer hover:text-zinc-50 hover:bg-item-dark',
                { 'bg-item-in-progress': status === 'inProgress' },
            )}
        >
            <div className="flex gap-2">
                <button
                    onClick={onClick}
                    className={clsx(
                        'relative rounded uppercase w-4 h-4 text-xs',
                        // `${status === 'inProgress' ? 'text-yellow-400' : status === 'completed' ? 'text-green-400' : 'text-zinc-400'}`,
                    )}
                >
                    <FontAwesomeIcon
                        icon={
                            status === 'inProgress'
                                ? faScrewdriverWrench
                                : status === 'completed'
                                  ? faCheck
                                  : faPause
                        }
                    />
                </button>
                <span className="font-bold">{item.item}</span>
            </div>
            <div
                className={clsx('flex gap-2.5 accent-theme-1 relative', {
                    'before:border before:border-solid before:border-secondary before:rounded before:w-4 before:h-4 before:top-0 before:left-0 before:absolute before:content-[""]':
                        !item.checked,
                })}
            >
                <input
                    className={clsx('accent-secondary relative z-20', {
                        'opacity-0': !item.checked,
                    })}
                    type="checkbox"
                    checked={item.checked}
                    onChange={() => {
                        dispatch(
                            item.checked
                                ? addFilterItem(item.item)
                                : removeFilterItem(item.item),
                        );
                    }}
                />
                <button onClick={() => dispatch(removeItem(item.item))}>
                    <FontAwesomeIcon icon={faTrash} />
                </button>
            </div>
        </div>
    );
};
