const {
  Document, Packer, Paragraph, TextRun, HeadingLevel,
  AlignmentType, BorderStyle, LevelFormat, convertInchesToTwip
} = require("docx");

const CODE_FONT = "Consolas";

function title(text) {
  return new Paragraph({
    children: [new TextRun({ text, italics: true, size: 22 })],
    spacing: { after: 300 },
  });
}

function h1(text) {
  return new Paragraph({
    text,
    heading: HeadingLevel.HEADING_1,
    spacing: { before: 400, after: 200 },
  });
}

function h2(text) {
  return new Paragraph({
    text,
    heading: HeadingLevel.HEADING_2,
    spacing: { before: 300, after: 150 },
  });
}

function h3(text) {
  return new Paragraph({
    text,
    heading: HeadingLevel.HEADING_3,
    spacing: { before: 250, after: 100 },
  });
}

function p(text) {
  return new Paragraph({
    children: [new TextRun({ text, size: 22 })],
    spacing: { after: 200 },
  });
}

function code(lines) {
  return lines.map((line, i) =>
    new Paragraph({
      children: [new TextRun({ text: line || " ", font: CODE_FONT, size: 20 })],
      indent: { left: convertInchesToTwip(0.3) },
      spacing: { after: i === lines.length - 1 ? 200 : 0 },
      border: undefined,
    })
  );
}

function bullet(text) {
  return new Paragraph({
    children: [new TextRun({ text, size: 22 })],
    bullet: { level: 0 },
    spacing: { after: 100 },
  });
}

function numbered(text, ref) {
  return new Paragraph({
    children: [new TextRun({ text, size: 22 })],
    numbering: { reference: ref, level: 0 },
    spacing: { after: 100 },
  });
}

function hr() {
  return new Paragraph({
    text: "",
    border: {
      bottom: { color: "999999", space: 1, style: BorderStyle.SINGLE, size: 6 },
    },
    spacing: { after: 300 },
  });
}

const children = [];

children.push(
  title("Advanced React Roadmap — Lectures, Practical Projects & Real Assignments"),
  p("This continues directly from your Components → Props → Events notes. Same format: numbered concept explanations with short code examples, a Practical Project that combines HTML/CSS/React, hands-on Tasks left for you to implement yourself, and a Key Concepts summary at the end of each lecture."),
  hr()
);

// ---------------- LECTURE 4 ----------------
children.push(h1("React Lecture 4: useEffect, Cleanup Functions & Custom Hooks"));
children.push(p("You already use useEffect for one-time data fetching. This lecture goes deeper: what the dependency array really controls, why some effects need cleanup, and how to extract repeated logic into your own custom hook."));

children.push(h2("1. What useEffect actually watches"));
children.push(p("The dependency array tells React when to re-run the effect. An empty array means \"run once, after the first render only.\" Leaving it out entirely means \"run after every single render.\" Listing variables means \"re-run whenever any of these change.\""));
children.push(...code([
  "useEffect(() => {",
  "  console.log(count)",
  "}, [count])   // runs on mount, and again every time count changes",
]));

children.push(h2("2. Cleanup functions"));
children.push(p("Some effects set something up that needs to be torn down — a timer, an event listener, a subscription. Returning a function from useEffect tells React to run it right before the effect runs again, and when the component unmounts."));
children.push(...code([
  "useEffect(() => {",
  "  const id = setInterval(() => console.log('tick'), 1000)",
  "",
  "  return () => clearInterval(id)   // cleanup",
  "}, [])",
]));
children.push(p("Without this cleanup, every re-render would start a brand new interval on top of the old one, which still keeps running in the background — a very common source of memory leaks and duplicated behavior."));

children.push(h2("3. Custom Hooks"));
children.push(p("A custom hook is just a regular JavaScript function whose name starts with \"use\" and that calls other hooks inside it. It lets you extract repeated stateful logic out of a component so it can be reused."));
children.push(...code([
  "function useWindowWidth() {",
  "  const [width, setWidth] = useState(window.innerWidth)",
  "",
  "  useEffect(() => {",
  "    function handleResize() {",
  "      setWidth(window.innerWidth)",
  "    }",
  "    window.addEventListener('resize', handleResize)",
  "    return () => window.removeEventListener('resize', handleResize)",
  "  }, [])",
  "",
  "  return width",
  "}",
]));
children.push(p("Any component can now just call const width = useWindowWidth() instead of repeating this logic."));

