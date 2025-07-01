import { Header } from "../Components/Header";
import { Footer } from "../Components/Footer";
import { CategoryList } from "../Components/CategoryList";


const HomePage = () => {
    return (
        <div>
           <Header />
           <main className="p-8">
            <div>
                <CategoryList />
            </div>
           </main>
           <Footer />
        </div>
    );
};

export {HomePage};