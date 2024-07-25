import React, { createContext, useState, useContext, useEffect } from 'react';

interface ThemeContextType {
    theme: Record<string, string>;
    setTheme: (theme: Record<string, string>) => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [theme, setTheme] = useState<Record<string, string>>({
        navbarBackground: '#f94c2f',
        // Add other default colors here
    });

    useEffect(() => {
        // Fetch theme from API and set it
        const fetchTheme = async () => {
            try {
                const response = await fetch('/api/theme'); // Change this to your API endpoint
                const data = await response.json();
                setTheme(data);
            } catch (error) {
                console.error('Failed to fetch theme', error);
            }
        };

        fetchTheme();
    }, []);

    return (
        <ThemeContext.Provider value={{ theme, setTheme }}>
            {children}
        </ThemeContext.Provider>
    );
};

export const useTheme = (): ThemeContextType => {
    const context = useContext(ThemeContext);
    if (!context) {
        throw new Error('useTheme must be used within a ThemeProvider');
    }
    return context;
};
