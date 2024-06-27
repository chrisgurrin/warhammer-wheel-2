import clsx from 'clsx';
type Props = {
    label: string;
    onChange: (e: unknown) => void;
};

export const Toggle: React.FC<Props> = ({ label, onChange }) => {
    return (
        <label className="inline-flex items-end cursor-pointer text-stone-300 gap-2 select-none flex-grow w-full">
            <input
                type="checkbox"
                value=""
                className="sr-only peer"
                onChange={onChange}
            />
            <div
                className={clsx(
                    'hover:outline outline-2 outline-primary',
                    'after:absolute after:top-[2px] after:start-[2px] after:bg-zinc-300 after:border-zinc-300 after:border after:rounded-full after:h-3 after:aspect-square after:transition-all',
                    'peer-focus:outline-none',
                    "peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] rtl:peer-checked:after:-translate-x-full",
                    'peer relative w-7 h-4 rounded-full bg-zinc-700 peer-checked:bg-primary',
                )}
            ></div>
            {label}
        </label>
    );
};