children.push(h2("Practical Project: Live Search for the Tech Store"));
children.push(p("Extend your existing Tech Store product card layout into a searchable product grid. This combines HTML/CSS structure with a real useEffect use case: debounced search."));

children.push(h3("Starting Structure"));
children.push(...code([
  "src/",
  "├── App.jsx",
  "├── App.css",
  "├── ProductCard.jsx",
  "└── products.js   // an array of {id, name, category, price, image}",
]));

children.push(h3("App.css additions"));
children.push(...code([
  ".search-bar {",
  "  width: 100%;",
  "  padding: 14px 18px;",
  "  border: 1px solid #ddd;",
  "  border-radius: 10px;",
  "  font-size: 16px;",
  "  margin-bottom: 30px;",
  "}",
  "",
  ".no-results {",
  "  text-align: center;",
  "  color: #777;",
  "  padding: 40px 0;",
  "}",
]));

children.push(h3("Project Tasks — Implement These Yourself"));
children.push(numbered("Task 1 — Search input: Add a text input above the product grid, styled with .search-bar. Track its value with useState.", "lecture4"));
children.push(numbered("Task 2 — Debounce with useEffect: Instead of filtering on every keystroke, use useEffect with a setTimeout of 400ms and a cleanup function that clears the timeout, so filtering only happens once the user pauses typing.", "lecture4"));
children.push(numbered("Task 3 — Filter logic: Filter the products array by whether the product name includes the debounced search text (case-insensitive).", "lecture4"));
children.push(numbered("Task 4 — Empty state: When no products match, render a .no-results message instead of an empty grid.", "lecture4"));
children.push(numbered("Task 5 — Custom hook: Extract your debounce logic into a reusable useDebounce(value, delay) hook and use it in App instead of writing the useEffect directly.", "lecture4"));

children.push(h2("Key Concepts to Remember"));
children.push(bullet("The dependency array controls exactly when an effect re-runs — empty, omitted, and populated all mean different things."));
children.push(bullet("A cleanup function (the function you return from useEffect) prevents leftover timers, listeners, or subscriptions from piling up."));
children.push(bullet("Custom hooks are just functions that start with \"use\" and internally call other hooks — they exist purely to remove duplicated logic."));
children.push(hr());

// ---------------- LECTURE 5 ----------------
children.push(h1("React Lecture 5: Context API & Global State"));
children.push(p("You've already felt the pain of prop drilling — passing theme through SettingsPage and SettingsSection even though neither one used it. Context solves exactly that problem for data that many components across your app need."));

children.push(h2("1. Creating a Context"));
children.push(...code([
  "import { createContext } from 'react'",
  "",
  "export const ThemeContext = createContext(null)",
]));

children.push(h2("2. Providing the value"));
children.push(...code([
  "function App() {",
  "  const [theme, setTheme] = useState('light')",
  "",
  "  return (",
  "    <ThemeContext.Provider value={{ theme, setTheme }}>",
  "      <SettingsPage />",
  "    </ThemeContext.Provider>",
  "  )",
  "}",
]));
children.push(p("Every component rendered inside this Provider — no matter how deeply nested — can now read theme directly, without it being passed as a prop through every layer in between."));

children.push(h2("3. Reading it with useContext"));
children.push(...code([
  "import { useContext } from 'react'",
  "import { ThemeContext } from './ThemeContext'",
  "",
  "function ThemeLabel() {",
  "  const { theme } = useContext(ThemeContext)",
  "  return <p>Current theme: {theme}</p>",
  "}",
]));
children.push(p("Notice SettingsPage and SettingsSection no longer need to accept or forward a theme prop at all — the pass-through layers you built earlier disappear entirely."));

children.push(h2("4. When Context is the wrong tool"));
children.push(p("Every component reading from a Context re-renders whenever that Context's value changes — even components only reading one small part of it. For state that changes very frequently (like live form input, or a mouse position), Context can cause unnecessary re-renders across your app. Zustand or Redux, which you've already used, avoid this with selector functions that subscribe to only the specific slice a component needs."));

children.push(h2("Practical Project: Dark Mode Tech Store"));
children.push(p("Wire real dark/light theming into your Tech Store using Context — this time the theme actually changes the visual appearance."));

