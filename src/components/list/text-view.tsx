import debounce from 'debounce';
import { useDispatch } from 'react-redux';
import { setItems } from '../../redux/reducers/items';

type Props = {
    items: any[];
};

export const TextView = ({ items }: Props) => {
    const dispatch = useDispatch();

    const onTextChange = (text: string) =>
        dispatch(
            setItems(
                text
                    .trim()
                    .split(`\n`)
                    .filter((x) => x !== ''),
            ),
        );

    return (
        <textarea
            className="w-full h-full bg-zinc-900 pl-1"
            defaultValue={items.join(`\n`)}
            onInput={debounce((e) => onTextChange(e.target.value), 200)}
        ></textarea>
    );
};
