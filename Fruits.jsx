export default function Fruits() {
    const newLocal = "";
   // const fruits=["apple","banana","grapes","mango"];
    const fruits=[
        {name:"apple",price:10,emoji:"🍎"},
        {name:"banana",price:102,emoji:"🍌"},
        {name:"mango",price:140,emoji:"🥭"},
        {name:"grapes",price:170,emoji:"🍇"},
    ];
    return (<div> 
        <ul>
        {fruits.map((fruit) => (
        <li key={fruit.name}>{fruit.name} ${fruit.price}{fruit.emoji}</li>
    ))}
    </ul>
     </div>
    );
    }