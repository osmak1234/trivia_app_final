import Header from "./components/Header";
import { QuestionField } from "./components/QuestionField";
import Footer from "./footer";

function App() {
  // useEffect(() => {
  //   FetchQuestion();
  // }, []);

  return (
    <div>
      <Header />
      <QuestionField />
      <Footer />
    </div>
  );
}
export default App;
