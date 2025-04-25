import { useCallback } from 'react';

/**
 * Custom hook for smooth scrolling to sections
 */
const useScrollToSection = () => {
  /**
   * Scrolls to a section with the given ID
   * @param id - The ID of the section to scroll to
   */
  const scrollToSection = useCallback((id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    }
  }, []);

  return { scrollToSection };
};

export default useScrollToSection;