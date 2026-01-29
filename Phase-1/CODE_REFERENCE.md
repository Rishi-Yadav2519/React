# CODE_REFERENCE.md - Syntax Examples

**Use this when you're stuck on HOW to write something.**

**DON'T copy-paste. Read, understand, then apply to your code.**

---

## 1️⃣ FUNCTIONAL COMPONENTS

### Basic Component
```jsx
function MyComponent() {
  return <h1>Hello</h1>;
}

export default MyComponent;
```

### Component with Props
```jsx
function Greeting({ name, age }) {
  return <h1>Hello, {name}! You are {age} years old.</h1>;
}

export default Greeting;
```

### Using Component (in App.jsx)
```jsx
import Greeting from './Greeting.jsx';

function App() {
  return <Greeting name="Rishi" age={20} />;
}

export default App;
```

---

## 2️⃣ PROPS

### Passing Props
```jsx
<UserCard name="John" age={25} email="john@email.com" />
```

### Receiving Props (Destructuring)
```jsx
function UserCard({ name, age, email }) {
  return (
    <div>
      <h2>{name}</h2>
      <p>Age: {age}</p>
      <p>Email: {email}</p>
    </div>
  );
}
```

### Props are Read-Only
```jsx
// WRONG - Don't do this
function BadComponent({ count }) {
  count = count + 1;  // ERROR! Props can't be modified
}

// RIGHT - Use state if you need to change it
```

---

## 3️⃣ STATE (useState)

### Import useState
```jsx
import { useState } from 'react';
```

### Create State
```jsx
const [count, setCount] = useState(0);
// [current value, setter function] = useState(initial value)
```

### Update State (Simple)
```jsx
function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>
        Increment
      </button>
    </div>
  );
}
```

### Multiple State Variables
```jsx
function LoginForm() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <div>
      <input value={email} onChange={(e) => setEmail(e.target.value)} />
      <input value={password} onChange={(e) => setPassword(e.target.value)} />
    </div>
  );
}
```

### State with Object
```jsx
function UserForm() {
  const [user, setUser] = useState({ name: '', age: '' });

  // Update one property (create new object)
  const handleChange = (e) => {
    setUser({
      ...user,
      [e.target.name]: e.target.value
    });
  };

  return (
    <input name="name" value={user.name} onChange={handleChange} />
  );
}
```

### State with Array
```jsx
function TodoList() {
  const [todos, setTodos] = useState(['Buy milk', 'Code React']);

  // Add item (create new array)
  const addTodo = (newTodo) => {
    setTodos([...todos, newTodo]);
  };

  // Remove item (filter)
  const removeTodo = (index) => {
    setTodos(todos.filter((_, i) => i !== index));
  };

  return (
    <ul>
      {todos.map((todo, index) => (
        <li key={index}>{todo}</li>
      ))}
    </ul>
  );
}
```

---

## 4️⃣ CONDITIONAL RENDERING

### Ternary Operator
```jsx
function LoginStatus({ isLoggedIn }) {
  return (
    <div>
      {isLoggedIn ? <p>Welcome back!</p> : <p>Please login</p>}
    </div>
  );
}
```

### Logical AND (&&)
```jsx
function UserBadge({ isAdmin }) {
  return (
    <div>
      {isAdmin && <span className="badge">Admin</span>}
    </div>
  );
}
```

### If-Else (Outside JSX)
```jsx
function GradeMessage({ grade }) {
  let message;
  
  if (grade === 'A') {
    message = 'Excellent!';
  } else if (grade === 'B') {
    message = 'Good!';
  } else {
    message = 'Keep trying!';
  }

  return <p>{message}</p>;
}
```

### Conditional Styling
```jsx
<div className={count > 10 ? 'high' : 'low'}>
  Count: {count}
</div>

// Or inline style
<div style={{ color: count > 10 ? 'red' : 'green' }}>
  Count: {count}
</div>
```

---

## 5️⃣ EVENTS

### Button Click
```jsx
function ButtonExample() {
  const handleClick = () => {
    console.log('Button clicked');
  };

  return <button onClick={handleClick}>Click me</button>;
}
```

### Inline Handler
```jsx
<button onClick={() => setCount(count + 1)}>
  Increment
</button>
```

### Input Change
```jsx
function TextInput() {
  const [text, setText] = useState('');

  return (
    <input 
      value={text}
      onChange={(e) => setText(e.target.value)}
      placeholder="Type something"
    />
  );
}
```

