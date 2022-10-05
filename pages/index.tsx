import type { NextPage } from "next";
import styles from "../styles/Home.module.css";

interface HomeProps {
  users: string[];
}

const Home: NextPage<HomeProps> = ({ users }) => {
  return (
    <div className={styles.container}>
      <main>
        <ul className={styles.title}>
          {users?.map((user, index) => (
            <li key={String(index)}>{user}</li>
          ))}
        </ul>
      </main>
    </div>
  );
};

export const config = { runtime: "experimental-edge" };

// SSR - Server Side Rendering
export async function getServerSideProps() {
  const usersTest = ["Diego", "João", "Maria"];

  // request api here and return in props for component (dinamic)

  return { props: { users: usersTest } };
}

export default Home;
