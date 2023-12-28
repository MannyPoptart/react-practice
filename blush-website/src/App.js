import Header from './components/Header';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import './App.css';

function App() {
  return (
    <div>
      
      <Header />

      <Navbar />
      
      <body className="Home">
        
        <h1>Home Page</h1>

        <p>This is a pink colored fan club! Where all we obsess about is the color pink!</p>

        <p>Here are some of the things we obsess about:</p>
        
        <ul class="list-none">
          <li>Pink in Culinary</li>
          <li>Pink in Fashion</li>
          <li>Pink in Nature</li>
          <li>Pink in Emotion</li>
          <li>Pink in Design</li>
        </ul>

      </body>
      

      <Footer />

    </div>
  );
}

export default App;
