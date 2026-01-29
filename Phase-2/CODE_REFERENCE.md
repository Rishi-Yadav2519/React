# Phase 2: Code Reference & Syntax Guide

**Quick reference for Phase 2 concepts. Copy-paste allowed ONLY from this file.**

---

## 1. useEffect Hook

### Basic Syntax

```jsx
import { useEffect } from 'react';

function Component() {
  useEffect(() => {
    // Code runs after render
    console.log('Component rendered');
  });
  
  return <div>Hello</div>;
}
```

### useEffect with Dependencies

```jsx
function Component() {
  const [count, setCount] = useState(0);
  
  // Runs only when count changes
  useEffect(() => {
    console.log('Count changed:', count);
  }, [count]);
  
  return <button onClick={() => setCount(count + 1)}>Click</button>;
}
```

### useEffect with Empty Dependency Array

```jsx
function Component() {
  // Runs ONLY ONCE on mount
  useEffect(() => {
    console.log('Component mounted');
  }, []);
  
  return <div>Hello</div>;
}
```

### useEffect with Cleanup

```jsx
function Clock() {
  const [time, setTime] = useState(new Date());
  
  useEffect(() => {
    // Set up interval
    const interval = setInterval(() => {
      setTime(new Date());
    }, 1000);
    
    // Cleanup function (runs on unmount)
    return () => {
      clearInterval(interval);
      console.log('Cleaned up!');
    };
  }, []);
  
  return <div>{time.toLocaleTimeString()}</div>;
}
```

---

## 2. API Fetching with useEffect

### Basic Fetch

```jsx
function Users() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(data => {
        setUsers(data);
        setLoading(false);
      })
      .catch(error => {
        setError(error.message);
        setLoading(false);
      });
  }, []);
  
  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;
  
  return (
    <div>
      {users.map(user => (
        <div key={user.id}>{user.name}</div>
      ))}
    </div>
  );
}
```

### Fetch with Async/Await

```jsx
function Users() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  
  useEffect(() => {
    async function fetchUsers() {
      try {
        setLoading(true);
        const response = await fetch('https://jsonplaceholder.typicode.com/users');
        const data = await response.json();
        setUsers(data);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    }
    
    fetchUsers();
  }, []);
  
  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;
  
  return (
    <div>
      {users.map(user => (
        <div key={user.id}>{user.name}</div>
      ))}
    </div>
  );
}
```

### Fetch with Abort Controller (Cleanup)

```jsx
function Users() {
  const [users, setUsers] = useState([]);
  
  useEffect(() => {
    const controller = new AbortController();
    
    fetch('https://jsonplaceholder.typicode.com/users', {
      signal: controller.signal
    })
      .then(response => response.json())
      .then(data => setUsers(data))
      .catch(error => {
        if (error.name !== 'AbortError') {
          console.error('Fetch error:', error);
        }
      });
    
    // Cleanup: abort fetch if component unmounts
    return () => controller.abort();
  }, []);
  
  return (
    <div>
      {users.map(user => (
        <div key={user.id}>{user.name}</div>
      ))}
    </div>
  );
}
```

---

## 3. useContext Hook

### Creating Context

```jsx
import { createContext, useState } from 'react';

// 1. Create context
export const ThemeContext = createContext();

// 2. Create provider component
export function ThemeProvider({ children }) {
  const [theme, setTheme] = useState('light');
  
  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };
  
  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}
```

### Using Context in App

```jsx
import { ThemeProvider } from './ThemeContext';
import Header from './Header';
import Content from './Content';

function App() {
  return (
    <ThemeProvider>
      <Header />
      <Content />
    </ThemeProvider>
  );
}
```

### Consuming Context

```jsx
import { useContext } from 'react';
import { ThemeContext } from './ThemeContext';

function Header() {
  const { theme, toggleTheme } = useContext(ThemeContext);
  
  return (
    <header style={{ background: theme === 'light' ? '#fff' : '#333' }}>
      <button onClick={toggleTheme}>
        Switch to {theme === 'light' ? 'Dark' : 'Light'}
      </button>
    </header>
  );
}
```

### Complete Theme Example