children.push(h3("App.css additions"));
children.push(...code([
  ":root {",
  "  --bg: #f4f5f7;",
  "  --card-bg: #ffffff;",
  "  --text: #111111;",
  "}",
  "",
  "[data-theme='dark'] {",
  "  --bg: #121212;",
  "  --card-bg: #1e1e1e;",
  "  --text: #f4f5f7;",
  "}",
  "",
  "body {",
  "  background: var(--bg);",
  "  color: var(--text);",
  "}",
  "",
  ".product-card {",
  "  background: var(--card-bg);",
  "}",
]));

children.push(h3("Project Tasks"));
children.push(numbered("Task 1 — Build ThemeContext.jsx exporting a ThemeContext and a ThemeProvider component that wraps children and holds theme state.", "lecture5"));
children.push(numbered("Task 2 — In App.jsx, apply the theme to the root element with data-theme={theme} so the CSS variables above take effect.", "lecture5"));
children.push(numbered("Task 3 — Add a toggle button in the store header (near the cart icon) that flips theme between 'light' and 'dark' using useContext.", "lecture5"));
children.push(numbered("Task 4 — Persistence: store the current theme in localStorage on every change, and read it back as the initial useState value on load, so refreshing the page keeps the chosen theme.", "lecture5"));

children.push(h2("Key Concepts to Remember"));
children.push(bullet("Context lets deeply nested components read shared data without prop drilling through every layer."));
children.push(bullet("createContext + Provider + useContext are the three pieces: define it, supply a value, read the value."));
children.push(bullet("Context isn't free — it re-renders every consumer on any value change, so it's best for infrequently-changing, truly global data like theme, auth, or locale."));
children.push(hr());

// ---------------- LECTURE 6 ----------------
children.push(h1("React Lecture 6: React Router"));
children.push(p("So far your Tech Store has lived on a single page. Real apps usually need multiple pages — a product list, a product detail page, a cart page — without a full browser reload between them. That's what a router does."));

children.push(h2("1. Setting up routes"));
children.push(...code([
  "import { BrowserRouter, Routes, Route } from 'react-router-dom'",
  "",
  "function App() {",
  "  return (",
  "    <BrowserRouter>",
  "      <Routes>",
  "        <Route path=\"/\" element={<StorePage />} />",
  "        <Route path=\"/product/:id\" element={<ProductDetailPage />} />",
  "      </Routes>",
  "    </BrowserRouter>",
  "  )",
  "}",
]));

children.push(h2("2. Link instead of <a>"));
children.push(p("A plain <a> tag reloads the whole page from the server. React Router's Link swaps content instantly on the client instead."));
children.push(...code([
  "import { Link } from 'react-router-dom'",
  "",
  "<Link to={`/product/${product.id}`}>{product.name}</Link>",
]));

children.push(h2("3. Reading the URL — useParams"));
children.push(...code([
  "import { useParams } from 'react-router-dom'",
  "",
  "function ProductDetailPage() {",
  "  const { id } = useParams()",
  "  // id is a string, e.g. '3', from /product/3",
  "}",
]));

children.push(h2("4. Navigating from code — useNavigate"));
children.push(...code([
  "import { useNavigate } from 'react-router-dom'",
  "",
  "function ProductCard({ product }) {",
  "  const navigate = useNavigate()",
  "",
  "  function handleAddToCart() {",
  "    navigate('/cart')",
  "  }",
  "}",
]));

children.push(h2("Practical Project: Multi-Page Tech Store"));
children.push(p("Turn the Tech Store into a real multi-page app: a product list page and an individual product page, sharing the same header and CSS."));

children.push(h3("Suggested structure"));
children.push(...code([
  "src/",
  "├── App.jsx",
  "├── App.css",
  "├── data/products.js",
  "├── pages/StorePage.jsx",
  "├── pages/ProductDetailPage.jsx",
  "└── pages/NotFoundPage.jsx",
]));

children.push(h3("Project Tasks"));
children.push(numbered("Task 1 — Install and set up react-router-dom, wrap App in BrowserRouter, and define routes for / and /product/:id.", "lecture6"));
children.push(numbered("Task 2 — StorePage should render the product grid you already built, with each ProductCard's name or image wrapped in a Link to its detail page.", "lecture6"));
children.push(numbered("Task 3 — ProductDetailPage should read the id from useParams, look the product up from your data array, and display a larger layout: bigger image, full description, quantity control, and Add to Cart button.", "lecture6"));
children.push(numbered("Task 4 — Add a \"Back to Store\" button on the detail page using useNavigate(-1).", "lecture6"));
children.push(numbered("Task 5 — Add a catch-all route (path=\"*\") rendering a styled NotFoundPage for any unmatched URL.", "lecture6"));

