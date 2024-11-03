import clsx from 'clsx';
import { useSelector } from 'react-redux';
import { FilterStore } from '../../redux/reducers/filter';
import { ItemStore } from '../../redux/reducers/items';
import { CompletedStore } from '../../redux/reducers/completed';
import { InProgressStore } from '../../redux/reducers/inProgress';

type Props = {
    onShowPausedChange: () => void;
    onShowInProgressChange: () => void;
    onShowCompletedChange: () => void;
};

export const DisplayOptions = ({
    onShowPausedChange,
    onShowInProgressChange,
    onShowCompletedChange,
}: Props) => {
    const items = useSelector((state: ItemStore) => state.items.value);
    const filter = useSelector((state: FilterStore) => state.filter);
    const completed = useSelector((state: CompletedStore) => state.completed);
    const inProgress = useSelector(
        (state: InProgressStore) => state.inProgress,
    );

    const numShow =
        (filter.showCompleted ? completed.value.length : 0) +
        (filter.showInProgress ? inProgress.value.length : 0) +
        (filter.showPaused
            ? items.length - (inProgress.value.length + completed.value.length)
            : 0);

    return (
        <div
            className={clsx(
                'bg-zinc-900/60 w-36 h-full p-2 flex flex-col gap-1 text-xs rounded-md',
            )}
        >
            <div>Display options</div>
            <hr />
            <label className="flex justify-between">
                <span className="mr-2 flex w-full justify-between">
                    <span>Paused</span>
                    <span>
                        (
                        {items.length -
                            (inProgress.value.length + completed.value.length)}
                        )
                    </span>
                </span>
                <input
                    className={clsx('accent-secondary relative z-20')}
                    type="checkbox"
                    checked={filter.showPaused}
                    onChange={onShowPausedChange}
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
                    onChange={onShowInProgressChange}
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
                    onChange={onShowCompletedChange}
                />
            </label>
            <hr />
            <div className="flex justify-between w-full">
                Showing:
                <span>{`${numShow}/${items.length}`}</span>
            </div>
        </div>
    );
};
