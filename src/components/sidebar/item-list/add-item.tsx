import { useDispatch } from 'react-redux';
import { addItem } from '../../../redux/reducers/items';
import { useRef, useState } from 'react';
import clsx from 'clsx';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck, faPlus, faTimes } from '@fortawesome/free-solid-svg-icons';

export const AddItem = () => {
    const dispatch = useDispatch();
    const [showAddItem, setShowAddItem] = useState(false);
    const inputRef = useRef<HTMLInputElement | null>(null);

    const add = () => {
        if (inputRef.current) {
            dispatch(addItem(inputRef.current.value));
            inputRef.current.value = '';
            inputRef.current.focus();
        }
    };

    const cancel = () => setShowAddItem(false);

    const onKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.code === 'Enter' || e.key === 'Enter') {
            add();
        }
        if (e.code === 'Escape' || e.key === 'Escape') {
            setShowAddItem(false);
        }
    };

    const btnAdd_OnClick = () => {
        setShowAddItem(true);
        setTimeout(() => inputRef.current?.focus(), 100);
    };

    return (
        <div className="h-min">
            <div
                className={clsx('relative mt-2 w-full', {
                    hidden: !showAddItem,
                })}
            >
                <input
                    ref={inputRef}
                    type="text"
                    className="bg-zinc-800 h-10 outline-none rounded border border-zinc-500 active:border-zinc-300 focus:border-theme-1 w-full px-2"
                    onKeyDown={onKeyDown}
                />
                <button
                    onClick={add}
                    className="absolute py-1.5 px-2.5 rounded bg-theme-1 right-10 top-1/2 -translate-y-1/2"
                >
                    <FontAwesomeIcon icon={faCheck} />
                </button>
                <button
                    onClick={cancel}
                    className="absolute py-1.5 px-2.5 rounded bg-zinc-600 right-1 top-1/2 -translate-y-1/2"
                >
                    <FontAwesomeIcon icon={faTimes} />
                </button>
            </div>
            <button
                className="bg-primary hover:outline-1 hover:outline-zinc-300 hover:outline rounded py-3 mt-2 w-full"
                onClick={btnAdd_OnClick}
            >
                <FontAwesomeIcon icon={faPlus} /> Add
            </button>
        </div>
    );
};