children.push(h2("Key Concepts to Remember"));
children.push(bullet("BrowserRouter, Routes, and Route set up which URL renders which component."));
children.push(bullet("Link navigates without a full page reload; a plain <a> tag would defeat the purpose of a single-page app."));
children.push(bullet("useParams reads dynamic segments out of the URL; useNavigate lets you change routes from inside your JavaScript logic."));
children.push(hr());

// ---------------- LECTURE 7 ----------------
children.push(h1("React Lecture 7: Forms & Validation"));
children.push(p("You already know controlled inputs. This lecture scales that up to a real multi-field form with validation — first by hand, then with the library most production apps actually use."));

children.push(h2("1. Multi-field controlled forms"));
children.push(...code([
  "const [form, setForm] = useState({ name: '', email: '', address: '' })",
  "",
  "function handleChange(event) {",
  "  const { name, value } = event.target",
  "  setForm((prev) => ({ ...prev, [name]: value }))",
  "}",
]));
children.push(p("Using event.target.name lets one single handleChange function manage every field, as long as each input's name attribute matches a key in your form state object."));

children.push(h2("2. Manual validation"));
children.push(...code([
  "function validate(form) {",
  "  const errors = {}",
  "  if (!form.name.trim()) errors.name = 'Name is required'",
  "  if (!form.email.includes('@')) errors.email = 'Enter a valid email'",
  "  return errors",
  "}",
]));

children.push(h2("3. react-hook-form — less boilerplate"));
children.push(...code([
  "import { useForm } from 'react-hook-form'",
  "",
  "function CheckoutForm() {",
  "  const { register, handleSubmit, formState: { errors } } = useForm()",
  "",
  "  function onSubmit(data) {",
  "    console.log(data)",
  "  }",
  "",
  "  return (",
  "    <form onSubmit={handleSubmit(onSubmit)}>",
  "      <input {...register('name', { required: true })} />",
  "      {errors.name && <span>Name is required</span>}",
  "      <button type=\"submit\">Submit</button>",
  "    </form>",
  "  )",
  "}",
]));
children.push(p("register wires up an input's value, onChange, and validation rules in one line, instead of writing a separate useState and handleChange for every single field."));

children.push(h2("Practical Project: Tech Store Checkout Form"));
children.push(p("Build a checkout form for the cart, styled to match your store."));

children.push(h3("App.css additions"));
children.push(...code([
  ".checkout-form {",
  "  max-width: 480px;",
  "  margin: 0 auto;",
  "  display: flex;",
  "  flex-direction: column;",
  "  gap: 16px;",
  "}",
  "",
  ".checkout-form input {",
  "  padding: 12px 14px;",
  "  border: 1px solid #ddd;",
  "  border-radius: 8px;",
  "  font-size: 15px;",
  "}",
  "",
  ".field-error {",
  "  color: #c0392b;",
  "  font-size: 13px;",
  "}",
]));

children.push(h3("Project Tasks"));
children.push(numbered("Task 1 — Build the form manually first (no library): fields for name, email, address, and card number, using one shared handleChange as shown above.", "lecture7"));
children.push(numbered("Task 2 — Write a validate function that checks: name is non-empty, email contains '@', card number is exactly 16 digits. Show a .field-error message under any invalid field on submit.", "lecture7"));
children.push(numbered("Task 3 — Prevent submission (event.preventDefault()) while any errors exist; log the final form object to the console on a valid submit.", "lecture7"));
children.push(numbered("Task 4 — Rebuild the same form using react-hook-form instead, and compare how much code it removes.", "lecture7"));

children.push(h2("Key Concepts to Remember"));
children.push(bullet("event.target.name lets one handleChange function manage many fields."));
children.push(bullet("Validation should run before you act on submitted data, and should give the user specific, field-level feedback."));
children.push(bullet("react-hook-form removes most manual useState/handleChange boilerplate for forms, and is the standard choice in real production apps."));
children.push(hr());

// ---------------- LECTURE 8 ----------------
children.push(h1("React Lecture 8: Data Fetching with TanStack Query"));
children.push(p("You've fetched data with useEffect and axios already, and handled loading/error state manually. TanStack Query (React Query) does all of that for you, plus caching, automatic refetching, and mutations — the standard for real apps."));

