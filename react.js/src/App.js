import { useContext } from 'react';
import './App.css';
import ActionBar from './components/actionBar/index.tsx';
import CardUser from './components/cardUser/index.tsx';
import { UserContext } from './context/userProvider.tsx';

function App() {
  const { User } = useContext(UserContext)
  return (<>
    <ActionBar />
    <main className="flex gap-5 min-h-screen flex-col py-10 sm:mx-10 sm:items-stretch">
      <div className="flex flex-row gap-5 flex-wrap">
        {User?.map((elem) => {
          return <CardUser key={elem.id} user={elem} />
        })}
      </div>
    </main>
  </>
  );
}

export default App;
