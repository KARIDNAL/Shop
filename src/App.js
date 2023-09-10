import React from "react";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import Items from "./Components/Items";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      orders: [],
      items: [
        {
          id: 1,
          title: "Футболка с принтом",
          img: "shirt.jpg",
          desc: "Классическая футболка из хлопка с качественным принтом",
          category: "Одежда",
          price: "999",
        },
        {
          id: 2,
          title: "Кроссовки беговые",
          img: "sneakers.jpg",
          desc: "Легкие и комфортные кроссовки для бега на любой дистанции",
          category: "Обувь",
          price: "2999",
        },
        {
          id: 3,
          title: "Настольная лампа",
          img: "lamp.jpg",
          desc: "Стильная лампа для чтения и работы за столом",
          category: "Дом и интерьер",
          price: "1499",
        },
        {
          id: 4,
          title: "Чайник электрический",
          img: "kettle.jpg",
          desc: "Быстрый и удобный чайник для горячей воды на кухне или офисе",
          category: "Кухонная техника",
          price: "1999",
        },
        {
          id: 5,
          title: "Книга 'Мастер и Маргарита'",
          img: "book.jpg",
          desc: "Известный роман Михаила Булгакова о сатане и его приключениях в СССР",
          category: "Книги",
          price: "599",
        },
      ],
    };
    this.addToOrder = this.addToOrde.bind(this);
  }

  render() {
    return (
      <div className="wrapper">
        <Header orders={this.state.orders} />
        <Items items={this.state.items} onAdd={this.addToOrder} />
        <Footer />
      </div>
    );
  }

  addToOrder(item) {
    this.setState({ orders: [...this.state.orders, item] });
  }
}

export default App;
