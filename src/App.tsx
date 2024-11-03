import { useDispatch, useSelector } from 'react-redux';
import './theme.css';

import { Wheel } from './components/wheel';
import store from './redux/store';
import debounce from 'debounce';
import { saveState } from './redux/browser-storage';
import { ThemeStore } from './redux/reducers/theme';
import { Sidebar } from './components/sidebar/sidebar';
import { ThemeSelector } from './components/theme/theme-selector';
import clsx from 'clsx';
import {
    FilterStore,
    setShowCompleted,
    setShowInProgress,
    setShowPaused,
} from './redux/reducers/filter';
import { useMemo } from 'react';
import { CompletedStore } from './redux/reducers/completed';
import { ItemStore } from './redux/reducers/items';
import { InProgressStore } from './redux/reducers/inProgress';

store.subscribe(
    debounce(() => {
        saveState(store.getState());
    }, 1000),
);

function App() {
    const dispatch = useDispatch();
    const theme = useSelector((state: ThemeStore) => state.theme.value);

    const items = useSelector((state: ItemStore) => state.items.value);
    const filter = useSelector((state: FilterStore) => state.filter);
    const completed = useSelector((state: CompletedStore) => state.completed);
    const inProgress = useSelector(
        (state: InProgressStore) => state.inProgress,
    );

    const wheelItems = useMemo(
        () =>
            items.filter(
                (item) =>
                    !filter.items.includes(item) &&
                    !completed.value.includes(item),
            ),
        [items, filter, completed],
    );

    const listItems = useMemo(() => {
        return items
            .map((item) => {
                const isInProgress = inProgress.value.includes(item);
                const isCompleted = completed.value.includes(item);
                return {
                    completed: isCompleted,
                    inProgress: isInProgress,
                    checked: !filter.items.includes(item),
                    item,
                };
            })
            .filter((item) => {
                if (
                    (!filter.showInProgress && item.inProgress) ||
                    (!filter.showCompleted && item.completed) ||
                    (!filter.showPaused && !item.completed && !item.inProgress)
                ) {
                    return false;
                } else {
                    return true;
                }
            });
    }, [items, filter, inProgress, completed]);

    return (
        <div
            data-theme={theme}
            className="flex justify-start items-center w-min flex-grow shrink-0 pt-6 pb-8 px-8 gap-52 max-h-full"
        >
            <div className="flex h-full">
                <Sidebar items={items} listItems={listItems} />
                <div
                    className={clsx(
                        'bg-zinc-900/60 w-36 h-full p-2 flex flex-col gap-1 text-xs',
                    )}
                >
                    <div>Show/hide</div>
                    <hr />
                    <label className="flex justify-between">
                        <span className="mr-2 flex w-full justify-between">
                            <span>Paused</span>
                            <span>
                                (
                                {items.length -
                                    (inProgress.value.length +
                                        completed.value.length)}
                                )
                            </span>
                        </span>
                        <input
                            className={clsx('accent-secondary relative z-20')}
                            type="checkbox"
                            checked={filter.showPaused}
                            onChange={() => {
                                dispatch(setShowPaused(!filter.showPaused));
                            }}
                        />
                    </label>
                    <label className="flex justify-between">
                        <span className="mr-2 flex w-full justify-between">
                            <span>In progress</span>
                            <span>({inProgress.value.length})</span>
                        </span>
                        <input
                            className={clsx('accent-secondary relative z-20')}
                            type="checkbox"
                            checked={filter.showInProgress}
                            onChange={() => {
                                dispatch(
                                    setShowInProgress(!filter.showInProgress),
                                );
                            }}
                        />
                    </label>
                    <label className="flex justify-between">
                        <span className="mr-2 flex w-full justify-between">
                            <span>Complete</span>
                            <span>({completed.value.length})</span>
                        </span>
                        <input
                            className={clsx('accent-secondary relative z-20')}
                            type="checkbox"
                            checked={filter.showCompleted}
                            onChange={() => {
                                dispatch(
                                    setShowCompleted(!filter.showCompleted),
                                );
                            }}
                        />
                    </label>
                </div>
            </div>
            <Wheel items={wheelItems} />
            <div className="flex flex-grow justify-end h-full">
                <ThemeSelector />
            </div>
        </div>
    );
}

export default App;
