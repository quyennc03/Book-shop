import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const ScrollToTop = () => {
    const { pathname } = useLocation();

    useEffect(() => {
        // Cuộn lên đầu trang khi chuyển trang (pathname thay đổi)
        window.scrollTo(0, 0);
    }, [pathname]);

    return null; // Không cần render bất kỳ gì
};

export default ScrollToTop;