children.push(h2("1. useQuery — replacing useEffect + fetch"));
children.push(...code([
  "import { useQuery } from '@tanstack/react-query'",
  "import axios from 'axios'",
  "",
  "function useProducts() {",
  "  return useQuery({",
  "    queryKey: ['products'],",
  "    queryFn: () => axios.get('/api/products').then((res) => res.data),",
  "  })",
  "}",
]));

children.push(h2("2. Using it in a component"));
children.push(...code([
  "function StorePage() {",
  "  const { data: products, isLoading, isError } = useProducts()",
  "",
  "  if (isLoading) return <p>Loading products...</p>",
  "  if (isError) return <p>Something went wrong.</p>",
  "",
  "  return (",
  "    <div className=\"products\">",
  "      {products.map((p) => <ProductCard key={p.id} {...p} />)}",
  "    </div>",
  "  )",
  "}",
]));
children.push(p("No manual useState for data/loading/error, no useEffect, no dependency array to get wrong — useQuery manages all of it, and automatically caches the result so navigating away and back doesn't refetch unnecessarily."));

children.push(h2("3. useMutation — sending data"));
children.push(...code([
  "import { useMutation } from '@tanstack/react-query'",
  "",
  "function useAddToCart() {",
  "  return useMutation({",
  "    mutationFn: (product) => axios.post('/api/cart', product),",
  "  })",
  "}",
  "",
  "// in a component:",
  "const { mutate, isPending } = useAddToCart()",
  "<button onClick={() => mutate(product)} disabled={isPending}>",
  "  Add to Cart",
  "</button>",
]));

children.push(h2("Practical Project: Connect the Tech Store to a Real API"));
children.push(p("Use a free public API (e.g. fakestoreapi.com) instead of your local products.js array."));

children.push(h3("App.css additions — loading skeleton"));
children.push(...code([
  ".skeleton-card {",
  "  height: 420px;",
  "  border-radius: 16px;",
  "  background: linear-gradient(90deg, #eee 25%, #f5f5f5 50%, #eee 75%);",
  "  background-size: 200% 100%;",
  "  animation: shimmer 1.4s infinite;",
  "}",
  "",
  "@keyframes shimmer {",
  "  from { background-position: 200% 0; }",
  "  to { background-position: -200% 0; }",
  "}",
]));

children.push(h3("Project Tasks"));
children.push(numbered("Task 1 — Install @tanstack/react-query, wrap App in a QueryClientProvider, and build a useProducts hook fetching from a real product API.", "lecture8"));
children.push(numbered("Task 2 — While isLoading is true, render 4 .skeleton-card placeholders in the grid instead of a plain 'Loading...' message.", "lecture8"));
children.push(numbered("Task 3 — On isError, render a styled error message with a 'Retry' button that calls refetch from useQuery.", "lecture8"));
children.push(numbered("Task 4 — Build a useAddToCart mutation. On success, show a brief confirmation message (e.g. a toast-style element that disappears after 2 seconds).", "lecture8"));

children.push(h2("Key Concepts to Remember"));
children.push(bullet("useQuery replaces manual useEffect + useState fetch logic and adds caching automatically."));
children.push(bullet("isLoading and isError are provided for you — no need to manage them by hand."));
children.push(bullet("useMutation is for sending data (POST/PUT/DELETE); useQuery is for reading data (GET)."));
children.push(hr());

// ---------------- LECTURE 9 ----------------
children.push(h1("React Lecture 9: Component Patterns & Performance"));
children.push(p("As your Tech Store grows, two questions become important: how do you structure reusable components cleanly, and how do you stop unnecessary re-renders from slowing things down?"));

children.push(h2("1. The children prop as composition"));
children.push(...code([
  "function Card({ children }) {",
  "  return <div className=\"card\">{children}</div>",
  "}",
  "",
  "<Card>",
  "  <h2>Any content</h2>",
  "  <p>Goes here</p>",
  "</Card>",
]));
children.push(p("This is more flexible than a component with many specific props — Card doesn't need to know what's inside it, just where to place it."));

children.push(h2("2. React.memo"));
children.push(...code([
  "const ProductCard = React.memo(function ProductCard({ product }) {",
  "  console.log('rendering', product.name)",
  "  return (/* JSX */)",
  "})",
]));
children.push(p("React.memo skips re-rendering a component if its props haven't actually changed since the last render — useful when a parent re-renders often but most children don't need to."));

