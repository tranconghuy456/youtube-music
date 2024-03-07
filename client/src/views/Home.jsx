import { Sider } from '../components/Sider';
import { Navbar } from '../components/Navbar';
import { Tags } from '../components/Tags';
import '../styles/home.css';
import { Shelf } from '../components/Shelf';
import data from '../data/test.json';

const Home = () => {
  const tags = data[0];
  const shelf = data[1];

  return (
    <>
      <Sider />
      <section className="ml-[240px] md:ml-[240px] h-100 pt-[64px] pb-[112px] px-[92px] relative text-white">
        <Navbar className="px-[92px]" />
        <div className="content pt-8 pb-20">
          <header className="tags flex space-x-8">
            {tags['data'].map((tag) => {
              return <Tags id={tag.id} value={tag.name} />;
            })}
            {/* <Tags className="" value="Rap" />
            <Tags className="" value="Lofi" />
            <Tags className="" value="Relax" />
            <Tags className="" value="Pop" /> */}
          </header>
          <div className="shelf-container h-screen space-y-12 pt-10">
            {/* <Shelf></Shelf>
            <Shelf></Shelf>
            <Shelf></Shelf> */}
            {shelf['data'].map((data) => {
              return <Shelf data={data} />;
            })}
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