### Form Submit
```jsx
function LoginForm() {
  const [email, setEmail] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();  // Prevent page reload
    console.log('Form submitted:', email);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input value={email} onChange={(e) => setEmail(e.target.value)} />
      <button type="submit">Login</button>
    </form>
  );
}
```

### Common Events
```jsx
onClick={() => ...}          // Click
onChange={(e) => ...}        // Input change
onSubmit={(e) => ...}        // Form submit
onMouseEnter={() => ...}     // Mouse enters
onMouseLeave={() => ...}     // Mouse leaves
onKeyDown={(e) => ...}       // Keyboard key pressed
```

---

## 6️⃣ ARRAY MAPPING (.map)

### Basic Mapping
```jsx
function FruitList() {
  const fruits = ['apple', 'banana', 'orange'];

  return (
    <ul>
      {fruits.map((fruit, index) => (
        <li key={index}>{fruit}</li>
      ))}
    </ul>
  );
}
```

### Mapping Objects
```jsx
function UserList() {
  const users = [
    { id: 1, name: 'John' },
    { id: 2, name: 'Jane' },
    { id: 3, name: 'Bob' }
  ];

  return (
    <ul>
      {users.map((user) => (
        <li key={user.id}>{user.name}</li>
      ))}
    </ul>
  );
}
```

### ⚠️ IMPORTANT: KEYS
```jsx
// WRONG - Don't use index as key
{items.map((item, index) => <div key={index}>{item}</div>)}

// RIGHT - Use unique ID
{items.map((item) => <div key={item.id}>{item.name}</div>)}
```

### Combining with Filter
```jsx
function FilteredList() {
  const products = [
    { id: 1, name: 'Laptop', price: 1000 },
    { id: 2, name: 'Mouse', price: 25 },
    { id: 3, name: 'Keyboard', price: 75 }
  ];

  return (
    <ul>
      {products
        .filter(product => product.price > 50)
        .map(product => (
          <li key={product.id}>{product.name}</li>
        ))}
    </ul>
  );
}
```

---

## 7️⃣ FORMS (CONTROLLED COMPONENTS)

### Text Input
```jsx
function NameForm() {
  const [name, setName] = useState('');

  return (
    <div>
      <input 
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Enter your name"
      />
      <p>You entered: {name}</p>
    </div>
  );
}
```

### Multiple Inputs
```jsx
function ContactForm() {
  const [form, setForm] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({
      ...form,
      [name]: value
    });
  };

  return (
    <form>
      <input name="name" value={form.name} onChange={handleChange} />
      <input name="email" value={form.email} onChange={handleChange} />
      <textarea name="message" value={form.message} onChange={handleChange} />
    </form>
  );
}
```

### Select Dropdown
```jsx
function GradeSelector() {
  const [grade, setGrade] = useState('A');

  return (
    <select value={grade} onChange={(e) => setGrade(e.target.value)}>
      <option value="A">Grade A</option>
      <option value="B">Grade B</option>
      <option value="C">Grade C</option>
    </select>
  );
}
```

### Checkbox
```jsx
function TermsCheckbox() {
  const [agreed, setAgreed] = useState(false);

  return (
    <div>
      <input 
        type="checkbox"
        checked={agreed}
        onChange={(e) => setAgreed(e.target.checked)}
      />
      <label>I agree to terms</label>
    </div>
  );
}
```

### Textarea
```jsx
function MessageForm() {
  const [message, setMessage] = useState('');

  return (
    <textarea
      value={message}
      onChange={(e) => setMessage(e.target.value)}
      placeholder="Enter your message"
      rows="5"
      cols="50"
    />
  );
}
```

---

## 8️⃣ VALIDATION

### Email Validation
```jsx
const isValidEmail = (email) => {
  return email.includes('@') && email.includes('.');
};
```

### Check Empty
```jsx
const isEmpty = (text) => {
  return text.trim() === '';
};
```

### Show Error Message
```jsx
function FormWithValidation() {
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (!isValidEmail(email)) {
      setError('Please enter a valid email');
    } else {
      setError('');
      console.log('Valid email:', email);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input value={email} onChange={(e) => setEmail(e.target.value)} />
      {error && <p style={{color: 'red'}}>{error}</p>}
      <button type="submit">Submit</button>
    </form>
  );
}
```

---

## 9️⃣ FILTERING DATA

