import "./styles.css";
import { useMemo, useState } from "react";

function createUser(name, sername) {
  const user = { name, sername };
  console.log(user);
  return user;
}

export default function App() {
  const [name, setName] = useState("");
  const [sername, setSername] = useState("");
  const [count, setCount] = useState(0);

  const user = useMemo(() => {
    createUser(name, sername);
  }, [name, sername]);

  return (
    <div className="App">
      <button onClick={() => setCount(count + 1)}>Clic {count}</button>
      <br />
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <input
        type="text"
        value={sername}
        onChange={(e) => setSername(e.target.value)}
      />

      <br />
      <pre>{JSON.stringify(user, null, 2)}</pre>
      <br />
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
    </div>
  );
}
