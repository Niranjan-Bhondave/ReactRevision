import { useEffect, useState } from 'react';

function App() {
  
}

export default App;

/*
    const [counter,setCounter] = useState(0);
    useEffect(()=>{
      document.title = `Counter:${counter}`;
    },[counter]);

    return (
    <div>
      <h3>Counter:{counter}</h3>
      <button onClick={()=>setCounter(counter+1)}>+</button>
    </div>
  );

      const [time,setTime] = useState(0);
    useEffect(()=>{
      setInterval(() => {setTime(time => time+1)},1000)
      return clearInterval();
    },[])

    const [inputValue,setInputValue] = useState("");

    useEffect(()=>{
      console.log(`Searching for: ${inputValue}`)
    },[inputValue])

useEffect(()=>{
    fetchUsers().then((fetchedUsers)=>{fetchedUsers.forEach((user)=>console.log(user.name))})});

    const users = {
  1: {
    name: "Alice",
    age: 24,
    city: "London"
  },
  2: {
    name: "Bob",
    age: 30,
    city: "Paris"
  },
  3: {
    name: "Charlie",
    age: 21,
    city: "Tokyo"
  }
};

function fetchUser(id) {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve(users[id]);
    }, 1000);
  });
}

const [selectedId,setSelectedId] = useState(0);
const [fetchedPerson,setFetchedPerson] = useState(null);

useEffect(()=>{
  fetchUser(selectedId).then((user)=>{
    setFetchedPerson(user);
  })
},[selectedId])

    return (
    <div>
      <div onClick={()=>setSelectedId(1)}>Alice</div>
      <div onClick={()=>setSelectedId(2)}>Bob</div>
      <div onClick={()=>setSelectedId(3)}>Charlie</div>
      <div>--------</div>
      {
        fetchedPerson &&
        <>
          <div>{fetchedPerson.name}</div>
          <div>{fetchedPerson.city}</div>
          <div>{fetchedPerson.age}</div>
        </>
      }
    </div>
  );
}

 const [windowSize,setWindowSize] = useState(window.innerWidth);

    function handleWindowResize(){
      setWindowSize(window.innerWidth);
    }

    useEffect(()=>{
      window.addEventListener("resize",handleWindowResize);
      return ()=>{window.removeEventListener("resize",handleWindowResize)}
    },[windowSize])

    return (
    <div>
      <h3>Width:{windowSize}</h3>
    </div>


*/

/*
  const [time,setTime] = useState(new Date().toLocaleTimeString());

  function handleTimeChange(){
    setTime(new Date().toLocaleTimeString());
  }

  useEffect(()=>{
    setTimeout(()=>handleTimeChange(),1000)
  },[time])

    const [value,setValue] = useState("");
  const [debouncedSearch,setDebouncedSearch] = useState("");

  useEffect(()=>{
    const id = setTimeout(()=>setDebouncedSearch(value),500);
    return ()=>{clearTimeout(id)}
  },[value])

  useEffect(()=>{
    console.log(`Searching ${debouncedSearch}....`);
    products.forEach((product)=>{
      if(value.length !=0 && product.includes(value))
        console.log(product);
    }
    )
  },[debouncedSearch])

  const products = [
  "Apple",
  "Banana",
  "Orange",
  "Mango",
  "Watermelon",
  "Kiwi",
  "Papaya",
  "Pineapple",
  "Cherry",
  "Peach",
  "Guava",
  "Pear"
];

  return (
    <div id='main'>
      <input type="text" value={value} onChange={(e)=>setValue(e.target.value)}/>
    </div>
  );

  
function App() {
  const conversations = {
  general: [
    "Hello everyone!",
    "How's React going?"
  ],
  sports: [
    "Football tonight?",
    "Anyone watched the match?"
  ],
  coding: [
    "Hooks are awesome!",
    "Don't forget cleanup functions."
  ]
};

function fetchMessages(room) {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve(conversations[room]);
    }, 1000);
  });
}

  const [room,setRoom] = useState("");
  const [debounce,setDebounce] = useState("");
  useEffect(()=>{
    const id = setTimeout(()=>{
      setDebounce(room);
    },500)
    return ()=>{clearTimeout(id)};
  },[room])

  var convos = [];
  useEffect(()=>{
    fetchMessages(debounce).then((roomConvos)=>console.log(roomConvos));
  },[debounce])


  return (
    <div id='main'>
      <h3>Rooms</h3>
        <button onClick={()=>setRoom("general")}>General</button>
        <button onClick={()=>setRoom("sports")}>Sports</button>
        <button onClick={()=>setRoom("coding")}>Coding</button>
      <h3>Room convos</h3>
      {
        convos.map((convo)=>{return <p>convo</p>})
      }
    </div>
  );
}

export default App;


*/