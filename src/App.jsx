// import './App.css';
import Customer from './components/Customer';

const customers = [
  {
    id: 1,
    image: 'https://picsum.photos/200/200',
    // image:
    //   'https://m.media-amazon.com/images/M/MV5BMTQ4NTE3MTYzOF5BMl5BanBnXkFtZTcwNDM4OTcyMg@@._V1_FMjpg_UX1000_.jpg',
    name: '이규영',
    birthday: '741024',
    gender: '남',
    job: '잡리스!!',
  },
  {
    id: 2,
    image: 'https://picsum.photos/150/150',
    // image:
    //   'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSX8VrSvHSgFQ25vhiGtnS7med8mKtbkefL1Q&s',
    name: '스시',
    birthday: '831024',
    gender: '여',
    job: '생선초밥',
  },
  {
    id: 3,
    image: 'https://picsum.photos/180/180',
    // image:
    //   'https://m.media-amazon.com/images/I/715R1ZcMxzL._AC_UF1000,1000_QL80_.jpg',
    name: '망원경',
    birthday: '941024',
    gender: '남',
    job: '멀리보다',
  },
];

// const customer = {
//   id: 1,
//   image: 'https://picsum.photos/200/200',
//   name: '이규영',
//   birthday: '741024',
//   gender: '남',
//   job: '!!잡리스!!',
// };

function App() {
  return (
    <div>
      {customers.map((c) => {
        return (
          <Customer
            key={c.id}
            id={c.id}
            image={c.image}
            name={c.name}
            birthday={c.birthday}
            job={c.job}
            gender={c.gender}
          />
        );
      })}
    </div>
  );
}

export default App;