children.push(h2("3. useMemo and useCallback"));
children.push(...code([
  "const total = useMemo(() => {",
  "  return cart.reduce((sum, item) => sum + item.price, 0)",
  "}, [cart])",
  "",
  "const handleAddToCart = useCallback((product) => {",
  "  dispatch({ type: 'add', payload: product })",
  "}, [dispatch])",
]));
children.push(p("useMemo caches a calculated value; useCallback caches a function itself. Both exist to prevent expensive recalculation or unnecessary re-renders of memoized children — they are not needed everywhere, only where a real cost has been measured."));

children.push(h2("4. Code splitting with lazy and Suspense"));
children.push(...code([
  "import { lazy, Suspense } from 'react'",
  "",
  "const ReviewSection = lazy(() => import('./ReviewSection'))",
  "",
  "<Suspense fallback={<p>Loading reviews...</p>}>",
  "  <ReviewSection />",
  "</Suspense>",
]));
children.push(p("This delays downloading ReviewSection's code until it's actually needed, shrinking the initial page load."));

children.push(h2("Practical Project: Optimize the Tech Store"));
children.push(h3("Project Tasks"));
children.push(numbered("Task 1 — Wrap ProductCard in React.memo. Add a console.log inside it, then confirm in DevTools that adding an unrelated item to the cart no longer re-renders every card.", "lecture9"));
children.push(numbered("Task 2 — Use useMemo to calculate the cart total, only recalculating when cart itself changes.", "lecture9"));
children.push(numbered("Task 3 — Lazy-load your review/comments section using lazy and Suspense, with a styled loading fallback matching your store's design.", "lecture9"));
children.push(numbered("Task 4 — Use the React DevTools Profiler to record a session of adding 3 items to the cart, and note which components re-rendered and why.", "lecture9"));

children.push(h2("Key Concepts to Remember"));
children.push(bullet("children lets components stay generic and composable instead of needing a prop for every possible piece of content."));
children.push(bullet("React.memo, useMemo, and useCallback all exist to skip unnecessary work — but should be added after measuring a real problem, not by default everywhere."));
children.push(bullet("lazy + Suspense split your bundle so users don't download code for parts of the page they haven't reached yet."));
children.push(hr());

// ---------------- LECTURE 10 ----------------
children.push(h1("React Lecture 10: TypeScript with React"));
children.push(p("TypeScript adds type-checking on top of JavaScript, catching an entire category of bugs — like the silent theme/appTheme prop mismatch you ran into — before the code ever runs."));

children.push(h2("1. Typing props"));
children.push(...code([
  "type ProductProps = {",
  "  name: string",
  "  price: number",
  "  image: string",
  "}",
  "",
  "function ProductCard({ name, price, image }: ProductProps) {",
  "  return (/* JSX */)",
  "}",
]));
children.push(p("If a parent forgets to pass price, or passes it as a string instead of a number, TypeScript flags it immediately — in your editor, before you ever open the browser."));

children.push(h2("2. Typing state"));
children.push(...code([
  "const [cart, setCart] = useState<string[]>([])",
  "const [theme, setTheme] = useState<'light' | 'dark'>('light')",
]));
children.push(p("The second example is especially useful — it restricts theme to only ever be exactly 'light' or 'dark', so a typo like 'ligth' is caught instantly, and so is your earlier bug of using theme as a truthy/falsy condition instead of comparing it explicitly."));

children.push(h2("3. Typing events"));
children.push(...code([
  "function handleChange(event: React.ChangeEvent<HTMLInputElement>) {",
  "  console.log(event.target.value)",
  "}",
]));

children.push(h2("4. Typing a reducer (directly relevant to your cart reducer)"));
children.push(...code([
  "type CartAction =",
  "  | { type: 'add'; payload: string }",
  "  | { type: 'clear' }",
  "",
  "function reducer(state: string[], action: CartAction): string[] {",
  "  switch (action.type) {",
  "    case 'add':",
  "      return [...state, action.payload]",
  "    case 'clear':",
  "      return []",
  "    default:",
  "      return state",
  "  }",
  "}",
]));
children.push(p("Now dispatch({ type: 'add' }) without a payload, or dispatch({ type: 'remove' }), would both be caught as errors before running — exactly the class of silent bug you've hit multiple times in this learning journey."));

children.push(h2("Practical Project: Convert the Tech Store to TypeScript"));
children.push(h3("Project Tasks"));
children.push(numbered("Task 1 — Rename App.jsx, ProductCard.jsx, and your reducer file to .tsx / .ts, and set up a tsconfig.json.", "lecture10"));
children.push(numbered("Task 2 — Define a Product type and use it to type both your products data array and ProductCard's props.", "lecture10"));
children.push(numbered("Task 3 — Type your cart reducer's action union, as shown above, and fix any errors TypeScript reports.", "lecture10"));
children.push(numbered("Task 4 — Type the onChange handler on your checkout form's inputs from Lecture 7.", "lecture10"));

