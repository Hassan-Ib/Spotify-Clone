import { QueryClient, QueryClientProvider } from "react-query";
import AlbumBanner from "./component/AlbumBanner/AlbumBanner";
import Navigation from "./component/Navigation/Navigation";
import Player from "./component/Player/Player";
import "./App.css";

function App() {
  const queryClient = new QueryClient();
  return (
    <QueryClientProvider client={queryClient}>
      <section className="flex">
        <Navigation />
        <div className="flex-1">
          <AlbumBanner />
          <Player />
        </div>
      </section>
    </QueryClientProvider>
  );
}

export default App;
