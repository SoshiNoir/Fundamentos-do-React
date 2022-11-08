import { Header } from "./components/Header";
import { Post } from "./components/Post";
import { Sidebar } from "./components/Sidebar";

import styles from "./App.module.css";

import "./global.css";

export function App() {
  return (
    <div>
      <Header />

      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          <Post
            author="Miguel Matias"
            content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas suscipit culpa eaque, vel veniam fuga blanditiis asperiores ex ratione, cum sit quia enim voluptatibus corporis saepe, nihil at assumenda natus."
          />

          <Post author="João Silva" content="Um novo post muito legal." />
        </main>
      </div>
    </div>
  );
}
