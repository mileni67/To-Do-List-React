import Input from "../../Input";
import { Wrapper } from "./styled";
import searchQueryParamName from "../../TasksPage/searchQueryParamName";
import { useQueryParameter, useReplaceQueryParametr } from "../../TasksPage/queryParameters";

export default () => {
    const query = useQueryParameter(searchQueryParamName);
    const replaceQueryParametr = useReplaceQueryParametr();

    const onInputChange = ({ target }) => {
        replaceQueryParametr ({
            key: searchQueryParamName,
            value: target.value.trim() !== "" ? target.value : undefined,

        }); 
    };


    return (
        <Wrapper>
            <Input
                placeholder="Filter tasks"
                value={query || ""}
                onChange={onInputChange}
            />
        </Wrapper>
    )
};