## 1. What is the difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll?

### we can use multiple selector find a specific or multiple element from a html file

- getElementById : It is used to find an element based on its id on a html file.
- getElementsClassName : It is ued to find multiple elemnts with the classname.
- querySelector: It can be used to find the first element that matches the string or selector.
- querySelectorAll: It can be used to find all element that matches the string with a selector.

```
    const element = document.getElementById("id");
    const elements = document.getElementsByClassName("class");
    const anotherElements = documents.querySelector("#id")
    const otherElements = documents.querySelectorAll("#id")
```

## 2. How do you create and insert a new element into the DOM?

### we can use createElement and appendChild for createing and inserting an element.

- First we need to create an element using createElement and specific tag for that element.

```
    const newElement = document.createElement("p")
```

- Then we have to insert the element in a parent element using appendChild.

```
   const parent = document.getElementById("parent");
   parent.appendChild(newElement);
```

## 3. What is Event Bubbling and how does it work?

Event bubbling is a certail behavior that occure when a user perform certain action on web page(like a click). When a user click on element, the event trigger an acion. After that the event propagate the event to it's parent until it reaches the root element. It is like a chain reaction.

## 4. What is Event Delegation in JavaScript? Why is it useful?

Event delegation is a technic in javascript which take advantage of event bubbling to handle event efficiently. Instead of attaching event listener to individual elements, an event listener attached to a parent element that handle event for the child element.

## 5. What is the difference between preventDefault() and stopPropagation() methods?

### preventDefault()

- It prevents unwanted action done by the browser(like reloading).

### stopPropagation()

- It is used to prevent event bubbling.
