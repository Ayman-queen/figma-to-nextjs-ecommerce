import Header from "@/components/header"; // Update the path to match your project structure
import Footer from "@/components/Footer/footer"; // Update the path to match your project structure
import Browse from "@/components/Browse/browse";
import Hero from "@/components/Hero/hero";
import NewArrival from "@/components/Product/NewArrival/newarrival";
import TopSelling from "@/components/Product/TopSelling/topselling";
import Reviews from "@/components/Review/reviews";

export default function Home() {
  return (
    <div>
      {/* Header */}
      <Header />

      {/* Main Content */}
      <main>
        <Hero />
        <NewArrival />
        <TopSelling />
        <Browse />
        <Reviews />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
