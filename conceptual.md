### Conceptual Exercise

Answer the following questions below:

- What is the purpose of the React Router?  

    React Router is a JavaScript framework that lets us handle client and server-side routing in React application. It enables the creation of single-page web that allow navigating without refreshing the page. It also allows us to use browser history features while preserving the right application view.  

- What is a single page application?  

    A single page application is a website or web application that dynamically rewrites a current web page with new data from the web server, instead of the default method of a web browser loading entire new pages.  

- What are some differences between client side and server side routing?  

    Unlike server-side routing, client-side routing involves JavaScript handling the routing process internally. In client-side routing, a request to the server is prevented when a user clicks a link, hence no page refresh even when the URL changes.

- What are two ways of handling redirects with React Router? When would you use each?  

    1. Use **Navigate** component, which operates by taking in the **to** prop to enable you to redirect to the page you specify.

    > `<Route path="/redirect" element={ <Navigate to="/error-page" /> } />`

    2. Programmatic redirects with **useNavigate()**. This is accomplished by importing the hook and then assigning a variable to **useNavigate()** hook. We can now utilize the variable that was returned to navigate the user to other pages.

    >   `const Home = () => { const navigate = useNavigate(); return ({/* ... */} <button onClick={() => navigate('/products')}> {/* ... */});  };`

- What are two different ways to handle page-not-found user experiences using React Router?   

    The 404 error page displays paths that don't exist on the website. So, instead of specifying the path, use an asterisk (*) to match anything.

    > ` <Route path='*' element={<NotFound />}/>`

    The NotFound component will render for all the URLs not specified in routes.

- How do you grab URL parameters from within a component using React Router?

    Use **useParams()** hook.

- What is context in React? When would you use it?
    1. React context provides data to components no matter how deep they are in the components tree. The context is used to manage global data.

    2. Context is primarily used when some data needs to be accessible by many components at different nesting level.

- Describe some differences between class-based components and function
  components in React.  

  | Functional Components      | Class Components |
  | ----------- | ----------- |
  | A functional component is just a plain JavaScript pure function that accepts props as an argument and returns a React element(JSX).     | A class component requires you to extend from React. Component and create a render function that returns a React element.      |
  | There is no render method used in functional components.   | It must have the render() method returning JSX (which is syntactically similar to HTML)        |
  | Functional component run from top to bottom and once the function is returned it can’t be kept alive.   | The class component is instantiated and different life cycle method is kept alive and is run and invoked depending on the phase of the class component.        |
  | Also known as Stateless components as they simply accept data and display them in some form, they are mainly responsible for rendering UI.   | Also known as Stateful components because they implement logic and state.        |
  | React lifecycle methods (for example, componentDidMount) cannot be used in functional components.   | React lifecycle methods can be used inside class components (for example, componentDidMount).        |
  | Hooks can be easily used in functional components to make them Stateful.   | It requires different syntax inside a class component to implement hooks.        |
  | Constructors are not used.  | Constructors are not used.	Constructor is used as it needs to store state.   |

- What are some of the problems that hooks were designed to solve?  
  - wrapper hell
  - huge components
  - confusing classes