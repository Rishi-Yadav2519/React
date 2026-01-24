# Phase 1: React Fundamentals - Learning Guide

**Simple guide. No code. Just concepts and requirements.**

---

## 📋 Mini Project 1.1: Dynamic Greeting Card

**Duration:** 2-3 hours  
**Concepts:** JSX, Props, Conditional Rendering

### What to Build

A greeting card that:
- Shows a personalized greeting with someone's name
- Changes greeting based on time of day (morning/afternoon/evening)
- Shows an age badge (child/teenager/adult)
- Looks professionally styled

### Requirements

**Functional:**
- Display name in greeting: "Good Morning, Rishi!"
- Check current time and show:
  - Morning (6am-12pm): "Good Morning, [Name]!"
  - Afternoon (12pm-6pm): "Good Afternoon, [Name]!"
  - Evening (6pm-6am): "Good Evening, [Name]!"
- Show age badge based on age:
  - Under 13: "Child"
  - 13-18: "Teenager"
  - Over 18: "Adult"
- Different colors for different times (blue for morning, orange for afternoon, etc)

**Technical:**
- Use functional component
- Use props to pass name, age, time
- Use if-else or ternary for conditionals
- Use CSS for styling
- No hardcoded values

### How to Build

1. Create file: `src/GreetingCard.jsx`
2. Think about: What props does it need? What logic needed? What does it return?
3. Build the component using concepts from CODE_REFERENCE.md
4. Use it in App.jsx with different values
5. Add CSS styling
6. Test with different times and ages

### Success Checklist

- [ ] Takes props: name, age, currentHour
- [ ] Shows correct greeting based on time
- [ ] Shows correct age badge
- [ ] Has professional CSS styling
- [ ] Colors change based on time
- [ ] No console errors
- [ ] Responsive on mobile

---

## 📋 Mini Project 1.2: Interactive Button Counter

**Duration:** 2-3 hours  
**Concepts:** State (useState), Events, Dynamic UI

### What to Build

A counter application that:
- Shows a count number
- Has buttons to change the count
- Shows progress bar
- Changes colors based on count value

### Requirements

**Functional:**
- Display current count prominently
- Buttons to:
  - Increment (+1)
  - Decrement (-1)
  - Reset (back to 0)
  - Add 5
  - Subtract 5
- Dynamic features:
  - Progress bar (fills as count goes from 0 to 20)
  - Color changes:
    - 0-5: Green
    - 6-12: Yellow
    - 13-20: Orange
    - 20+: Red
  - Decrement button disabled when count = 0
  - Warning message when count > 20

**Technical:**
- Use useState hook
- Update state correctly
- Handle multiple events
- Manage state changes properly

### How to Build

1. Create state: `const [count, setCount] = useState(0)`
2. Create button click handlers
3. Show count on screen
4. Calculate progress bar percentage
5. Determine color based on count
6. Add styling and CSS
7. Test all buttons

### Success Checklist

- [ ] Increment works
- [ ] Decrement works
- [ ] Reset works
- [ ] Add/Subtract 5 works
- [ ] Decrement disabled at 0
- [ ] Progress bar updates
- [ ] Colors change correctly
- [ ] Warning shows at 20+
- [ ] No console errors
- [ ] Professional styling

---

## 📋 Mini Project 1.3: User Profile Card List

**Duration:** 3-4 hours  
**Concepts:** Arrays, Mapping, Filtering, Keys

### What to Build

A user directory that:
- Displays multiple user profiles
- Lets you search for users
- Lets you delete users
- Shows professional cards

### Requirements

**Functional:**
- Display 5-10 sample users (use mock data)
- Each user shows: name, email, age, city, job
- Search by name (real-time):
  - Type to filter
  - Case-insensitive
  - Show "No users found" if empty
- Delete button on each user
- After delete, list updates immediately

**Technical:**
- Use .map() to render list
- Use unique keys (NOT index)
- Use .filter() for search
- Use .filter() for delete
- Proper component structure

### How to Build

1. Create array of 5-10 users with mock data
2. Create UserCard component
3. Create SearchBar component
4. In App, map users to UserCard
5. When search input changes, filter users
6. When delete clicked, remove user
7. Add CSS styling

### Success Checklist

- [ ] All users display initially
- [ ] Search filters correctly
- [ ] Search case-insensitive
- [ ] Delete removes user
- [ ] List updates after delete
- [ ] No React warnings about keys
- [ ] "No users found" shows when needed
- [ ] Professional card design
- [ ] Responsive layout
- [ ] No console errors

---