children.push(h2("Key Concepts to Remember"));
children.push(bullet("TypeScript catches mismatched or missing props, wrong state shapes, and invalid action objects at edit-time instead of at runtime."));
children.push(bullet("Union types like 'light' | 'dark' restrict a value to only its valid options."));
children.push(bullet("Typing your reducer's actions prevents dispatching malformed or misspelled action objects."));
children.push(hr());

// ---------------- LECTURE 11 ----------------
children.push(h1("React Lecture 11: Testing"));
children.push(p("Tests let you verify a component behaves correctly without manually clicking through your app every time you change something. React Testing Library tests components the way a real user would use them."));

children.push(h2("1. A basic render test"));
children.push(...code([
  "import { render, screen } from '@testing-library/react'",
  "import ProductCard from './ProductCard'",
  "",
  "test('shows the product name', () => {",
  "  render(<ProductCard name=\"Redmi 15C\" price={250000} />)",
  "  expect(screen.getByText('Redmi 15C')).toBeInTheDocument()",
  "})",
]));

children.push(h2("2. Simulating a click"));
children.push(...code([
  "import { render, screen, fireEvent } from '@testing-library/react'",
  "",
  "test('calls onAddToCart when button is clicked', () => {",
  "  const handleAdd = vi.fn()",
  "  render(<ProductCard onAddToCart={handleAdd} />)",
  "",
  "  fireEvent.click(screen.getByText('Add to Cart'))",
  "  expect(handleAdd).toHaveBeenCalledTimes(1)",
  "})",
]));
children.push(p("vi.fn() (or jest.fn()) creates a fake function so you can check whether — and how — it was called, without needing a real backend or console.log to verify behavior."));

children.push(h2("Practical Project: Test the Tech Store"));
children.push(h3("Project Tasks"));
children.push(numbered("Task 1 — Write a test confirming ProductCard renders the correct name, price, and image alt text for given props.", "lecture11"));
children.push(numbered("Task 2 — Write a test confirming clicking the quantity '+' button increases the displayed quantity by one.", "lecture11"));
children.push(numbered("Task 3 — Write a test confirming the Add to Cart button calls your handler exactly once per click.", "lecture11"));
children.push(numbered("Task 4 — Write a test for your checkout form confirming a validation error appears when submitting with an empty name field.", "lecture11"));

children.push(h2("Key Concepts to Remember"));
children.push(bullet("Testing Library queries elements the way a user would find them — by visible text, label, or role — not by internal implementation details."));
children.push(bullet("fireEvent (or userEvent) simulates real user interactions like clicks and typing."));
children.push(bullet("Mock functions (vi.fn()/jest.fn()) let you verify a handler was called correctly without a real backend."));
children.push(hr());

// ---------------- LECTURE 12 ----------------
children.push(h1("React Lecture 12: Next.js Basics"));
children.push(p("Next.js is a framework built on top of React that adds file-based routing, server rendering, and other production concerns out of the box — the natural next step once core React feels comfortable."));

children.push(h2("1. File-based routing"));
children.push(...code([
  "app/",
  "├── page.jsx            // renders at  /",
  "├── product/",
  "│   └── [id]/",
  "│       └── page.jsx    // renders at  /product/3",
  "└── layout.jsx          // shared layout wrapping every page",
]));
children.push(p("There's no BrowserRouter or Route list to write by hand — the folder structure itself defines your URLs."));

children.push(h2("2. Server vs Client Components"));
children.push(p("By default, every component in Next.js's App Router runs on the server and never ships its JavaScript to the browser — good for performance. Components needing interactivity (useState, onClick, useEffect) must opt in explicitly."));
children.push(...code([
  "'use client'",
  "",
  "import { useState } from 'react'",
  "",
  "function AddToCartButton() {",
  "  const [added, setAdded] = useState(false)",
  "  return <button onClick={() => setAdded(true)}>Add to Cart</button>",
  "}",
]));

