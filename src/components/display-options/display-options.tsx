import clsx from 'clsx';
import { Sidebar } from '../sidebar/sidebar';

type Props = {
    items: any[];
    listItems: any[];
    inProgressItems: any;
    completedItems: any;
    filter: any;
    onShowPausedChange: () => void;
    onShowInProgressChange: () => void;
    onShowCompletedChange: () => void;
};

export const DisplayOptions = ({
    items,
    inProgressItems: inProgressItem,
    completedItems,
    filter,
    onShowPausedChange,
    onShowInProgressChange,
    onShowCompletedChange,
}: Props) => (
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
                        (inProgressItem.value.length +
                            completedItems.value.length)}
                    )
                </span>
            </span>
            <input
                className={clsx('accent-secondary relative z-20')}
                type="checkbox"
                checked={filter.showPaused}
                // onChange={() => {
                //     dispatch(setShowPaused(!filter.showPaused));
                // }}
                onChange={onShowPausedChange}
            />
        </label>
        <label className="flex justify-between">
            <span className="mr-2 flex w-full justify-between">
                <span>In progress</span>
                <span>({inProgressItem.value.length})</span>
            </span>
            <input
                className={clsx('accent-secondary relative z-20')}
                type="checkbox"
                checked={filter.showInProgress}
                // onChange={() => {
                //     dispatch(setShowInProgress(!filter.showInProgress));
                // }}
                onChange={onShowInProgressChange}
            />
        </label>
        <label className="flex justify-between">
            <span className="mr-2 flex w-full justify-between">
                <span>Complete</span>
                <span>({completedItems.value.length})</span>
            </span>
            <input
                className={clsx('accent-secondary relative z-20')}
                type="checkbox"
                checked={filter.showCompleted}
                // onChange={() => {
                //     dispatch(setShowCompleted(!filter.showCompleted));
                // }}
                onChange={onShowCompletedChange}
            />
        </label>
    </div>
);
