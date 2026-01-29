# Phase 2: Advanced React Hooks - Learning Guide

**Simple guide. No code. Just concepts and requirements.**

---

## 📋 Mini Project 2.1: Live Clock with useEffect

**Duration:** 2-3 hours  
**Concepts:** useEffect, Cleanup, setInterval

### What to Build

A digital clock that:
- Shows current time in HH:MM:SS format
- Updates every second automatically
- Shows date (Day, Month DD, YYYY)
- Has different themes based on time of day
- Cleans up properly when component unmounts

### Requirements

**Functional:**
- Display current time that updates every second
- Format: "12:45:30 PM" or "09:15:42 AM"
- Display current date: "Wednesday, January 29, 2026"
- Background color changes based on time:
  - Morning (6am-12pm): Light blue
  - Afternoon (12pm-6pm): Orange
  - Evening (6pm-9pm): Purple
  - Night (9pm-6am): Dark blue
- No memory leaks (proper cleanup)

**Technical:**
- Use useEffect for setting up interval
- Use cleanup function to clear interval
- Update state every second
- Calculate time dynamically

### How to Build

1. Create state for current time using useState
2. Use useEffect to set up setInterval
3. Update time state every second
4. Return cleanup function to clear interval
5. Format time using Date methods
6. Add conditional styling based on time
7. Test that interval clears on unmount

### Success Checklist

- [ ] Clock updates every second
- [ ] Time format is correct (HH:MM:SS AM/PM)
- [ ] Date displays correctly
- [ ] Background changes based on time of day
- [ ] No console warnings about memory leaks
- [ ] useEffect cleanup function works
- [ ] Professional styling
- [ ] No console errors

---

## 📋 Mini Project 2.2: Data Fetching Dashboard

**Duration:** 3-4 hours  
**Concepts:** useEffect, Async/Await, API Calls, Loading States

### What to Build

A dashboard that:
- Fetches data from a public API
- Shows loading spinner while fetching
- Displays data in cards
- Handles errors gracefully
- Allows refresh

### Requirements

**Functional:**
- Fetch data from: `https://jsonplaceholder.typicode.com/users`
- Show loading state while fetching
- Display users in cards with: name, email, phone, company
- Show error message if fetch fails
- "Refresh" button to re-fetch data
- "No data" message if API returns empty

**Technical:**
- Use useEffect with empty dependency array for initial fetch
- Use useState for: data, loading, error
- Handle async operations properly
- Show loading spinner while `loading === true`
- Display error message if fetch fails
- Clean code with try-catch blocks

### How to Build

1. Create states: data, loading, error
2. Create async function to fetch data
3. Use useEffect to call fetch on mount
4. Set loading to true before fetch
5. Set loading to false after fetch completes
6. Handle errors with try-catch
7. Display data, loading, or error based on state
8. Add refresh button functionality

### Success Checklist

- [ ] Data fetches on component mount
- [ ] Loading spinner shows while fetching
- [ ] Data displays in cards after fetch
- [ ] Error handling works (test by using wrong URL)
- [ ] Refresh button re-fetches data
- [ ] No console errors
- [ ] Professional card design
- [ ] Responsive layout

---

## 📋 Mini Project 2.3: Theme Switcher with useContext

**Duration:** 3-4 hours  
**Concepts:** useContext, Context API, Global State

### What to Build

A theme switcher that:
- Switches between light and dark themes
- Applies theme globally across components
- Uses Context API for state management
- Multiple components consume same theme

### Requirements

**Functional:**
- Toggle button to switch themes (Light/Dark)
- Theme applies to entire app (Header, Content, Footer)
- Light theme: White background, black text
- Dark theme: Dark background, white text
- At least 3 components using the theme
- Smooth theme transition

**Technical:**
- Create ThemeContext with createContext
- Create ThemeProvider component
- Use useContext in child components
- No prop drilling (all use context)
- State managed in provider

### How to Build

1. Create ThemeContext using createContext
2. Create ThemeProvider component with state
3. Wrap app in ThemeProvider
4. Create Header, Content, Footer components
5. Use useContext in each component to get theme
6. Create toggle function in provider
7. Pass toggle function through context
8. Apply theme styles conditionally

### Success Checklist

- [ ] ThemeContext created
- [ ] ThemeProvider wraps app
- [ ] Toggle button switches theme
- [ ] All components use context (no props)
- [ ] Light theme works correctly
- [ ] Dark theme works correctly
- [ ] Smooth transitions
- [ ] No prop drilling
- [ ] Professional styling

---

## 📋 Mini Project 2.4: Search with Optimization (useMemo)

**Duration:** 3-4 hours  
**Concepts:** useMemo, Performance Optimization, Expensive Calculations

### What to Build

A search feature that:
- Filters large list of items
- Optimizes filtering with useMemo
- Shows performance improvements
- Real-time search
- Highlights search term

### Requirements

**Functional:**
- List of 100+ items (use mock data)
- Search input filters list in real-time
- Case-insensitive search
- Show "X results found" count
- "No results" message when empty
- No lag while typing

**Technical:**
- Use useMemo to optimize filtering
- Filtering only runs when search query changes
- Use dependency array correctly
- Add console.log to see when filtering runs

### How to Build

1. Create large dataset (100+ items)
2. Create search state
3. Use useMemo to filter items based on search
4. Only re-calculate when search changes
5. Display filtered results
6. Add result count
7. Add console.log to verify optimization

### Success Checklist

- [ ] Search filters 100+ items
- [ ] useMemo optimizes filtering
- [ ] No lag while typing
- [ ] Case-insensitive search
- [ ] Result count displays
- [ ] "No results" message when empty
- [ ] Console.log shows optimization working
- [ ] Professional styling
- [ ] No console errors

