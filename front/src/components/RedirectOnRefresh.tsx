import { useEffect, useRef } from "react";
import { useLocation, useNavigate } from "react-router-dom";

/*
    Component to handle page reloads.
    - On a browser refresh, user is redirected to the landing page.
    - Supports mobile Safari fallback.
    - Only runs once per page load to avoid infinite loops.
*/
function RedirectOnRefresh() {
    const location = useLocation();
    const navigate = useNavigate();
    const checkedOnce = useRef(false); // 🧠 ensures effect runs only once

    useEffect(() => {
        if (checkedOnce.current) return; // Prevent re-running on normal navigation
        checkedOnce.current = true;

        let isReload = false;

        // Modern browsers
        try {
            const navEntries = performance.getEntriesByType("navigation") as PerformanceNavigationTiming[];
            const navType = navEntries?.[0]?.type;
            if (navType === "reload") {
                isReload = true;
            }
        } catch {
            // fallback ignored if unsupported
        }

        // Older browsers / mobile Safari fallback
        if (!isReload && (window.performance as any)?.navigation?.type === 1) {
            isReload = true;
        }

        // Only redirect if page was reloaded and not already on landing
        if (isReload && location.pathname !== "/") {
            setTimeout(() => navigate("/", { replace: true }), 50); // small delay to ensure Router is ready
        }
    }, [location, navigate]);

    return null;
}

export default RedirectOnRefresh;
