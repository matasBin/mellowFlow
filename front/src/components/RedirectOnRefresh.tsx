import { useEffect, useRef } from "react";
import { useLocation, useNavigate } from "react-router-dom";

function RedirectOnRefresh() {
    const location = useLocation();
    const navigate = useNavigate();
    const checkedOnce = useRef(false); // 🧠 only run once on first load

    useEffect(() => {
        if (checkedOnce.current) return; // Prevent running again on normal navigation
        checkedOnce.current = true;

        let isReload = false;

        try {
            const navEntries = performance.getEntriesByType("navigation") as PerformanceNavigationTiming[];
            const navType = navEntries?.[0]?.type;
            if (navType === "reload") {
                isReload = true;
            }
        } catch {
            // ignore errors for unsupported browsers
        }

        // Old mobile fallback
        if (!isReload && (window.performance as any)?.navigation?.type === 1) {
            isReload = true;
        }

        // ✅ Only redirect on refresh AND if not already at "/"
        if (isReload && location.pathname !== "/") {
            setTimeout(() => navigate("/", { replace: true }), 50);
        }
    }, [location, navigate]);

    return null;
}

export default RedirectOnRefresh;