children.push(h2("3. Fetching data directly in a Server Component"));
children.push(...code([
  "async function StorePage() {",
  "  const res = await fetch('https://fakestoreapi.com/products')",
  "  const products = await res.json()",
  "",
  "  return (",
  "    <div className=\"products\">",
  "      {products.map((p) => <ProductCard key={p.id} {...p} />)}",
  "    </div>",
  "  )",
  "}",
]));
children.push(p("No useEffect, no useState, no loading spinner needed here — the data is fetched before the page is ever sent to the browser."));

children.push(h2("Practical Project: Port the Tech Store to Next.js"));
children.push(h3("Project Tasks"));
children.push(numbered("Task 1 — Create a new Next.js app and move your store's product grid into app/page.jsx as a Server Component fetching real product data.", "lecture12"));
children.push(numbered("Task 2 — Create app/product/[id]/page.jsx as a dynamic detail page, reading the id from the route params.", "lecture12"));
children.push(numbered("Task 3 — Mark only the interactive pieces — the quantity control and Add to Cart button — with 'use client', keeping the rest of the page as Server Components.", "lecture12"));
children.push(numbered("Task 4 — Move your App.css styling into the new project and confirm the layout matches your original Tech Store.", "lecture12"));
children.push(numbered("Task 5 — Deploy the finished app to Vercel and share the live link.", "lecture12"));

children.push(h2("Key Concepts to Remember"));
children.push(bullet("Folder structure in app/ defines routing automatically — no manual Route list."));
children.push(bullet("Server Components run only on the server and reduce the JavaScript shipped to the browser; 'use client' opts a component into interactivity."));
children.push(bullet("Data can be fetched directly inside an async Server Component, without useEffect or loading state management."));
children.push(hr());

// ---------------- CLOSING ----------------
children.push(h1("Full Roadmap Summary"));
children.push(p("Together with your existing Components → Props → Events notes, this sequence takes you from JSX fundamentals through hooks, global state, routing, forms, real data fetching, performance, TypeScript, testing, and a production framework — each stage anchored to the same running Tech Store project, so every new concept has a concrete, familiar place to land."));
children.push(bullet("Lecture 4 — useEffect, cleanup, custom hooks"));
children.push(bullet("Lecture 5 — Context API & global state"));
children.push(bullet("Lecture 6 — React Router"));
children.push(bullet("Lecture 7 — Forms & validation"));
children.push(bullet("Lecture 8 — Data fetching with TanStack Query"));
children.push(bullet("Lecture 9 — Component patterns & performance"));
children.push(bullet("Lecture 10 — TypeScript with React"));
children.push(bullet("Lecture 11 — Testing"));
children.push(bullet("Lecture 12 — Next.js basics"));
children.push(p("Recommended approach for each lecture: read the numbered concept sections first, run the short code examples yourself, then attempt every Project Task without looking at the answer — exactly the pattern that has worked for you throughout this learning journey."));

const doc = new Document({
  numbering: {
    config: [
      { reference: "lecture4", levels: [{ level: 0, format: LevelFormat.DECIMAL, text: "%1.", alignment: AlignmentType.START }] },
      { reference: "lecture5", levels: [{ level: 0, format: LevelFormat.DECIMAL, text: "%1.", alignment: AlignmentType.START }] },
      { reference: "lecture6", levels: [{ level: 0, format: LevelFormat.DECIMAL, text: "%1.", alignment: AlignmentType.START }] },
      { reference: "lecture7", levels: [{ level: 0, format: LevelFormat.DECIMAL, text: "%1.", alignment: AlignmentType.START }] },
      { reference: "lecture8", levels: [{ level: 0, format: LevelFormat.DECIMAL, text: "%1.", alignment: AlignmentType.START }] },
      { reference: "lecture9", levels: [{ level: 0, format: LevelFormat.DECIMAL, text: "%1.", alignment: AlignmentType.START }] },
      { reference: "lecture10", levels: [{ level: 0, format: LevelFormat.DECIMAL, text: "%1.", alignment: AlignmentType.START }] },
      { reference: "lecture11", levels: [{ level: 0, format: LevelFormat.DECIMAL, text: "%1.", alignment: AlignmentType.START }] },
      { reference: "lecture12", levels: [{ level: 0, format: LevelFormat.DECIMAL, text: "%1.", alignment: AlignmentType.START }] },
    ],
  },
  sections: [
    {
      properties: {
        page: { size: { width: 12240, height: 15840 } },
      },
      children,
    },
  ],
});

Packer.toBuffer(doc).then((buffer) => {
  require("fs").writeFileSync("/home/claude/Advanced_React_Roadmap.docx", buffer);
  console.log("done");
});
