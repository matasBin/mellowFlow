import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";

function RedirectOnRefresh() {
    const location = useLocation();
    const navigate = useNavigate();

    useEffect(() => {
        // Safely cast to PerformanceNavigationTiming[]
        const navEntries = performance.getEntriesByType("navigation") as PerformanceNavigationTiming[];
        const navType = navEntries[0]?.type;

        if (navType === "reload") {
            navigate("/", { replace: true });
        }
    }, [location, navigate]);

    return null;
}

export default RedirectOnRefresh;
