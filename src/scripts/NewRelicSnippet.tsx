import {NEW_RELIC_SNIPPET} from "./snippet";
export const NewRelicSnippet = () => {
    return (
        <script
            type="text/javascript"
            dangerouslySetInnerHTML={{ __html: NEW_RELIC_SNIPPET }}
        />
    );
};
