import { QueryClient, QueryClientProvider } from "react-query";
import AlbumBanner from "./component/AlbumBanner/AlbumBanner";
import Navigation from "./component/Navigation/Navigation";
import Sidebar from "./component/Sidebar/Sidebar";
import Player from "./component/Player/Player";
import { NavigationProvider } from "./context/NavigationContext/NavigationContext";
import AlbumList from "./component/AlbumList/AlbumList";
import "./App.css";

function App() {
  const queryClient = new QueryClient();
  return (
    <QueryClientProvider client={queryClient}>
      <NavigationProvider>
        <section className="flex overflow-x-hidden">
          <Navigation />
          <main className="w-full flex flex-col">
            <AlbumBanner />
            <AlbumList />
            <Player />
          </main>
          <div className="w-14 bg-black py-6">
            {/* go pro menu goes here */}
            <Sidebar />
          </div>
        </section>
      </NavigationProvider>
    </QueryClientProvider>
  );
}

export default App;
