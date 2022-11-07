import { Header } from './components/Header';
import { Post } from './Post';

import './styles.css';

export function App() {
  return (
    <div>
      <Header />

      <Post author="Miguel Matias"
            content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas suscipit culpa eaque, vel veniam fuga blanditiis asperiores ex ratione, cum sit quia enim voluptatibus corporis saepe, nihil at assumenda natus."
      />

      <Post author="João Silva"
            content="Um novo post muito legal."
      />
    </div>
  )
}

