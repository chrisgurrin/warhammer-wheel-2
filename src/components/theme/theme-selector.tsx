import { useDispatch, useSelector } from "react-redux";
import { setTheme, ThemeStore } from "../../redux/reducers/theme";
import { colors } from "../../theme";

export const ThemeSelector =() => {
    const theme = useSelector((state:ThemeStore) => state.theme.value);
    const dispatch = useDispatch();

    return (
        <>
            <select className="bg-zinc-900 py-1 px-2 rounded h-fit" onChange={(e) => dispatch(setTheme(e.target.value))}>
                {Object.keys(colors).map(c => {
                    return theme === c ?
                        <option selected value={c}>{colors[c].name}</option> :
                        <option  value={c}>{colors[c].name}</option>
                })}
            </select>
        </>
    )
}