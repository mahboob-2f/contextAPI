import Blogs from "./components/Blogs"
import Header from "./components/Header"
import Footer from "./components/Footer"

function App() {

  const url = "https://codehelp-apis.vercel.app/api/get-blogs";

  return (
    <>
      <div>
        <Header />
        <div className="w-6/12 mx-auto mt-4 bg-amber-200 flex flex-col justify-between  items-start">
          <Blogs />
          <Footer />
        </div>

      </div>
    </>
  )
}

export default App
