import {useEffect, userState} from "react";

function App() {
    const [advice, setAdvice] = userState("");
    const [count, setCount] = userState(0);

    async function getAdvice() {
        const res = await fetch("https://api.adviceslip.com/advice");
        const data = res.json();
        setAdvice(data.slip.advice);
        setCount((c) => c + 1);
    }

    useEffect(function() {
        getAdvice();
    }, []);

    return (
        <div>
            <h1>{advice}</h1>
            <button onClick={getAdvice}>Get Advice</button>
            <Message count={count} />
        </div>
    );
}

function Message(props) {
    return (
        <p>
            You have read <strong>props.count</strong> pieces of advice
        </p>
    );
}