## 📋 Mini Project 1.4: Simple Form Input

**Duration:** 3-4 hours  
**Concepts:** Forms, Controlled Components, Validation

### What to Build

A form application that:
- Takes user input
- Shows input in real-time
- Toggles between edit and view modes
- Shows formatted output
- Has basic validation

### Requirements

**Functional:**
- Form inputs: name, email, message, age, gender
- Real-time display: Show what user types immediately
- Toggle buttons: "Edit" and "View" modes
- Edit mode: Show form with inputs
- View mode: Show formatted profile
- Validation:
  - Name not empty
  - Email format valid
  - Message not empty
  - Show error messages
  - Disable submit if invalid
- Display mode:
  - Show name, email, message, age, gender
  - Email as clickable link
  - Professional layout

**Technical:**
- Use controlled components (value + onChange)
- Manage multiple state values
- Handle form submission
- Basic email validation
- Toggle edit/view mode

### How to Build

1. Create state for all form fields
2. Create FormInput component with inputs
3. Create ProfileDisplay component
4. Handle input changes (controlled components)
5. Handle submit
6. Add validation logic
7. Toggle between views
8. Add CSS styling

### Success Checklist

- [ ] All inputs work
- [ ] Updates show real-time
- [ ] Edit/View toggle works
- [ ] Email validation works
- [ ] Name validation works
- [ ] Error messages display
- [ ] Submit works
- [ ] Email link works
- [ ] Professional styling
- [ ] Responsive design
- [ ] No console errors

---

## 🏆 CAPSTONE PROJECT: Interactive Student Dashboard

**Duration:** 1-2 weeks  
**Concepts:** Everything from Phase 1

### What to Build

A complete student management dashboard that combines ALL concepts from mini-projects.

### Requirements

**Must Have Features:**
- Display 10+ students with: name, email, age, grade, subject, GPA
- Search by student name (real-time, case-insensitive)
- Filter by grade (A, B, C, D)
- Toggle between list view and card view
- Add new student form with validation
- Delete student button
- Professional CSS styling
- Responsive design (mobile and desktop)

**Optional Features:**
- Edit student information
- Statistics (total students, average GPA, grade distribution)
- Sort by different fields

**Technical Requirements:**
- 5+ components (well organized)
- Proper props passing
- State management (all in App or well distributed)
- Reusable components
- Validation on form
- Professional styling
- Clean, readable code
- Comments explaining logic

### How to Build

**Phase 1: Setup & Display (Day 1-2)**
- Create folder structure
- Create sample student data (10+ students)
- Create StudentCard component
- Display all students

**Phase 2: Search & Filter (Day 3-4)**
- Add search input
- Filter by name
- Add grade filters
- Combine filters

**Phase 3: View Toggle (Day 5)**
- Create list view component
- Create card view component
- Toggle between views

**Phase 4: Add/Delete (Day 6-7)**
- Create add form
- Add validation
- Implement delete
- Update list

**Phase 5: Polish (Day 8-10)**
- Add CSS styling
- Make responsive
- Professional appearance
- Test everything

**Phase 6: Optional Extras (Day 11+)**
- Edit functionality
- Statistics
- Any extras you want

### Components You Need

- Header
- SearchBar
- FilterPanel
- StudentList
- StudentCard (or StudentTableRow for list view)
- AddStudentForm
- App (main)

### Grading Rubric (100 points)

| Criteria | Points |
|----------|--------|
| All features work | 30 |
| Code is clean and organized | 20 |
| Uses React correctly | 20 |
| Styling is professional | 15 |
| Responsive design | 10 |
| Comments and docs | 5 |

### Success Checklist

- [ ] 10+ students display
- [ ] Search works (case-insensitive)
- [ ] Filter by grade works
- [ ] Search + filter together work
- [ ] View toggle works
- [ ] Add student form validates
- [ ] Add student works
- [ ] Delete student works
- [ ] Professional CSS
- [ ] Mobile responsive
- [ ] Desktop responsive
- [ ] No console errors
- [ ] Code has comments
- [ ] Organized component structure

---

## 📖 How to Use CODE_REFERENCE.md

When you get stuck on syntax:

1. Open CODE_REFERENCE.md
2. Search for the concept (e.g., "useState", "map", "conditional")
3. Find syntax example
4. Understand it
5. Apply to your code (DON'T copy-paste)
6. Keep learning

---

## 🎯 Next Steps

1. Read this file completely
2. Open CODE_REFERENCE.md to understand where to look
3. Create Vite project for Mini Project 1.1
4. Start building!

**Let's go! 🚀**