```jsx
// ThemeContext.js
import { createContext, useState } from 'react';

export const ThemeContext = createContext();

export function ThemeProvider({ children }) {
  const [theme, setTheme] = useState('light');
  
  const toggleTheme = () => {
    setTheme(prev => prev === 'light' ? 'dark' : 'light');
  };
  
  const value = {
    theme,
    toggleTheme,
    colors: {
      background: theme === 'light' ? '#ffffff' : '#1a1a1a',
      text: theme === 'light' ? '#000000' : '#ffffff'
    }
  };
  
  return (
    <ThemeContext.Provider value={value}>
      {children}
    </ThemeContext.Provider>
  );
}

// App.js
import { ThemeProvider } from './ThemeContext';
import Header from './Header';

function App() {
  return (
    <ThemeProvider>
      <Header />
    </ThemeProvider>
  );
}

// Header.js
import { useContext } from 'react';
import { ThemeContext } from './ThemeContext';

function Header() {
  const { theme, toggleTheme, colors } = useContext(ThemeContext);
  
  return (
    <header style={{ 
      background: colors.background, 
      color: colors.text 
    }}>
      <h1>My App</h1>
      <button onClick={toggleTheme}>
        {theme === 'light' ? '🌙' : '☀️'}
      </button>
    </header>
  );
}
```

---

## 4. useMemo Hook

### Basic Syntax

```jsx
import { useMemo } from 'react';

function Component() {
  const [count, setCount] = useState(0);
  const [items, setItems] = useState([]);
  
  // Expensive calculation
  const expensiveCalculation = useMemo(() => {
    console.log('Calculating...');
    return count * 2;
  }, [count]); // Only recalculates when count changes
  
  return <div>{expensiveCalculation}</div>;
}
```

### Filtering with useMemo

```jsx
function SearchList() {
  const [search, setSearch] = useState('');
  const [items] = useState([
    { id: 1, name: 'Apple' },
    { id: 2, name: 'Banana' },
    { id: 3, name: 'Orange' }
  ]);
  
  // Only filters when search or items change
  const filteredItems = useMemo(() => {
    console.log('Filtering...');
    return items.filter(item => 
      item.name.toLowerCase().includes(search.toLowerCase())
    );
  }, [search, items]);
  
  return (
    <div>
      <input 
        value={search} 
        onChange={(e) => setSearch(e.target.value)} 
      />
      {filteredItems.map(item => (
        <div key={item.id}>{item.name}</div>
      ))}
    </div>
  );
}
```

### Sorting with useMemo

```jsx
function SortableList() {
  const [sortBy, setSortBy] = useState('name');
  const items = [
    { id: 1, name: 'Zebra', age: 5 },
    { id: 2, name: 'Apple', age: 3 },
    { id: 3, name: 'Mango', age: 7 }
  ];
  
  const sortedItems = useMemo(() => {
    console.log('Sorting...');
    return [...items].sort((a, b) => {
      if (sortBy === 'name') {
        return a.name.localeCompare(b.name);
      }
      return a.age - b.age;
    });
  }, [sortBy, items]);
  
  return (
    <div>
      <button onClick={() => setSortBy('name')}>Sort by Name</button>
      <button onClick={() => setSortBy('age')}>Sort by Age</button>
      {sortedItems.map(item => (
        <div key={item.id}>{item.name} - {item.age}</div>
      ))}
    </div>
  );
}
```

---

## 5. Custom Hooks

### Basic Custom Hook

```jsx
// useCounter.js
import { useState } from 'react';

function useCounter(initialValue = 0) {
  const [count, setCount] = useState(initialValue);
  
  const increment = () => setCount(prev => prev + 1);
  const decrement = () => setCount(prev => prev - 1);
  const reset = () => setCount(initialValue);
  
  return { count, increment, decrement, reset };
}

export default useCounter;

// Usage in component
import useCounter from './useCounter';

function Counter() {
  const { count, increment, decrement, reset } = useCounter(0);
  
  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={increment}>+</button>
      <button onClick={decrement}>-</button>
      <button onClick={reset}>Reset</button>
    </div>
  );
}
```

### useLocalStorage Hook

```jsx
// useLocalStorage.js
import { useState, useEffect } from 'react';

function useLocalStorage(key, initialValue) {
  // Get initial value from localStorage or use initialValue
  const [storedValue, setStoredValue] = useState(() => {
    try {
      const item = window.localStorage.getItem(key);
      return item ? JSON.parse(item) : initialValue;
    } catch (error) {
      console.error(error);
      return initialValue;
    }
  });
  
  // Save to localStorage when value changes
  useEffect(() => {
    try {
      window.localStorage.setItem(key, JSON.stringify(storedValue));
    } catch (error) {
      console.error(error);
    }
  }, [key, storedValue]);
  
  return [storedValue, setStoredValue];
}

export default useLocalStorage;

// Usage in component
import useLocalStorage from './useLocalStorage';

function NameForm() {
  const [name, setName] = useLocalStorage('name', '');
  
  return (
    <div>
      <input 
        value={name} 
        onChange={(e) => setName(e.target.value)} 
        placeholder="Enter name"
      />
      <p>Saved name: {name}</p>
    </div>
  );
}
```

