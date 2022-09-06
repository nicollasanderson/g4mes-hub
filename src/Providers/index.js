import { GamesProvider } from "./Games";
import { UserProvider } from "./user";
const Providers = ({ children }) => {
  return (
    <UserProvider>
      <GamesProvider>{children}</GamesProvider>
    </UserProvider>
  );
};

export default Providers;
