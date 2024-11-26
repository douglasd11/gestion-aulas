import { lazy, Suspense } from "react";
import { element, string } from "../tools/Types";

const LoadComponent = ({ ruteComponent, loading = null }) => {
    let Component = lazy(async () => {
        return Promise.all([import(ruteComponent)])
            .then(([moduleExports]) => moduleExports)
    });
    return <Suspense fallback={loading}>
        <Component />
    </Suspense>;
}

LoadComponent.propTypes = {
    ruteComponent: string.isRequired,
    loading: element,
};

export default LoadComponent;