---

## 📋 Mini Project 2.5: Custom Hook - useLocalStorage

**Duration:** 2-3 hours  
**Concepts:** Custom Hooks, localStorage, Reusability

### What to Build

A custom hook that:
- Syncs state with localStorage
- Persists data across page refreshes
- Is reusable across components
- Handles errors gracefully

### Requirements

**Functional:**
- Create `useLocalStorage` custom hook
- Takes key and initial value as parameters
- Returns [value, setValue] like useState
- Automatically saves to localStorage on change
- Loads from localStorage on mount
- Works like useState but with persistence

**Example Usage:**
```jsx
const [name, setName] = useLocalStorage('name', '')
// name persists across refreshes
```

**Technical:**
- Custom hook starts with "use"
- Uses useState internally
- Uses useEffect to sync with localStorage
- Handles JSON parse/stringify
- Error handling for invalid JSON

### How to Build

1. Create `useLocalStorage.js` file in hooks folder
2. Create function that accepts key and initialValue
3. Use useState to manage value
4. Use useEffect to load from localStorage on mount
5. Use useEffect to save to localStorage when value changes
6. Handle JSON serialization
7. Return [value, setValue]
8. Test in a component (input that persists)

### Success Checklist

- [ ] Custom hook created
- [ ] Takes key and initialValue
- [ ] Returns [value, setValue]
- [ ] Saves to localStorage on change
- [ ] Loads from localStorage on mount
- [ ] Data persists after refresh
- [ ] Works with multiple components
- [ ] Error handling included
- [ ] No console errors

---

## 🏆 CAPSTONE PROJECT: Weather App with Advanced Hooks

**Duration:** 1-2 weeks  
**Concepts:** All Phase 2 concepts combined

### What to Build

A complete weather application that combines ALL Phase 2 concepts.

### Requirements

**Must Have Features:**
- Fetch weather data from API (use OpenWeatherMap or WeatherAPI)
- Search for city weather
- Display current weather (temp, humidity, conditions, icon)
- 5-day forecast
- Theme switcher (light/dark) using useContext
- Loading states during API calls
- Error handling
- Save favorite cities using custom useLocalStorage hook
- Optimize with useMemo where appropriate
- Auto-update weather every 5 minutes using useEffect

**Technical Requirements:**
- Use useEffect for API calls and auto-refresh
- Use useContext for theme management
- Use custom useLocalStorage for favorites
- Use useMemo for expensive filtering/calculations
- At least 6 components
- Proper error boundaries
- Clean code with comments

### Components You Need

- Header (with theme toggle)
- SearchBar
- CurrentWeather (displays main weather info)
- ForecastList (5-day forecast)
- FavoritesList (saved cities)
- WeatherCard (reusable for each day)
- ThemeProvider (context)
- App (main)

### How to Build

**Phase 1: Setup & Theme (Day 1-2)**
- Create project structure
- Set up ThemeContext and provider
- Create Header with theme toggle
- Test theme switching

**Phase 2: API Integration (Day 3-4)**
- Sign up for weather API (free tier)
- Create fetch function
- Implement useEffect for fetching
- Add loading and error states

**Phase 3: Search & Display (Day 5-6)**
- Create SearchBar component
- Fetch weather on city search
- Display current weather
- Show weather icon

**Phase 4: Forecast (Day 7-8)**
- Fetch 5-day forecast
- Display in cards
- Use useMemo if filtering needed

**Phase 5: Favorites (Day 9-10)**
- Create useLocalStorage hook
- Add/remove favorite cities
- Display favorites list
- Quick load from favorites

**Phase 6: Polish & Auto-refresh (Day 11-12)**
- Add auto-refresh every 5 minutes
- Add animations/transitions
- Responsive design
- Error handling
- Clean up code

### Success Checklist

**API Integration:**
- [ ] Weather data fetches successfully
- [ ] Loading state shows during fetch
- [ ] Error messages display on failure
- [ ] Auto-refresh works every 5 minutes

**Theme Management:**
- [ ] ThemeContext created
- [ ] Theme toggles work
- [ ] All components use context
- [ ] Smooth theme transitions

**Search & Display:**
- [ ] Search finds city weather
- [ ] Current weather displays correctly
- [ ] Weather icon shows
- [ ] Temperature, humidity shown

**Forecast:**
- [ ] 5-day forecast displays
- [ ] Each day shows in card
- [ ] Data is accurate

**Favorites:**
- [ ] useLocalStorage hook works
- [ ] Can add favorite cities
- [ ] Can remove favorites
- [ ] Favorites persist after refresh
- [ ] Quick load from favorites

**Performance:**
- [ ] useMemo used where appropriate
- [ ] No unnecessary re-renders
- [ ] Smooth user experience

**Code Quality:**
- [ ] Well-organized components
- [ ] Clean code with comments
- [ ] Proper error handling
- [ ] No console errors
- [ ] Professional styling
- [ ] Responsive design

---

## 📝 Learning Outcomes

After completing Phase 2, you will understand:

- **useEffect**: Side effects, cleanup, dependencies
- **API Calls**: Fetching data, async/await, loading states
- **useContext**: Global state, Context API, avoiding prop drilling
- **useMemo**: Performance optimization, memoization
- **Custom Hooks**: Creating reusable logic, hook rules
- **Component Lifecycle**: Mount, update, unmount
- **Error Handling**: Try-catch, error states
- **Advanced Patterns**: Composition, optimization

---

**Ready to level up? Let's master advanced React! 🚀**
