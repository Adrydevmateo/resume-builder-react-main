import { UserState, userActions } from "./user/user.module";

function App() {
  const { id, setId } = UserState();
  const { signIN }: any = userActions;

  return (
    <>
      <h1>Welcome {id}</h1>
      <button onClick={() => signIN("example@email.com", "password123")}>
        Sign In
      </button>
    </>
  );
}

export default App;
