import { useDispatch, useSelector } from 'react-redux';
import './theme.css';

import { Wheel } from './components/wheel';
import store from './redux/store';
import debounce from 'debounce';
import { saveState } from './redux/browser-storage';
import { ThemeStore } from './redux/reducers/theme';
import { Sidebar } from './components/sidebar/sidebar';
import { ThemeSelector } from './components/theme/theme-selector';
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
import { DisplayOptions } from './components/display-options/display-options';
import { ItemListToolbar } from './components/sidebar/item-list/item-list-toolbar';

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
            <div className="flex flex-col h-full gap-2">
                <div className="">
                    <ItemListToolbar />
                </div>
                <div className="flex h-full gap-2">
                    <Sidebar items={items} listItems={listItems} />
                    <DisplayOptions
                        onShowPausedChange={() =>
                            dispatch(setShowPaused(!filter.showPaused))
                        }
                        onShowInProgressChange={() =>
                            dispatch(setShowInProgress(!filter.showInProgress))
                        }
                        onShowCompletedChange={() =>
                            dispatch(setShowCompleted(!filter.showCompleted))
                        }
                    />
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
