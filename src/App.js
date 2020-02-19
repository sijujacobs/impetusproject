import React from "react";
// import { connect } from "react-redux";

// import { getPhotosByThunkAxios } from "./redux/actions/index";
import { HashRouter } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import BodyContent from "./components/BodyContent";

import "./css/style.css";
class App extends React.Component {
  componentDidMount() {
    // this.props.getPhotos();
    // this.props.getPhotosByThunkAxios();
  }
  render() {
    return (
      <HashRouter>
        <div className="appContainer">
          <Header />
          <BodyContent />
          <Footer />
        </div>
      </HashRouter>
    );
  }
}

// const mapDispatchToProps = dispatch => {
//   return {
//     getPhotosByThunkAxios: () => dispatch(getPhotosByThunkAxios())
//   };
// };

// const connectedApp = connect(null, mapDispatchToProps)(App);

export default App;
