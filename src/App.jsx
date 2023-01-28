import Section from "./components/Section/Section";
import SocialProfile from "./components/SocialProfile/SocialProfile";
import Statistics from "./components/Statistics/Statistics";
import FriendList from "./components/FriendList/FriendList";
import TransactionHistory from "./components/TransactionHistory/TransactionHistory";
import user from "./data/user.json";
import uploadStats from "./data/uploadStats.json";
import friends from "./data/friends.json";
import transactions from "./data/transactions.json";

export default function App() {
  return (
    <div>
      <Section title={"Завдання-1 - Профіль у соц.межі"}>
        <SocialProfile
          username={user.username}
          tag={user.tag}
          location={user.location}
          avatar={user.avatar}
          stats={user.stats}
        />
      </Section>

      <Section title={"Завдання-2 - Статистика"}>
        <Statistics title="Завантаження статистики" stats={uploadStats} />
      </Section>
      <Section>
        <Statistics stats={uploadStats} />
      </Section>

      <Section title={"Завдання-3 - Друзяки"}>
        <FriendList friends={friends} />
      </Section>

      <Section title={"Завдання-4 - Історія транзакцій"}>
        <TransactionHistory transactions={transactions} />
      </Section>
    </div>
  );
}