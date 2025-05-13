import { useState, useEffect } from 'react';
import { ArrowUp } from 'lucide-react';

export const ScrollToTopButton = () => {
    const [showScrollTop, setShowScrollTop] = useState(false);
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    };
    useEffect(() => {
        const handleScroll = () => {
            setShowScrollTop(window.scrollY > 300);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);
    return <>
        {showScrollTop && (
            <button
                onClick={scrollToTop}
                className="fixed bottom-6 right-6 bg-gaming-accent text-white p-3 rounded-full shadow-lg hover:bg-gaming-accent/90 transition-colors"
                aria-label="Scroll to top"
            >
                <ArrowUp size={20} />
            </button>
        )}</>;
};

export default ScrollToTopButton;
