import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";

function RedirectOnRefresh() {
    const location = useLocation();
    const navigate = useNavigate();

    useEffect(() => {
        let isReload = false;

        // Try the modern API first
        try {
            const navEntries = performance.getEntriesByType("navigation") as PerformanceNavigationTiming[];
            const navType = navEntries?.[0]?.type;
            if (navType === "reload") {
                isReload = true;
            }
        } catch (err) {
            // ignore — some browsers don't support it
        }

        // Fallback for older browsers / mobile Safari
        if (!isReload && (window.performance as any)?.navigation?.type === 1) {
            isReload = true;
        }

        if (isReload) {
            navigate("/", { replace: true });
        }
    }, [location, navigate]);

    return null;
}

export default RedirectOnRefresh;
