import Crust from "./components/Crust";
import Topping from "./components/Topping";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center p-8">
      <Crust />
      <Topping />
    </main>
  );
}
