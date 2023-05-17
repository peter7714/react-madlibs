### Conceptual Exercise

Answer the following questions below:

- What is React? When and why would you use it?
    React is a front end frame work and you should use it when there is a lot of similar components in an application. 

- What is Babel?
    Babel is used to convert modern Javascript into more compatiable versions

- What is JSX?
    JSX allows for html to be written in javascript

- How is a Component created in React?
    Create a function that returns an html element

- What are some difference between state and props?
    state is something that can be tracked and altered, props are immutable and static

- What does "downward data flow" refer to in React?
    keep data at a higher level and hand it down as needed.

- What is a controlled component?
    it is a component that has state

- What is an uncontrolled component?
    a component without state

- What is the purpose of the `key` prop when rendering a list of components?
    it helps react keep track of the differnet components 

- Why is using an array index a poor choice for a `key` prop when rendering a list of components?
    effects performance and is bad practice 

- Describe useEffect.  What use cases is it used for in React components?
    use effect is for when you need something to be done after rendering, most common use is for setInterval

- What does useRef do?  Does a change to a ref value cause a rerender of a component?
    its used to set a referance to a specific component that persists through renders 

- When would you use a ref? When wouldn't you use one?  
    when you don't need to rerender a component

- What is a custom hook in React? When would you want to write one? 
    a custom hook is a function you can write in a different file and import as needed. helps clean up code.
