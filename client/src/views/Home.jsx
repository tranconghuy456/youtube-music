import { Sider } from '../components/Sider';
import { Navbar } from '../components/Navbar';
import { Tags } from '../components/Tags';
import '../styles/home.css';
import { Shelf } from '../components/Shelf';

const Home = () => {
  return (
    <>
      <Sider />
      <section className="ml-[240px] h-100 pt-[64px] pb-[112px] px-[92px] relative text-white">
        <Navbar className="px-[92px]" />
        <div className="content pt-8">
          <header className="tags flex space-x-8">
            <Tags className="" value="Rap" />
            <Tags className="" value="Lofi" />
            <Tags className="" value="Relax" />
            <Tags className="" value="Pop" />
          </header>
          <div className="shelf-container space-y-12 pt-10">
            <Shelf></Shelf>
            <Shelf></Shelf>
            <Shelf></Shelf>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