### Filter Array
```jsx
const numbers = [1, 2, 3, 4, 5];
const filtered = numbers.filter(num => num > 2);  // [3, 4, 5]
```

### Filter by Name (Case-Insensitive)
```jsx
function SearchUsers() {
  const [search, setSearch] = useState('');
  const users = ['John', 'Jane', 'Bob', 'Alice'];

  const filtered = users.filter(user =>
    user.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div>
      <input 
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        placeholder="Search users"
      />
      <ul>
        {filtered.map(user => (
          <li key={user}>{user}</li>
        ))}
      </ul>
    </div>
  );
}
```

---

## 🔟 DELETE FROM ARRAY

### Remove Item by Index
```jsx
const todos = ['Buy milk', 'Code React', 'Sleep'];
const updated = todos.filter((_, index) => index !== 1);
// Result: ['Buy milk', 'Sleep']
```

### Remove Item by ID
```jsx
const users = [
  { id: 1, name: 'John' },
  { id: 2, name: 'Jane' }
];

const updated = users.filter(user => user.id !== 2);
// Result: [{ id: 1, name: 'John' }]
```

### Delete in Component
```jsx
function UserList() {
  const [users, setUsers] = useState([
    { id: 1, name: 'John' },
    { id: 2, name: 'Jane' }
  ]);

  const deleteUser = (id) => {
    setUsers(users.filter(user => user.id !== id));
  };

  return (
    <ul>
      {users.map(user => (
        <li key={user.id}>
          {user.name}
          <button onClick={() => deleteUser(user.id)}>Delete</button>
        </li>
      ))}
    </ul>
  );
}
```

---

## 1️⃣1️⃣ JSX RULES

### Return Single Root Element
```jsx
// WRONG
function Component() {
  return (
    <h1>Title</h1>
    <p>Paragraph</p>  // ERROR!
  );
}

// RIGHT
function Component() {
  return (
    <div>
      <h1>Title</h1>
      <p>Paragraph</p>
    </div>
  );
}
```

### Use className not class
```jsx
// WRONG
<div class="container">Hello</div>

// RIGHT
<div className="container">Hello</div>
```

### Close All Tags
```jsx
// WRONG
<img src="photo.jpg">
<input type="text">

// RIGHT
<img src="photo.jpg" />
<input type="text" />
```

### Embed JavaScript with {}
```jsx
const name = 'Rishi';
const age = 20;

<div>
  <p>Name: {name}</p>
  <p>Age: {age + 1}</p>
  <p>Uppercase: {name.toUpperCase()}</p>
</div>
```

---

## 1️⃣2️⃣ COMMON MISTAKES

### Import useState
```jsx
// If you get error "useState is not defined"
// Add at top of file:
import { useState } from 'react';
```

### Export Component
```jsx
// If you get "default export not found"
// Add at end of file:
export default MyComponent;
```

### Props are Read-Only
```jsx
// WRONG
function Bad({ count }) {
  count = count + 1;  // ERROR!
}

// RIGHT - Use state instead
function Good() {
  const [count, setCount] = useState(0);
  setCount(count + 1);
}
```

### Use Unique Keys
```jsx
// WRONG - React warning
{items.map((item, index) => <div key={index}>{item}</div>)}

// RIGHT
{items.map((item) => <div key={item.id}>{item}</div>)}
```

### Component Names Start with Capital
```jsx
// WRONG
const greeting = () => <h1>Hello</h1>;
<greeting />  // Won't work!

// RIGHT
const Greeting = () => <h1>Hello</h1>;
<Greeting />  // Works!
```

---

## 📚 Summary Table

| Concept | Usage | File |
|---------|-------|------|
| Component | Reusable UI | Any .jsx file |
| Props | Pass data down | Between components |
| useState | Manage state | Inside component |
| Events | Handle clicks, typing | onClick, onChange, etc |
| Conditional | Show/hide elements | ternary, && operator |
| .map() | Render lists | Display arrays |
| .filter() | Filter arrays | Search, remove items |
| Form | Collect input | Controlled inputs |

---

## 🎯 How to Use This File

1. When you don't know syntax → Search this file
2. Find the concept → Read the example
3. Understand what it does → Read the comments
4. Go back to your code → Apply it (don't copy-paste)
5. Keep coding!

**This is your reference guide. Bookmark it!** 📖

---

**Last Updated:** January 17, 2026