### useFetch Custom Hook

```jsx
// useFetch.js
import { useState, useEffect } from 'react';

function useFetch(url) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  
  useEffect(() => {
    async function fetchData() {
      try {
        setLoading(true);
        const response = await fetch(url);
        const json = await response.json();
        setData(json);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    }
    
    fetchData();
  }, [url]);
  
  return { data, loading, error };
}

export default useFetch;

// Usage in component
import useFetch from './useFetch';

function Users() {
  const { data, loading, error } = useFetch('https://jsonplaceholder.typicode.com/users');
  
  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;
  
  return (
    <div>
      {data.map(user => (
        <div key={user.id}>{user.name}</div>
      ))}
    </div>
  );
}
```

---

## 6. Date and Time Formatting

### Format Time

```jsx
const now = new Date();

// 12-hour format with AM/PM
const time12 = now.toLocaleTimeString('en-US', {
  hour: '2-digit',
  minute: '2-digit',
  second: '2-digit',
  hour12: true
});
// Output: "02:30:45 PM"

// 24-hour format
const time24 = now.toLocaleTimeString('en-US', {
  hour: '2-digit',
  minute: '2-digit',
  second: '2-digit',
  hour12: false
});
// Output: "14:30:45"
```

### Format Date

```jsx
const now = new Date();

// Long date format
const longDate = now.toLocaleDateString('en-US', {
  weekday: 'long',
  year: 'numeric',
  month: 'long',
  day: 'numeric'
});
// Output: "Wednesday, January 29, 2026"

// Short date format
const shortDate = now.toLocaleDateString('en-US');
// Output: "1/29/2026"
```

### Get Hour for Conditional Logic

```jsx
const now = new Date();
const hour = now.getHours(); // 0-23

let timeOfDay;
if (hour >= 6 && hour < 12) {
  timeOfDay = 'morning';
} else if (hour >= 12 && hour < 18) {
  timeOfDay = 'afternoon';
} else if (hour >= 18 && hour < 21) {
  timeOfDay = 'evening';
} else {
  timeOfDay = 'night';
}
```

---

## 7. Common Patterns

### Loading States Pattern

```jsx
function Component() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  
  useEffect(() => {
    async function fetchData() {
      try {
        setLoading(true);
        setError(null);
        const response = await fetch('url');
        const json = await response.json();
        setData(json);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    }
    
    fetchData();
  }, []);
  
  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;
  if (!data) return <div>No data</div>;
  
  return <div>{/* Render data */}</div>;
}
```

### Debouncing Pattern (Simple)

```jsx
function SearchComponent() {
  const [search, setSearch] = useState('');
  const [debouncedSearch, setDebouncedSearch] = useState('');
  
  useEffect(() => {
    const timer = setTimeout(() => {
      setDebouncedSearch(search);
    }, 500); // Wait 500ms after user stops typing
    
    return () => clearTimeout(timer);
  }, [search]);
  
  useEffect(() => {
    if (debouncedSearch) {
      // Perform search with debouncedSearch
      console.log('Searching for:', debouncedSearch);
    }
  }, [debouncedSearch]);
  
  return (
    <input 
      value={search} 
      onChange={(e) => setSearch(e.target.value)} 
    />
  );
}
```

### Auto-refresh Pattern

```jsx
function Weather() {
  const [weather, setWeather] = useState(null);
  
  useEffect(() => {
    function fetchWeather() {
      fetch('weather-api-url')
        .then(res => res.json())
        .then(data => setWeather(data));
    }
    
    // Fetch immediately
    fetchWeather();
    
    // Set up interval to fetch every 5 minutes
    const interval = setInterval(fetchWeather, 5 * 60 * 1000);
    
    // Cleanup
    return () => clearInterval(interval);
  }, []);
  
  return <div>{/* Render weather */}</div>;
}
```

---

## 8. Important Rules

### useEffect Rules

1. **Always** include dependencies in dependency array
2. **Always** return cleanup function for subscriptions/timers
3. **Never** call hooks conditionally
4. **Don't** call async functions directly in useEffect (use inner async function)

### Custom Hook Rules

1. **Must** start with "use" (useCounter, useFetch, etc.)
2. **Can** call other hooks inside
3. **Should** return values (array or object)
4. **Must** follow hook rules (top level, not conditional)

### useMemo Rules

1. **Use** for expensive calculations
2. **Don't** use for simple operations
3. **Always** include all dependencies
4. **Remember** it's for optimization, not logic

---

**Use this file for syntax reference only. Build projects yourself! 💪**
